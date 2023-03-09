import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";

export default function DisplayStudents() {
    const [products,setProducts]= useState([]);
    let i=1;

     useEffect(()=>{       
       
         fatchUsers();
     },[]);

     const fatchUsers= async()=>{
      try{
          const res = await axios.get("/product");
          setProducts(res.data);                 
      }catch(err){
          console.log(err)
      }            
  }

     const handleDelete=async(e)=>{
      let text = "Are you sure?";
      
       if (window.confirm(text) === true) {
        try{
            const res = await axios.delete("/product/"+e);
            alert(res.data)
            window.location.reload()     
        }catch(err){
            console.log(err)
        } 
       }
     }
  return (
    <div class="row">
        <div class="col-lg-3">
        </div>
        <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                <h1><u>Display Products</u></h1>      
                        
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Discription</th>
                        <th scope="col">Price</th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.map((product)=>
                      <tr>
                      
                        <th scope="row">{i++}</th>
                        <td>{product.name}</td>
                        <td>{product.discription}</td>
                        <td>{product.price}</td>
                         <td>
                            <button className="delete" onClick={()=>handleDelete(product.product_id)}>Delete</button>
                        </td>
                        <td>
                            <button className="edit"><Link to={`/UpdateProducts/${product.product_id}`}>Edit</Link></button>
                        </td>
              
                      </tr>
                    )}
                    </tbody>
                  </table>        
                </div>
              </div>
        </div>
    </div>
  )
}
