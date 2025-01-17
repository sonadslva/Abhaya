import React, { useState,useRef, useEffect } from "react";
import ayur1 from '../assets/ayur2.jpg'
import ayurveda3 from '../assets/ayurveda3.png'
import aboutbg from '../assets/slide1.jpg';
import aboutimg1 from '../assets/ayur1.jpg'
import aboutimg2 from '../assets/treat2.png'
import greenWave from "../assets/greenwave.png"
import blackshade from "../assets/black-shade.png"
import whiteWave from "../assets/beigewaveorg.png";
import t1 from "../assets/t1.jpg"
import c1 from "../assets/gallery1.png"
import c2 from "../assets/gallery2.png"
import ayurBg from "../assets/ayurBg.jpg"
import greenShade from "../assets/black-shade.png"
import { useInView } from "react-intersection-observer";
import {motion} from "framer-motion"
import LocomotiveScroll from "locomotive-scroll";
import team2 from '../assets/team2.jpg'
const Team = () => {
  const [activeDoctor, setActiveDoctor] = useState(null);
    const mainRef = useRef()
  

  const toggleContent = (doctorIndex) => {
    setActiveDoctor(activeDoctor === doctorIndex ? null : doctorIndex);
  };

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

  const scrollToElement = () => {
    const element = document.getElementById("about");
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offset = 100; // Padding offset
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

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
    <div className="">
      <section className="relative overflow-hidden flex mb-10 flex-col justify-center items-center h-screen">
        {/* Background images */}
        <div className="absolute w-full h-full top-0 left-0">
          <img src={blackshade} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute w-full h-full -z-10">
          <img
            src={aboutbg}
            alt="ayur"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="absolute z-30 flex flex-col justify-center items-center text-center w-full h-full">
          <div className="lg:text-[90px] 5xl:text-[120px] text-[50px] font-black text-[#fff] leading-tight banner-title mb-5">
            Where Ancient Wisdom
            <span className="block banner-title">Meets Natural Healing</span>
          </div>
          <div className="px-2 max-w-[1200px] w-full  mx-auto text-[#fff] md:text-xl mb-10 paraFont 4xl:text-2xl">
            Harness the timeless secrets of Ayurveda to restore balance,
            rejuvenate your body, and awaken your inner vitality. Experience
            healing that honors both tradition and nature
          </div>
          <div className="flex justify-center items-center gap-2 md:gap-10">
            <div onClick={scrollToElement} className="px-10 cursor-pointer py-2 rounded-3xl font-bold bg-[#ffffff] text-[#8acb13] drop-shadow-md 4xl:text-xl">
              Discover More
            </div>
          </div>
        </div>

        <div className=" absolute z-20 bottom-0 left-0 right-0 w-full">
          <img src={whiteWave} alt="" className="w-full object-cover" />
        </div>
        <div className="absolute z-10 w-full bottom-3 h-auto left-0 right-0 rotate-[181deg] opacity-30">
          <img
            src={whiteWave}
            className="w-full h-auto rotate-180 drop-shadow-2xl"
            alt=""
          />
        </div>
      </section>

      <section id="about" className="w-full cursor-pointer max-w-[1400px] mx-auto relative px-2 md:px-0 mb-10 md:mb-0">
        <div className="md:flex md:justify-center md:items-center">
          <div className="w-full md:w-[50%] md:h-[450px] 4xl:h-[550px] bg-[#FFF9D9] py-10 px-6">
            <motion.div
            ref={ref1}
            initial={{x:-100,opacity:0}}
            animate={inView1 ? {x:0,opacity:1,transition:{duration:0.5}} : {}}
            className="md:text-[35px] text-[30px] 4xl:text-[50px] leading-tight mb-5 font-bold text-[#000]">
              Healing Naturally, Caring Compassionately
            </motion.div>
            <motion.div
            ref={ref2}
            initial={{x:-100,opacity:0}}
            animate={inView2 ? {x:0,opacity:1,transition:{duration:0.5, delay:0.2}} : {}}
            className="mb-5 text-[#000] md:text-lg paraFont 4xl:text-xl">
              <b>Abhaya Ayurveda Hospital</b> is a holistic approach that
              integrates the mind, body, and spirit in all aspects of patient
              care. We believe that every individual has his or her own
              constitution, and it is our's to help everyone achieve their
              maximum health potential.
            </motion.div>
            <motion.div
            ref={ref3}
            initial={{x:-100,opacity:0}}
            animate={inView3 ? {x:0,opacity:1,transition:{duration:0.5, delay:0.4}} : {}}
            className="mb-5 text-[#000] text-sm md:text-base paraFont 4xl:text-xl">
              Our hospital excels in exceptional patient care, advanced
              technology, and a compassionate medical team. With expert doctors,
              modern facilities, and personalized treatments, we prioritize
              safety, comfort, and satisfaction. Trust us for quality healthcare
              and a seamless healing experience.
            </motion.div>
          </div>
          <div className=" w-full md:w-[50%] h-[550px] 4xl:h-[650px] bg-[#7b2323] boxShadow">
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
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 w-full max-w-[1400px] 4xl:w-[1500px] mx-auto">
          <div className="w-full grid grid-cols-2 place-items-center gap-2 md:grid-cols-2 px-2 md:px-0">
            <motion.div
            ref={ref4}
            initial={{rotate:"-10deg", opacity:1,x:-50}}
            animate={inView4 ? {rotate:0,x:0,opacity:1,transition:{duration:0.8}} : {}}
            className="w-full h-[200px] 4xl:h-[350px] bg-[#92C83E] rounded-tr-[50px] rounded-bl-[50px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-no-repeat overflow-hidden flex object-cover">
              <img
                src={aboutimg1}
                className="w-full h-full object-cover"
                alt=""
              />
            </motion.div>
            <motion.div
            ref={ref5}
            initial={{rotate:"10deg", opacity:1,x:50}}
            animate={inView5 ? {rotate:0,x:0,opacity:1,transition:{duration:0.8}} : {}}
            className="w-full h-[200px] 4xl:h-[350px] bg-[#92C83E] rounded-tl-[50px] rounded-br-[50px] bg-no-repeat overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              <img
                src={aboutimg2}
                className="w-full h-full object-cover"
                alt=""
              />
            </motion.div>
            <motion.div
            ref={ref6}
            initial={{rotate:"-10deg", opacity:1,x:-50}}
            animate={inView6 ? {rotate:0,x:0,opacity:1,transition:{duration:0.8}} : {}}
            className="w-full h-[200px] 4xl:h-[350px] bg-[#92C83E] rounded-tl-[50px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-br-[50px] bg-no-repeat overflow-hidden">
              <img
                src={aboutimg2}
                className="w-full h-full object-cover"
                alt=""
              />
            </motion.div>
            <motion.div
            ref={ref7}
            initial={{rotate:"10deg", opacity:1,x:50}}
            animate={inView7 ? {rotate:0,x:0,opacity:1,transition:{duration:0.8}} : {}}
            className="w-full h-[200px] 4xl:h-[350px] bg-[#92C83E] rounded-tr-[50px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-bl-[50px] bg-no-repeat overflow-hidden">
              <img
                src={aboutimg1}
                className="w-full h-full object-cover"
                alt=""
              />
            </motion.div>
          </div>
          <div className="px-2 md:px-0">
            <motion.div
            ref={ref8}
            initial={{x:100, opacity:1}}
            animate={inView8 ? {x:0,opacity:1,transition:{duration:0.8}} : {}}
            className="mb-5 md:text-[50px] 4xl:text-[60px] text-[30px] leading-tight font-bold text-[#fff]">
              Ayurvedic Treatments: Revitalizing Life, Naturally
            </motion.div>  
            <motion.div
            ref={ref9}
            initial={{x:100, opacity:1}}
            animate={inView9 ? {x:0,opacity:1,transition:{duration:1}} : {}}
            className="text-[#f0efef] lg:text-lg paraFont 4xl:text-xl">
              Step into the world of Ayurveda, where ancient therapies harmonize
              with modern life to bring lasting wellness. From easing chronic
              ailments to rejuvenating your body and mind, Ayurvedic treatments
              are rooted in balance and holistic healing. Discover the
              transformative effects of natural remedies and personalized care,
              restoring vitality to your life—one step at a time
              <motion.span
              ref={ref10}
              initial={{x:100, opacity:1}}
              animate={inView10 ? {x:0,opacity:1,transition:{duration:1, delay:0.2}} : {}}
              className="block mt-5 paraFont">
                From improving digestion and boosting immunity to reducing
                stress and enhancing mental clarity, Ayurveda fosters overall
                wellness. Its therapies, like herbal treatments and rejuvenating
                massages, harmonize the body with nature, offering a sustainable
                path to vitality and balance.
              </motion.span>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="w-full h-auto ">
        <img
          src={greenWave}
          alt=""
          className="w-full h-full object-cover rotate-180 mt-[-10px]"
        />
      </div>

      <section className=" w-full mx-auto relative mt-10 md:mt-0">
        <div className="px-4 max-w-[1400px] 4xl:w-[1500px] mx-auto">
          <div className="md:flex grid grid-cols-1 place-items-center items-center justify-center">
            <div className="md:w-[50%] text-center md:text-left mb-8 md:mb-0">
              <motion.h2
              ref={ref11}
              initial={{x:-100, opacity:1}}
              animate={inView11 ? {x:0,opacity:1,transition:{duration:0.8}} : {}}
              className="md:text-4xl 4xl:text-[60px] text-[30px] font-bold text-[#92C83E] mb-4">
                The Science of Ayurveda
              </motion.h2>
              <motion.p
              ref={ref12}
              initial={{x:-100, opacity:1}}
              animate={inView12? {x:0,opacity:1,transition:{duration:0.9}} : {}}
              className="paraFont md:text-lg text-sm">
                Ayurveda, often referred to as the "Science of Life," is a
                5,000-year-old system of natural healing rooted in ancient
                Indian traditions. It is based on the principle of balancing the
                three doshas—Vata, Pitta, and Kapha—which govern physical and
                mental well-being.
              </motion.p>
              <motion.p
              ref={ref13}
              initial={{x:-100, opacity:1}}
              animate={inView13? {x:0,opacity:1,transition:{duration:1}} : {}}
              className="paraFont md:text-lg text-sm">
                Ayurveda believes in the harmony between mind, body, and spirit
                and offers personalized treatments based on one's dosha.{" "}
                <motion.span
                ref={ref13}
                initial={{x:-100, opacity:1}}
                animate={inView13? {x:0,opacity:1,transition:{duration:1}} : {}}
                className="paraFont block mt-3">
                  This holistic science emphasizes personalized care, using
                  herbal medicines, dietary adjustments, yoga, and detoxifying
                  therapies to restore harmony. Beyond treating illnesses,
                  Ayurveda aims to prevent diseases and promote a balanced,
                  healthy, and fulfilling life by aligning the body, mind, and
                  spirit with nature’s rhythms.
                </motion.span>
              </motion.p>
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
        {/* Bottom Side */}
        {/* <div className=" absolute rotate-180 bottom-0">
          <img src={bottomSide} alt="" className="opacity-70" />
        </div> */}
      </section>

      <section className="w-full mx-auto relative">
        <div className="py-10 md:pt-20 bg-[#FFF9D9]">
          <div className="md:flex justify-center mb-10 items-center gap-10 px-2 md:px-0 grid grid-cols-1 place-items-center max-w-[1400px] mx-auto">
            <div className="md:w-[50%] w-full relative flex justify-center items-center">
              <motion.div
              ref={ref15}
              initial={{scale:0, opacity:1}}
              animate={inView15 ? {scale:1,opacity:1,transition:{duration:0.8}} : {}}
              className="hidden md:flex absolute h-[150px] w-[150px] rounded-full top-[-20px] left-20">
                <img src={c1} alt="" className="w-full h-full rounded-full object-cover" />
              </motion.div>
              <motion.div
              ref={ref16}
              initial={{scale:0, opacity:1}}
              animate={inView16 ? {scale:1,opacity:1,transition:{duration:0.9}} : {}}
              className=" absolute h-[150px] w-[150px] rounded-full bg-[#34874a] bottom-0 right-0">
                <img
                  src={c2}
                  alt=""
                  className="rounded-full w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
              ref={ref17}
              initial={{scale:0, opacity:1}}
              animate={inView17 ? {scale:1,opacity:1,transition:{duration:0.7}} : {}}
              className=" absolute right-10 top-0 w-[70px] h-[70px] rounded-full bg-[#34874a] opacity-50"></motion.div>
              <motion.div
              ref={ref18}
              initial={{scale:0, opacity:1}}
              animate={inView18 ? {scale:1,opacity:1,transition:{duration:0.8}} : {}}
              className="hidden md:flex absolute left-32 bottom-0 w-[40px] h-[40px] rounded-full bg-[#34874a] opacity-50"></motion.div>
              <div className="w-[300px] md:w-[400px] md:h-[400px] h-[300px] lg:w-[500px] lg:h-[500px] overflow-hidden rounded-full">
                <img
                  src={team2}
                  alt=""
                  className="w-full h-full object-cover right-10"
                />
              </div>
            </div>
            <div className="md:w-[50%]">
              <motion.div
              ref={ref19}
              initial={{x:100, opacity:1}}
              animate={inView19 ? {x:0,opacity:1,transition:{duration:0.8}} : {}}
              className="mb-5 md:text-[50px] text-[30px] leading-tight font-bold">
                Where Care Meets Innovation
              </motion.div>
              <div className="text-sm md:text-base paraFont">
                {/* At Abhaya Ayurveda Hospital, the commitment to holistic wellness
                is deeply ingrained in every aspect of its services. The
                hospital's team of experienced and compassionate practitioners
                ensures that each individual receives personalized care,
                fostering a sense of trust and well-being. The serene ambiance
                and state-of-the-art facilities create an environment conducive
                to healing and rejuvenation. */}
                <motion.span
                ref={ref20}
                initial={{x:100, opacity:1}}
                animate={inView20 ? {x:0,opacity:1,transition:{duration:1}} : {}}
                className="block mt-5 paraFont lg:text-lg">
                  Our team of experienced Ayurvedic doctors and therapists work
                  tirelessly to create personalized treatment plans that cater
                  to the unique needs of each guest. From stress and anxiety to
                  chronic illnesses, our treatments are designed to heal your
                  mind, body, and soul, leaving you feeling refreshed and
                  rejuvenated.
                </motion.span>
                <motion.span
                ref={ref21}
                initial={{x:100, opacity:1}}
                animate={inView21 ? {x:0,opacity:1,transition:{duration:1.1}} : {}}
                className="block mt-5 paraFont lg:text-lg">
                  At our hospital, we provide the best ayurvedic treatment in
                  wayanad kerala, we use only the high quality, all-natural
                  ingredients in our Ayurvedic treatments. Our experienced chefs
                  prepare delicious and healthy meals using organic, locally
                  sourced ingredients, making sure that every meal is both
                  nutritious and delicious. Also we offer a calm and quite
                  atmosphere for our patients with all amenities.
                </motion.span>
              </div>
            </div>
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
          <div className="text-[#fff] max-w-[900px] mx-auto mb-5 text-sm md:text-base px-1 md:px-0 paraFont lg:text-lg">
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
