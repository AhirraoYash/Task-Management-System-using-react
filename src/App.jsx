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
//  const [loggedInUser,setloggedInUser]=useState(null);

 useEffect(()=>{
   const loggedInUser=localStorage.getItem("loggedInUser");
    // console.log("Login user is ",loggedInUser)
    if(loggedInUser){
      
       const userData=JSON.parse(loggedInUser)
       setUser(userData.role);
      setloggedInUserData(userData.data || null);
    }
 },[])
 
 const handleLogin=(email,password)=>{
    if(email=="admin@gmail.com" && password==123){
      setUser('admin')
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
      
    }else if(AuthData){
      const employee= AuthData.employees.find((e)=>email==e.email && e.password==password)
      if(employee){
        setUser("employee")
        setloggedInUserData(employee)
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employee", data:{employee}}))
      }
        
   
    }
    else{
      alert("Invalid Credential")
      
    }

 }

  

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> :   user=="admin"?<AdminDashboard changeUser={setUser} name={loggedInUserData}/> :(user=="employee"?  <EmployeeDashboard changeUser={setUser} name={loggedInUserData}/> : null) } 
    
      {/* { <EmployeeDashboard/> } */}
       {/* <AdminDashboard/>  */}

    </>
  )
}
export default App