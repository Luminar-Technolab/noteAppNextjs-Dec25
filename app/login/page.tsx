import Link from "next/link";

export default function Login(){
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-blue-400 p-5 rounded w-100">
                <h1 className="text-2xl font-bold text-white">Miniso</h1>
                <p className="text-white">Note Taking made easier!</p>
                <div className="mt-5 mb-3 w-full">
                    <input type="text" placeholder="Email" className="rounded bg-gray-100 p-3 w-full" />
                </div>
                <div className=" mb-3 w-full">
                    <input type="password" placeholder="Password" className="rounded bg-gray-100 p-3 w-full" />
                </div>
                <div className=" mb-3 flex text-white items-center">
                    <button className="bg-blue-700 rounded px-3 py-2 text-white">Login</button>
                    <span className="ms-5 text-sm">New User ? Click here to <Link href={'/register'} className="underline text-blue-800">Register</Link></span>
                </div>
            </div>
        </div>
    )
}