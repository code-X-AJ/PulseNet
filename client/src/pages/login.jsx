import { useState } from "react"


export default function login() {
    // const [UserData, setUserData] = useState(
    //     [
    //         {
    //             "Email": "",
    //             "password": "",
    //         },
    //     ]
    // )
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        // 👇️ Toggle isActive state on click
        setIsActive(current => !current);
    };

    return (
        <div className="bg-gradient-to-r from-slate-100 to-indigo-200 flex items-center justify-center flex-col h-screen">
            <div className="w-[768px] min-h-[480px] bg-white relative overflow-hidden max-w-full rounded-3xl shadow-lg ">
                <div className={`${isActive ? 'right-0' : 'opacity-0'} absolute top-0 h-full transition-all duration-[0.6s] ease-in-out w-6/12`}>
                    <form className="bg-white flex items-center justify-center flex-col h-full py-0 px-[40px]">
                        <h1>Create Account</h1>
                        <div className="my-[20px] mx-0">
                            <a href="#" className="icon inline-flex justify-center items-center w-10 h-10 border-2 border-solid border-slate-200 mx-1 rounded-[20%]"><i className="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" className="icon inline-flex justify-center items-center w-10 h-10 border-2 border-solid border-slate-200 mx-1 rounded-[20%]"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="icon inline-flex justify-center items-center w-10 h-10 border-2 border-solid border-slate-200 mx-1 rounded-[20%]"><i className="fa-brands fa-github"></i></a>
                            <a href="#" className="icon inline-flex justify-center items-center w-10 h-10 border-2 border-solid border-slate-200 mx-1 rounded-[20%]"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <span className="text-xs">or use your email for registeration</span>
                        <input className="text-xs rounded-lg w-full bg-slate-100 border-none my-[8px] mx-0 py-[10px] px-[15px] outline-0" type="text" placeholder="Name" />
                        <input className="text-xs rounded-lg w-full bg-slate-100 border-none my-[8px] mx-0 py-[10px] px-[15px] outline-0" type="email" placeholder="Email" />
                        <input className="text-xs rounded-lg w-full bg-slate-100 border-none my-[8px] mx-0 py-[10px] px-[15px] outline-0" type="password" placeholder="Password" />
                        <button className=" bg-purple-800 text-white text-xs rounded-lg font-semibold uppercase mt-2 cursor-pointer px-[45px] py-[10px] border-2 border-solid border-transparent tracking-[0.5px]">Sign Up</button>
                    </form>
                </div>
                <div className={`${isActive ? 'opacity-0' : 'left-0'} absolute top-0 h-full transition-all duration-[0.6s] ease-in-out w-6/12 z-[2]`}>
                    <form className="bg-white flex items-center justify-center flex-col h-full py-0 px-[40px]">
                        <h1>Sign In</h1>
                        <div className="my-[20px] mx-0">
                            <a href="#" className="icon inline-flex justify-center items-center w-10 h-10 border-2 border-solid border-slate-200 mx-1 rounded-[20%]"><i className="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" className="icon inline-flex justify-center items-center w-10 h-10 border-2 border-solid border-slate-200 mx-1 rounded-[20%]"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="icon inline-flex justify-center items-center w-10 h-10 border-2 border-solid border-slate-200 mx-1 rounded-[20%]"><i className="fa-brands fa-github"></i></a>
                            <a href="#" className="icon inline-flex justify-center items-center w-10 h-10 border-2 border-solid border-slate-200 mx-1 rounded-[20%]"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <span className="text-xs">or use your email password</span>
                        <input className="text-xs rounded-lg w-full bg-slate-100 border-none my-[8px] mx-0 py-[10px] px-[15px] outline-0" type="email" placeholder="Email"/>
                        <input className="text-xs rounded-lg w-full bg-slate-100 border-none my-[8px] mx-0 py-[10px] px-[15px] outline-0" type="password" placeholder="Password"/>
                        <a href="#" className="text-xs no-underline mt-[15px] mb-[10px] mx-0">Forget Your Password?</a>
                        <button className=" bg-purple-800 text-white text-xs rounded-lg font-semibold uppercase mt-2 cursor-pointer px-[45px] py-[10px] border-2 border-solid border-transparent tracking-[0.5px]">Sign In</button>
                    </form>
                </div>
                <div className={`absolute top-0 w-6/12 h-full overflow-hidden  transition-all duration-[0.8s] ease-in-out  z-[1000] ${isActive ? 'left-2/4 rounded-r-[6rem] translate-x-[-100%]' : 'rounded-l-[6rem] translate-x-full'}`}>
                    <div className="bg-purple-800 h-full text-white relative left-[-100%] w-[200%] translate-x-0 transition-all duration-[0.6s] ease-in-out bg-gradient-to-r from-indigo-500 to-violet-700">
                        <div className={`${isActive ? '' : 'opacity-0'}absolute w-6/12 h-full flex items-center justify-center flex-col text-center top-0 px-[30px] transition-all duration-[0.6s] ease-in-out right-0`}>
                            <h1>Welcome Back!</h1>
                            <p className="text-sm leading-5 tracking-[0.3px] mx-0 my-[20px]">Enter your personal details to use all of site features</p>
                            <button className=" bg-purple-800 text-white text-xs rounded-lg font-semibold uppercase mt-2 cursor-pointer px-[45px] py-[10px] border-2 border-solid tracking-[0.5px] border-white " id="login" onClick={handleClick}>Sign In</button>
                        </div>
                        <div className={`${isActive ? 'opacity-0' : ''}absolute w-6/12 h-full flex items-center justify-center flex-col text-center top-0 px-[30px] transition-all duration-[0.6s] ease-in-out right-0`}>
                            <h1>Hello, Friend!</h1>
                            <p className="text-sm leading-5 tracking-[0.3px] mx-0 my-[20px]">Register with your personal details to use all of site features</p>
                            <button className= "bg-purple-800 text-white text-xs rounded-lg font-semibold uppercase mt-2 cursor-pointer px-[45px] py-[10px] border-2 border-solid tracking-[0.5px] border-white " onClick={handleClick} id="register">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
