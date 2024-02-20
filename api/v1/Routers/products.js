const express=require('express');
const router=express.Router();
const auth= require("../Middlewares/auth");  
const {
    GetAllProduct,
    GetProductsById,
    AddProducts,
    UptadeProducts,
    DeleteProducts
}=require(`../controllers/products`);

router.get('/', GetAllProduct);
router.get('/:id', GetProductsById);
router.post('/',auth, AddProducts);
router.patch('/:id',auth, UptadeProducts);
router.delete('/:id',auth, DeleteProducts);

module.exports=router;