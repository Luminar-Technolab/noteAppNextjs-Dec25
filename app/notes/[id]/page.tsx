import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function UpdateNote(){
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="border border-gray-200 p-5 rounded w-100">
                <h1 className="text-2xl font-bold text-blue-400">Miniso</h1>
                <p className="text-gray-500">Edit Notes</p>
                <div className="my-5 flex justify-between items-center">
                    <button className="font-bold text-xl"> <FaXmark/> </button>
                    <button className="bg-red-400 rounded-xl text-white px-2 flex items-center">Update <FaCheck className="ms-2"/> </button>
                </div>
                <div className="flex my-7">
                    <h3 className="text-sm text-gray-300"> Theme</h3>
                     <div className="flex justify-evenly items-center w-full">
                        <div  className="p-2 bg-yellow-300 w-5 h-5 rounded-full cursor-pointer"></div>
                        <div  className="p-2 bg-red-300 w-5 h-5 rounded-full cursor-pointer"></div>
                        <div  className="p-2 bg-green-300 w-5 h-5 rounded-full cursor-pointer"></div>
                        <div  className="p-2 bg-blue-300 w-5 h-5 rounded-full cursor-pointer"></div>
                    </div>
                 </div> 
                <div className="mt-5 mb-3 w-full">
                    <input type="text" placeholder="Title" className="rounded  p-3 w-full" />
                </div>
                <div className="mb-3 w-full">
                    <textarea  placeholder="Description" rows={5} className="rounded  p-3 w-full" />
                </div>
                                
            </div>
        </div>
    )
}