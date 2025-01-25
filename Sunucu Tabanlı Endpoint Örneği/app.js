const express = require("express")
require("dotevn/config")
const db_connect = require("./db/mysql_connect")

const app = express()
const port = process.env.port

app.get("/",(req,res)=>{

    res.json({
        message: "Hoş Geldiniz"
    })

})

app.listen(port,()=>{
    console.log("suncu ${PORT} portunda çalışıyor")
})
