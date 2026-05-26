"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { FaClock, FaEdit, FaTrash } from "react-icons/fa";
import { FaNoteSticky, FaPowerOff, FaUser } from "react-icons/fa6";

interface Note{
    _id:string;
    title:string;
    description:string;
    color:string;
    userMail:string;
    createdAt:string;
}

export default function Dashboard(){
    
    const {data:session,status} = useSession()
    const [allNotes,setAllNotes] = useState<Note[]>([])

    console.log(allNotes);
    
    useEffect(()=>{
        fetchAllNotes()
    },[])

    const fetchAllNotes = async ()=>{
        const res = await fetch('/api/notes')
        const serverResponse = await res.json()
        setAllNotes(serverResponse)
    }
        
    if(status=="loading"){
        return <p className="text-center mt-10 text-2xl">Loading ....</p>
    }
    
    if(status=="unauthenticated"){
        redirect('/login')
    }
    return (
        <div className="md:mx-40 m-5">
            {/* header */}
            <div className="mb-10 flex justify-between items-center">
                <div className="text-xl flex items-center text-blue-300"><FaNoteSticky/> <span className="ms-2">Miniso</span></div>
                <div className="text-xl flex items-center text-blue-300">
                    <p className="me-5 flex items-center"><FaUser className="me-1"/> {session?.user?.name}</p>
                    <FaPowerOff onClick={()=>signOut()}/>
                </div>
            </div>
            <div className=" rounded p-5 bg-gray-100">
                <h1 className="text-4xl text-blue-600">My Notes</h1>
                <div className="md:grid mt-10 grid-cols-4 gap-5">
                    {
                        allNotes.length>0 &&
                            allNotes?.map(note=>(
                                <div key={note?._id} className="bg-yellow-200 rounded-xl p-5 mt-5 md:mt-0">
                                    <div className="flex items-center justify-between text-gray-600 mb-3">
                                        <h1 className="text-xl ">{note?.title}</h1>
                                        <Link href={`/notes/${note?._id}`}><FaEdit/> </Link>
                                    </div>
                                    <hr className="text-gray-200 mb-3"/>
                                    <p>{note?.description}</p>
                                    <div className="flex items-center justify-between text-gray-600 mt-3">
                                        <p className="text-gray-400 text-sm flex items-center"> <FaClock className="me-2"/> {note?.createdAt}</p>
                                        <button ><FaTrash className="text-red-600"/> </button>
                                    </div>
                                </div>
                            ))
                    }
                    
                    <Link href={'/notes/add'} className="border border-dashed rounded-xl p-5 flex justify-center items-center flex-col mt-5 md:mt-0">
                            <FaEdit/>
                            New Note
                    </Link>
                </div>
            </div>
        </div>
    )
}