import React ,{useContext, useState}from 'react';
import { useNavigate} from 'react-router-dom';
import Authcontext from '../context/authcontext'
import {Link} from 'react-router-dom'
const Signup = (props) => { 
   const navigate=useNavigate()
    const context=useContext(Authcontext);
    console.log(Authcontext)
   const {SignUp}=context

    const [credentials,setcredentials]=useState({name:"",email:"",password:""})
    
   
    const handleSubmit=async(e)=>{
       
        e.preventDefault();
        try{
       await SignUp(credentials.email,credentials.password);
        }catch(e)
        {
            console.log(e)
        }
        navigate('/sign-in')
    }
    const onChange=(e)=>{
       
        setcredentials({...credentials,[e.target.name]:e.target.value});
        
      }
      
  return <>
  <div>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label">Name</label>
    <input type="text" name='name' className="form-control" onChange={onChange} value={credentials.name} required={true} minLength={5}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"   name='email'  value={credentials.email} onChange={onChange}  />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name='password' className="form-control" onChange={onChange} value={credentials.password} required={true} minLength={5}/>
  </div>
  <div className="container row-2">
      <button type="submit" className="btn btn-primary mx-2" onClick={handleSubmit}>SignUp</button>  <Link to='/sign-in'> Already Have An Account ?</Link>
  </div>
  
</form>

</div>
 
  </>;
};

export default Signup;
