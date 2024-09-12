import { useNavigate } from "react-router-dom";


export default function Intro() {

    const navigate = useNavigate();

    
    return (
        <>  
            <div className="">
            <div className="w-[45%] text-slate-800 ">
                <h1 className="text-5xl mb-8 font-semibold leading-tight tracking-tight">
                    Your <span className="bg-gradient-to-r from-cyan-500 to-cyan-300 bg-clip-text text-transparent">trusted partner </span><br />
                    in digital healthcare.
                </h1>
                <p className="font-medium text-lg">
                    <span>Empowering Your Health at Every Step.</span> Experience personalized medical
                    care from the comfort of your home. Connect with <span>certified doctors,</span> or
                    manage prescriptions, and schedule appointments with ease. Ready to
                    take control of your health? Get Started or Book an Appointment today.
                </p>

                <button onClick={()=> navigate("/hospitals")} className="shadow-md mt-10 text-3xl bg-gradient-to-tl from-blue-400 to-cyan-400 text-white rounded-lg font-semibold cursor-pointer px-4 py-[.85rem] tracking tracking-tighter flex">Book an appointment
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 24 24" className="m-2">
                        <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" fill="#FFFFFF"/>
                    </svg>
                </button>

            </div>
            </div>

            </>
    )
}
