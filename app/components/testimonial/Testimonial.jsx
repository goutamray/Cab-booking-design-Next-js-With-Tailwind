
import { TestimonialData } from "@/faker/data";
import testimonial from "@/public/testimonial.png"
import Image from "next/image";
import Slider from "react-slick";

const bgStyle = {
  backgroundImage : `url(${testimonial.src}) `,
  backgroundSize : "auto",
  backgroundPosition : "center" ,
  backgroundRepeat : "repeat",
};


export default function Testimonial() {
  // slider config
    var settings = {
    dots: true,
    arrows : false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay : true,
    autoplaySpeed : 2000,
    cssEase : "linear", 
    pauseOnHover : false,
    pauseOnFocus : true,
     responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div style={bgStyle}> 
      <div className="bg-white/80 py-14 dark:bg-dark/80 dark:text-white ">
          <div className="container">
            {/* banner section  */}
            <div className="text-center mb-10">
              <h1 data-aos="fade-up" className="text-4xl font-bold "> Testimonials </h1>
            </div>
            {/* testimonial slider  */}
            <div className="zoom-in">
                <Slider {...settings}> 
                  {
                    TestimonialData.map((item, index) => {
                      return <div key={index} className="my-6">
                            <div className="flex flex-col gap-6 bg-white shadow-lg px-8 py-6 mx-4 rounded-3xl dark:bg-dark relative">
                              <div className="flex flex-col items-center gap-4 ">                   
                               <p className="text-xs "> {item.desc}</p>
                              </div>
                              <div className="flex gap-4 items-center">
                                <Image src={item.image} alt="photo" className="h-16 w-16 rounded-full "/>
                                <div className="space-y-2">
                                  <h2 className="text-xl font-semibold text-black/60 dark:text-primary "> {item.name} </h2>
                                  <p className="text-md font-medium text-black/45 dark:text-white "> {item.title}</p>
                                </div>
                              </div>
                            </div>
                      </div>
                    })
                  }
                </Slider>
            </div>
          </div>
      </div> 
    </div>
  )
}













