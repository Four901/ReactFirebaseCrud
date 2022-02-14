import Authcontext from "./authcontext"
import React, {  useState,useEffect } from 'react'
import auth from '../firebase'
import { useNavigate } from "react-router-dom";
import { getAuth,signOut,updateEmail,updatePassword, sendPasswordResetEmail ,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";

const AuthState=(props)=>
{
   
    const [currentUser,setCurrentUser]=useState({email:" hgvug",password:"hbvug9"});
    const [loading, setLoading] = useState(true)
    
    const navigate=useNavigate();
    
    const auth = getAuth();

const Logout=()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
    navigate('/sign-in')
  }).catch((error) => {
    // An error happened.
  });
  
}

const updateProfile=(email,password)=>{
  if(currentUser.email!==email)
  {
    updateEmail(auth.currentUser,email).then(() => {
    // Email updated!
    // ...
  if(currentUser.password===password)
  {
    navigate('/sign-in')
  }
  }).catch((error) => {
    // An error occurred
    // ...
  });
  }
  
  if(currentUser.password!=password)
  {
    updatePassword(auth.currentUser, password).then(() => {
    // Update successful.
    navigate('/sign-in')
  }).catch((error) => {
    // An error ocurred
    // ...
  });
  }
  
  
}

const ResetPassword=(email)=>{
  console.log(email)
  sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
    navigate('/sign-in')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log("errror hai")
  });
}

const Login=(email,password)=>{

      console.log({email,password})
      //return auth.createUserWithEmailAndPassword(auth,email,password);
     
    signInWithEmailAndPassword (auth, email, password)
.then((userCredential) => {
  // Signed in 
  setCurrentUser( userCredential.user);
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  // ..
});

  }

const SignUp=(email,password)=>{

        console.log({email,password})
        //return auth.createUserWithEmailAndPassword(auth,email,password);
       
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in  
    //navigate('/sign-in')
    setCurrentUser( userCredential.user);
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    }


    
  useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth, (user) => {
             setCurrentUser(user)
        
    })
  
      return unsubscribe
    }, []);

  

    return (
<Authcontext.Provider value={{currentUser,SignUp,Login,Logout,ResetPassword,updateProfile}}>
    {props.children}
</Authcontext.Provider>

)}
export default AuthState;