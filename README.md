📋 Görev Yönetim Sistemi (Task Management API)Node.js ve Express.js kullanılarak MVC (Model-View-Controller) mimarisine uygun olarak geliştirilmiş, modüler ve RESTful bir görev yönetim arka uç (backend) uygulamasıdır. Harici bir veritabanı kurulumuna ihtiyaç duymadan yerel JSON dosya sistemi (fs.promises) üzerinden asenkron veri kalıcılığı sağlar.🚀 ÖzelliklerTam Kapsamlı CRUD İşlemleri: Görev oluşturma, listeleme, detay görüntüleme, güncelleme ve silme.Gelişmiş Sorgulama (Query Parameters): Duruma (status), önceliğe (priority) ve atanan çalışana (assigneeId) göre filtreleme; anahtar kelime (keyword) ile arama; tarihe göre sıralama (sort) ve sayfalama (page, limit).Katmanlı Mimari: Rotalar (routes), kontrolcüler (controllers), ara yazılımlar (middlewares) ve dosya yardımcıları (utils) ile ayrıştırılmış temiz kod yapısı.Doğrulama ve Hata Yönetimi: İsteklerin iş mantığına ulaşmadan önce doğrulanması, özel istek günlükleme (logger) ve merkezi hata yakalama (errorHandler).🛠️ Kullanılan TeknolojilerÇalışma Zamanı: Node.jsWeb Çatısı: Express.jsVeri Depolama: Yerel JSON Dosya Sistemi (fs.promises)Doğrulama & Kimlik: Express-Validator, UUID (v4)📁 Proje Klasör Yapısı├── controllers/      # İş mantığı ve HTTP yanıtlarının yönetimi
├── data/             # Kalıcı JSON veri depoları (tasks.json, employees.json)
├── middlewares/      # Logger, veri doğrulama ve merkezi hata yakalama
├── routes/           # API uç noktalarının yönlendirilmesi
├── utils/            # Dosya okuma/yazma yardımcı fonksiyonları
├── app.js            # Express uygulama yapılandırması
├── server.js         # Sunucu başlatma noktası
└── package.json      # Proje bağımlılıkları ve komutlar
⚙️ Kurulum ve ÇalıştırmaProjeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:1. Depoyu Klonlayıngit clone https://github.com/Nurkurtoglu/persone-backend-gelistirme.git
cd persone-backend-gelistirme
2. Bağımlılıkları Yükleyinnpm install
3. Uygulamayı Başlatınnpm start
Sunucu varsayılan olarak http://localhost:3000 adresinde çalışmaya başlayacaktır.📌 API Uç Noktaları (Endpoints)MetotUç NoktaAçıklamaGET/api/tasksTüm görevleri listeler (filtreleme, arama, sıralama ve sayfalama destekler).GET/api/tasks/:idBelirtilen ID'ye sahip görevin detayını getirir.POST/api/tasksYeni bir görev kaydı oluşturur.PUT/api/tasks/:idMevcut görevin belirtilen alanlarını günceller.DELETE/api/tasks/:idBelirtilen ID'ye sahip görevi siler.Örnek Sorgu Parametreleri (GET)GET /api/tasks?status=done&priority=high&sort=createdAt&page=1&limit=10
GET /api/tasks?keyword=api
Örnek Görev Oluşturma Gövdesi (POST /api/tasks){
  "title": "API Dokümantasyonunun Tamamlanması",
  "description": "Kurulum adımları ve uç nokta örnekleri hazırlandı.",
  "priority": "high",
  "status": "todo",
  "assigneeId": "e_001"
}
Not: assigneeId değerinin data/employees.json dosyasında kayıtlı geçerli bir çalışan ID'si ile eşleşmesi gerekmektedir.
