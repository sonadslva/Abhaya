import React from 'react';
import logo from "../assets/logo.png";
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { MdLocalPhone } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import img from '../assets/treatbgorg.jpg';

const Footer = () => {
  return (
    <div className="relative w-full">
      {/* Background Blur */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${img})`,
          // filter: 'blur(8px)',
          backgroundSize: 'cover',
          opacity:0.1,
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Content */}
      <section className="w-full flex flex-col justify-center items-center py-10 bg-transparent text-[20px]">
        <div className="max-w-[1400px] mx-auto px-2 lg:px-0">
          <div className="grid grid-cols-1 place-items-start md:grid-cols-2 lg:flex lg:justify-center gap-10">
            {/* First Div */}
            <div className="w-full flex flex-col justify-center items-center lg:w-[30%]">
              <div className="w-full flex">
                <div className="w-full h-[100px] mb-5">
                  <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="mb-5 paraFont">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores reprehenderit officia odit consectetur dolorem earum, dolore porro in asperiores unde.
              </div>
              <div className="paraFont w-full flex mb-2 font-black">Customer Care Number</div>
              <div className="paraFont flex items-center gap-2 font-bold w-full mb-3">
                <span>
                  <MdLocalPhone />
                </span>
                +91 90481 21977
              </div>
              <div className="paraFont flex w-full justify-start items-center gap-3">
                <div className="text-xl font-bold">
                  <IoLogoInstagram />
                </div>
                <div className="text-xl font-bold">
                  <CiFacebook />
                </div>
                <div className="text-xl font-bold">
                  <FiYoutube />
                </div>
              </div>
            </div>
            {/* Second Div */}
            <div>
              <div className="text-3xl mb-6 paraFont font-black">Treatments</div>
              <ul className="flex flex-col gap-2 text-sm paraFont">
                <li>
                  <a href="/treatment">Back Pain</a>
                </li>
                <li>
                  <a href="/treatment">For Neck Pain</a>
                </li>
                <li>
                  <a href="/treatment">Child Illness</a>
                </li>
                <li>
                  <a href="/treatment">Leg Pain</a>
                </li>
                <li>
                  <a href="/treatment">Frozen Shoulder</a>
                </li>
                <li>
                  <a href="/treatment">Hairfall and Dandruff</a>
                </li>
                <li>
                  <a href="/treatment">Migraine</a>
                </li>
                <li>
                  <a href="/treatment">Women Illness</a>
                </li>
              </ul>
            </div>
            {/* Third Div */}
            <div>
              <div className="text-3xl mb-6 paraFont font-black">Services</div>
              <ul className="flex flex-col gap-2 text-sm paraFont">
                <li>
                  <a href="/treatment">Dhara</a>
                </li>
                <li>
                  <a href="/treatment">Navarakizhi</a>
                </li>
                <li>
                  <a href="/treatment">Elakizhi</a>
                </li>
                <li>
                  <a href="/treatment">Pizhichil</a>
                </li>
                <li>
                  <a href="/treatment">Shirodhara</a>
                </li>
                <li>
                  <a href="/treatment">Kashaya Dhara</a>
                </li>
                <li>
                  <a href="/treatment">Ayurvedic Massage</a>
                </li>
                <li>
                  <a href="/treatment">Nasyam</a>
                </li>
              </ul>
            </div>
            {/* Fourth Div */}
            <div className="lg:w-[30%]">
              <div className="text-3xl mb-6 paraFont font-black">Reach Us</div>
              <div className="text-lg mb-2 paraFont font-bold">Address</div>
              <a href="https://maps.app.goo.gl/ZcDuByGtzD1bt3AQ8">
                <div className="flex gap-2 mb-3 paraFont">
                  <span className="mt-1 text-xl">
                    <MdLocationPin />
                  </span>
                  Mandad, Muttil, Wayanad, Kerala
                </div>
              </a>
              <div className="mb-2 text-lg paraFont font-bold">Email</div>
              <a href="mailto:abhayaayur@gmail.com">
                <div className="flex gap-2 mb-3 paraFont">
                  <span className="mt-1 text-xl">
                    <MdOutlineEmail />
                  </span>
                  abhayaayur@gmail.com
                </div>
              </a>
              <div className="mb-2 text-lg paraFont font-bold">Phone</div>
              <a href="tel:+919048121977">
                <div className="flex gap-2 paraFont">
                  <span className="mt-1 text-xl">
                    <MdLocalPhone />
                  </span>
                  +91 9048121977
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
