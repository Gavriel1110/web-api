module.exports=(req,res,next)=>{
    try{
        const authHeader=req.headers.Authrization;//נשלוף את ההדר של האבטחה שנקרא אוטוריזיישן
        const arr=authHeader.split('');//יצירת מערך מחרוזות מתוך המחרוזת של האוטוריזיישן
        const token=arr[1];//שמירת הטוקן בתוך משתנה
        const user=jwt.verify(token,process.env.PRIVATYE_KEY);//ביצענו בדיקת תקינות לטוקן,במידה ותקין נקבל את הערך המוצפן 
        req.user=user;//הוספת שדה שלנו לבקשה ובתוכו פרטי המשתמש 
        next();
    }
    catch(error){
        console.log(error);
        return res.status(401).json({msg:"You Are Not Authorized"});//החזרת תשובה למשתמש שאינו מורשה גישה למקום הזה
    }
};