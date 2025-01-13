import React from 'react'
import logo from "../assets/logo.png";
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { MdLocalPhone } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <section className='w-full flex flex-col justify-center items-center py-10'>
        <div className='max-w-[1400px] mx-auto px-2 lg:px-0'>
          <div className='grid grid-cols-1 place-items-start md:grid-cols-2 lg:flex lg:justify-center gap-10'>
            {/* First Div */}
            <div className='w-full flex flex-col justify-center items-center lg:w-[30%]'>
              <div className='w-full flex'>
                <div className='w-full h-[100px] mb-5'>
                  <img src={logo} alt="" className='w-full h-full object-contain'/>
                </div>
              </div>
              <div className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores reprehenderit officia odit consectetur dolorem earum, dolore porro in asperiores unde.</div>
              <div className='w-full flex font-bold mb-2'>Customer Care Number</div>
              <div className='flex items-center gap-2 font-bold w-full mb-3'><span><MdLocalPhone/></span>+91 90481 21977</div>
              <div className='flex w-full justify-start items-center gap-3'>
                <div className='text-xl font-bold'><IoLogoInstagram/></div>
                <div className='text-xl font-bold'><CiFacebook/></div>
                <div className='text-xl font-bold'><FiYoutube/></div>
              </div>
            </div>
            {/* Second Div */}
            <div className=''>
              <div className='text-3xl mb-6'>Treatments</div>
              <ul className='flex flex-col gap-2 text-sm'>
                <li><a href="/treatment">Ayurvedic Treatment For Back Pain</a></li>
                <li><a href="/treatment">Ayurvedic Treatment For Neck Pain</a></li>
                <li><a href="/treatment">Ayurvedic Treatment For Child Illness</a></li>
                <li><a href="/treatment">Ayurvedic Treatment For Leg Pain</a></li>
                <li><a href="/treatment">Ayurvedic Treatment For Frozen Sholder</a></li>
                <li><a href="/treatment">Ayurvedic Treatment For Hairfall and Dandruff</a></li>
                <li><a href="/treatment">Ayurvedic Treatment For Migraine</a></li>
                <li><a href="/treatment">Ayurvedic Treatment For Women Illness</a></li>
              </ul>
            </div>
            {/* Third Div */}
            <div className=''>
              <div className='text-3xl mb-6'>Services</div>
              <ul className='flex flex-col gap-2 text-sm'>
                <li><a href="/treatment">Dhara</a></li>
                <li><a href="/treatment">Navarakizhi</a></li>
                <li><a href="/treatment">Elakizhi</a></li>
                <li><a href="/treatment">Pizhichil</a></li>
                <li><a href="/treatment">Shirodhara</a></li>
                <li><a href="/treatment">Kashaya Dhara</a></li>
                <li><a href="/treatment">yurvedic Massage</a></li>
                <li><a href="/treatment">Nasyam</a></li>
              </ul>
            </div>
            {/* Fourth Div */}
            <div className='lg:w-[30%]'>
              <div className='text-3xl mb-6'>Reach Us</div>
              <div className='text-lg font-semibold mb-2'>Address</div>
              <a href="https://maps.app.goo.gl/ZcDuByGtzD1bt3AQ8"><div className='flex gap-2 mb-3'><span className='mt-1 text-xl'>
            <MdLocationPin/></span> Mandad, Muttil , Wayanad ,Kerala</div></a>
              <div className='mb-2 text-lg font-semibold'>Email</div>
              <a href="mailto:abhayaayur@gmail.com"><div className='flex gap-2 mb-3'><span className='mt-1 text-xl'><MdOutlineEmail/></span>abhayaayur@gmail.com</div></a>
              <div className='mb-2 text-lg font-semibold'>Phone</div>
              <a href="tel:+919048121977"><div className='flex gap-2'><span className='mt-1 text-xl'><MdLocalPhone/></span>+91 9048121977</div></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer