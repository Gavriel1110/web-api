const mysql=require('mysql');//חיבור למיי אס קיו אל סרבר
module.exports={
    GetAllProduct: (req, res) => {
        const conn = global.db;
        const query = "SELECT * FROM t_products";
        conn.query(query, (error, results, fields) => {
          if (error) {
            return res.status(500).json(error);//החזרת פרטי שגיאה
          }
          else{
            return res.status(200).json(results);// החזרת הנתונים שנתקבלו מהשרת
          }
        });
    },
    GetProductsById:(req, res)=>{
            let pid=req.params.id;
            const conn = global.db;
            const query = ("SELECT * FROM t_products WHERE pid =?",pid,(error, results, fields) => {
              if (error) {
                return res.status(500).json(error);//החזרת פרטי שגיאה
              }
              else{
                return res.status(200).json(results);// החזרת הנתונים שנתקבלו מהשרת
              }
            });
        },        
    AddProducts:(req, res)=>{
        let pid=req.params.id;
        const conn = global.db;
        const query = ("SELECT * FROM t_products WHERE pid =?",pid,(error, results, fields) => {
          if (error) {
            return res.status(500).json(error);//החזרת פרטי שגיאה
          }
          else{
            return res.status(200).json(results);// החזרת הנתונים שנתקבלו מהשרת
          }
        });
    },     
    UptadeProducts:(req, res)=>{
        let pid=req.params.id;
        const conn = global.db;
        const query = ("SELECT * FROM t_products WHERE pid =?",pid,(error, results, fields) => {
          if (error) {
            return res.status(500).json(error);//החזרת פרטי שגיאה
          }
          else{
            return res.status(200).json(results);// החזרת הנתונים שנתקבלו מהשרת
          }
        });
    },     
    DeleteProducts:(req, res)=>{
        let pid=req.params.id;
        const conn = global.db;
        const query = ("SELECT * FROM t_products WHERE pid =?",pid,(error, results, fields) => {
          if (error) {
            return res.status(500).json(error);//החזרת פרטי שגיאה
          }
          else{
            return res.status(200).json(results);// החזרת הנתונים שנתקבלו מהשרת
          }
        });
    },   
} 
