import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const UpdateBabynames = () => { 
  const [name,setName]=useState('');
  const [gender,setGender]=useState('');
  const [b_year,setB_year]=useState('');
    
    const navigate=useNavigate();  
  const location = useLocation();
  const baby_id  = location.pathname.split("/")[2];

  //const[students,setStudents]=useState([]);

  
  // const[selectedVal,setSelectedVal]=useState(5)
  // const[date1,setdate1]=useState('')

  useEffect(()=>{
    
  },[])
  
  useEffect(()=>{       
    const fatchUsers= async()=>{
      try{        
          //const res = await axios.get(`/students/${studentId}`);
          const res = await axios.get(`/babyname/`+baby_id );
          //setStudents(res.data);   
          setName(res.data.name);
          setGender(res.data.gender);
          setB_year(res.data.b_year);
          
          //setdate1(res.data.dob2);             
      }catch(err){
          console.log(err)
      }            
    }
    fatchUsers();
 //  fatchAllStudent();
  },[baby_id]);

 
  // const fatchAllStudent=async()=>{
  //   try{
  //     const res = await axios.get("/students");
  //     setStudents(res.data);          
  //   }catch(err){
  //       console.log(err)
  //   }            
  // }

  const submitHandle=async(e)=>{
    e.preventDefault()        
    try
    {
      const res = await axios.put("/babyname/"+baby_id,{
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
    <div className="row">
    <div className="col-lg-3">
    </div>
      <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Update product</h5>                
                  <form className="row g-3">
                      {/* <div className="col-12">
                        <label for="inputNanme4" className="form-label">Select Student:</label>
                        <select class="form-select" id="example-select" name='subject_id' value={selectedVal} select onChange={e=>setSelectedVal(e.target.value)}>
                            <option value={0}>Select Student Name</option>
                             {students.map((student) => (
                                <option value={student.student_id}>{student.student_name}</option>
                             ))}
                        </select>
                      </div>
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">Date:</label>
                        <input type="date" className="form-control" 
                        value={date1} 
                        onChange={e=>setdate1(e.target.value)} />
                         name,
            gender,
            b_year
                        
                      </div> */}
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">Baby Name:</label>
                        <input type="text" className="form-control" name='name' defaultValue={name}  onChange={(e)=>setName(e.target.value)} />
                      </div>
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">gender:</label>
                        <input type="text" className="form-control" name='gender' defaultValue={gender}  onChange={(e)=>setGender(e.target.value)} />
                      </div>
                      <div className="col-12">
                        <label for="inputEmail4" className="form-label">b_year</label>
                        <input type="email" className="form-control" id="b_year" defaultValue={b_year}  onChange={(e)=>setB_year(e.target.value)}/>
                      </div>
                      {/* <div className="col-12">
                        <label for="inputPassword4" className="form-label">Address</label>
                        <input type="text" className="form-control" id="Address" defaultValue={Address} onChange={(e)=>setAddress(e.target.value)}/>
                      </div> */}
                      
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={submitHandle}>Submit</button>
                        <button type="reset" className="btn btn-secondary" onClick={e=>navigate("/DisplayBabynames")}>Back</button>
                      </div>
                  </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default UpdateBabynames
