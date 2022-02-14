import React ,{useState,useContext}from 'react';
import { useNavigate,Link} from 'react-router-dom';
import Authcontext from '../context/authcontext'
const Login =  () => {
 
  const context=useContext(Authcontext);
  const navigate=useNavigate()
 const {Login}=context
    const [credentials,setcredentials]=useState({email:"",password:""})
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
      
        try{
          await Login(credentials.email,credentials.password);
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
  
 
  <div className="container col">
      
  <div className="container row-2">
      <button type="submit" className="btn btn-primary mx-2" onClick={handleSubmit}>SignIn</button>  <Link to='/sign-up'> Don't Have An Account ?</Link>
  </div>
  <div className="container">
        <Link to='/forgot-password'> Don't You Remember The Password ?</Link>
  </div>
  </div>
</form></div>;
};

export default Login;
