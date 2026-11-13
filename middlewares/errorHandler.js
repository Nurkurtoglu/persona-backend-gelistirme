const errorHandler = (err, req, res, next) => {

  console.error(`[SİSTEM HATASI]: ${err.message}`);

  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Beklenmeyen bir sunucu hatası oluştu.",
  });
};

module.exports = errorHandler;