import React ,{useState,useContext}from 'react';
import { useNavigate,Link} from 'react-router-dom';
import Authcontext from '../context/authcontext'
const UpdateProfile =  () => {
 
  const context=useContext(Authcontext);
  const navigate=useNavigate()
 const {updateProfile,currentUser}=context
    const [credentials,setcredentials]=useState(currentUser)
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
      
        try{
          await updateProfile(credentials.email,credentials.password);
          navigate('/')
           }catch(e)
           {
               console.log(e)
           }
    }
    const onChange=(e)=>{
        console.log("ohkhhh")
        setcredentials({...credentials,[e.target.name]:e.target.value});
        console.log(credentials)
      }
  return <div>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"   name='email'  value={credentials.email} onChange={onChange}  />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name='password' className="form-control" onChange={onChange} value={credentials.password} required={true} minLength={5} />
  </div>
  
 
      <button type="submit" className="btn btn-primary mx-2" onClick={handleSubmit}>Update</button> 
  
  
</form></div>;
};




export default UpdateProfile