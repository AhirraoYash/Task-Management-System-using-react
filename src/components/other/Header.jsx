import React, { useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";
    const Header=(data)=>{
    // console.log("Header",data.name.name.employee.name)
    
    console.log("Header",data)
      const logOUtUser=()=>{
            // setLocalStorage("loggedInus")
            localStorage.setItem('loggedInUser',"")
            data.name.changeUser("");
            // localStorage.clear()
            // window.location.reload()
            
           
        } 
    return(
       
         
        <div className="flex items-center justify-between">
            {/* {!data.name.name.employee.name?"Admin":data.name.employee.name}  */}
              <h1 className="text-2xl">Hello, <br/> <span className="text-3xl font-semibold ml-2"></span>User Name</h1>
              <button onClick={logOUtUser}  className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-xl">Log out</button>
        </div>
    )
}
export default Header