const mongoose = require ('mongoose');//קישור לספריית העבודה מול מונגו
//נגדיר סכימה עבור מוצר שנותנת תבנית
const productsSchema=new mongoose.Schema({
    pname:String,
    price:Number,
    picname:String
});
//נגדיר מודל עבור מוצר שנותנת
module.exports=mongoose.model('products',productsSchema);//ייצוא של המודל מונגו