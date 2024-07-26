import Image from "next/image";

import { ServiceData } from "@/faker/data";

export default function BestTabs() {
  return (
    <div className="py-10 bg-white text-dark  dark:text-white dark:bg-dark ">
      <div className="container">
          {/* banner title  */}
          <div data-aos="fade-up" className="text-center mb-20">
             <h2 className="text-4xl font-bold text-gray-800 dark:text-white"> Choose Best Cab </h2>     
          </div>

          {/* best cab all */}
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 place-items-center">
                {
                  ServiceData.map((item, index) => {
                    return <div key={index} data-aos="fade-up" data-aos-delay={item.aosDelay} className="group rounded-2xl bg-white dark:bg-black hover:bg-primary shadow-xl duration-300 max-w-[300px] relative "> 
                             {/* image section  */}
                                <div className="h-[110px]">
                                  <Image src={item.image} alt="car-photo" className="max-w-[200px] mx-auto block transform -translate-y-20 group-hover:scale-110 group-hover:translate-x-4 duration-300 "/>
                                </div>
                             {/* text content section */}
                             <div className="text-center p-4 space-y-4">
                                  <h1 className="text-xl font-bold">{item.title} </h1>
                                  <p className="text-gray-500 group-hover:text-black duration-300 text-sm line-camb-2"> {item.desc} </p>
                                  <p className="text-primary text-2xl font-bold group-hover:text-black"> $10/km </p>
                                  <button className="bg-black text-white px-4 py-2 rounded-lg"> Read More </button>
                             </div>
                          </div>
                  })
                }
           </div>
      </div>
    </div>
  )
}











