import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const UpdateTeachers = () => { 
    const [first_name,setFirst_name]=useState('');
    const [last_name,setLast_name]=useState('');
    const [email,setEmail]=useState('');
    const [Address,setAddress]=useState('');  
    const navigate=useNavigate();  
  const location = useLocation();
  const teacher_id = location.pathname.split("/")[2];

  //const[students,setStudents]=useState([]);

  
  // const[selectedVal,setSelectedVal]=useState(5)
  // const[date1,setdate1]=useState('')

  useEffect(()=>{
    
  },[])
  
  useEffect(()=>{       
    const fatchUsers= async()=>{
      try{        
          //const res = await axios.get(`/students/${studentId}`);
          const res = await axios.get(`/teachers/`+teacher_id);
          //setStudents(res.data);   
          setFirst_name(res.data.first_name);
          setLast_name(res.data.last_name);
          setEmail(res.data.email);
          setAddress(res.data.Address);
          //setdate1(res.data.dob2);             
      }catch(err){
          console.log(err)
      }            
    }
    fatchUsers();
 //  fatchAllStudent();
  },[teacher_id]);

 
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
      const res = await axios.put("/students/"+teacher_id,{
        first_name,
        last_name,
        email,
        Address
         
      });
      
     alert(res.data)
      navigate("/DisplayTeachers")
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
              <h5 className="card-title">Update Teacher</h5>                
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
                        
                      </div> */}
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">First Name:</label>
                        <input type="text" className="form-control" name='first_name' defaultValue={first_name}  onChange={(e)=>setFirst_name(e.target.value)} />
                      </div>
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">Last Name:</label>
                        <input type="text" className="form-control" name='last_name' defaultValue={last_name}  onChange={(e)=>setLast_name(e.target.value)} />
                      </div>
                      <div className="col-12">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" defaultValue={email}  onChange={(e)=>setEmail(e.target.value)}/>
                      </div>
                      <div className="col-12">
                        <label for="inputPassword4" className="form-label">Address</label>
                        <input type="text" className="form-control" id="Address" defaultValue={Address} onChange={(e)=>setAddress(e.target.value)}/>
                      </div>
                      
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={submitHandle}>Submit</button>
                        <button type="reset" className="btn btn-secondary" onClick={e=>navigate("/DisplayTeachers")}>Back</button>
                      </div>
                  </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default UpdateTeachers
