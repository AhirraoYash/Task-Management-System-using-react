import React from "react";

const AcceptTask=(data)=>{
    // console.log("Task List page",data.data.task_title)
    return(
        
 <div className="p-5 h-full w-[300px] flex-shrink-0 bg-yellow-400 rounded-2xl">
        <div className="flex justify-between items-center ">
            <h3 className="bg-red-500 px-5 py-1 text-sm rounded ">{data.data.category}</h3>
            <h4 className="text-sm">{data.data.task_date}</h4>
        </div>
        <h2 className="mt-7 text-2xl font-semibold ">{data.data.task_title}</h2>
        <p className="text-sm mt-4">
          {data.data.task_description}
          </p>
        <div className="flex justify-between mt-24 ">
            <button className="bg-green-400 py-2 px-3 text-sm">Mark as completed</button>
            <button className="bg-red-700 py-2 px-2 text-sm">Mark as Failed</button>
        </div>
 </div> 
    )
}
export default AcceptTask