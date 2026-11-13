const app = require("./app");

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Sistem başarıyla başlatıldı. Sunucu ${PORT} portunu dinliyor...`)
})