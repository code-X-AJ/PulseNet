import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Working from "../components/working";
import Services from "../components/Services";
import newDoc from "../../../assets/newDoc2.png";

export default function Home() {
  return (
    <>
    <div className="flex flex-col gap-40 ">
      <div className="bg-sky-100">
        <Navbar />

        <div
          className="bg-no-repeat bg-contain h-screen flex items-center"
          style={{ backgroundImage: `url(${newDoc})` }}
        >
          <div className="ml-20 ">
            <Intro />
          </div>
        </div>
        <div className="bg-sky-50 z">
          <div className="z-10 mx-[6%] ">
            <Form />
          </div>
        </div>
      </div>

      <div className="mx-[6%]">
            <Services/>
          </div>

      <div className="mx-[6%] ">
        <AboutUs />
      </div>

      <div className="mx-[6%]">
        <Working />
      </div>

      <div className="">
        <ContactUs />
      </div>

      <div className="">
        <Footer />
      </div>
    </div>

          


    </>

  );
}
