import React from "react";

const CompletedTask=(data)=>{
    return(
        <div className="p-5 h-full w-[300px] flex-shrink-0 bg-pink-400 rounded-2xl">
        <div className="flex justify-between items-center ">
            <h3 className="bg-red-500 px-5 py-1 text-sm rounded ">{data.data.category}</h3>
            <h4 className="text-sm">{data.data.task_date}</h4>
        </div>
        <h2 className="mt-7 text-2xl font-semibold ">{data.data.task_title}</h2>
        <p className="text-sm mt-4">
        {data.data.task_description}
                </p>
        <div className="mt-24">
            <button className="w-full bg-green-400 py-1 font-serif">Completed</button>
        </div>
 </div>
    )
}
export default CompletedTask