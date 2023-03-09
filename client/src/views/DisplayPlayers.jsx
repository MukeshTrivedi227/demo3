import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";

export default function DisplayTeachers() {
    const [players,setTeachers]= useState([]);
    let i=1;

     useEffect(()=>{       
       
         fatchUsers();
     },[]);

     const fatchUsers= async()=>{
      try{
          const res = await axios.get("/player");
          setTeachers(res.data);                 
      }catch(err){
          console.log(err)
      }            
  }

     const handleDelete=async(e)=>{
      let text = "Are you sure?";
      
       if (window.confirm(text) === true) {
        try{
            const res = await axios.delete("/player/"+e);
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
                        <th scope="col"> Name</th>
                        <th scope="col">height</th>
                        <th scope="col">weight</th>
                        <th scope="col">datebirth</th>
                        <th scope="col">teamname</th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {players.map((player)=>
                      <tr>
                      
                        <th scope="row">{i++}</th>
                        <td>{player.name}</td>
                        <td>{player.height}</td>
                        <td>{player.weight}</td>
                        <td>{player.datebirth}</td>
                        <td>{player.teamname}</td>
                        <td>
                            <button className="delete" onClick={()=>handleDelete(player.player_id)}>Delete</button>
                        </td>
                        <td>
                            <button className="edit"><Link to={`/UpdatePlayers/${player.player_id}`}>Edit</Link></button>
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
