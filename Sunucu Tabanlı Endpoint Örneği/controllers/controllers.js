const urun_getir = (req, res) => {
    dbConn.query("SELECT id,urun_ad,fiyat,COUNT(satis) FROM urunler", (error, result) => {
        if (error) {
            console.log("Sunucu yanıt vermiyor")
            return new Response().error500(res)
        } else {
            res.json({ data: result })
        }
    })
}
