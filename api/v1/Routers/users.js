const router = require('express').Router();
const {
    register,
    Login,
    getAllUsers,
    getUsersById,
    addUsers,
    updateUsers,
    deleteUsers
} = require('../controllers/users');

router.get('/', getAllUsers);
router.get('/:id', getUsersById);
router.post('/', addUsers);
router.patch('/:id', updateUsers);
router.delete('/:id', deleteUsers);

router.post('/register',register);//נקודת קצה עבור טופס הרשמה
router.post('/login',Login);//נקודת קצה עבור טופס התחברות

module.exports = router;