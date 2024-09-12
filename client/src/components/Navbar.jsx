import { useState } from "react";
import logo from "./images/logo.png";

export default function Navbar() {
  return (
    // <div className="flex items-center flex-col tracking-[0.5]">
    //     <div className="flex">

    //         <div className="absolute left-28 w-1/4">
    //             <img src={logo} alt="" width={"50%"} />
    //         </div>

    //         <div className="flex gap-6 m-2">
    //             <div className="relative w-80 h-9">
    //                 <input
    //                     type="text"
    //                     value={searchText}
    //                     onChange={(e) => setSearchText(e.target.value)}
    //                     placeholder="Search..."
    //                     className="w-full py-1 pl-3 pr-8 border-2 border-gray-400 rounded-full focus:outline-none focus:border-blue-600 focus:shadow-lg shadow-blue-300 transition duration-300 ease-in-out"
    //                 />
    //                 {searchText && (
    //                     <button
    //                         onClick={clearSearch}
    //                         className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black"
    //                     >
    //                         &#x2715;
    //                     </button>
    //                 )}
    //                 <span className={`${searchText ? 'opacity-0 z-[-1]' : ''} absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4`}>
    //                 </span>
    //             </div>

    //             <div className="flex gap-4 h-10">
    //                 <button className="bg-blue-800 hover:bg-blue-900 hover:text-blue-800 hover:border-2 border-blue-800  text-white text-xs rounded-lg font-semibold uppercase cursor-pointer px-[15px] py-[10px] border-2 border-solid border-transparent tracking-[0.5px]">sign in</button>
    //                 <button className="bg-blue-800 hover:bg-blue-900 hover:text-blue-800 hover:border-2 border-blue-800 text-white text-xs rounded-lg font-semibold uppercase cursor-pointer px-[15px] py-[10px] border-2 border-solid border-transparent tracking-[0.5px]">Appointments</button>
    //             </div>

    //         </div>
    //     </div>

    //     <ul className="list-none flex justify-between w-1/4 ">
    //         <li className="cursor-pointer hover:text-blue-800 hover:font-bold">Home</li>
    //         <li className="cursor-pointer hover:text-blue-800 hover:font-bold mx-1 hover:mx-0">Appointments</li>
    //         <li className="cursor-pointer hover:text-blue-800 hover:font-bold ml-1 hover:mx-0">Hospitals</li>
    //     </ul>
    // </div>

    <>
      <div className="flex items-center justify-evenly ">
        <div className="">
            <img src={logo} alt="" width={"30%"} />
        </div>

        <div className="flex items-center justify-">
          <ul className="flex uppercase font-bold text-lg tracking-tight">
            <li className="mx-4"><a href="/">Home</a></li>
            <li className="mx-4"><a href="/appointment">Appointment</a></li>
            <li className="mx-4"><a href="/hospitals">Hospitals</a></li>
            <li className="mx-4"><a href="/contactDesk">ContactUs</a></li>
          </ul>
        </div>
        <a href="/hospital-register" className="bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-2 rounded-xl tracking-tight font-medium text-lg text-white">JOIN US</a>
        
      </div>
    </>
  );
}
