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

const satis_getir_by_tarih=async(req,res)=>{
    const {startDate,endDate}=req.query
    if(!startDate||!endDate){
        return res.status(400).json({
            success:false,
            message:"Başlangıç ve Bitiş tarihleri eksik"
        })
    }
    try{
        const [results]=await dbConn.query("SELECT * FROM satislar Where siparis_tarihi BETWEEN ? AND ?",[startDate,endDate])
        return res.status(200).json({
            success:true,
            data:results
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Veriler Alınamadı"
        })
    }
    }
    module.exports={urun_getir,siparis_getir_by_tarih}