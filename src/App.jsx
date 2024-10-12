import React from "react";
import bgVideo from './assets/earth-bg.mp4';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Banner from "./components/Banner";
import Rapidscat from "./components/Rapidscat";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
   <>
   <div>
   <div className="h-[700px] relative">
    <video autoPlay loop muted className="fixed right-0 top-0 w-full h-[700[px]] object-cover z[-1]">
      <source src={bgVideo} type="video/mp4"/>
    </video>
    <Navbar />
   <Hero />
    </div>
    <Service />
    <Banner />
    <Rapidscat />
    <Footer/>
    </div>
    
  </>
  );
}

export default App
