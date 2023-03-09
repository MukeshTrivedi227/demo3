import React,{useState} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

export default function AddStudents() {
    const [first_name,setFirst_name]=useState();
    const [last_name,setLast_name]=useState();
    const [email,setEmail]=useState();
    const [Address,setAddress]=useState();
    const navigate=useNavigate();  

    const submitHandle=async(e)=>{
        e.preventDefault()
        try
        {
          const res = await axios.post("/students/",{
            first_name,
            last_name,
            email,
            Address
                    
          });
         alert(res.data)
          navigate("/DisplayStudents")
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
              <h5 className="card-title">Add Student</h5>                
                  <form className="row g-3">
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">First Name:</label>
                        <input type="text" className="form-control" id="first_name" onChange={(e)=>setFirst_name(e.target.value)} />
                      </div>
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">Last Name:</label>
                        <input type="text" className="form-control" id="last_name" onChange={(e)=>setLast_name(e.target.value)} />
                      </div>
                      <div className="col-12">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email"  onChange={(e)=>setEmail(e.target.value)}/>
                      </div>
                      <div className="col-12">
                        <label for="inputPassword4" className="form-label">Address</label>
                        <input type="text" className="form-control" id="Address" onChange={(e)=>setAddress(e.target.value)}/>
                      </div>
                      
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={submitHandle}>Submit</button>
                        
                        <button type="reset" className="btn btn-secondary" onClick={e=>navigate("/DisplayStudents")}>Back</button>
                      </div>
                  </form>
            </div>
          </div>
      </div>
    </div>
    </main>

  )
}
