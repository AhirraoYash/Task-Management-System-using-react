import React from "react";

const AcceptTask=()=>{
    return(
        <div className="p-5 h-full w-[300px] flex-shrink-0 bg-yellow-400 rounded-2xl">
        <div className="flex justify-between items-center ">
            <h3 className="bg-red-500 px-5 py-1 text-sm rounded ">High</h3>
            <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-7 text-2xl font-semibold ">Make a youtube video</h2>
        <p className="text-sm mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, modi accusamus dolorum ut quis laboriosam.
        </p>
        <div className="flex justify-between mt-24 ">
            <button className="bg-green-400 py-1 px-2 text-sm">Mark as completed</button>
            <button className="bg-red-700 py-1 px-2 text-sm">Mark as Failed</button>
        </div>
 </div> 
    )
}
export default AcceptTask