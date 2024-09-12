import { useState } from "react";
import image from "./images/search-interface-symbol.png"; // Assuming the image is in the same directory
import logo from './images/logo.png'

export default function Navbar() {
    const [searchText, setSearchText] = useState('');

    const clearSearch = () => {
        setSearchText('');
    };

    return (
        <div className="flex items-center flex-col tracking-[0.5]">
            <div className="flex">

                <div className="absolute left-28 w-1/4">
                    <img src={logo} alt="" width={"40%"} />
                </div>
                <div className="flex gap-6 m-2">
                    <div className="relative w-80 h-9">
                        <input
                            type="text"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            placeholder="Search..."
                            className="w-full py-1 pl-3 pr-8 border-2 border-gray-400 rounded-full focus:outline-none focus:border-blue-600 focus:shadow-lg shadow-blue-300 transition duration-300 ease-in-out"
                        />
                        {searchText && (
                            <button
                                onClick={clearSearch}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black"
                            >
                                &#x2715;
                            </button>
                        )}
                        <span className={`${searchText ? 'opacity-0 z-[-1]' : ''} absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4`}>
                            <img src={image} alt="search-icon" className="w-full h-full" />
                        </span>
                    </div>

                    <div className="flex gap-4 h-10">
                        <button className="bg-blue-800 hover:bg-blue-900 hover:text-blue-800 hover:border-2 border-blue-800  text-white text-xs rounded-lg font-semibold uppercase cursor-pointer px-[15px] py-[10px] border-2 border-solid border-transparent tracking-[0.5px]">sign in</button>
                        <button className="bg-blue-800 hover:bg-blue-900 hover:text-blue-800 hover:border-2 border-blue-800 text-white text-xs rounded-lg font-semibold uppercase cursor-pointer px-[15px] py-[10px] border-2 border-solid border-transparent tracking-[0.5px]">Appointments</button>
                    </div>

                </div>
            </div>

            <ul className="list-none flex justify-between w-1/4 ">
                <li className="cursor-pointer hover:text-blue-800 hover:font-bold">Home</li>
                <li className="cursor-pointer hover:text-blue-800 hover:font-bold mx-1 hover:mx-0">Appointments</li>
                <li className="cursor-pointer hover:text-blue-800 hover:font-bold ml-1 hover:mx-0">Hospitals</li>
            </ul>
        </div>
    );
}
