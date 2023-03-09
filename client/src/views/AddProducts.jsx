import React,{useState} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

export default function AddProucts() {
    const [name,setName]=useState();
    const [discription,setDiscription]=useState();
    const [price,setPrice]=useState();
     const navigate=useNavigate();  

    const submitHandle=async(e)=>{
        e.preventDefault()
        try
        {
          const res = await axios.post("/Product/",{
            name,
            discription,
            price
                    
          });
         alert(res.data)
          navigate("/DisplayProducts")
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
              <h5 className="card-title">Add Product</h5>                
                  <form className="row g-3">
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">Product Name:</label>
                        <input type="text" className="form-control" id="Name" onChange={(e)=>setName(e.target.value)} />
                      </div>
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">Discription:</label>
                        <input type="text" className="form-control" id="discription" onChange={(e)=>setDiscription(e.target.value)} />
                      </div>
                      <div className="col-12">
                        <label for="inputEmail4" className="form-label">Price</label>
                        <input type="email" className="form-control" id="price"  onChange={(e)=>setPrice(e.target.value)}/>
                      </div>
                      
                      
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={submitHandle}>Submit</button>
                        
                        <button type="reset" className="btn btn-secondary" onClick={e=>navigate("/DisplayProducts")}>Back</button>
                      </div>
                  </form>
            </div>
          </div>
      </div>
    </div>
    </main>

  )
}
