import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";

export default function DisplayTeachers() {
    const [teachers,setTeachers]= useState([]);
    let i=1;

     useEffect(()=>{       
       
         fatchUsers();
     },[]);

     const fatchUsers= async()=>{
      try{
          const res = await axios.get("/teachers");
          setTeachers(res.data);                 
      }catch(err){
          console.log(err)
      }            
  }

     const handleDelete=async(e)=>{
      let text = "Are you sure?";
      
       if (window.confirm(text) === true) {
        try{
            const res = await axios.delete("/teachers/"+e);
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
                <h1><u>Display Users</u></h1>      
                        
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">Address</th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {teachers.map((teacher)=>
                      <tr>
                      
                        <th scope="row">{i++}</th>
                        <td>{teacher.first_name}</td>
                        <td>{teacher.last_name}</td>
                        <td>{teacher.email}</td>
                        <td>{teacher.Address}</td>
                        <td>
                            <button className="delete" onClick={()=>handleDelete(teacher.teacher_id)}>Delete</button>
                        </td>
                        <td>
                            <button className="edit"><Link to={`/UpdateTeachers/${teacher.teacher_id}`}>Edit</Link></button>
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
