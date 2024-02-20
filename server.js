const http=require('http');// קישור ספריית http
const app=require('./app');//קישור ספריית app
const srv=http.createServer(app);//יצירת שרת
const port=3000;//הפורט שאליו הוא יאזין
srv.listen(port, ()=>{// הפעלת השרת שיאזין לבקשות
    console.log('Server On Air');//יראה הודעה שהסרבר באוויר
});