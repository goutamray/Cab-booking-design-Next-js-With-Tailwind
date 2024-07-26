import Image from "next/image";

// images 
import background1 from "../../../public/city.jpg";
import car from "../../../public/car.png";

const bgStyle = {
  backgroundImage : `url(${background1.src}) `,
  backgroundSize : "cover",
  backgroundPosition : "center" ,
  backgroundRepeat : "no-repeat",
  height : "520px",
  width : "100vw"
};


export default function Banner() {
  return (
    <div style={bgStyle}>
      <div className=" dark:bg-black/60 bg-white/80 backdrop-blur-sm dark:text-white duration-300 h-[520px] flex">
        <div className="container grid grid-cols-1 place-items-center ">
           {/* text content section */}
              <div className="text-center space-y-5 py-14">
                <p data-aos="fade-up" className="text-primary text-3xl font-semibold uppercase "> BOOK CAB NOW </p>
                <h2  data-aos="fade-up" data-aos-delay="600" className="text-4xl md:text-6xl font-semibold "> +91 9876 54321 </h2>
                <p data-aos="fade-up" data-aos-delay="1000" className="tracking-[8px] text-base xl:text-xl font-semibold "> www.yourdomain.com </p>
              </div>
           {/* image section */}
              <div data-aos="zoom-in-right" data-aos-duration="1000">
                  <Image src={car} alt="cab-photo" className="max-h-[460px] sm:scale-125 relative translate-y-10 sm:translate-y-0"/>
              </div>
        </div>
      </div>
    </div>
  )
}














