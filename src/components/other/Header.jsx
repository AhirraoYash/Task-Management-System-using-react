import React, { useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";
const Header=(data)=>{
      const logOUtUser=()=>{
            // setLocalStorage("loggedInus")
            localStorage.setItem('loggedInUser',"")
            window.location.reload()
        } 
    return(
       
         
        <div className="flex items-center justify-between">
              <h1 className="text-2xl">Hello, <br/> <span className="text-3xl font-semibold ml-2">{!data.name?"Admin":data.name} </span></h1>
              <button onClick={logOUtUser}  className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-xl">Log out</button>
        </div>
    )
}
export default Header