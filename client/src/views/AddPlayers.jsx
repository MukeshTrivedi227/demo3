import React,{useState} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

export default function AddPlayers() {
    const [name,setName]=useState();
    const [height,setHeight]=useState();
    const [weight,setWeight]=useState();
    const [datebirth,setDatebirth]=useState();
    const [teamname,setTeamname]=useState();

     const navigate=useNavigate();  

    const submitHandle=async(e)=>{
        e.preventDefault()
        try
        {
          const res = await axios.post("/player/",{
            name,
            height,
            weight,
            datebirth,
            teamname
                    
          });
         alert(res.data)
          navigate("/DisplayPlayers")
        }
        catch(err)
        {
            alert(err)
        }
    }
  return (
    <main id="main" class="main">
        <div className="row">
    <div className="col-lg-3">
    </div>
      <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add player</h5>                
                  <form className="row g-3">
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">player Name:</label>
                        <input type="text" className="form-control" id="Name" onChange={(e)=>setName(e.target.value)} />
                      </div>
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">height:</label>
                        <input type="text" className="form-control" id="height" onChange={(e)=>setHeight(e.target.value)} />
                      </div>
                      <div className="col-12">
                        <label for="inputEmail4" className="form-label">weight</label>
                        <input type="text" className="form-control" id="weight"  onChange={(e)=>setWeight(e.target.value)}/>
                      </div>
                      <div className="col-12">
                        <label for="inputEmail4" className="form-label">datebirth</label>
                        <input type="date" className="form-control" id="datebirth"  onChange={(e)=>setDatebirth(e.target.value)}/>
                      </div>
                      <div className="col-12">
                        <label for="inputEmail4" className="form-label">teamname</label>
                        <input type="text" className="form-control" id="teamname"  onChange={(e)=>setTeamname(e.target.value)}/>
                      </div>
                      
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={submitHandle}>Submit</button>
                        
                        <button type="reset" className="btn btn-secondary" onClick={e=>navigate("/DisplayPlyaers")}>Back</button>
                      </div>
                  </form>
            </div>
          </div>
      </div>
    </div>
    </main>

  )
}
