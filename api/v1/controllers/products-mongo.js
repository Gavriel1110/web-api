const products=require('../Modules/products');//חיבור למודל של המוצרים 
module.exports={
    GetAllProducts:(req, res)=>{
        products.find().then((data)=>{
            return res.status(200).json(data);
        });
    },
    GetProductsById:(req, res)=>{
        let pid=req.params.id;
        products.findOne({pid}).then((data)=>{
            return res.status(200).json(data);
        });
    },
    AddProducts:(req, res)=>{
        let body=req.body;
        products.insertMany([body]).then((data)=>{
            return res.status(200).json(data);
        });
    },
    UptadeProducts:(req, res)=>{
        let pid=req.params.id;
        let body=req.body;
        products.updateMany({pid},[body]).then((data)=>{
            return res.status(200).json(data);
        });
    },
    DeleteProducts:(req, res)=>{
        let pid=req.params.id;
        let body=req.body;
        products.deleteOne([body]).then((data)=>{
            return res.status(200).json(data);
        });
    },
} 
