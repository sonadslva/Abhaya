import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../assets/logo.png";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineWhatsapp } from "react-icons/md";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";
import { motion } from "framer-motion"

const MobileNavbar = ({menuOpen,setMenuOepn}) => {
  return (
    <motion.div
    initial={{x:"100%", opacity:0}}
    animate={{x:0, opacity:1,transition:{duration:0.5}}}
    className="fixed top-0 left-0 bottom-0 right-0 z-[999] bg-[#000000b0] backdrop-blur-sm">
      <motion.div
      initial={{x:"100%", opacity:0}}
      animate={{x:0, opacity:1,transition:{duration:0.5,delay:0.6}}}
      className="fixed top-0 right-0 w-[80%] bg-[#ffffffcf] bottom-0 backdrop-blur-sm rounded-l-3xl drop-shadow-lg flex flex-col justify-center items-center">
        <div className=" absolute top-5 right-5 text-xl">
          <IoCloseOutline onClick={() => setMenuOepn(!menuOpen)}/>
        </div>
        <motion.div
        initial={{x:'100%', opacity:0}}
        animate={{x:0, opacity:1,transition:{duration:0.5,delay:1}}}
        className="w-auto h-[80px] mb-10 flex justify-center items-center">
          <img src={logo} alt="" className="w-full h-full object-contain"/>
        </motion.div>
        <div className="mb-5">
          <ul className="flex flex-col gap-3 items-center">
            <motion.a
            initial={{x:'100%',opacity:0}}
            animate={{x:0,opacity:1,transition:{duration:0.5, delay:1.2}}}
            href="/" onClick={() => setMenuOepn(!menuOpen)}><li>Home</li></motion.a>
            <motion.a
            initial={{x:'100%',opacity:0}}
            animate={{x:0,opacity:1,transition:{duration:0.5, delay:1.3}}}
            href="/aboutus" onClick={() => setMenuOepn(!menuOpen)}><li>About</li></motion.a>
            <motion.a
            initial={{x:'100%',opacity:0}}
            animate={{x:0,opacity:1,transition:{duration:0.5, delay:1.4}}}
             href="/treatment" onClick={() => setMenuOepn(!menuOpen)}><li>Treatments</li></motion.a>
            <motion.a
            initial={{x:'100%',opacity:0}}
            animate={{x:0,opacity:1,transition:{duration:0.5, delay:1.5}}}
            href="/packages" onClick={() => setMenuOepn(!menuOpen)}><li>Packages</li></motion.a>
            <motion.a
            initial={{x:'100%',opacity:0}}
            animate={{x:0,opacity:1,transition:{duration:0.5, delay:1.6}}}
            href="/facilities" onClick={() => setMenuOepn(!menuOpen)}><li>Facilities</li></motion.a>
            <motion.a
            initial={{x:'100%',opacity:0}}
            animate={{x:0,opacity:1,transition:{duration:0.5, delay:1.7}}}
            href="/contact" onClick={() => setMenuOepn(!menuOpen)}><li>Contact Us</li></motion.a>
          </ul>
        </div>
        <motion.div
        initial={{x:'100%',opacity:0}}
        animate={{x:0,opacity:1,transition:{duration:0.5, delay:1.8}}}
        className="flex justify-center items-center">
          <button className="px-10 py-2 rounded-lg bg-[#fff] drop-shadow-sm font-semibold text-[#8acb13]">Login</button>
        </motion.div>
        <div className="absolute bottom-5">
          <ul className="flex gap-2 justify-center items-center">
            <motion.li
            initial={{x:'100%',opacity:0}}
            animate={{x:0,opacity:1,transition:{duration:0.5, delay:1.9}}}
            ><BsInstagram/></motion.li>
            <motion.li
            initial={{x:'100%',opacity:0}}
            animate={{x:0,opacity:1,transition:{duration:0.5, delay:2}}}
            className="text-lg"><MdOutlineWhatsapp/></motion.li>
            <motion.li
            initial={{x:'100%',opacity:0}}
            animate={{x:0,opacity:1,transition:{duration:0.5, delay:2.1}}}
            className="text-lg"><RiFacebookCircleLine/></motion.li>
            <motion.li
            initial={{x:'100%',opacity:0}}
            animate={{x:0,opacity:1,transition:{duration:0.5, delay:2.2}}}
            className="text-xl"><AiOutlineYoutube/></motion.li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileNavbar;
