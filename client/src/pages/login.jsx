// import { useState } from "react"


export default function login() {
    // const [UserData, setUserData] = useState(
    //     [
    //         {
    //             "Email": "",
    //             "password": "",
    //         },
    //     ]
    // )

    return (
        <div className="bg-gradient-to-r from-slate-100 to-indigo-200 flex items-center justify-center flex-col h-screen">
            <div className="w-[768px] min-h-[480px] bg-white relative overflow-hidden max-w-full rounded-3xl shadow-lg ">
                {/* <div className="absolute top-0 h-full transition duration-[0.6s] ease-in-out left-0 w-6/12 opacity-0 z-[1]">
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
                </div> */}
                <div className="absolute top-0 h-full transition duration-[0.6s] ease-in-out left-0 w-6/12 z-[2]">
                    <form className="bg-white flex items-center justify-center flex-col h-full py-0 px-[40px]">
                        <h1>Sign In</h1>
                        <div className="my-[20px] mx-0">
                            <a href="#" className="icon inline-flex justify-center items-center w-10 h-10 border-2 border-solid border-slate-200 mx-1 rounded-[20%]"><i className="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" className="icon inline-flex justify-center items-center w-10 h-10 border-2 border-solid border-slate-200 mx-1 rounded-[20%]"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="icon inline-flex justify-center items-center w-10 h-10 border-2 border-solid border-slate-200 mx-1 rounded-[20%]"><i className="fa-brands fa-github"></i></a>
                            <a href="#" className="icon inline-flex justify-center items-center w-10 h-10 border-2 border-solid border-slate-200 mx-1 rounded-[20%]"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <span className="text-xs">or use your email password</span>
                        <input className="text-xs rounded-lg w-full bg-slate-100 border-none my-[8px] mx-0 py-[10px] px-[15px] outline-0" type="email" placeholder="Email" /*onChange={e=> setUserData()}*//>
                        <input className="text-xs rounded-lg w-full bg-slate-100 border-none my-[8px] mx-0 py-[10px] px-[15px] outline-0" type="password" placeholder="Password" /*onChange={e=> setUserData()}*//>
                        <a href="#" className="text-xs no-underline mt-[15px] mb-[10px] mx-0">Forget Your Password?</a>
                        <button className=" bg-purple-800 text-white text-xs rounded-lg font-semibold uppercase mt-2 cursor-pointer px-[45px] py-[10px] border-2 border-solid border-transparent tracking-[0.5px]">Sign In</button>
                    </form>
                </div>
                <div className="absolute top-0 w-6/12 h-full overflow-hidden left-2/4 transition-all duration-[0.6s] ease-in-out rounded-l-[6rem] z-[1000]">
                    <div className="bg-purple-800 h-full text-white relative left-[-100%] w-[200%] translate-x-0 transition-all duration-[0.6s] ease-in-out bg-gradient-to-r from-indigo-500 to-violet-700">
                        {/* <div className="absolute w-6/12 h-full flex items-center justify-center flex-col text-center top-0 px-[30px] translate-x-0 transition-all duration-[0.6s] ease-in-out">
                            <h1>Welcome Back!</h1>
                            <p className="text-sm leading-5 tracking-[0.3px] mx-0 my-[20px]">Enter your personal details to use all of site features</p>
                            <button className="hidden bg-purple-800 text-white text-xs rounded-lg font-semibold uppercase mt-2 cursor-pointer px-[45px] py-[10px] border-2 border-solid border-transparent tracking-[0.5px] bg-transparent border-white" id="login">Sign In</button>
                        </div> */}
                        <div className="absolute w-6/12 h-full flex items-center justify-center flex-col text-center top-0 px-[30px] translate-x-0 transition-all duration-[0.6s] ease-in-out right-0">
                            <h1>Hello, Friend!</h1>
                            <p className="text-sm leading-5 tracking-[0.3px] mx-0 my-[20px]">Register with your personal details to use all of site features</p>
                            {/* <button className="hidden bg-purple-800 text-white text-xs rounded-lg font-semibold uppercase mt-2 cursor-pointer px-[45px] py-[10px] border-2 border-solid border-transparent tracking-[0.5px] bg-transparent border-white" id="register">Sign Up</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
