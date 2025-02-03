import React from "react";

const FailedTask=()=>{
    return(
        <div className="p-5 h-full w-[300px] flex-shrink-0 bg-gray-400 rounded-2xl">
        <div className="flex justify-between items-center ">
            <h3 className="bg-red-500 px-5 py-1 text-sm rounded ">High</h3>
            <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-7 text-2xl font-semibold ">Make a youtube video</h2>
        <p className="text-sm mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, modi accusamus dolorum ut quis laboriosam.
        </p>
        <div className="mt-24">
            <button className="w-full bg-red-700 py-1 font-serif">Failed</button>
        </div>
 </div>
    )
}
export default FailedTask