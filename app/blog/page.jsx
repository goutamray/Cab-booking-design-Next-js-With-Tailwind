import Image from "next/image";
import notFound from "@/public/notfound.png"


export default function page() {
  return (
    <div className="py-40 dark:bg-black ">
    <div className="container ">
      <div className="flex flex-col items-center justify-center  ">
         <Image src={notFound} alt="not-found" className="w-[200px] md:w-[300px] lg:w-[350px]"/> 
         <h2 className="text-gray-800 font-bold text-3xl mt-8 dark:text-white"> Page Not Found </h2>
      </div>
    </div>
  </div>
  )
}
