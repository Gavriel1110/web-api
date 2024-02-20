const jwt = require("jsonwebtoken");
const { JsonWebTokenError } = require('jsonwebtoken');
const Users = require('../Modules/users');//חיבור למודל -מבנה הנתונים המייצג את המשתמש
const bcrypt = require('bcrypt');//קישור לספריית הצפנה
module.exports = {
    getAllUsers:(req,res)=>{
        Users.find().then((data)=>{
            return res.status(200).json(data);
        });
    },
    getUsersById:(req,res)=>{
        let pid = req.params.id;
        Users.findOne({pid}).then((data)=>{
            return res.status(200).json(data);
        });
    },
    addUsers:(req,res)=>{
        let body = req.body;
        Users.insertMany([body]).then((data)=>{
            return res.status(200).json(data);
        });
    },
    updateUsers:(req,res)=>{
        let pid = req.params.id;
        let body = req.body;
        Users.updateMany({pid}, body).then((data)=>{
            return res.status(200).json(data);
        });
    },
    deleteUsers:(req,res)=>{
        let pid = req.params.id;
        Users.deleteOne({pid}).then((data)=>{
            return res.status(200).json(data);
        });
    },
    //הרשמה
    register:(req,res)=>{
        const {FullName,Pass,Email}=req.body;//שליפת הסודות שנשלחו בבקשה
        //נבדוק האם המשתמש כבר קיים במערכת
        Users.find({Email}).then((result)=>{
            if (result.length>0)//המשתמש קיים במערכת לא ניתן לבצע הרשמה
                return res.status(200).json({msg:"User Allready Exist"});
            //נבצע הצפנת סיסמה
            bcrypt.hash(Pass,10).then((hashPass)=>{
                //שמירה בבסיס נתונים של המשתמש
                Users.insertMany({FullName,Email,Pass:hashPass}).then((result)=>{
                    return res.status(200).json({result});
                });
            });        
        });
    },
    //התחברות      
    Login: (req, res)=>{
        const {Pass,Email}=req.body;
        Users.find({Email}).then((results)=>{
          if (results.length === 0) {//במידה והמייל לא נמצא במערכת
            return res.status(200).json({msg:"Username or Password Are Wrong ✖"});//מחזיר הודעת שגיאה
          }
          const hashPass=results[0].Pass;//שליפת המחרוזת המוצפנת שנתקבלה מתוך בסיס הנתונים
          bcrypt.compare(Pass, hashPass).then((status) => {//בדיקת הסיסמא אל מול הטוקן מתוך בסיס הנתונים ושליחת הודעה
            if (status) {
          const myUser=results[0];
          const token = jwt.sign({Pass,User:myUser},process.env.PRIVATE_KEY,{expiresIn:'1h'}); //יצירת טוקן שתקף לשעה
              return res.status(200).json({msg:"Welcome Back ✅",token});//מחזיר הודעת התחברת בהצלחה 
            } 
            else {
              return res.status(200).json({msg:"Username or Password Are Wrong ✖"});//מחזיר הודעת שגיאה
    
            }
          });
        });
    }
};