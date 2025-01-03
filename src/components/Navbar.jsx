import React,{useState,useEffect} from 'react'
import logo from "../assets/logo.png";
import whiteLogo from "../assets/Abhaya_Logo-white.png"
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
  }, []);
  return (
    <div>
        <header className= {` fixed top-0 left-0 w-full z-50 overflow-hidden transition-all duration-500 ${isScrolled ? "bg-[#ffff]" :""
        } `}>
                  <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4  ">
                      <div className="flex items-center">
                        <img src={isScrolled ? logo : whiteLogo } alt="Placeholder Logo" className="h-18 w-20" />
                      </div>
        
                      <nav className={`hidden md:flex space-x-6 ${isScrolled ? "text-[#000000]" : "text-[#ffffff]"}`}>
                        <a href="/" className=" hover:text-blue-500">
                          Home
                        </a>
                        <a href="/aboutus" className=" hover:text-blue-500">
                          About Us
                        </a>
                        <a href="/team" className=" hover:text-blue-500">
                          Team
                        </a>
                        <a href="/treatment" className=" hover:text-blue-500">
                          Treatments
                        </a>
                        <a href="/packages" className=" hover:text-blue-500">
                          Packages
                        </a>
                        <a
                          href="/facilities"
                          className=" hover:text-blue-500"
                        >
                          Facilities
                        </a>
                        <a href="/contact" className=" hover:text-blue-500">
                          Contact Us
                        </a>
                      </nav>
                    </div>
                  </div>
                </header>
    </div>
  )
}

export default Navbar