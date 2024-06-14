
import { FaFacebook ,
         FaInstagram, 
         FaGoogle,
         FaTwitter, 
         FaAppStoreIos, 
         FaAndroid} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa";
import { IoMail } from "react-icons/io5"; 
import { IoMdRocket } from "react-icons/io"; 


export default function Footer() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <div className="bg-primary">
       <div className="container py-2 md:py-0 ">
              {/* footer top part */}
              <div className=" text-center flex items-center flex-col py-10">
                <h1 className="text-xl lg:text-2xl font-bold"> WE ARE READY TO TAKE YOUR CALL 24 HOURS, 7 DAYS! </h1>
                <h3 className="text-xl lg:text-5xl font-bold text-gray-800 mt-3"> +123 4567 8900 </h3>
              </div>
          </div>
        </div>

        {/* bottom part  */}
         <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 py-12 ">

            {/* first col section */}
            <div className="space-y-6">
              <h1 className="text-2xl py-3 uppercase font-bold border-b-8 border-primary "> ABOUT CAB HUB </h1>
              <p className="pr-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio nihil debitis est provident necessitatibus iusto praesentium commodi dicta dolore eveniet?</p>

              {/* social link  */}
              <div>
                <span className="flex gap-4 items-center text-2xl text-primary "> <FaFacebook className=""/> <FaInstagram /> <FaGoogle /> <FaTwitter />
                </span>
              </div>
            </div>

            {/* second col section */}
            <div className="space-y-6">
              <h1 className="text-2xl py-3 uppercase font-bold border-b-8 border-primary "> DOWNLOAD </h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente corrupti aliquam corporis </p>

             {/* social link  */}
             <div>
                <div className="flex gap-4 items-center ">
                    <h2 className="text-xl font-semibold text-primary"> Android user </h2>
                   <p> <FaAndroid className="text-2xl"/> </p>
                </div>
             </div>
             <div>       
                <div  className="flex gap-4 items-center">
                    <h2  className="text-xl font-semibold text-primary"> IOS user </h2>
                   <p> <FaAppStoreIos className="text-2xl"/> </p>
                </div>
             </div>
            </div>

            {/* third  col section */}
            <div className="space-y-6">
              <h1 className="text-2xl py-3 uppercase font-bold border-b-8 border-primary "> CONTACT </h1>
             {/* contact link  */}
             <div className="space-y-4"> 
                  <div className="flex gap-4 items-center">
                      <span> <CiLocationOn />  </span>
                      <p> 123 Street, New York, USA </p>
                  </div>
                  <div className="flex gap-4 items-center" >
                      <span> <FaPhoneVolume /> </span>
                      <p> +123 4567 8900  </p>
                  </div>
                  <div className="flex gap-4 items-center" >
                      <span><IoMail />  </span>
                      <p> nGqo6@example.com </p>
                  </div>
                  <div className="flex gap-4 items-center" >
                      <span> <IoMdRocket /></span>
                      <p>www.cabhub-tcj.com</p>
                  </div>
             </div>
            </div>
         </div>

         {/* copyright part  */}
         <div className="container text-center ">
             <p className="text-sm py-4"> Copyright © 2024. All rights reserved By <a className="font-md text-blue-600 font-medium" href="#"> Goutam Ray </a></p>
         </div>

       </div>
 
  )
}




