import { db } from "../db.js";

export const getTeachers = (req, res) => {
//    const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM students";
const query="SELECT * FROM teacher";  
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const getTeacher = (req, res) => {
    const query="select * from teacher where teacher_id=?"
  //  const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM student WHERE id = ?"
    //const student_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })
}

export const deleteTeacher=(req,res)=>{
    const teacher_id=req.params.id;  
   
    const query="DELETE FROM teacher where teacher_id= ?"
    db.query(query,[teacher_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("user has been deleted")
    })
}

export const insertTeachers=(req,res)=>{
    const query="INSERT INTO teacher(`first_name`,`last_name` ,`email`, `Address`) values(?)";
    
    const values= [
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.Address
    ];

    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("New Teacher has been added")
    })
}
export const updateTeacher=(req,res)=>{
    const teacher_id=req.params.id;    
  //  console.log(student_id)
    const query="UPDATE `teacher` SET `first_name`=?,`last_name`=?,`email`=?,`Address`=? where teacher_id=?"
    const values= [        
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.Address
    ];
    
    db.query(query,[...values,teacher_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Teacher data has been updated")
    })
}