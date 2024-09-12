import doctor from "../../../assets/doc9.jpg";
// import doctor from "./images/second.png";

export default function AboutUs() {
  return (
    <div className="rounded-3xl border-2 border-solid border-sky-500 shadow-lg ">
      <div className="mx-10 my-16">
        <h1 className="text-4xl font-semibold text-center capitalize">
          {" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">
            pulseNet's story:{" "}
          </span>
          get to know us
        </h1>

        <div className="flex justify-center gap-14 my-9 ">
          <div className="w-[35%]">
            <img
              src={doctor}
              alt=""
              className="object-cover w-full h-full rounded-3xl  border-2 border-solid border-sky-500"
            />
          </div>
          <div className="w-[40rem] text-lg">
            <p>
              HealNet is more than just an online medical service; it's a
              movement towards accessible, efficient, and compassionate
              healthcare for all. Founded by a team of visionary doctors,
              healthcare professionals, and technology experts, we are driven by
              the mission to deliver exceptional medical care directly to you,
              no matter where you are. Our platform is built on the pillars of
              trust, innovation, and patient- centricity, ensuring that every
              interaction is personalized and every treatment plan is tailored
              to your unique needs. With a network of licensed practitioners
              from diverse medical fields, we guarantee comprehensive care
              that's just a click away.
            </p>
            <button className="mt-3 bg-sky-500 hover:bg-sky-600 capitalize text-white text-2xl rounded-lg font-semibold cursor-pointer px-5 py-3 ">
              Learn more about us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
