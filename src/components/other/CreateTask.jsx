import React from "react";
const CreateTask=()=>{
    return(
        <div className="p-5 bg-gray-900 mt-7 rounded" >
        <form className="flex flex-wrap w-full  items-start justify-between">
            <div className="w-1/2">
                <div> 
                    <h3 className="text-sm text-gray-300 mb-2 mt-2">Task Title</h3>
                    <input className="text-sm py-1 px-2 w-3/5 rounded outline-none bg-transparent  border-[1px] border-gray-400" type="text" placeholder="Make a UI design" />
                </div>
                <div>                  
                    <h3 className="text-sm text-gray-300 mb-2 mt-2">Date</h3>                
                    <input className="text-sm py-1 px-2 w-3/5 rounded outline-none bg-transparent  border-[1px] border-gray-400" type="date"></input>
                </div>
                <div>
                    <h3 className="text-sm text-gray-300 mb-2 mt-2">Assign to</h3>
                    <input className="text-sm py-1 px-2 w-3/5 rounded outline-none bg-transparent  border-[1px] border-gray-400" type='text' placeholder="employee name"/>
                </div>
                <div>
                    <h3 className="text-sm text-gray-300 mb-2 mt-2">Category</h3>
                    <input className="text-sm py-1 px-2 w-3/5 rounded outline-none bg-transparent  border-[1px] border-gray-400" type="text" placeholder="design,dev,etc"/>
                </div>
            </div>
            
            <div className="w-2/5 flex flex-col items-start ">
                <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                <textarea className=" w-full h-55 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 "  name="" id="" cols="30" rows="10"></textarea>    
                <button className="bg-emerald-500 hover:bg-emerald-600 px-5 py-3 rounded text-sm mt-4 w-full ">Create task</button>
        </div>
           
         </form>
    </div>
    )
}
export default CreateTask





