const { body, validationResult } = require('express-validator');

// 1. ortak hata kontrolü

const checkValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      success: false, 
      message: "Validasyon Hatası: Lütfen gönderdiğiniz verileri kontrol edin.",
      errors: errors.array() // Hangi alanların hatalı olduğunu detaylı listeler
    });
  }
  next();
};

// 2. Görev oluşturma (POST) kuralları
const validateCreateTask = [
  body('title')
    .trim()
    .notEmpty().withMessage("Görev başlığı (title) zorunludur.")
    .isLength({ min: 3 }).withMessage("Başlık en az 3 karakter olmalıdır."),

  body('status')
    .optional()
    .isIn(['todo', 'in_progress', 'done']).withMessage("Durum sadece todo, in_progress veya done olabilir."),

  body('priority')
    .optional()
    .isIn(['low', 'medium', 'high']).withMessage("Öncelik sadece low, medium veya high olabilir."),  
  
  checkValidation // Kuralları çalıştır ve sonucu kontrol et
];

// 3. Görev güncelleme (PUT) kuralları
const validateUpdateTask = [
  body('title')
    .optional()
    .trim()
    .notEmpty().withMessage("Başlık boş bırakılamaz.")
    .isLength({ min: 3 }).withMessage("Başlık en az 3 karakter olmalıdır."),
  
  body('status')
    .optional()
    .isIn(['todo', 'in_progress', 'done']).withMessage("Geçersiz durum (status) değeri."),
    
  checkValidation
];


module.exports = {
    validateCreateTask,
    validateUpdateTask
}
    

