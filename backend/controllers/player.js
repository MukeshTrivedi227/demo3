import { db } from "../db.js";

export const getPlayers = (req, res) => {
//    const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM students";
const query="SELECT * FROM player";  
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const getPlayer = (req, res) => {
    const query="select * from player where player_id=?"
  //  const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM student WHERE id = ?"
    //const student_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })
}

export const deletePlayer=(req,res)=>{
    const player_id=req.params.id;  
   
    const query="DELETE FROM player where player_id= ?"
    db.query(query,[player_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("user has been deleted")
    })
}

export const insertPlayers=(req,res)=>{
    const query="INSERT INTO player(`name`,`height` ,`weight`, `datebirth`,`teamname`) values(?)";
    
    const values= [
        req.body.name,
        req.body.height,
        req.body.weight,
        req.body.datebirth,
        req.body.teamname
    ];

    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("New Player has been added")
    })
}
export const updatePlayer=(req,res)=>{
    const player_id=req.params.id;    
  //  console.log(student_id)
    const query="UPDATE `player` SET `name`=?,`height`=?,`weight`=?,`datebirth`=?,`teamname`=? where player_id=?"
    const values= [        
        req.body.name,
        req.body.height,
        req.body.weight,
        req.body.datebirth,
        req.body.teamname
    ];
    
    db.query(query,[...values,player_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Player data has been updated")
    })
}