const category =require('../Modules/categories');//חיבור למודל של הקטגוריות 
module.exports={
    GetAllcategories:(req, res)=>{
        category.find().then((data)=>{
            return res.status(200).json(data);
        });
    },
    GetcategoriesById:(req, res)=>{
        let pid=req.params.id;
        category.findOne({pid}).then((data)=>{
            return res.status(200).json(data);
        });
    },
    Addcategories:(req, res)=>{
        let body=req.body;
        category.insertMany([body]).then((data)=>{
            return res.status(200).json(data);
        });
    },
    Uptadecategories:(req, res)=>{
        let pid=req.params.id;
        let body=req.body;
        category.updateMany({pid},[body]).then((data)=>{
            return res.status(200).json(data);
        });
    },
    Deletecategories:(req, res)=>{
        let pid=req.params.id;
        let body=req.body;
        category.deleteOne([body]).then((data)=>{
            return res.status(200).json(data);
        });
    },
} 