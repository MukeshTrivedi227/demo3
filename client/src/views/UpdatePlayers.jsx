import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const UpdatePlayers = () => { 
    const [name,setName]=useState('');
    const [height,setHeight]=useState('');
    const [weight,setWeight]=useState('');
    const [datebirth,setDatebirth]=useState('');
    const [teamname,setTeamname]=useState('');
      
    const navigate=useNavigate();  
  const location = useLocation();
  const player_id = location.pathname.split("/")[2];

  //const[students,setStudents]=useState([]);

  
  // const[selectedVal,setSelectedVal]=useState(5)
  // const[date1,setdate1]=useState('')

  useEffect(()=>{
    
  },[])
  
  useEffect(()=>{       
    const fatchUsers= async()=>{
      try{        
          //const res = await axios.get(`/students/${studentId}`);
          const res = await axios.get(`/player/`+player_id);
          //setStudents(res.data);   
          setName(res.data.name);
          setHeight(res.data.height);
          setWeight(res.data.weight);
          setDatebirth(res.data.datebirth);
          setTeamname(res.data.teamname);
          //setdate1(res.data.dob2);             
      }catch(err){
          console.log(err)
      }            
    }
    fatchUsers();
 //  fatchAllStudent();
  },[player_id]);

 
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
      const res = await axios.put("/player/"+player_id,{
        name,
            height,
            weight,
            datebirth,
            teamname
         
      });
      
     alert(res.data)
      navigate("/Displayplayers")
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
              <h5 className="card-title">Update Players</h5>                
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
                      {/* <div className="col-12">
                        <label for="inputNanme4" className="form-label">First Name:</label>
                        <input type="text" className="form-control" name='first_name' defaultValue={first_name}  onChange={(e)=>setFirst_name(e.target.value)} />
                      </div>
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">Last Name:</label>
                        <input type="text" className="form-control" name='last_name' defaultValue={last_name}  onChange={(e)=>setLast_name(e.target.value)} />
                      </div> */}
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">player Name:</label>
                        <input type="text" className="form-control" id="Name" defaultValue={name} onChange={(e)=>setName(e.target.value)} />
                      </div>
                      <div className="col-12">
                        <label for="inputNanme4" className="form-label">height:</label>
                        <input type="text" className="form-control" id="height" defaultValue={height} onChange={(e)=>setHeight(e.target.value)} />
                      </div>
                      <div className="col-12">
                        <label for="inputEmail4" className="form-label">weight</label>
                        <input type="text" className="form-control" id="weight" defaultValue={weight}  onChange={(e)=>setWeight(e.target.value)}/>
                      </div>
                      <div className="col-12">
                        <label for="inputEmail4" className="form-label">datebirth</label>
                        <input type="date" className="form-control" id="datebirth" defaultValue={datebirth}  onChange={(e)=>setDatebirth(e.target.value)}/>
                      </div>
                      <div className="col-12">
                        <label for="inputEmail4" className="form-label">teamname</label>
                        <input type="email" className="form-control" id="teamname" defaultValue={teamname}  onChange={(e)=>setTeamname(e.target.value)}/>
                      </div>
                      
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={submitHandle}>Submit</button>
                        <button type="reset" className="btn btn-secondary" onClick={e=>navigate("/DisplayPlayers")}>Back</button>
                      </div>
                  </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default UpdatePlayers
