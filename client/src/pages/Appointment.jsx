import ApppointForm from "../components/ApppointForm";
import Navbar from "../components/Navbar";
import image from "../../../assets/doc10.png";

export default function Appointment() {
  return (
    <div>
      <Navbar />
      <div
        className="bg-no-repeat bg-contain h-[510px] bg-top flex flex-col justify-center "
        style={{ backgroundImage: `url(${image})` }}
      >

        <h1 className="text-6xl font-bold text-white ml-24">Book an appointment</h1>
        <h2 className="text-3xl font-semibold text-slate-300 ml-24">
          Book and track your appointments seamlessly through our platform
        </h2>
      </div>
      <ApppointForm />
    </div>
  );
}
