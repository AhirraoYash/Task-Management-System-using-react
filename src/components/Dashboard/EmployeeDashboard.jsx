import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";
const EmployeeDashboard=()=>{
    return(
        <div>
            <div className="p-8 bg-red-400 h-screen">
                  <Header/>
                  <TaskListNumber/>
                  <TaskList/>
            </div>
        </div>
    )
}
export default EmployeeDashboard