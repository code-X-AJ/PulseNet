import arrow from "./svgs/arrow.svg";
import user from "./svgs/user.svg";
import email from "./svgs/email.svg";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-semibold text-center text-slate-700">
        Reach Our {"    "}
        <span className="bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">
          Help Desk
        </span>
        {"    "} for support
      </h1>
      <p className="text-center text-slate-400 text-xl w-[60%] mx-auto my-10">
        Questions? Need assistance? Our dedicated support <br />
        team is here to help you every step of the way:
      </p>
      <div className="flex gap-11 justify-center">

        <div className="border-2 border-solid border-sky-400 shadow-md outline-none rounded-xl flex items-center justify-start gap-3 px-11 py-3 pl-4">
          <img src={user} className="w-[25px]" alt="" />
          <p className="capitalize text-slate-400">enter your first name</p>
        </div>
        <div className="border-2 border-solid border-sky-400 shadow-md outline-none rounded-xl flex items-center justify-start gap-3 px-7 py-3 pl-4">
          <img src={email} className="w-[25px]" alt="" />
          <p className="capitalize text-slate-400">enter your email address</p>
        </div>

          <button  onClick={()=> navigate("/contactDesk")}  className="bg-sky-500 hover:bg-sky-600 capitalize text-white text-2xl rounded-lg font-medium cursor-pointer px-8 py-3 flex items-center justify-center gap-2 ">
            Contact us
            <img src={arrow} className="w-[30px] fill-white" alt="" />
          </button>
      </div>
    </div>
  );
}
