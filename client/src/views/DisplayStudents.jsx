import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";

export default function DisplayStudents() {
    const [students,setStudents]= useState([]);
    let i=1;

     useEffect(()=>{       
       
         fatchUsers();
     },[]);

     const fatchUsers= async()=>{
      try{
          const res = await axios.get("/students");
          setStudents(res.data);                 
      }catch(err){
          console.log(err)
      }            
  }

     const handleDelete=async(e)=>{
      let text = "Are you sure?";
      
       if (window.confirm(text) === true) {
        try{
            const res = await axios.delete("/students/"+e);
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
                    {students.map((student)=>
                      <tr>
                      
                        <th scope="row">{i++}</th>
                        <td>{student.first_name}</td>
                        <td>{student.last_name}</td>
                        <td>{student.email}</td>
                        <td>{student.Address}</td>
                        <td>
                            <button className="delete" onClick={()=>handleDelete(student.student_id)}>Delete</button>
                        </td>
                        <td>
                            <button className="edit"><Link to={`/UpdateStudents/${student.student_id}`}>Edit</Link></button>
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
