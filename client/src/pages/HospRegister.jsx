import React from "react";
import Navbar from "../components/Navbar";
import image from "../../../assets/hosp2.png";
import HospRegisterForm from "../components/HospRegisterForm";
import { Slide, ToastContainer, toast } from "react-toastify";

function HospRegister() {
  return (
      <div>
        <div
          className="bg-no-repeat h-[900px] bg-cover"
          style={{ backgroundImage: `url(${image})` }}
        >
        <Navbar />
          <h1 className="text-6xl font-bold text-cyan-200 ml-24 my-10">
            Hospital Registration
          </h1>
          <div className="mx-24">

            <HospRegisterForm />
          </div>
        </div>
        <ToastContainer />

      </div>
  );
}

export default HospRegister;
