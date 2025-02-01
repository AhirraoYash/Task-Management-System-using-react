import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
const App=()=>{
  useEffect(()=>{
    // setLocalStorage() 
  // getLocalStorage()
  })
 const [user,setUser]=useState(null)

 const handleLogin=(email,password)=>{
    if(email=="admin@gmail.com" && password==123){
      setUser('admin')
    }else 
    if(email=="user@gmail.com" && password==123){
        setUser("employee")
    }
    else{
      alert("Invalid Credential")
    }

 }

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : user=="admin"?<AdminDashboard/> : <EmployeeDashboard/>} 
    
      {/* { <EmployeeDashboard/> } */}
       {/* <AdminDashboard/>  */}

    </>
  )
}
export default App