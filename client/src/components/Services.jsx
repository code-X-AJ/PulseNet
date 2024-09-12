import React from "react";
import central from "./svgs/central.svg";
import calender from "./svgs/calender.svg";
import medicine from "./svgs/medicine.svg";
import inventory from "./svgs/inventory.svg";
import emergency from "./svgs/emergency.svg";

function Services() {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center text-slate-700 mb-9">
        Top {"    "}
        <span className="bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">
          services
        </span>
        {"    "} we offer
      </h1>
      <p className="text-center text-slate-400 text-lg w-[60%] m-auto">
        Navigating your healthcare journey with HealNet is seamless. Just follow
        these steps mentioned below to proceed with your selected services. You
        can also see our FAQ section for more guidance:
      </p>

      <div className="flex gap-10 justify-evenly mt-16">
        <div className="w-[35%] flex flex-col justify-center gap-2 border-2 border-solid border-sky-500 shadow-md rounded-2xl px-16 pb-9 pt-7 pl-7 ">
          <img src={central} className="w-[55px]" alt="" />
          <h2 className="text-xl font-semibold text-sky-700">
            Centralized Platform
          </h2>
          <p className="text-slate-600">
            The platform serves as a centralized hub, enabling hospitals to
            create and manage their profiles, records, and data seamlessly. It
            also provides civilians with easy access to a wide range of
            hospitals, all through a single, unified site.
          </p>
        </div>
        <div className="w-[30%] flex flex-col justify-center gap-2 border-2 border-solid border-sky-500 shadow-md rounded-2xl px-16 pb-9 pt-7 pl-7 ">
          <img src={calender} className="w-[45px]" alt="" />
          <h2 className="text-xl font-semibold text-sky-700">
            Booking Appointments
          </h2>
          <p className="text-slate-600">
            The platform offers a streamlined appointment booking system,
            allowing users to schedule consultations with multiple hospitals
            effortlessly from one convenient location.
          </p>
        </div>
      </div>

      <div className="flex gap-10 justify-center my-14">
        <div className="w-[25%] flex flex-col justify-center gap-2 border-2 border-solid border-sky-500 shadow-md rounded-2xl px-16 pb-9 pt-7 pl-7 ">
          <img src={medicine} className="w-[35px]" alt="" />
          <h2 className="text-xl font-semibold text-sky-700">
            Medicine Records
          </h2>
          <p className="text-slate-600">
            Easily manage and access medicine records across multiple hospitals
            through a unified platform, ensuring efficient tracking, seamless
            updates, and better coordination of patient care.
          </p>
        </div>
        <div className="w-[25%] flex flex-col justify-center gap-2 border-2 border-solid border-sky-500 shadow-md rounded-2xl px-16 pb-9 pt-7 pl-7 ">
          <img src={inventory} className="w-[45px]" alt="" />
          <h2 className="text-xl font-semibold text-sky-700">
            Inventory Management
          </h2>
          <p className="text-slate-600">
            Hospitals can efficiently manage inventory records, track stock
            levels, and streamline restocking, ensuring better resource
            allocation and operational efficiency.
          </p>
        </div>
        <div className="w-[25%] flex flex-col justify-center gap-2 border-2 border-solid border-sky-500 shadow-md rounded-2xl px-16 pb-9 pt-7 pl-7 ">
          <img src={emergency} className="w-[45px]" alt="" />
          <h2 className="text-xl font-semibold text-sky-700">
            Emergency Requests
          </h2>
          <p className="text-slate-600">
          In emergencies, hospitals can quickly request equipment, medicine, or blood through this platform. The system prioritizes these requests, provides real-time tracking, and ensures timely delivery of critical resources.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
