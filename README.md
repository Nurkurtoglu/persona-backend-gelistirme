# Görev Yönetim Sistemi (Task Management API)

Node.js ve Express.js kullanılarak geliştirilmiş, MVC mimarisine dayalı, dosya tabanlı (JSON) veri kalıcılığı sağlayan kapsamlı bir RESTful API projesidir.

## 🚀 Özellikler

- **MVC Mimarisi:** Controller, Route, Middleware ve veri katmanlarının ayrıştırıldığı modüler proje yapısı.
- **Tam CRUD İşlemleri:** Görev ekleme, listeleme, detay görüntüleme, güncelleme ve silme desteği.
- **Gelişmiş Sorgulama (Query Parameters):**
  - Duruma göre filtreleme (`?status=todo`)
  - Önceliğe göre filtreleme (`?priority=high`)
  - Çalışana göre filtreleme (`?assigneeId=e_001`)
  - Başlık ve açıklamada anahtar kelime arama (`?keyword=api`)
  - Tarihe göre sıralama (`?sort=createdAt`)
  - Sayfalama desteği (`?page=1&limit=10`)
- **Ara Yazılımlar (Middlewares):** Özel istek loglayıcı (Logger), veri doğrulama (Validation) ve merkezi hata yönetimi (Centralized Error Handling).
- **Veri Kalıcılığı:** `fs.promises` modülü ile asenkron JSON dosya okuma/yazma işlemleri (`tasks.json`, `employees.json`).

## 🛠️ Kullanılan Teknolojiler

- **Çalışma Ortamı:** Node.js
- **Web Çatısı:** Express.js
- **Kimlik Oluşturma:** `uuid`
- **Veri Depolama:** Yerel JSON Dosyaları (`fs/promises`)

## 📁 Proje Yapısı

```text
├── controllers/
│   └── taskController.js      # İş mantığı ve gelişmiş sorgu yönetimi
├── data/
│   ├── tasks.json             # Görev kayıtları
│   └── employees.json         # Çalışan kayıtları
├── middlewares/
│   ├── errorHandler.js        # Merkezi hata yakalayıcı
│   ├── logger.js              # HTTP istek loglayıcı
│   └── validateTask.js        # Veri doğrulama kuralları
├── routes/
│   └── taskRoutes.js          # API uç noktaları (Endpoints)
├── app.js                     # Express uygulama yapılandırması
├── server.js                  # Sunucu başlatma dosyası
└── package.json               # Proje bağımlılıkları ve scriptler


⚙️ Kurulum ve ÇalıştırmaProjeyi klonlayın:Bashgit clone <repo-linkiniz>
cd <proje-klasor-adi>
Gerekli paketleri yükleyin:Bashnpm install
Sunucuyu başlatın:Bashnpm start
Sunucu varsayılan olarak http://localhost:3000 adresinde çalışacaktır.📌 API Uç Noktaları (Endpoints)MetotUç Nokta (Endpoint)AçıklamaGET/api/tasksTüm görevleri listeler (Filtreleme, arama, sıralama ve sayfalama destekler)GET/api/tasks/:idBelirtilen ID'ye sahip görevin detaylarını getirirPOST/api/tasksYeni bir görev oluştururPUT/api/tasks/:idMevcut bir görevi güncellerDELETE/api/tasks/:idBelirtilen ID'ye sahip görevi silerÖrnek İstek Gövdesi (POST /api/tasks)JSON{
  "title": "Kullanıcı Profili Fotoğraf Yükleme Modülü",
  "description": "Multer middleware kullanılarak kullanıcıların sistem fotoğraflarını yüklemesi sağlandı.",
  "priority": "high",
  "status": "todo",
  "assigneeId": "e_001"
}
