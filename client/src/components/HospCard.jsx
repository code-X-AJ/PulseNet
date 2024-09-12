// import axios from "axios";
// import React,{ useState, useEffect } from "react";
// import hosp from "../../../assets/hosp1.jpeg";
// import { allHospRoute } from "../utils/APIRoutes";

// function HospCard() {
//   const [hospitals, setHospitals] = useState([]);
//   const [isLoaded, setIsLoaded] = useState(false);

  
//   useEffect(() => {
//       async function fetchHospitals() {
//         const { data } = await axios.get(allHospRoute);
//         if (data.status) {
//           console.log("incoming reportss issssss......", data.hospProfiles);
  
//           setHospitals(data.hospProfiles);
//           setIsLoaded(true);
//         }
//       }
//       fetchHospitals();
//     }, []);

  
//   return (

//     <div className="shadow-2xl w-[75%] rounded-xl ">

//         {isLoaded ?( hospitals.map((hosp, id)=>(
        
//           <div>
//           <div className="">
//             <img src={hosp} className="w-full rounded-xl" alt="" />
//           </div>
//           <div className="flex flex-col gap-2 mx-9 my-5">
//             <h2 className="text-2xl font-medium">{hosp.hospitalName}</h2>
//             <h3 className="capitalize text-lg">
//               <span className="font-medium">Type: </span> {hosp.hospitalType}
//             </h3>
//             <h3 className="capitalize text-lg">
//               <span className="font-medium">Address: </span>{hosp.address}
//             </h3>
//             <h3 className="capitalize text-lg">
//               <span className="font-medium">Pincode: </span> {hosp.pincode}
//             </h3>
//             <h3 className="capitalize text-lg">
//               <span className="font-medium">Operating Hours:</span>{hosp.operatingHours}
//             </h3>
//             <a href="/appointment" className="bg-sky-500 hover:bg-sky-600 capitalize text-white text-xl rounded-lg font-semibold cursor-pointer px-6 py-2 flex items-center justify-center gap-2 ">
//               Make Appointment
//             </a>
//             <a href="/login" className="border-2 border-sky-600 hover:bg-sky-600 hover:text-white hover:ease-in capitalize text-sky-600 text-xl rounded-lg font-semibold cursor-pointer px-6 py-2 flex items-center justify-center gap-2 ">
//               Login
//             </a>
//           </div>
//           </div>
//         ))}

//     </div>
//   );
// }

// export default HospCard;

import axios from "axios";
import React, { useState, useEffect } from "react";
import hospPlaceholder from "../../../assets/hosp1.jpeg"; // Fallback or placeholder image
import { allHospRoute } from "../utils/APIRoutes";

function HospCard() {
  const [hospitals, setHospitals] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchHospitals() {
      const { data } = await axios.get(allHospRoute);
      if (data.status) {
        console.log("Incoming reports are:", data.hospProfiles);
        setHospitals(data.hospProfiles);
        setIsLoaded(true);
      }
    }
    fetchHospitals();
  }, []);

  return (
    <div className=" grid grid-cols-3 justify-items-center">
      {isLoaded ? (
        hospitals.map((hospital, id) => (
          <div key={id} className="mb-8 shadow-2xl w-[75%] rounded-xl ">
            <div>
              <img
                src={hospital.imageUrl || hospPlaceholder} // Use the image from the hospital data or fallback
                className="w-full rounded-xl"
                alt={hospital.hospitalName || "Hospital"}
              />
            </div>
            <div className="flex flex-col gap-2 mx-9 my-5">
              <h2 className="text-2xl font-medium">{hospital.hospitalName}</h2>
              <h3 className="capitalize text-lg">
                <span className="font-medium">Type: </span>
                {hospital.hospitalType}
              </h3>
              <h3 className="capitalize text-lg">
                <span className="font-medium">Address: </span>
                {hospital.address}
              </h3>
              <h3 className="capitalize text-lg">
                <span className="font-medium">Pincode: </span>
                {hospital.pincode}
              </h3>
              <h3 className="capitalize text-lg">
                <span className="font-medium">Operating Hours:</span>
                {hospital.operatingHours}
              </h3>
              <a
                href="/appointment"
                className="bg-sky-500 hover:bg-sky-600 capitalize text-white text-xl rounded-lg font-semibold cursor-pointer px-6 py-2 flex items-center justify-center gap-2"
              >
                Make Appointment
              </a>
              <a
                href="/login"
                className="border-2 border-sky-600 hover:bg-sky-600 hover:text-white hover:ease-in capitalize text-sky-600 text-xl rounded-lg font-semibold cursor-pointer px-6 py-2 flex items-center justify-center gap-2"
              >
                Login
              </a>
            </div>
          </div>
        ))
      ) : (
        <p>Loading hospitals...</p>
      )}
    </div>
  );
}

export default HospCard;
