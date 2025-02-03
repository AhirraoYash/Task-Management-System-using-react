import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";
const EmployeeDashboard=(data)=>{
    // console.log(data.name)
    return(
        <div>
            <div className="p-8 bg-red-400 h-screen">
                  <Header name={data.name.name} />
                  <TaskListNumber data={data}/>
                  <TaskList data={data}/>
            </div>
        </div>
    )
}
export default EmployeeDashboard