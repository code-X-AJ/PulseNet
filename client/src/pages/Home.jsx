import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Working from "../components/working";


export default function Home() {
  return (
    <div>
        <Navbar/>
        <Intro/>
        <Form/>
        <AboutUs/>
        <Working/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}
