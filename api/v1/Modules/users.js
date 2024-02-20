const mongoose = require('mongoose');//קישור לספריית העבודה מול מונגו
//נגדיר סכימה עבור יוזר שנותנת תבנית
const UsersSchema = new mongoose.Schema({
    FullName: String,
    Pass: String,
    Email: String,
});
//נגדיר מודל עבור יוזר שנותנת
module.exports = mongoose.model('users', UsersSchema);