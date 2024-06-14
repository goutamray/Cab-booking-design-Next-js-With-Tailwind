
import { FaRegStar } from "react-icons/fa";
import banner from "../../../public/baner.jpg"
import BannerCard from "./BannerCard";


const bgStyleBanner = {
  backgroundImage : `url(${banner.src}) `,
  backgroundSize : "cover",
  backgroundPosition : "center" ,
  backgroundRepeat : "no-repeat",
  height : "680px",
  width : "100vw"
};



export default function About() {
  return ( 
    <div style={bgStyleBanner}>
      <div className="text-white bg-black/80 min-h-[590px] flex items-center py-10 ">
         <div className="container">
             {/* header secion  */}
             <div className="space-y-2 uppercase text-center py-14">
               <h2 data-aos="fade-up" data-aos-delay="300" className="text-primary text-2xl font-semibold  "> WE DO BEST </h2>
               <h1 data-aos="fade-up" data-aos-delay="400" className="text-white text-2xl sm:text-3xl font-bold "> THAN YOU WISH </h1>
             </div>
             {/* card section */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-15 ">
                 <div className="space-y-8">
                     <BannerCard title={"FAST BOOKING"} desc={"lorem ipsum dolor sit amet consectetur adipisicing elit."} icon={ <FaRegStar />}/> 
                     <BannerCard title={"FAST BOOKING"} desc={"lorem ipsum dolor sit amet consectetur adipisicing elit."} icon={ <FaRegStar />}/> 
                 </div>

                 <div className="space-y-8">
                     <BannerCard title={"FAST BOOKING"} desc={"lorem ipsum dolor sit amet consectetur adipisicing elit."} icon={ <FaRegStar />}/> 
                     <BannerCard title={"FAST BOOKING"} desc={"lorem ipsum dolor sit amet consectetur adipisicing elit."} icon={ <FaRegStar />}/> 
                 </div>
             </div>
          </div>
      </div>
    </div>
  )
}



