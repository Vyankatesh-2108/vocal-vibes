import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../assets/night.jpg"
import Footer from "../components/Footer"
import Services from "../components/Services";

function Service () {
    return(
        <>
        <Navbar/>
        <Hero 
                cName="hero-mid"
                heroImg={AboutImg}
                title="Community Service"
               
                btnClass="hide"
            />
        <Services/>
         <Footer />
        </>
    )
}

export default Service;