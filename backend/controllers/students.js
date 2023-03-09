import { db } from "../db.js";

export const getStudents = (req, res) => {
//    const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM students";
const query="SELECT * FROM student";  
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const getStudent = (req, res) => {
    const query="select * from student where student_id=?"
  //  const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM student WHERE id = ?"
    //const student_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })
}

export const deleteStudent=(req,res)=>{
    const student_id=req.params.id;  
   
    const query="DELETE FROM student where student_id= ?"
    db.query(query,[student_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("user has been deleted")
    })
}

export const insertStudents=(req,res)=>{
    const query="INSERT INTO student(`first_name`,`last_name` ,`email`, `Address`) values(?)";
    
    const values= [
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.Address
    ];

    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("New Student has been added")
    })
}
export const updateStudent=(req,res)=>{
    const student_id=req.params.id;    
  //  console.log(student_id)
    const query="UPDATE `student` SET `first_name`=?,`last_name`=?,`email`=?,`Address`=? where student_id=?"
    const values= [        
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.Address
    ];
    
    db.query(query,[...values,student_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Student data has been updated")
    })
}