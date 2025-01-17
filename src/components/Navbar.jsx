import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import whiteLogo from "../assets/Abhaya_Logo-white.png";
import MobileNavbar from "./MobileNavbar";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOepn] = useState(false);
  const mainRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
    useEffect(() => {
      // Ensure the container and its children are fully rendered
      if (!mainRef.current) return;
  
      // Initialize Locomotive Scroll
      const locoScroll = new LocomotiveScroll({
        el: mainRef.current, // Reference to the scroll container
        smooth: true,
        lerp: 0.1,
      });
  
      // Cleanup Locomotive Scroll instance on unmount
      return () => {
        if (locoScroll) locoScroll.destroy();
      };
    }, []);

  return (
    <div>
      <header
        className={` fixed top-0 left-0 w-full z-50 overflow-hidden transition-all duration-500 ${
          isScrolled ? "bg-[#ffff]" : ""
        } `}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4  ">
            <div className="flex items-center">
              <img
                src={isScrolled ? logo : whiteLogo}
                alt="Placeholder Logo"
                className="h-18 w-20 4xl:h-36 object-contain 4xl:w-36"
              />
            </div>

            <nav
              className={`hidden md:flex space-x-6 4xl:text-xl ${
                isScrolled ? "text-[#000000]" : "text-[#ffffff]"
              }`}
            >
              <a href="/" className=" hover:text-blue-500">
                Home
              </a>
              <a href="/aboutus" className=" hover:text-blue-500">
                About Us
              </a>
              {/* <a href="/team" className=" hover:text-blue-500">
                          Team
                        </a> */}
              <a href="/treatment" className=" hover:text-blue-500">
                Treatments
              </a>
              <a href="/packages" className=" hover:text-blue-500">
                Packages
              </a>
              <a href="/facilities" className=" hover:text-blue-500">
                Facilities
              </a>
              <a href="/contact" className=" hover:text-blue-500">
                Contact Us
              </a>
              <a href="/login" className=" hover:text-blue-500">
               LogIn
              </a>
              
            </nav>
            <div className={`text-3xl md:hidden ${isScrolled ? "text-[#000]" : "text-[#fff]" }`} onClick={() => setMenuOepn(!menuOpen)}>
              <HiMenuAlt3/>
            </div>

            <div className="hidden md:flex md:flex-col">
              <div className={`flex items-center gap-2 ${isScrolled ? "text-[#000]" : "text-[#fff]"}`}><MdLocalPhone/>+91 90481 21977</div>
              <div className={`flex items-center gap-2 ${isScrolled ? "text-[#000]" : "text-[#fff]"}`}><MdOutlineMailOutline/>abhayaayur@gmail.com</div>
            </div>
          </div>
        </div>
      </header>
      {menuOpen && 
        <div>
          <MobileNavbar menuOpen = {menuOpen} setMenuOepn ={setMenuOepn}/>
        </div>
      }
    </div>
  );
};

export default Navbar;
