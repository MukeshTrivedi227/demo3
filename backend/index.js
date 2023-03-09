import express from "express";
import cors from "cors"
// import multer from "multer";

import assignroutes1 from "./Models/r_students.js"
import assignroutes2 from "./Models/r_teachers.js"
import assignroutes3 from "./models/r_babyname.js"
import assignroutes4 from "./models/r_product.js"
import assignroutes5 from "./models/r_player.js"
//import path from "path";

const app= express()
app.use(express.json())
app.use(cors())

app.use("/backend/students",assignroutes1)
app.use("/backend/teachers",assignroutes2)
app.use("/backend/product",assignroutes4)
app.use("/backend/babyname",assignroutes3)
app.use("/backend/player",assignroutes5)
app.listen(8800,()=>{
    console.log("Connected to Backend1")
})


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "../client/public/upload");
//     },
//     limits: {
//       fileSize: 10000000 // 1000000 Bytes = 1 MB
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + file.originalname);
//     },
//   });
  
//   const upload = multer({ storage });
  
//   app.post("/backend/upload", upload.single("file"), function (req, res) {
//     const file = req.file; 
//     //res.status(200).json(file.filename);    
    
//     res.send(req.file.filename)
    
//   }, (error, req, res, next) => {
//      //res.status(400).send({ error: error.message })
//      console.log(error.message)
//   });