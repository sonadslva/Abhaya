import React,{ useState, useRef, useEffect } from "react";
import pback from "../assets/pback.jpg";
import blackshade from "../assets/black-shade.png"
import leaf3 from "../assets/leaf3.png"
import b2 from "../assets/b2.jpg"
import whiteWave from "../assets/beigewaveorg.png";
import p1 from "../assets/p1.jpg"
import p2 from "../assets/p2.jpg"
import treat from "../assets/treat5.jpg"
import treat1 from "../assets/pack1.jpg"
import treat2 from "../assets/treat1.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import ayurBg from "../assets/ayurBg.jpg"
import greenShade from "../assets/black-shade.png"
import { useInView } from "react-intersection-observer";
import {motion} from "framer-motion"
import LocomotiveScroll from "locomotive-scroll";
import skin from '../assets/skincare.jpeg'
import hijama from '../assets/hijamapack.jpg'
import postnatal2 from '../assets/postnatal2.jpg'
import vericose from "../assets/vericose.jpg"

const Packages = () => {

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

  const packageLists = [
    {
      content: "AYURVEDIC SKIN PACKAGE - HOLISTIC CARE FOR RADIANT SKIN",
      image: skin,
      sub: "SKINCARE PACKAGE ",
      subDesc:
        "Revitalize your skin with our Ayurvedic Skin Package, crafted to enhance your skin's natural glow. This treatment uses traditional herbs and oils to target common skin issues like acne, dryness, and aging. Herbal Ingredients, Personalized Treatment, Holistic Healing, Chemical-Free",
      price: "",
    },
    {
      content: "POSTNATAL CARE – SUPPORTING MOMS AFTER CHILDBIRTH",
      image: postnatal2,
      sub: "POSTNATAL CARE PACKAGE",
      subDesc:
        "Postnatal care supports new mothers after childbirth, helping them recover physically and emotionally. It addresses common concerns like fatigue, hormonal changes, and body healing, promoting overall health. Physical Recovery, Emotional Support, Nutritional Guidance, Ayurvedic Remedies ",
      price: "",
    },
    {
      content: "HIJAMA THERAPY PACKAGE – COMPLETE WELLNESS THROUGH CUPPING",
      image: hijama,
      sub: "HIJAMA THERAPY PACKAGE",
      subDesc:
        "Our Hijama Therapy Package offers a holistic approach to detoxification, pain relief, and rejuvenation using the ancient practice of cupping. Tailored to individual needs, this package ensures a safe and effective healing experience for overall well-being. Comprehensive Detoxification,Targeted  Pain Relief,Energy Rejuvenation, Personalized Care",
      price: "",
    },
    {
      content: "VARICOSE VEINS TREATMENT – RELIEVE DISCOMFORT AND RESTORE CONFIDENCE",
      image: vericose ,
      sub: "VARICOSE VEINS TREATMENT PACKAGE",
      subDesc:
        "Varicose veins are swollen, twisted veins that often appear on the legs and can cause discomfort, pain, and self-consciousness. Our specialized treatment aims to reduce symptoms, improve circulation, and enhance the appearance of your legs. Non-Invasive Procedures, Herbal Remedies, Lifestyle Recommendations, Long-Term Relief",

      price: "",
    },
    {
      content: "Resident Treatment Package – Tailored Care for Your Recovery",
      image: treat1,
      sub: " Resident Treatment Package",
      subDesc:
        "Our Resident Treatment Package offers personalized, in-house care for patients requiring extended treatment. With flexible options of 3, 5, 7, or 9 days, this package is designed to meet the individual needs of each patient, ensuring effective recovery in a comfortable and supportive environment. Personalized Care, In-House Treatment, Flexible Duration, Holistic Healing",

      price: "",
    }
  ];
  const scrollToElement = () => {
    const element = document.getElementById("package");
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offset = 100; // Padding offset
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  const mainRef = useRef()

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

  return (
    <div>
      <section className="relative overflow-hidden flex flex-col justify-center items-center h-screen">
        {/* Background images */}
        <div className="absolute w-full h-full top-0 left-0">
          <img src={blackshade} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute w-full h-full -z-10 bottom-19">
          <img src={b2} alt="ayur" className="w-full h-full object-cover  " />
        </div>

        {/* Content */}
        <div className="absolute z-30 flex flex-col justify-center items-center text-center w-full h-full">
          <div className="md:text-[90px] 5xl:text-[120px] text-[50px] font-black text-[#fff] leading-tight banner-title mb-5">
            Rediscover Wellness with
            <span className="block banner-title">
              Authentic Ayurvedic Therapies
            </span>
          </div>
          {/* <div className="px-2 max-w-[1150px] text-sm mx-auto text-[#fff] md:text-xl mb-10 paraFont">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            ratione, hic culpa ullam minus labore veritatis similique aut
            expedita accusantium molestias repudiandae odio corrupti temporibus
            ducimus beatae eligendi dolorum ipsum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quis odio perferendis
          </div> */}
          <div className="flex justify-center items-center gap-2 md:gap-10">
            <div onClick={scrollToElement} className="px-10 cursor-pointer py-2 rounded-3xl font-bold bg-[#ffffff] text-[#8acb13] drop-shadow-md">
              Discover More
            </div>
          </div>
        </div>
        <div className=" absolute bottom-0 left-0 right-0 w-full">
          <img src={whiteWave} alt="" className="w-full object-cover" />
        </div>
        <div className="absolute z-30 w-full bottom-3 left-0 right-0 rotate-[181deg] opacity-30">
          <img
            src={whiteWave}
            className="w-full h-auto -z-10 rotate-180"
            alt=""
          />
        </div>
      </section>

      <section id="package" className=" relative w-full mb-20 flex justify-center flex-col items-center">
        <div className="max-w-[1400px] mx-auto w-full px-2 md:px-0 h-[600px]">
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 gap-10">
            {/* left */}
            <div className=" relative flex justify-center items-center gap-5">
              <motion.div
              ref={ref3}
              initial={{scale:0, opacity:0,}}
              animate={inView3 ? {scale:1,opacity:1,transition:{duration:0.2}} : {}}
              className=" absolute bg-[#fff] p-3 w-[50%] drop-shadow-2xl">
                <div className="p-2 border border-[#6bcb1c] flex flex-col justify-center items-center">
                  <div className="w-auto h-[40px] mb-2">
                    <img
                      src={leaf3}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="leading-tight text-center mb-2 font-bold">
                    Renew Yourself <span className="block">With Ayurveda</span>
                  </div>
                  <div className="text-sm px-2 text-center font-extralight paraFont">
                  Achieve rejuvenation and vitality with our carefully curated Ayurveda packages!
                  </div>
                </div>
              </motion.div>
              <motion.div
              ref={ref1}
              initial={{x:-100, opacity:0,}}
              animate={inView1 ? {x:0,opacity:1,transition:{duration:0.2}} : {}}
              className="md:w-[50%] h-[450px] w-full overflow-hidden rounded-tl-[50px] shadow-lg">
                <img src={p1} alt="" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
              ref={ref2}
              initial={{x:100, opacity:0,}}
              animate={inView2 ? {x:0,opacity:1,transition:{duration:0.2}} : {}}
              className="w-full h-[450px] md:w-[50%] overflow-hidden rounded-br-[50px] shadow-lg">
                <img src={p2} alt="" className="h-full w-full object-cover" />
              </motion.div>
            </div>
            {/* right */}
            <div className="w-full md:h-[600px] rounded-xl overflow-hidden">
              <div>
                <motion.div
                ref={ref4}
                initial={{y:100, opacity:0,}}
                animate={inView4 ? {y:0,opacity:1,transition:{duration:0.2}} : {}}
                className="text-base font-semibold text-[#b0e51e]">
                Explore
                </motion.div>
                <motion.div
                ref={ref5}
                initial={{x:100, opacity:0,}}
                animate={inView5 ? {x:0,opacity:1,transition:{duration:0.2}} : {}}
                className="md:text-[35px] text-[30px] font-bold">
                 Our Exclusive Care Packages
                </motion.div>
                <motion.div
                ref={ref6}
                initial={{x:-100, opacity:0,}}
                animate={inView6 ? {x:0,opacity:1,transition:{duration:0.2}} : {}}
                className="font-semibold md:mb-6 mb-3">
                  At abhaya Ayurvedic 
                </motion.div>
                <motion.div
                ref={ref7}
                initial={{x:-100, opacity:0,}}
                animate={inView7 ? {x:0,opacity:1,transition:{duration:0.2}} : {}}
                className="mb-6 text-sm md:text-base paraFont">
                  Discover the perfect blend of tradition and care with our
                  thoughtfully designed Ayurvedic packages at Abhaya Ayurvedic
                  Hospital. Whether you're looking to rejuvenate your skin,
                  recover and revitalize post-childbirth, or address specific
                  health concerns, our specialized packages cater to your unique
                  needs.From skin care therapies that restore your natural glow
                  to postnatal care programs that nurture and strengthen, each
                  package is crafted to promote holistic healing and lasting
                  well-being. Begin your journey to a healthier, balanced life
                  with Abhaya’s expert care.
                </motion.div>
                <ul className="flex flex-col gap-2 w-full text-base overflow-hidden">
                  <motion.li
                  ref={ref8}
                  initial={{x:100, opacity:0,}}
                  animate={inView8 ? {x:0,opacity:1,transition:{duration:0.2, delay:0.5}} : {}}
                  className="px-4 rounded-xl py-4 w-full h-[50px] border backdrop-blur-lg drop-shadow-sm text-sm md:text-base bg-[#B0E51E] text-[#000] paraFont">
                    <span className="font-semibold paraFont">Skin Care Package</span> - Herbal Ayurvedic care for naturally glowing, healthy, and radiant skin.
                  </motion.li>
                  <motion.li
                  ref={ref9}
                  initial={{x:100, opacity:0,}}
                  animate={inView9 ? {x:0,opacity:1,transition:{duration:0.2, delay:0.7}} : {}}
                  className="px-4 rounded-xl py-4 w-full h-[50px] border backdrop-blur-lg bg-[#B0E51E] text-sm md:text-base drop-shadow-sm text-[#000] paraFont">
                    <span className="font-semibold paraFont">Postnatal Care</span> - Holistic postnatal care with Ayurvedic therapies for recovery and wellness
                  </motion.li>
                  <motion.li
                  ref={ref10}
                  initial={{x:100, opacity:0,}}
                  animate={inView10 ? {x:0,opacity:1,transition:{duration:0.2, delay:0.9}} : {}}
                  className="px-4 rounded-xl py-4 w-full h-[50px] border backdrop-blur-lg bg-[#B0E51E] text-sm md:text-base drop-shadow-sm text-[#000] paraFont">
                    <span className="font-semibold paraFont">Hijama</span> - Experience natural healing with Hijama therapy for detox and wellness
                  </motion.li>
                  <motion.li
                  ref={ref11}
                  initial={{x:100, opacity:0,}}
                  animate={inView11 ? {x:0,opacity:1,transition:{duration:0.2, delay:1}} : {}}
                  className="px-4 rounded-xl py-4 w-full h-[50px] border backdrop-blur-lg bg-[#B0E51E] text-sm md:text-base drop-shadow-sm text-[#000] paraFont">
                    <span className="font-semibold paraFont">vericose</span> - Effective solutions for varicose veins with natural care and relief.
                  </motion.li>
                  <motion.li
                  ref={ref12}
                  initial={{x:100, opacity:0,}}
                  animate={inView12 ? {x:0,opacity:1,transition:{duration:0.2, delay:1.1}} : {}}
                  className="px-4 rounded-xl py-4 w-full h-[50px] border backdrop-blur-lg bg-[#B0E51E] text-sm md:text-base drop-shadow-sm text-[#000] paraFont">
                  <span className="font-semibold paraFont">Resident Treatment Packages</span>(3 / 5 / 7 / 9 days) - Tailored Care for Your Recovery
                  </motion.li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" w-full md:py-20 py-10 flex flex-col justify-center items-center bg-[#FFF9D9]">
        <div className="max-w-[1400px] w-full mx-auto">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
          >
            {packageLists.map((list, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 transition-all duration-500">
                  <div className="md:text-[50px] text-[30px] leading-tight text-center md:text-start">
                    {list.content}
                  </div>
                  <div className="p-2 rounded-full w-full md:w-[80%] h-[550px] border border-[#a90808] overflow-hidden">
                    <div className="w-full h-full bg-[#0c8021] rounded-full overflow-hidden">
                      <img
                        src={list.image}
                        className="w-full h-full object-cover"
                        alt="Treatment"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl mb-5 text-center md:text-start">
                      {list.sub}
                    </div>
                    <div className="md:mb-10 mb-5 text-center md:text-start paraFont">
                      {list.subDesc}
                    </div>
                    <div className="text-3xl font-bold md:text-end text-center">
                      {list.price}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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

export default Packages;
