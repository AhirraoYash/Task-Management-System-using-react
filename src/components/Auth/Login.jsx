import React, { useState } from "react";
const Login=()=>{
     const [email,setEmail]=useState('')
     const [password,setPassword]=useState('')

    const submitHandler=(e)=>{
        e.preventDefault()
        console.log("Email is ",email)
        console.log("password is ",password)

        setEmail("")
        setPassword("")
    }
    return(
            <div className="flex h-screen w-screen items-center justify-center">
                <div className="border-2 border-emerald-600 rounded-xl p-20">
                    <form onSubmit={(e)=>{
                            submitHandler(e)
                    }}
                    className="flex flex-col items-center justify-center">
                        <input
                             value={email}
                             onChange={(e)=>{
                                              setEmail(e.target.value)
                                            }}
                             required className=" bg-transparent  border-2 border-r-emerald-600 rounded-full py-2 text-xl px-3 placeholder:text-gray-500" type="email" placeholder="Enter Email"/>
                        <input 
                            value={password}
                            onChange={(e)=>{
                                setPassword(e.target.value)   
                            }}
                            required className=" bg-transparent  border-2 border-r-emerald-600 rounded-full mt-5 py-2 text-xl px-3 placeholder:text-gray-500" type="password" placeholder="enter Password"/>
                        <button className=" bg-transparent border-none outline-none border-2 bg-emerald-600 rounded-full py-2 text-xl px-3 mt-5 placeholder:text-white">Log in</button>
                    </form>
                </div>

            </div>
    )
}
export default Login