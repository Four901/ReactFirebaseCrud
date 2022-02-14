import React, { useContext } from 'react'
import { Card ,Button} from 'react-bootstrap';
import Authcontext from '../context/authcontext'
import { useNavigate,Link } from 'react-router-dom';
import Spiner from './Spiner';
const Dashboard = () => {
    const context=useContext(Authcontext);

    const {currentUser,Logout}=context
    const handleLogout=async()=>{
       try{
          await Logout()

       }catch(e)
       {
        console.log(e)
       }
    }
  return (<>
      {currentUser? 
        <div className="container">
            <h2>Profile</h2>
            <Card className="container ">
             Email:{currentUser.email}
            </Card>
              <Button className="btn btn-primary mx-3" onClick={handleLogout}>Logout</Button>
              <Link to='/update-profile'>Update Profile?</Link>
        </div>
       :<Spiner/>}
   </>
  )
}

export default Dashboard