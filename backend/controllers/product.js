import { db } from "../db.js";

export const getProducts = (req, res) => {
//    const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM students";
const query="SELECT * FROM product";  
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const getProduct = (req, res) => {
    const query="select * from product where product_id=?"
  //  const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM student WHERE id = ?"
    //const student_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })
}

export const deleteProduct=(req,res)=>{
    const product_id=req.params.id;  
   
    const query="DELETE FROM product where product_id= ?"
    db.query(query,[product_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("user has been deleted")
    })
}

export const insertProducts=(req,res)=>{
    const query="INSERT INTO product(`name`,`description`,`price`) values(?)";
    
    const values= [
        req.body.name,
        req.body.discription,
        req.body.price
    ];

    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("New Product has been added")
    })
}
export const updateProduct=(req,res)=>{
    const product_id=req.params.id;    
  //  console.log(student_id)
    const query="UPDATE `product` SET `name`=?,`discription`=?,`price`=? where product_id=?"
    const values= [        
        req.body.name,
        req.body.discription,
        req.body.price

    ];
    
    db.query(query,[...values,product_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Product data has been updated")
    })
}