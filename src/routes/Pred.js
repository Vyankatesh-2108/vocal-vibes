import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../assets/night.jpg"
import Footer from "../components/Footer"
import Predict from "../components/Predict/Predict";

function Pred() {
  return (
    <>
    <Navbar/>
    <Hero 
            cName="hero-mid"
            heroImg={AboutImg}
            title="Welcome to Vocal Vibes"
           
            btnClass="hide"
        />
    <Predict/>
     <Footer />
    </>
  )
}

export default Pred
