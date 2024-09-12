import image from './images/3rd.png'

export default function working() {
    return (
        <div className="flex flex-col">
        <h1 className="text-5xl font-semibold text-center text-slate-700 mb-9">
          How {"    "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">
            our platform
          </span>
          {"    "} works
        </h1>
            <p className="text-center text-slate-400 text-md w-[60%] m-auto">
                Navigating your healthcare journey with HealNet is seamless. Just follow these steps mentioned
                below to proceed with your selected services. You can also see our FAQ section for more guidance:
            </p>
            <div className='flex justify-center'>
            <img src={image} alt="" width={"80%"}/>
            </div>
        </div>
    )
}
