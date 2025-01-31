import React from "react";
import Header from "../other/Header";

const AdminDashboard=()=>{
    return(
        <div className="h-screen w-full p-8">
            <Header/>

            <div className="p-5 bg-gray-900 mt-7 rounded" >
                <form className="flex flex-wrap w-full  items-start justify-between">
                    <div className="w-1/2">
                        <div> 
                            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                            <input className="text-sm py-1 px-2 w-3/5 rounded outline-none bg-transparent  border-[1px] border-gray-400" type="text" placeholder="Make a UI design" />
                        </div>
                        <div>                  
                            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>                
                            <input className="text-sm py-1 px-2 w-3/5 rounded outline-none bg-transparent  border-[1px] border-gray-400" type="date"></input>
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
                            <input className="text-sm py-1 px-2 w-3/5 rounded outline-none bg-transparent  border-[1px] border-gray-400" type='text' placeholder="employee name"/>
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                            <input className="text-sm py-1 px-2 w-3/5 rounded outline-none bg-transparent  border-[1px] border-gray-400" type="text" placeholder="design,dev,etc"/>
                        </div>
                    </div>
                    
                    <div className="w-1/2 flex flex-col items-">
                        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                        <textarea className=" w-full h-55 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"  name="" id="" cols="30" rows="10"></textarea>    
                        <button className="bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full ">Create task</button>
                </div>
                   
                 </form>
            </div>
        </div>
    )
}
export default AdminDashboard