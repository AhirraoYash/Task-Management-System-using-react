import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard=(props)=>{
    const loggedInUser=localStorage.getItem("loggedInUser");
    const userData=JSON.parse(loggedInUser)
      
    return(
        <div className="h-screen w-full p-8">
            <Header changeUser={props}/>
            <CreateTask/>
            <AllTask/>
        </div>
    )
}
export default AdminDashboard