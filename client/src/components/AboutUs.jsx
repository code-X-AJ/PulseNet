// import doctor from "./images/second-transformed.png";

export default function AboutUs() {
    return (
        <div className="w-10/12 m-auto rounded-3xl border-2 border-solid border-sky-500 tracking-[0.5] shadow-lg my-10">
            <h1 className="text-3xl font-semibold text-center m-8">pulseNet's story: get to know us</h1>
            <div className="flex justify-between m-20">
                <div className="rounded-3xl border-2 border-solid border-sky-500 w-[30rem]">
                    {/* <img src={doctor} alt="" width={"100%"}/> */}
                </div>
                <div className="w-[32rem]">
                    <p>
                        HealNet is more than just an online medical service; it's a movement
                        towards accessible, efficient, and compassionate healthcare for all.
                        Founded by a team of visionary doctors, healthcare professionals, and
                        technology experts, we are driven by the mission to deliver
                        exceptional medical care directly to you, no matter where you are. Our
                        platform is built on the pillars of trust, innovation, and patient-
                        centricity, ensuring that every interaction is personalized and every
                        treatment plan is tailored to your unique needs. With a network of
                        licensed practitioners from diverse medical fields, we guarantee
                        comprehensive care that's just a click away.
                    </p>
                    <button className="bg-blue-800 hover:bg-blue-900 hover:text-gray-300 hover:border-2 border-blue-800  text-white text-md rounded-lg font-semibold cursor-pointer p-3 border-2 border-solid border-transparent tracking-[0.5px] w-56 h-12 mt-6">Learn more about us</button>
                </div>
            </div>
        </div>
    )
}
