import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";

export default function DisplayStudents() {
    const [babynames,setbabynames]= useState([]);
    let i=1;

     useEffect(()=>{       
       
         fatchUsers();
     },[]);

     const fatchUsers= async()=>{
      try{
          const res = await axios.get("/babyname");
          setbabynames(res.data);                 
      }catch(err){
          console.log(err)
      }            
  }

     const handleDelete=async(e)=>{
      let text = "Are you sure?";
      
       if (window.confirm(text) === true) {
        try{
            const res = await axios.delete("/babyname/"+e);
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
                <h1><u>Display babyname</u></h1>      
                        
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Baby Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col"> B_year</th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {babynames.map((babyname)=>
                      <tr>
                      
                        <th scope="row">{i++}</th>
                        <td>{babyname.name}</td>
                        <td>{babyname.gender}</td>
                        <td>{babyname.b_year}</td>
                         <td>
                            <button className="delete" onClick={()=>handleDelete(babyname.babyname_id)}>Delete</button>
                        </td>
                        <td>
                            <button className="edit"><Link to={`/UpdateBabynames/${babyname.babyname_id}`}>Edit</Link></button>
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
