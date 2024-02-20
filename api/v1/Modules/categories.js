const mongoose = require ('mongoose');//קישור לספריית העבודה מול מונגו
//נגדיר סכימה עבור מוצר שנותנת תבנית
const categoriesSchema=new mongoose.Schema({
    pname:String,
    price:Number,
    picname:String
});
//נגדיר מודל עבור מוצר שנותנת
module.exports=mongoose.model('categories',categoriesSchema);//ייצוא של המודל מונגו