"use client"

import { useEffect } from "react";

// animation 
import AOS from "aos";
import "aos/dist/aos.css";

// slider css 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import BestTabs from "./components/BestTab/BestTabs";
import About from "./components/about/About";
import AppStore from "./components/appStore/AppStore";
import Testimonial from "./components/testimonial/Testimonial";


export default function Home() {

   useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

    AOS.refresh(); 

   }, []); 


  return (
   <div className="dark:bg-dark dark:text-white">
      <Banner /> 
      <Contact /> 
      <BestTabs />
      <About />
      <AppStore />
      <Testimonial /> 

   </div>
  );
}










