"use client"


import { MenuList } from "@/faker/data";
import Link from "next/link";
import DarkMode from "./DarkMode";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";



export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  // handle show hide menu 
  const handleShowHide = (() => {
    setShowMenu(!showMenu); 
  }); 



  return (
    <nav className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-200 py-1">
      <div className="container">
        <div className="menu-part flex justify-between md:justify-between items-center">
           {/* logo part */}
            <div className="logo">
               <Link href="/" className="text-3xl font-bold "> 
                 <span> Cab</span>
                 <span className="text-primary">Hub </span>
               </Link>
            </div>
            {/* right part */}
            <div className="right-part flex items-center"> 
              <div className="menu hidden md:block ">
                <ul className="flex items-center gap-6 ">
                  {
                    MenuList.map((item, index) => {
                      return  <li key={index} className="py-4"> <Link href={item.link} className={` text-lg font-medium text-black dark:text-white py-2 px-4 rounded-full hover:bg-primary duration-300`}> {item.name} </Link> </li>
                    })
                  }
                  <DarkMode />   

                </ul>
              </div>

              {/* mobile menu part  */}
              <div className="md:hidden flex items-center gap-4">
                <DarkMode /> 
                {
                  showMenu ? <HiMenuAlt1 className="cursor-pointer transition-all " size={30} onClick={handleShowHide} /> :  <HiMenuAlt3 className="cursor-pointer transition-all " size={30} onClick={handleShowHide} /> 
                }
             
              </div>
            </div>    
            
        </div>
      </div>
      {/* responsive menu  */}
      <ResponsiveMenu showMenu={showMenu}/> 
    </nav>
  )
}






