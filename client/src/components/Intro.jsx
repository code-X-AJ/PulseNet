import doctor from "./images/first.png";

export default function Intro() {
    return (
        <div className="flex h-[50em]">
            <div className="tracking-[0.5] mt-32 ml-32 w-[34rem]">
                <h1 className="text-5xl my-8 font-bold">
                    Your <span>trusted partner </span>
                    in digital healthcare.
                </h1>
                <p className="font-semibold">
                    <span>Empowering Your Health at Every Step.</span> Experience personalized medical
                    care from the comfort of your home. Connect with <span>certified doctors,</span> or
                    manage prescriptions, and schedule appointments with ease. Ready to
                    take control of your health? Get Started or Book an Appointment today.
                </p>

                <button className="shadow-md hover:shadow-xl mt-4 text-3xl bg-gradient-to-tl from-blue-400 to-cyan-400 text-white rounded-lg font-semibold cursor-pointer p-4 tracking-[0.5px] flex">Book an appointment
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 24 24" className="text-white m-2">
                        <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" fill="#FFFFFF"/>
                    </svg>
                </button>

            </div>
            <div className="z-[-1] absolute right-0 mt-[-100px]">
                <img src={doctor} alt="" width={"5000px"} />
            </div>
        </div>
    )
}
