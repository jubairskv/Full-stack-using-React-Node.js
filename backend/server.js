const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")

const app = express()
app.use(cors());

const db =mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"443811",
   database:"crud"
})

db.connect((err)=>{
   if(err){
      console.log("error:", err)
   }
   console.log("Database connected")
})

app.get("/student", (req, res) => {
   const sql = 'SELECT * FROM users';
   //console.log(sql)
   
   db.query(sql,(err,data)=>{
      if(err)return res.json("error");
      return res.json(data);     
   })

   //return res.json({ message: "this is from backend" })
})

app.listen(8081, () => {
   console.log("Listening")
})