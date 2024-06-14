import play from "@/public/play.png"
import app from "@/public/app.png"
import carBook from "@/public/carbooking.png"
import Image from "next/image"

export default function AppStore() { 
  return (
    <div className="bg-[#f5f5f5] dark:bg-black dark:text-white ">
        <div className="container">
           {/* header section  */}
            <div className="space-y-2 uppercase text-center py-14">
                 <h2 data-aos="fade-up" className="text-primary text-2xl font-semibold  "> DONWLOAD </h2>
                 <h1 data-aos="fade-up" data-aos-delay="300" className="text-black text-2xl sm:text-3xl font-bold dark:text-white"> BEST CAB SERVICE </h1>
             </div>
             {/* banner bottom part */}
             <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center ">
                <div className="space-y-8 max-w-[400px] mx-auto">
                  <h1 className="text-2xl font-bold "> Download the Cab voucher app free! Get Exciting New Offers </h1>
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ad animi consequuntur aperiam unde! </p>
                  <div className="flex justify-center items-center sm:justify-start">
                    <a href="#">
                      <Image src={play} alt="play" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/> 
                    </a>
                    <a href="#">
                      <Image src={app} alt="play" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/> 
                    </a>

                  </div>
                </div>

                {/* right section  */}
                <div>
                  <Image  src={carBook} alt="carbook" className="max-w-[350px] md:max-w-[250px] md:p-5 lg:max-w-[400px]"/>
                </div>
             </div>

       </div>
    </div>
  )
}
