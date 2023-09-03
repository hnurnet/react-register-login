import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./register.css";
import { useState } from "react";



function Register() {
  const [inputs,setInputs] = useState({username:'',email:'',password:''});
  const [err,setError] = useState(null);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}));

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    
   try {
    await axios.post("http://localhost:8800/api/auth/register", inputs)
    navigate("/login")
   }
    
    catch(err){
      setError(err.response.data);
      
    }
  }
  
  return (
    <div className="container">
     <form >
     <div className="row">
      <div className="col-md-12 text-center mb-3"> <h1>Register</h1></div>
     </div>
     
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">UserName</label>
    <div className="col-sm-10 mb-3">
      <input type="text" className="form-control" id="inputEmail3" placeholder="User-name"
      name="username" onChange={handleChange}/>
    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10 mb-3">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Email" 
      name="email" onChange={handleChange}/>
    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10 mb-3">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Password" 
      name="password" onChange={handleChange}/>
    </div>
  </div>
 
  <div className="form-group row">
    <div className="col-sm-10 ">
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Sign in</button>
     {err &&  <p className="text-center">{err}</p>}
    
      <p className="login text-center"><Link to="/login" >Login</Link></p>
      
    </div>
  </div>
</form>
     
    </div>
  )
}

export default Register
