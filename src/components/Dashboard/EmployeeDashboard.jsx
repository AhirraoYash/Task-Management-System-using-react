import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";
const EmployeeDashboard=(props)=>{
    console.log(props.name)
    return(
        <div>
            <div className="p-8 bg-red-400 h-screen">
                  <Header name={props} />
                   
                    <TaskListNumber data={props.name}/> 
                  <TaskList data={props.name}/>
            </div>
        </div>
    )
}
export default EmployeeDashboard