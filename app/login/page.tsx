"use client"
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Login(){

    const [userDetails,setUserDetails] = useState({
        email:"", password:""
    })

    const handleLogin = async (e:any)=>{
        e.preventDefault()
        const {email,password} = userDetails
        if(!email || !password){
            toast.error("Please fill the form completely!!!")
        }else{
            const res = await signIn("credentials",{
                email,password,redirect:false
            })
            if(res?.ok){
                 toast.success("Login Successfull.") 
                 window.location.href = "/notes"
            }else{
                toast.error("Invalid Credentials!!!")
                setUserDetails({email:"", password:""})
            }
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-blue-400 p-5 rounded w-100">
                <h1 className="text-2xl font-bold text-white">Miniso</h1>
                <p className="text-white">Note Taking made easier!</p>
                <form onSubmit={handleLogin}>
                    <div className="mt-5 mb-3 w-full">
                        <input value={userDetails.email} onChange={e=>setUserDetails({...userDetails,email:e.target.value})} type="text" placeholder="Email" className="rounded bg-gray-100 p-3 w-full" />
                    </div>
                    <div className=" mb-3 w-full">
                        <input value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})} type="password" placeholder="Password" className="rounded bg-gray-100 p-3 w-full" />
                    </div>
                    <div className=" mb-3 flex text-white items-center">
                        <button type="submit" className="bg-blue-700 rounded px-3 py-2 text-white">Login</button>
                        <span className="ms-5 text-sm">New User ? Click here to <Link href={'/register'} className="underline text-blue-800">Register</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}