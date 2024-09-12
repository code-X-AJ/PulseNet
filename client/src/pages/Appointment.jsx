import ApppointForm from "../components/ApppointForm";
import Navbar from '../components/Navbar'
import Image from '../components/images/contact.png'

export default function Appointment() {
  return (
    <div>
        <Navbar/>
        <div className="w-full mt-12 h-[28rem]">
            <img src={Image} alt="" width={"100%"} className="absolute z-[-10]"/>
            <div className="p-32">
            <h1 className="text-4xl font-bold text-white">Book an appointment</h1>
            <h2 className="text-2xl font-semibold text-white">Book an appointment today for an easy and hassle-free visit</h2>
            </div>
        </div>
        <ApppointForm/>
    </div>
  )
}
