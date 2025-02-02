import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
const App=()=>{
   
 const [user,setUser]=useState(null)
 const [loggedInUserData,setloggedInUserData]=useState(null)
 const AuthData=useContext(AuthContext)
 
//  useEffect(()=>{
//     const loggedInUser=localStorage.getItem("loggedInUser");
//     if(loggedInUser){
//       setUser(loggedInUser.role)
//     }
//  },[AuthData])
 
 const handleLogin=(email,password)=>{
    if(email=="admin@gmail.com" && password==123){
      setUser({role:'admin'})
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
      
    }else 
    if(AuthData){
      const employee= AuthData.employees.find((e)=>email==e.email && e.password==password)
      if(employee){
        setUser({role:"employee"})
        setloggedInUserData(employee)
         
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employee"}))
      }
        
   
    }
    else{
      alert("Invalid Credential")
    }

 }

  

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : user=="admin"?<AdminDashboard/> : <EmployeeDashboard  name={loggedInUserData}/>} 
    
      {/* { <EmployeeDashboard/> } */}
       {/* <AdminDashboard/>  */}

    </>
  )
}
export default App