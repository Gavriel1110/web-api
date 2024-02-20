const router=require('express').Router();
const {
    GetAllcategories,
    GetcategoriesById,
    Addcategories,
    Uptadecategories,
    Deletecategories
}=require(`../controllers/categories`);

router.get('/',GetAllcategories);
router.get('/:id', GetcategoriesById);
router.post('/', Addcategories);
router.patch('/:id', Uptadecategories);
router.delete('/:id', Deletecategories);

module.exports=router;