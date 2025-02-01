import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
const App=()=>{
   
 const [user,setUser]=useState(null)
 const AuthData=useContext(AuthContext)
console.log()
 const handleLogin=(email,password)=>{
    if(email=="admin@gmail.com" && password==123){
      setUser('admin')
    }else 
    if(AuthData && AuthData.employees.find((e)=>email==e.email && e.password==password)){
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