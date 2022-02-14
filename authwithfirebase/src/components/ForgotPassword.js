import React, { useContext ,useRef} from 'react'
import { Button } from 'react-bootstrap'
import Authcontext from '../context/authcontext'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
    const emailRef=useRef();
    const navigate=useNavigate()
    const context=useContext(Authcontext)
    const {ResetPassword}=context
    const handleSubmit=async()=>{

      
       try{
        await ResetPassword(emailRef.current.value)
       }catch(e)
       {
           console.log(e)
       }

    }
  return (
    <>
    <div className="container">
        <h2>Reset Password</h2>
<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" ref={emailRef}  name='email'  />
     
  </div>
  <Button onClick={handleSubmit}>Send Mail</Button>
  </form>
    </div>
    </>
  )
}

export default ForgotPassword