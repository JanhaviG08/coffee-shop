import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Components/Home.jsx";
import Services from "./Components/Services.jsx";
import Banner from "./Components/Banner.jsx";
import AppStore from "./Components/AppStore.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });

  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Home />
      <Services />
      <Banner/>
      <AppStore />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;