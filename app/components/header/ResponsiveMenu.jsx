
import { FaUserCircle } from "react-icons/fa";
import { MenuList } from "@/faker/data";
import Link from "next/link";

export default function ResponsiveMenu({ showMenu }) {
  return (
    <div className={` ${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-dark  dark:text-white px-8 pb-6 pt-16 text-black duration-300 md:hidden rounded-r-xl shadow-md `}>
      <div className="flex flex-col">

        {/* top part */}
        <div className="flex items-center gap-4 justify-start ">
           <span> <FaUserCircle className="text-5xl"/> </span>
           <div>
            <h1 className="text-md text-gray-700 font-medium dark:text-gray-200 "> Hello User </h1>
            <h2 className="text-sm text-slate-500 dark:text-gray-300"> Premium User </h2>
           </div>
        </div>
        {/* menu part */}

        <nav className="menu mt-12">
          <ul>
              {
                    MenuList.map((item, index) => {
                      return  <li key={index} className="py-4"> <Link href={item.link} className={` text-xl font-medium text-black dark:text-white py-2 `}> {item.name} </Link> </li>
                    })
                  }
          </ul>
        </nav>
      </div>
      {/* bottom footer section */}
      <div>
        <h2> <a href="#"> Made By Goutam Ray <span className="text-red-500">  ❤ </span></a></h2>
      </div>
    </div>
  )
}

