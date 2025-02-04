import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask=()=>{
    const authData=useContext(AuthContext)
    console.log(authData)
    return(
        <div className=" p-5 mt-5 rounded   ">
            <div className="bg-red-500 mb-2 py-2 px-4 flex justify-between rounded ">
                <h2 className=" text-lg font-medium w-1/5" >Employee Name</h2>
                <h3 className=" text-lg font-medium w-1/5">New Task </h3>
                <h5 className=" text-lg font-medium w-1/5">Active Task</h5>
                <h5 className=" text-lg font-medium w-1/5">completed</h5>
                <h5 className=" text-lg font-medium w-1/5">Fail</h5>
            </div>

            <div>
            { authData.employees.map(function(elem,idx){
                return <div ket={idx} className=" border-2 border-emerald-600  mb-2 py-2 px-4 flex justify-between rounded ">
                <h3 className="w-1/5 text-lg font-medium  text-white-900">{elem.name}</h3>
                <h5 className="w-1/5 text-lg font-medium  text-yellow-400">{elem.task_count.new_task}</h5>
                <h5 className="w-1/5 text-lg font-medium  text-green-400">{elem.task_count.active}</h5>
                <h5 className="w-1/5 text-lg font-medium  text-red-400">{elem.task_count.completed}</h5>
                <h2 className="w-1/5 text-lg font-medium  text-red-600" >{elem.task_count.failed}</h2>
            </div>
            })}
            </div>
             
        </div>
    )
}
export default AllTask