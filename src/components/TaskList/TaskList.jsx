import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompletedTask from "./CompleteTask";

const TaskList=(data)=>{
    // console.log("Task List ",data.data.name.tasks)
    return(
            <div id="taskList" className="overflow-x-auto h-[55%] w-full  flex items-center gap-3 justify-start flex-nowrap py-5  mt-14">
                 {data.data.name.tasks.map((elem ,idx)=>{
                        if(elem.active){
                            return <AcceptTask key={idx}/>
                        }
                        if(elem.new_task){
                            return <NewTask key={idx}/>
                        }
                        if(elem.completed){
                            return <CompletedTask key={idx}/>
                        }
                        if(elem.failed){
                            return <FailedTask key={idx}/>
                        }
                 })}
                  
            </div>
    )
}
export default TaskList