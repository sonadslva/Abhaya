import React, { useState, useRef, useEffect } from "react";
import backpain from "../assets/backpain.jpg";
import neckpain from "../assets/neckpain.jpg";
import hairfall from "../assets/hairfall.jpg";
import legpain from "../assets/legpain.jpeg";
import migraine from "../assets/migrain.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Dhara from "../assets/Dharaa.jpg";
import navarakizi from "../assets/navarakizhi.jpg";

import pizhichil from "../assets/pizichill.jpg";
import Shirodhara from "../assets/Shirodhara.jpg";
import kashayadhara from "../assets/kashayadhara.jpg";
import ayurvedicmassage from "../assets/ayurvedicmassage.jpg";
import nasyam from "../assets/nasyam.jpg";
import whiteWave from "../assets/beigewaveorg.png";
import aaa from "../assets/aaa.jpg";
import treat6 from "../assets/treat6.jpg";
import treat7 from "../assets/treat7.png";
import middle from "../assets/middle.jpg";
import leaf from "../assets/plant tree.png";
import b3 from "../assets/b3.jpg";
import small from "../assets/small.png";
import bgorg from "../assets/treatbgorg.jpg";
import bottomSide from "../assets/bggrn.png";
import blackshade from "../assets/black-shade.png";

import ayurBg from "../assets/ayurBg.jpg"
import greenShade from "../assets/black-shade.png"
import vericose from "../assets/vericose.jpg"
import lifestyle from "../assets/lifestyledisease.jpg"
import rhuemetrology from "../assets/rhuemetrology.jpg"
import Gynecology from "../assets/Gynecology.jpg"
import postnatal from "../assets/postnatal.jpg"
import skincare from "../assets/skincare.jpg"
import pcod from "../assets/pcod.jpg"
import Abhyanga from "../assets/Abhyanga.jpg"
import steam from '../assets/abhayatreatment.jpeg';
import podikizhi from '../assets/podikizhi.jpg';
import kativasti1 from '../assets/kativasti1.jpg'
import virajanam from '../assets/virajanam.jpg';
import greevavasti from '../assets/greevavasti.jpeg';
import { image } from "framer-motion/client";
import januvasti from '../assets/januvasti.jpg';
import Udwarthanam from '../assets/Udwarthanam.jpg';
import cauterization from '../assets/cauterization.jpg';
import Hijama from '../assets/hijama.jpg'
import { useInView } from "react-intersection-observer";
import {motion} from "framer-motion"
import LocomotiveScroll from "locomotive-scroll";
import { FaWhatsapp } from "react-icons/fa6";
const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default middle card index
  const [visibleIndex, setVisibleIndex] = useState(0);
  const mainRef = useRef()

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

  const handleNext = () => {
    if (visibleIndex < 6) setVisibleIndex(visibleIndex + 1);
  };

  const handlePrev = () => {
    if (visibleIndex > 0) setVisibleIndex(visibleIndex - 1);
  };
  const services = [
    {
      title: "Abhyanga",
      overview:"Abhyanga is a traditional Ayurvedic massage technique involving the application of warm herbal oils to the body. The oil is massaged in specific strokes to promote relaxation and balance the body's energy",
      image:Abhyanga,
      benefits:"Abhyanga improves blood circulation, nourishes the skin, reduces muscle tension, and boosts immunity. It also helps in detoxification, promotes mental clarity, and alleviates stress and fatigue",
    
    },
    {
      title: "Steam",
      overview:"Ayurvedic Steam Therapy involves the use of steam to open the pores and promote detoxification. The body is exposed to steam infused with herbal extracts to enhance the therapeutic effects and cleanse the body of toxins.",
      benefits:"This therapy improves circulation, detoxifies the body, alleviates pain in muscles and joints, and helps with skin rejuvenation. It also aids in weight loss, reduces stress, and boosts overall health by promoting relaxation and detoxification.",
     image:steam
    },
    {
      title: "Navarakizhi",
      overview:
        "A rejuvenation therapy where a bolus of cooked medicinal rice (Navara) is dipped in herbal decoctions and milk, then massaged over the body.",
      benefits:
        "Navarakizhi is known for its ability to improve skin texture, promote overall skin health, and boost the body’s immunity. It also strengthens muscles, improves circulation, and provides relief from stress and fatigue, leaving the body feeling revitalized and nourished.",
      
      image: navarakizi,
    },
    {
      title: "Pizhichil",
      overview:
        "Known as 'Thailadhara,' Pizhichil involves pouring warm medicated oils continuously over the body while simultaneously performing a gentle massage.",
      benefits:
        "Pizhichil enhances blood circulation, calms the nervous system, and supports overall skin health. It helps reduce stress, relieve joint and muscle pain, and rejuvenates the body, leaving it feeling relaxed and revitalized.",
      
      image: pizhichil,
    },
    {
      title: "Podi Kizhi",
      overview:
        "Podikizhi involves applying warm herbal powders, wrapped in a cloth bundle, to the body while performing a rhythmic massage. The heat and pressure help release tension and promote healing.",
      benefits:
        "Relieves pain, reduces inflammation, improves circulation, relaxes muscles, detoxifies the body, and enhances flexibility.",
      
      image: podikizhi,
    },
    {
      title: "Nasyam",
      overview:
        "A nasal treatment where herbal oils or powders are administered through the nostrils.",
      benefits:
        "Nasyam helps clear sinus blockages, improves respiratory health, and enhances cognitive function. It also relieves headaches, reduces stress, and supports mental clarity, offering a refreshing boost to both body and mind.",
      
      image: nasyam,
    },
    {
      title: "Virajanam",
      overview:
        "Virajanam is an Ayurvedic purification treatment designed to cleanse the body of accumulated toxins (known as ama) after a course of Panchakarma therapy. It involves the use of specific herbal concoctions and methods to induce controlled purgation, cleansing the digestive system and promoting overall detoxification.",
      benefits:
        "Clears sinus blockages, improves respiratory health, and enhances cognitive function.",
      
      image: virajanam,
    },
    
   
    
    {
      title: "Shirodhara",
      overview:
        "A relaxation therapy where a continuous stream of warm herbal oil or milk is poured over the forehead (third eye region).",
      benefits: "Shirodhara effectively calms the mind, helping to reduce mental fatigue, stress, and anxiety. It promotes better sleep by addressing insomnia and improving overall sleep quality. The therapy also balances the nervous system, alleviates emotional disturbances, and boosts mental clarity, leaving you feeling more centered and at peace.",
      uses: "Treats insomnia, depression, and anxiety-related conditions.",
      image: Shirodhara,
    },
    {
      title: " Saravanga Dhara",
      overview:
        "Saravanga Dhara is an Ayurvedic therapy where a continuous stream of warm, medicated oil or herbal decoction is poured over the entire body, while simultaneously massaging the skin. This treatment is designed to soothe the nervous system, improve circulation, and promote relaxation, providing a holistic rejuvenation experience.",
      benefits:
        "Relieves stress and anxiety, improves skin health, enhances blood circulation, alleviates joint and muscle pain, promotes mental clarity, detoxifies the body, and boosts overall vitality.",
   
      image: kashayadhara,
    },
    {
      title: "Thakra Dhara",
      overview:
        "Thakra Dhara is an Ayurvedic therapy where a continuous stream of medicated buttermilk (thakra) is poured over the forehead or the body. The buttermilk is infused with healing herbs to enhance its soothing and cooling effects. This treatment is designed to calm the mind, balance the doshas, and promote relaxation.",
      benefits:
        "Calms the mind, relieves stress and anxiety, improves mental clarity, promotes restful sleep, enhances skin health, soothes headaches and migraines, balances Pitta dosha, and provides overall rejuvenation.",
      image: Dhara,
    },
    {
      title: "Kati Vasti",
      overview:
        "Kati Vasti is an Ayurvedic treatment where warm medicated oil is held in place on the lower back (Kati area) within a dough barrier. The oil is left to soak into the skin for a specified time, providing deep relief to the muscles and tissues in the area.",
      benefits:
        "Relieves lower back pain and stiffness, reduces muscle spasms, improves spinal flexibility, enhances blood circulation, eases sciatica pain, balances Vata dosha, and promotes relaxation and healing of the back.",
     
      image: kativasti1,
    },
    {
      title: "Greeva Vasti",
      overview:
        "Greeva Vasti is an Ayurvedic treatment where warm medicated oil is retained on the neck (Greeva area) within a dough barrier. The oil is kept in place for a set period, allowing it to deeply penetrate and provide relief to the muscles and joints in the neck region.",
      benefits:
        "Relieves neck pain and stiffness, reduces tension and muscle spasms, improves flexibility and mobility of the neck, enhances blood circulation, alleviates headaches and migraines, eases cervical spondylosis, balances Vata dosha, and promotes relaxation and rejuvenation of the neck and spine.",
     
      image: greevavasti,
    },
    {
      title: "Janu Vasti",
      overview:
        "anu Vasti is an Ayurvedic treatment where warm medicated oil is poured and retained on the knee joint (Janu area) within a dough barrier. The oil is left to soak into the knee for a specified time, providing deep nourishment to the joints, muscles, and ligaments.",
      benefits:
        "Relieves knee pain and stiffness, reduces swelling and inflammation, improves knee flexibility and mobility, alleviates muscle spasms, enhances blood circulation, balances Vata dosha, and promotes relaxation and healing of the knee joint.",
     
      image: januvasti,
    },
    {
      title: "Udhwarthanam",
      overview:
        "Udhwarthanam is an Ayurvedic therapy involving a dry herbal powder massage applied to the body in an upward direction. The treatment uses specially selected medicated powders to exfoliate the skin, stimulate circulation, and promote overall health.",
      benefits:
        "Reduces body fat and aids in weight loss, improves skin tone and texture, promotes detoxification, enhances blood circulation, reduces cellulite, tightens and firms the skin, boosts metabolism, balances Kapha dosha, and rejuvenates the body.",
     
      image: Udwarthanam,
    },
    {
      title: "Hijama",
      overview:
        "Hijama, or cupping therapy, is an ancient treatment where suction cups are placed on the skin to create a vacuum effect. This therapy helps improve blood circulation, reduce pain, and promote healing in specific areas of the body.",
      benefits:
        "Improves blood circulation, relieves muscle pain and tension, reduces inflammation, enhances detoxification, stimulates the immune system, alleviates headaches and migraines, aids respiratory issues, and promotes relaxation.",
     
      image: Hijama,
    },
    
    {
      title: "Cauterization",
      overview:
        "Cauterization is an Ayurvedic treatment where a controlled burn or heat is applied to specific areas of the body, typically using medicated herbs or materials. The heat is used to treat various conditions by stimulating blood flow, reducing inflammation, and promoting healing.",
      benefits:
        "Reduces pain and inflammation, improves blood circulation, promotes tissue regeneration, enhances detoxification, treats skin conditions, balances Vata and Kapha doshas, and alleviates muscle spasms.",
     
      image: cauterization,
    },
    
    {
      title: "Vericore ",
      overview:
        "Vericore Needle therapy, commonly known as leech therapy, involves using medicinal leeches to draw blood from the body. The leeches help detoxify the body by removing impurities, promote better circulation, and support the healing of affected areas.",
      benefits:
        "Reduces body fat and aids in weight loss, improves skin tone and texture, promotes detoxification, enhances blood circulation, reduces cellulite, tightens and firms the skin, boosts metabolism, balances Kapha dosha, and rejuvenates the body.",
     
      image: ayurvedicmassage,
    },
    
    
  ];

  const treatmentsLists = [
    {
      title: "Vericos Vain",
      img: vericose,
      sub: "Varicose Veins are swollen, twisted veins that typically appear on the legs due to weakened valves and poor blood flow. They may cause discomfort, heaviness, or aching and are often treated through lifestyle changes, compression therapy, or medical procedures",
    },
    {
      title: "Life Style Diseases",
      img: lifestyle,
      sub: "Lifestyle Diseases are health conditions primarily caused by unhealthy habits, sedentary lifestyles, poor diet, and stress. Common examples include diabetes, hypertension, obesity, and heart disease, often preventable through balanced living and regular physical activity.",
    },
    {
      title: "Back Pain",
      img: backpain,
      sub: "Back Pain is a common condition affecting the spine, muscles, or nerves, often caused by poor posture, heavy lifting, or sedentary lifestyles. It ranges from mild discomfort to chronic pain and can be managed with proper exercise, posture correction, and medical care when necessary",
    },
    {
      title: "Knee Pain",
      img: legpain,
      sub: "Knee Pain is discomfort or inflammation in the knee joint caused by injury, arthritis, overuse, or aging. It can affect mobility and is managed with rest, physical therapy, medications, or surgical interventions, depending on the severity.",
    },
    {
      title: "Rheumatology",
      img: rhuemetrology,
      sub: "Rheumatology is a medical specialty that focuses on diagnosing and treating conditions that cause inflammation in the joints, muscles, bones, and internal organs.",
    },
    {
      title: "Gynecology",
      img: Gynecology,
      sub: "Gynecology is the medical field focusing on the health of the female reproductive system, including the uterus, ovaries, fallopian tubes, and breasts. It addresses issues such as menstruation, fertility, pregnancy, menopause, and disorders like PCOS and endometriosis.",
    },
    {
      title: "Postnatal Care",
      img: postnatal,
      sub: "Postnatal Care refers to the care provided to the mother and newborn immediately after childbirth, typically spanning six weeks. It focuses on the mother's recovery, breastfeeding support, newborn health, and emotional well-being to ensure a smooth transition into parenthood.",
    },
    {
      title: "Skin Diseases",
      img: skincare,
      sub: "Skin Diseases encompass a variety of conditions affecting the skin, ranging from rashes and infections to chronic issues like eczema, psoriasis, and acne. These can result from allergies, infections, genetics, or environmental factors and are treated based on the specific cause and severity.",
    },
    {
      title: "Migraine",
      img: migraine,
      sub: "Migraine is a neurological condition characterized by intense, recurring headaches often accompanied by nausea, sensitivity to light and sound, and visual disturbances. Triggers vary and may include stress, certain foods, or hormonal changes, with treatment focusing on symptom management and prevention.",
    },
    {
      title: "Herbal",
      img: hairfall,
      sub: "Hair Fall refers to excessive hair shedding or thinning, which can be caused by factors like stress, hormonal imbalances, poor nutrition, genetics, or medical conditions. Treatments include lifestyle changes, proper nutrition, medications, or therapies to promote hair growth and reduce loss.",
    },
    
    
    {
      title: "PCOD Diseases",
      img: pcod,
      sub: "PCOD (Polycystic Ovarian Disease) is a hormonal disorder that affects women, leading to irregular periods, cysts in the ovaries, and symptoms like weight gain, acne, and excessive hair growth. It can impact fertility and is managed through medication, lifestyle changes, and hormonal treatments.",
    },
  ];
  const openModal = (item) => {
    setSelectedTreatment(item);
  };

  const closeModal = () => {
    setSelectedTreatment(null);
  };
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
    const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });
    const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true });
    const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true });
    const { ref: ref7, inView: inView7 } = useInView({ triggerOnce: true });
    const { ref: ref8, inView: inView8 } = useInView({ triggerOnce: true });
    const { ref: ref9, inView: inView9 } = useInView({ triggerOnce: true });
    const { ref: ref10, inView: inView10 } = useInView({ triggerOnce: true });
    const { ref: ref11, inView: inView11 } = useInView({ triggerOnce: true });
    const { ref: ref12, inView: inView12 } = useInView({ triggerOnce: true });
    const { ref: ref13, inView: inView13 } = useInView({ triggerOnce: true });
    const { ref: ref14, inView: inView14 } = useInView({ triggerOnce: true });
    const { ref: ref15, inView: inView15 } = useInView({ triggerOnce: true });
    const { ref: ref16, inView: inView16 } = useInView({ triggerOnce: true });
    const { ref: ref17, inView: inView17 } = useInView({ triggerOnce: true });
    const { ref: ref18, inView: inView18 } = useInView({ triggerOnce: true });
    const { ref: ref19, inView: inView19 } = useInView({ triggerOnce: true });
    const { ref: ref20, inView: inView20 } = useInView({ triggerOnce: true });
    const { ref: ref21, inView: inView21 } = useInView({ triggerOnce: true });

    const scrollToElement = () => {
      const element = document.getElementById("treatment-services");
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offset = 100; // Padding offset
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      }
    };
    
  return (
    <div className="flex flex-col overflow-hidden">
        <div className="fixed bottom-10 right-10 z-[999] text-[#fff] bg-[#58F978] p-2 rounded-full text-[50px]">
                <a href="https://wa.me/+919048121977">
                  <FaWhatsapp />
                </a>
              </div>
      {/* banner */}
      <div className="w-full h-full bg-neutral-200">
        <section className="relative flex flex-col justify-center items-center h-screen z-10">
          {/* Background images */}
          <div className="absolute w-full h-full top-0 left-0">
            <img
              src={blackshade}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute w-full h-full -z-10">
            <img src={b3} alt="ayur" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="absolute z-30 flex flex-col justify-center items-center text-center w-full h-full">
            <div className="md:text-[90px] text-[35px] 5xl:text-[120px] font-black text-[#fff] leading-tight banner-title md:mb-5 mb-2">
              <span className="block banner-title px-2">
                Healing Beyond Boundaries
              </span>
            </div>
            <div className="px-2 max-w-[1150px] mx-auto text-sm lg:text-base text-[#fff] md:text-xl mb-10 paraFont">
              <span className="hidden md:flex">
                Our treatments are designed to not just alleviate symptoms, but
                to bring about deep, lasting wellness. Every therapy is a step
                towards your holistic well-being, helping you live life in
                balance and vitality.
              </span>
            </div>
            <div className="flex justify-center items-center gap-2 md:gap-10">
              <div onClick={scrollToElement} className="px-10 py-2 cursor-pointer rounded-3xl font-bold bg-[#ffffff] text-[#8acb13] drop-shadow-md">
                Discover More
              </div>
            </div>
          </div>
          <div className=" absolute bottom-[-10px] z-40 left-0 right-0 w-full">
            <img src={whiteWave} alt="" className="w-full object-cover" />
          </div>
          <div className="absolute z-10 w-full bottom-1 h-auto left-0 right-0 rotate-[181deg] opacity-30">
            <img src={whiteWave} className="w-full h-auto rotate-180" alt="" />
          </div>
        </section>
      </div>

      {/* img */}

      <section
        className="text-center w-full flex flex-col justify-center items-center md:mb-10 relative"
        id="treatment-services"
      >
        <div className=" absolute z-[10] right-0 md:top-[-35px] top-[-10px] w-auto md:h-[350px] h-[150px]">
          <img
            src={leaf}
            alt=""
            className="w-full h-full object-contain leafAnimation"
          />
        </div>
        <div className="max-w-[1400px] mx-auto md:pt-20 pt-20 px-2">
          <div className="md:flex grid -z-10 grid-cols-1 place-items-center px-2 md:px-0 justify-center items-center md:mt-[-140px]">
            <motion.div
            ref={ref1}
            initial={{y:-100, opacity:0,}}
            animate={inView1 ? {y:0,opacity:1,transition:{duration:1}} : {}}
            className="">
              <div className="w-[400px] h-[550px] bg-[#bc5555] relative">
                <img
                  src={treat7}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
            ref={ref2}
            initial={{y:-100, opacity:0,}}
            animate={inView2 ? {y:0,opacity:1,transition:{duration:1}} : {}}
            className="w-[400px] h-[550px] md:mt-28 bg-[#621313] relative">
              <img src={middle} alt="" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
            ref={ref3}
            initial={{y:-100, opacity:0,}}
            animate={inView3 ? {y:0,opacity:1,transition:{duration:1}} : {}}
            className="w-[400px] h-[550px] md:mt-60 bg-[#393838] relative">
              <img src={treat6} alt="" className="w-full h-full object-cover" />
            </motion.div>
          </div>
          <motion.div
          ref={ref4}
          initial={{x:-100, opacity:0,}}
          animate={inView4 ? {x:0,opacity:1,transition:{duration:1}} : {}}
          className=" absolute bottom-0 left-2 w-[250px] h-[250px] hidden md:flex rounded-full overflow-hidden">
            <img src={aaa} alt="" />
          </motion.div>
          <div></div>
        </div>
      </section>
      {/* Treatment */}
      <section
        className="mb-20 relative py-10 bg-[#FFF9D9]"
        id="treatment-treatments"
      >
        <div className=" h-[700px]">
          <div className="md:text-[50px] text-[30px] font-bold text-center mb-3">
            Our Treatments
          </div>
          <div className="mb-10 text-center max-w-[1000px] mx-auto text-sm md:text-base px-1 md:px-0 paraFont">
            At Abhaya Ayurvedic Hospital, we bring the timeless wisdom of
            Ayurveda to life, offering holistic treatments designed to
            rejuvenate your body, mind, and soul. Rooted in ancient traditions
            and guided by modern expertise, our therapies are personalized to
            restore balance and promote lasting wellness. Whether you seek
            relief from chronic ailments, detoxification through Panchakarma, or
            revitalization with herbal remedies, Abhaya is your sanctuary for
            authentic Ayurvedic healing. Embrace the path to health and harmony
            with care you can trust.
          </div>
          {/* Slider */}
          <div className="w-full flex justify-center items-center max-w-[1400px] mx-auto">
            {/* <div className="swiper-button-prev text-3xl hidden md:flex absolute left-0 z-20 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer">
              &#8249;
            </div> */}
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
              modules={[Autoplay]}
              className="w-full"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  centeredSlides: false,
                },
                768: {
                  slidesPerView: 2,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: 3,
                  centeredSlides: true,
                },
              }}
              navigation={{
                // Enable navigation
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              {treatmentsLists.map((item, i) => (
                <SwiperSlide key={i}>
                  <div
                    className={`w-full flex flex-col items-center rounded-tr-[] justify-center transition-all duration-500 relative ${
                      activeIndex === i ? "h-[500px]" : "h-[400px] mt-[50px]"
                    }`}
                  >
                    <img
                      src={blackshade}
                      className="top-0 bottom-0 right-0 left-0 absolute w-full h-full object-cover opacity-100"
                      alt=""
                    />
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                    <div className=" absolute bottom-5 flex flex-col justify-center items-center">
                      <h3 className="text-white font-bold text-lg mt-4 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-white text-sm text-center px-2">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <div className="swiper-button-next text-3xl hidden md:flex absolute right-0 z-20 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer">
              &#8250;
            </div> */}
          </div>
          {selectedTreatment && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-[80%] max-w-[800px] p-6 rounded-lg">
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 text-xl text-gray-600"
                >
                  X
                </button>
                <img
                  src={selectedTreatment.img}
                  alt={selectedTreatment.title}
                  className="w-full h-[400px] object-cover rounded-md"
                />
                <h3 className="text-2xl font-bold mt-4">
                  {selectedTreatment.title}
                </h3>
                <p className="text-lg mt-2">{selectedTreatment.fullDesc}</p>
              </div>
            </div>
          )}
        </div>
      </section>
      {/* services */}
      <section className="w-full relative overflow-hidden mb-20">
        <div className=" absolute top-0 bottom-0 left-0 right-0 -z-10 opacity-60 w-full">
          <img
            src={bottomSide}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="max-w-[1400px] mx-auto">
          <motion.div
          className="md:text-[50px] text-[30px] font-bold text-center mb-2">
            OUR SERVICES
          </motion.div>
        </div>
      </section>

      <section className="w-full mb-10 py-10 px-2 md:px-0">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 md:gap-40 gap-32 max-w-[1400px] mx-auto">
            {services.map((item) => (
              <div className="w-full md:h-[350px] h-[380px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] relative rounded-br-[50px] px-4 py-5">
                <div className=" absolute top-0 bottom-0 left-0 right-0 rounded-br-[50px] overflow-hidden opacity-20">
                  <img
                    src={bgorg}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                {/* <div className=" absolute top-0 bottom-0 left-0 right-0 rounded-br-[50px] overflow-hidden -z-20 opacity-50 bg-[#B4C785]">
                </div> */}
                <img
                  src={small}
                  alt=""
                  className="w-auto absolute h-[80px] md:top-[-30px] top-[-40px] right-[-10px] object-contain"
                />
                <div className="absolute md:top-[-50px] lg:top-[-100px] top-[-80px] left-0 w-[320px] lg:h-[200px] h-[150px] bg-[#15f3ff] rounded-tl-[30px] rounded-br-[30px] overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[#000] text-3xl font-bold flex justify-end mb-2 md:mb-5 text-center pt-14 md:pt-10">
                  {item.title}
                </div>
                <div className="flex md:mb-5 mb-2 text-sm md:text-base text-center md:text-start paraFont">
                  {item.overview}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-bold">Benefits : </div>
                  <div className="paraFont text-sm md:text-base">
                    {item.benefits}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center items-center mx-auto relative py-10">
        <div className=" absolute top-0 bottom-0 left-0 right-0 w-full h-full">
          <img src={ayurBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className=" absolute top-0 bottom-0 left-0 right-0 w-full h-full">
          <img
            src={greenShade}
            alt=""
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="max-w-[1400px] w-full relative z-20 flex flex-col justify-center items-center text-center">
          <div className="text-[#ebe420] mb-3">Ayurveda Treatments</div>
          <div className="text-[30px] leading-tight text-[#fff] font-bold mb-3">
            Get Authentic Ayurvedic
            <span className="block">Treatment Today!</span>
          </div>
          <div className="text-[#fff] max-w-[900px] mx-auto mb-5 text-sm md:text-base px-1 md:px-0 paraFont">
            Discover the essence of Ayurveda, where ancient wisdom meets modern
            care. From personalized therapies to natural remedies, we ensure a
            path to holistic healing and lasting wellness. Your journey to
            better health starts here.
          </div>

          <div className="flex justify-center items-center gap-2 md:gap-10 px-1 md:px-0">
            <div className="md:px-10 px-8 py-3 text-sm md:text-base rounded-lg backdrop-blur-sm border text-[#fff] cursor-pointer">
              <a href="tel:+919048121977">Consultation On Call</a>
            </div>
            <div className="md:px-10 px-8 py-3 text-sm md:text-base rounded-lg backdrop-blur-sm border text-[#fff] cursor-pointer">
              <a href="https://wa.me/919048121977">Book Appoinment</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
