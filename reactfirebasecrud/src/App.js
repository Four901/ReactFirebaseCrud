import React,{useState,useEffect,useRef} from  'react'
import {db} from './firebase'
import {collection,doc,deleteDoc,addDoc,getDocs, updateDoc} from 'firebase/firestore'

import User from './User'
function App() {
  const [users,setUsers]=useState([]);

  const nameRef=useRef()
  const ageRef=useRef()
  const usersCollectionRef=collection(db,"Users");
  const addUser=async(name,age)=>{
    try{
      await addDoc(usersCollectionRef,{name:name,age:age});
    }catch(e)
    {
      console.log(e)
    }
    getUsers();
  }
  const [type,setType]=useState("Add");
  const [idRef,setIdRef]=useState("");
  const updateIt=async(name,age)=>{
   const userDoc=doc(db,"Users",idRef)
    const newFields={name:name,age:age}
   try{
    await updateDoc(userDoc,newFields)
    for(let i=0;i<users.length;i++)
    {
      if(users[i].id===idRef)
      {
        users[i].name=name
        users[i].age=age
        break;
      }
    }
    
    setIdRef("")
   setType("Add")
   nameRef.current.value=""
   ageRef.current.value=""
  
   }catch(e)
   {

   }

   setIdRef("")
   setType("Add")
   nameRef.current.value=""
   ageRef.current.value=""
   
  }
  const updateUser=(id,name,age)=>{
   nameRef.current.value=name
   ageRef.current.value=age
   setIdRef(id)
   setType("Update")
  }

  const deleteUser=async(user)=>{
    const userDoc=doc(db,"Users",user.id)
  try{
   await deleteDoc(userDoc)
 let letUsers=users;
  //{letUsers===users&&console.log("done")}
  letUsers = letUsers.filter((item) => item !== user)
  

  // {letUsers===users&&console.log("done2")}
  setUsers(letUsers)
  }catch(e)
  {
    console.log(e)
  } 
  
  }

  const getUsers=async()=>{
    const data=await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(users)
}
  useEffect(() => {

  getUsers();
    
  }, []);
  

  return (
   <>
   <h3>{type} The User</h3>
   <input type='text' ref={nameRef} placeholder='Name...' />
   <input type='number' ref={ageRef} placeholder='Age...'/>
   <button onClick={()=>{type==="Add"?addUser(nameRef.current.value,ageRef.current.value):updateIt(nameRef.current.value,ageRef.current.value)}}>{type}</button>
   <h2>all the users</h2>

   {users.map((user)=>{
    return <div className='container'>
      <User key={user.id} user={user}/>
      <div className='container row-2 mx-3'>
        <button className='mx-3' onClick={()=>{updateUser(user.id,user.name,user.age)}}>Update User</button>
        <button onClick={()=>{deleteUser(user)}}>Delete User</button>
      </div>
      </div>
   })}
   </>
  );
}

export default App;
