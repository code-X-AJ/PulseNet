import email from "./svgs/email.svg";
import phone from "./svgs/phone.svg";
import calender from "./svgs/calender.svg";
import tick from "./svgs/tick.svg";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  
  return (
    <div className="rounded-3xl border-2 border-solid border-sky-500 shadow-lg">
      <div className="mx-10 my-9 flex flex-col gap-9">
        <h1 className="text-4xl font-medium text-sky-700 ">
          Easily book an appointment in just 3 easy steps.
        </h1>

        <div className="flex justify-between text-gray-600 items-end">
          <div className="flex flex-col justify-end font-medium text-lg">
            <div className="flex items-center gap-2 mb-3 ml-2">
              <img src={email} className="w-[30px]" alt="" />
              <label htmlFor="email address">Email Address</label>
            </div>
            <input
              placeholder="Enter Your Email Address"
              className="border-2 border-solid px-9 py-3 rounded-xl outline-none font-normal pointer-events-none"
            />
          </div>
          <div className="flex flex-col justify-end font-medium text-lg">
            <div className="flex items-center gap-2 mb-3 ml-2">
              <img src={phone} className="w-[30px]" alt="" />
              <label htmlFor="Phone">Phone</label>
            </div>
            <input
              placeholder="Enter Your Contact Number"
              className="border-2 border-solid px-9 py-3 w-full rounded-xl outline-none font-normal pointer-events-none"
            />
          </div>
          <div className="flex flex-col justify-end font-medium text-lg">
            <div className="flex items-center gap-2 mb-3 ml-2">
              <img src={calender} className="w-[30px]" alt="" />
              <label htmlFor="">Date of Appointment</label>
            </div>
            <input
              placeholder="Select Date of Appointment"
              className="border-2 border-solid px-9 py-3 w-full rounded-xl outline-none font-normal pointer-events-none"
            />
          </div>
          <div className="">
            <button onClick={()=>navigate("/hospitals")} className="bg-sky-500 hover:bg-sky-600 capitalize text-white text-2xl rounded-lg font-semibold cursor-pointer px-9 py-3 flex items-center justify-center gap-2 ">
              Book now
                <img src={tick} className="w-[30px]" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
