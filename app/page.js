"use client"

import { useEffect } from "react";

// animation 
import AOS from "aos";
import "aos/dist/aos.css";

// slider css 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 


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
   <div>
   

   </div>
  );
}










