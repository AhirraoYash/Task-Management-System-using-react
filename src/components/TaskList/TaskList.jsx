import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompletedTask from "./CompleteTask";

const TaskList=(data)=>{
    console.log("Task List ",data.data.employee)
    return(
            <div id="taskList" className="overflow-x-auto h-[55%] w-full  flex items-center gap-3 justify-start flex-nowrap py-5  mt-14">
                 {data.data.employee.tasks.map((elem ,idx)=>{
                        if(elem.active){
                            return <AcceptTask key={idx} data={elem}/>
                        }
                        if(elem.new_task){
                            return <NewTask key={idx} data={elem}/>
                        }
                        if(elem.completed){
                            return <CompletedTask key={idx} data={elem}/>
                        }
                        if(elem.failed){
                            return <FailedTask key={idx} data={elem}/>
                        }
                 })}
                  
            </div>
    )
}
export default TaskList