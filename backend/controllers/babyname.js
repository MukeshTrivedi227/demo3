import { db } from "../db.js";

export const getBabynames = (req, res) => {
//    const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM students";
const query="SELECT * FROM babyname";  
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const getBabyname = (req, res) => {
    const query="select * from babyname where baby_id=?"
  //  const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM student WHERE id = ?"
    //const student_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })
}

export const deleteBabyname=(req,res)=>{
    const baby_id=req.params.id;  
   
    const query="DELETE FROM babyname where baby_id= ?"
    db.query(query,[baby_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("user has been deleted")
    })
}

export const insertBabynames=(req,res)=>{
    const query="INSERT INTO babyname(`name`,`gender`,`b_year`) values(?)";
    
    const values= [
        req.body.name,
        req.body.gender,
        req.body.b_year,
      ];

    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("New Babyname has been added")
    })
}
export const updateBabyname=(req,res)=>{
    const baby_id=req.params.id;    
  //  console.log(student_id)
    const query="UPDATE `babyname` SET `name`=?,`gender`=?,`b_year`=? where baby_id=?"
    const values= [        
        req.body.name,
        req.body.gender,
        req.body.b_year
    ];
    
    db.query(query,[...values,baby_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Baby data has been updated")
    })
}