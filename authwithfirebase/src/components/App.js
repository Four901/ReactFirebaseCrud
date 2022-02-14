
import Signup from './Signup';
import Login from './Login';
import AuthState from '../context/authState';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './Dashboard';
import UpdateProfile from './UpdateProfile';
import ForgotPassword from './ForgotPassword';
function App() {
  return (
   <>
   <Router>
   <div className="container">
     <AuthState>
       <Routes>
          <Route exact path="/sign-in"  element={<Login />} />
          <Route exact path="/sign-up"  element={ <Signup />} />
          <Route exact path="/" element={<Dashboard/>} />

          <Route exact path="/update-profile"  element={<UpdateProfile />} />

          <Route exact path="/forgot-password"  element={ <ForgotPassword />} />

       </Routes>
          
       
   </AuthState>
   </div>
   </Router>
   
     
  
   </>
  );
}

export default App;
