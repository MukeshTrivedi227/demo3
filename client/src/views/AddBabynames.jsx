import React,{useState} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

export default function AddBabynames() {
    const [name,setName]=useState();
    const [gender,setGender]=useState();
    const [b_year,setB_year]=useState();
     const navigate=useNavigate();  

    const submitHandle=async(e)=>{
        e.preventDefault()
        try
        {
          const res = await axios.post("/babyname/",{
            name,
            gender,
            b_year
                    
          });
         alert(res.data)
          navigate("/DisplayBabynames")
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
              <h5 className="card-title">Add babyname</h5>                
                  <form className="row g-3">
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">babyname Name:</label>
                        <input type="text" className="form-control" id="Name" onChange={(e)=>setName(e.target.value)} />
                      </div>
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">gender:</label>
                        <input type="text" className="form-control" id="gender" onChange={(e)=>setGender(e.target.value)} />
                      </div>
                      <div className="col-12">
                        <label for="inputEmail4" className="form-label">b_year</label>
                        <input type="email" className="form-control" id="b_year"  onChange={(e)=>setB_year(e.target.value)}/>
                      </div>
                      
                      
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={submitHandle}>Submit</button>
                        
                        <button type="reset" className="btn btn-secondary" onClick={e=>navigate("/DisplayBabynames")}>Back</button>
                      </div>
                  </form>
            </div>
          </div>
      </div>
    </div>
    </main>

  )
}
