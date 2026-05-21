import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen p-5">
      <div className="md:grid grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl text-blue-500 font-bold">Miniso</h1>
          <h2 className="text-2xl text-blue-400 mt-5">Capture Your Ideas Anytime, Anywhere</h2>
          <p className="text-justify">Organize notes, tasks, and thoughts effortlessly with our smart and secure note-taking app. Whether you're managing daily tasks, meeting notes, study materials, or creative ideas, our note app helps you stay organized and productive.</p>
          <div className="my-5"><Link href={'/login'} className=" bg-blue-700 px-3 py-2 rounded text-white">Let's Start</Link></div>
        </div>
        <div>
          <Image width={500} height={500} src={"/landing.png"} alt="landing image"/>
        </div>
      </div>
    </div>
  );
}
