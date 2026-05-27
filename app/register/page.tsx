"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"



export default function Register(){

    const router = useRouter()
    const [userDetails,setUserDetails] = useState({
        name:"",email:"",password:""
    })

    const handleRegister = async (e:any)=>{
        e.preventDefault()
        const {name,email,password} = userDetails
        if(!name || !email || !password){
            toast.error("Please fill the form completely!!!")
        }else{
            const res = await fetch('/api/register',{
                method:"POST",
                body:JSON.stringify(userDetails)
            })
            // console.log(res);
            const serverResponse = await res.json()
            // console.log(serverResponse);
            if(res.status==201){
               toast.success(serverResponse.message) 
                setTimeout(() => {
                    router.push('/login') 
                }, 2000);
            }else{
                toast.error(serverResponse.message) 
            }
            setUserDetails({name:"",email:"",password:""})
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-blue-400 p-5 rounded w-100">
                <h1 className="text-2xl font-bold text-white">Miniso</h1>
                <p className="text-white">Note Taking made easier!</p>
                <form onSubmit={handleRegister}>
                    <div className="mt-5 mb-3 w-full">
                        <input onChange={e=>setUserDetails({...userDetails,name:e.target.value})} type="text" placeholder="Name" className="rounded bg-gray-100 p-3 w-full" />
                    </div>
                    <div className="mb-3 w-full">
                        <input onChange={e=>setUserDetails({...userDetails,email:e.target.value})} type="email" placeholder="Email" className="rounded bg-gray-100 p-3 w-full" />
                    </div>
                    <div className=" mb-5 w-full">
                        <input onChange={e=>setUserDetails({...userDetails,password:e.target.value})} type="password" placeholder="Password" className="rounded bg-gray-100 p-3 w-full" />
                    </div>
                    <div className=" mb-3 flex text-white items-center">
                        <button type="submit" className="bg-blue-700 rounded px-3 py-2 text-white">Register</button>
                        <span className="ms-5 text-sm">Already a User ? Click here to <Link href={'/login'} className="underline text-blue-800">Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}