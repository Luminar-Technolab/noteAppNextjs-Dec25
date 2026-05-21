import Link from "next/link";
import { FaClock, FaEdit, FaTrash } from "react-icons/fa";
import { FaNoteSticky, FaPowerOff, FaUser } from "react-icons/fa6";

export default function Dashboard(){
    return (
        <div className="md:mx-40 m-5">
            {/* header */}
            <div className="mb-10 flex justify-between items-center">
                <div className="text-xl flex items-center text-blue-300"><FaNoteSticky/> <span className="ms-2">Miniso</span></div>
                <div className="text-xl flex items-center text-blue-300">
                    <p className="me-5 flex items-center"><FaUser className="me-1"/> username</p>
                    <FaPowerOff/>
                </div>
            </div>
            <div className=" rounded p-5 bg-gray-100">
                <h1 className="text-4xl text-blue-600">My Notes</h1>
                <div className="md:grid mt-10 grid-cols-4 gap-5">
                    <div className="bg-yellow-200 rounded-xl p-5">
                        
                        <div className="flex items-center justify-between text-gray-600 mb-3">
                            <h1 className="text-xl ">title</h1>
                            <Link href={`/notes/id`}><FaEdit/> </Link>
                        </div>
                        <hr className="text-gray-200 mb-3"/>
                        <p>description</p>
                        <div className="flex items-center justify-between text-gray-600 mt-3">
                            <p className="text-gray-400 text-sm flex items-center"> <FaClock className="me-2"/> 23/5/26</p>
                            <button ><FaTrash className="text-red-600"/> </button>
                        </div>
                    </div>
                    <Link href={'/notes/add'} className="border border-dashed rounded-xl p-5 flex justify-center items-center flex-col">
                            <FaEdit/>
                            New Note
                    </Link>
                </div>
            </div>
        </div>
    )
}