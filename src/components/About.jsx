import React, { useState } from "react";
import ayur1 from '../assets/ayur2.jpg'
import { FaHospital } from "react-icons/fa";
import about01 from "../assets/about01.jpg";
import ayurveda3 from '../assets/ayurveda3.png'
import aboutbg from '../assets/slide1.jpg';
import aboutimg1 from '../assets/ayur1.jpg'
import aboutimg2 from '../assets/aboutimg2.jpg'
import aboutimg3 from '../assets/aboutimg3.jpg'
import { TbBackground } from "react-icons/tb";
import greenWave from "../assets/greenwave.png"

const Team = () => {
  const [activeDoctor, setActiveDoctor] = useState(null);

  const toggleContent = (doctorIndex) => {
    setActiveDoctor(activeDoctor === doctorIndex ? null : doctorIndex);
  };

  return (
    <div className="flex flex-col ">
      <section>
        <div className="w-full flex object-cover ">
          <img
            src={aboutbg}
            alt="ayur"
            className="w-full h-[600px] flex object-cover"
          />
        </div>
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-[100px] font-bold ml-[500px] p-4 rounded-lg">
          The Journey So Far
          </h1>
        </div> */}
      </section>
      <section className="w-full max-w-[1400px] mx-auto p-20">
        <div className="md:flex md:justify-center md:items-center">
          <div className="w-full md:w-[50%] h-[450px] bg-[#c3995f] py-10 px-6">
            <div className="text-[35px] leading-tight mb-5 text-[#fff]">
              Abhaya Ayurvedic Hospital{" "}
              <span className="block">
                {" "}
                Healing Naturally, Caring Compassionately
              </span>
            </div>
            <div className="mb-5 text-[#eaeaea]">
              <b>Abhaya Ayurveda Hospital</b> is a holistic approach that
              integrates the mind, body, and spirit in all aspects of patient
              care. We believe that every individual has his or her own
              constitution, and it is our's to help everyone achieve their
              maximum health potential.
            </div>
            <div className="mb-5 text-[#f0f0f0]">
              Our hospital excels in exceptional patient care, advanced
              technology, and a compassionate medical team. With expert doctors,
              modern facilities, and personalized treatments, we prioritize
              safety, comfort, and satisfaction. Trust us for quality healthcare
              and a seamless healing experience.
            </div>
          </div>
          <div className=" w-full md:w-[50%] h-[550px] bg-[#7b2323] boxShadow">
            <img
              src={ayur1}
              alt="ayur1"
              className="h-full w-full flex object-cover"
            />
          </div>
        </div>
      </section>

        <div className="w-full h-auto">
            <img src={greenWave} alt="" className="w-full h-full object-cover" />
          </div>
        
      <section className="w-full bg-[#92C83E] py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 w-full max-w-[1400px] mx-auto">
        <div className="w-full grid grid-cols-1 place-items-center gap-2 md:grid-cols-2">
            <div className="w-full h-[200px] bg-[#92C83E] rounded-tr-[50px] rounded-bl-[50px] bg-no-repeat overflow-hidden flex object-cover"> 
              <img src={aboutimg1} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-full h-[200px] bg-[#92C83E] rounded-tl-[50px] rounded-br-[50px] bg-no-repeat overflow-hidden"><img src={aboutimg2} className="w-full h-full object-cover" alt="" /></div>
            <div className="w-full h-[200px] bg-[#92C83E] rounded-tl-[50px] rounded-br-[50px] bg-no-repeat overflow-hidden"> 
            <img src={aboutimg2} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-full h-[200px] bg-[#92C83E] rounded-tr-[50px] rounded-bl-[50px] bg-no-repeat overflow-hidden">
            <img src={aboutimg1} className="w-full h-full object-cover" alt="" />
            </div>
          </div>
          <div>
            <div className="mb-5 text-[50px] leading-tight font-bold text-[#fff]">Lorem ipsum dolor sit</div>
            <div className="text-[#f0efef]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sequi aperiam vel nisi, fugiat doloremque libero est sit. Rem tempore repudiandae officiis possimus laudantium, unde saepe dolor doloremque perspiciatis labo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus repellendus sunt eos ullam eligendi, minima facere porro cum. Nesciunt esse, eligendi doloribus eveniet provident reprehenderit modi magnam mollitia eaque dolorum? <span className="block mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos voluptas laboriosam soluta sequi alias blanditiis cumque culpa perspiciatis, dolorum error minus doloremque consequatur quaerat quas asperiores vitae nulla! Possimus?</span></div>
          </div>
          
        </div>
      </section>
      <div className="w-full h-auto">
            <img src={greenWave} alt="" className="w-full h-full object-cover rotate-180 mt-[-10px]" />
          </div>

          

      <section className=" py-5 mb-10 max-w-[1400px] mx-auto">
        <div className=" mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="md:w-[50%] text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-[#92C83E] mb-4">
                The Science of Ayurveda
              </h2>
              <p className="paraFont text-lg">
                Ayurveda is an ancient system of natural healing that originated
                in India over 5,000 years ago. It focuses on balancing the
                body's energies and promoting overall well-being through diet,
                herbal remedies, yoga, and meditation.
              </p>
              <p className="paraFont text-lg">
                Ayurveda believes in the harmony between mind, body, and spirit
                and offers personalized treatments based on one's dosha.
              </p>
            </div>

            <div className="md:w-[50%]">
              <img
                src={ayurveda3}
                alt="Ayurveda"
                className="w-full h-auto object-cover "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
