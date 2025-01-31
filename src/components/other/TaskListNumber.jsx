import React from "react";

const TaskListNumber=()=>{
    return(
        <div className="flex mt-10 gap-5  w-screen ">
                <div className=" w-[20%] py-8 px-14 bg-red-600 rounded-xl">
                    <h1 className="text-2xl font-semibold">0</h1>
                    <h1 className="text-xl font-semibold">New Task</h1>
                </div>
                <div className=" w-[20%] py-8 px-14 bg-blue-600 rounded-xl">
                    <h1 className="text-2xl font-semibold">0</h1>
                    <h1 className="text-xl font-semibold">New Task</h1>
                </div>
                <div className=" w-[20%] py-8 px-14 bg-green-600 rounded-xl">
                    <h1 className="text-2xl font-semibold">0</h1>
                    <h1 className="text-xl font-semibold">New Task</h1>
                </div>
                <div className=" w-[20%] py-8 px-14 bg-yellow-600 rounded-xl">
                    <h1 className="text-2xl font-semibold">0</h1>
                    <h1 className="text-xl font-semibold">New Task</h1>
                </div>

        </div>
    )
}
export default TaskListNumber