import React ,{useState, useRef, useEffect} from "react";
import img1 from "../assets/room1.jpg";
import img2 from "../assets/abhayaroom4.jpg";
import img3 from "../assets/room2.jpg";
import img4 from "../assets/abhayaroom5.jpeg";
import img5 from "../assets/abhayaroom6.jpeg";
import img6 from "../assets/abhayaroom7.jpeg";
import img7 from '../assets/abhayatreatment.jpeg';
import img8 from '../assets/treatmentroom2.jpg'
import img9 from '../assets/room3.jpg'
import blackshade from "../assets/black-shade.png"
import small from "../assets/small.png"
import beigewaveorg from "../assets/beigewaveorg.png"
import fac1 from "../assets/room4.jpg"
import fac2 from "../assets/treatmentroom1.jpg"
import fac3 from "../assets/farmacy.png"
import fac4 from "../assets/room1.jpg"
import facwave from "../assets/facwave.png"
import bgimg from "../assets/bgimg.png"
import slide2 from "../assets/b1.jpg"
import ayurBg from "../assets/ayurBg.jpg"
import greenShade from "../assets/black-shade.png"
import { useInView } from "react-intersection-observer";
import {motion} from "framer-motion"
import LocomotiveScroll from "locomotive-scroll";
import img10 from '../assets/gallery1.png'
import img11 from '../assets/gallery2.png'
import img12 from '../assets/team1.png'
import img13 from '../assets/team2.jpg'
import { FaWhatsapp } from "react-icons/fa6";
const Facilities = () => {
  const [selectedImage, setSelectedImage] = useState(null);
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

  const images = [
    { id: 1, src: img1, alt: "img1" },
    { id: 2, src: img2, alt: "img2" },
    { id: 3, src: img6, alt: "img6" },
    { id: 4, src: img7, alt: "img7" },
    { id: 5, src: img5, alt: "img5" },
    { id: 6, src: img8, alt: "img8" },
    { id: 7, src: img3, alt: "img3" },
    { id: 8, src: img4, alt: "img4" },
    { id: 9, src: img9, alt: "img9" },
    { id: 10, src: img10, alt: "img10" },
    { id: 11, src: img11, alt: "img11" },
    { id: 12, src: img12, alt: "img12" },
    { id: 13, src: img13, alt: "img13" },

  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  
  const closeModal = () => {
    setSelectedImage(null);
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

    const scrollToElement = () => {
      const element = document.getElementById("facilities");
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offset = 100; // Padding offset
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      }
    };

  return (
    <div className="overflow-hidden">
        <div className="fixed bottom-10 right-10 z-[999] text-[#fff] bg-[#58F978] p-2 rounded-full text-[50px]">
                <a href="tel:+919048121977">
                  <FaWhatsapp />
                </a>
              </div>
      <section className="relative overflow-hidden flex flex-col justify-center items-center h-screen">
        {/* Background images */}
        <div className="absolute w-full h-full top-0 left-0">
          <img src={blackshade} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute w-full h-full -z-10">
          <img src={slide2} alt="ayur" className="w-full h-full object-cover" />
        </div>

        {/* banner */}
        <div className="absolute z-30 flex flex-col justify-center items-center text-center w-full h-full">
          <div className="md:text-[90px] 5xl:text-[120px]  text-[50px] font-black text-[#fff] leading-tight banner-title mb-5">
            Facilities
          </div>

          <div className="flex justify-center items-center gap-2 md:gap-10">
            <div onClick={scrollToElement} className="px-10 cursor-pointer py-2 rounded-3xl font-bold bg-[#ffffff] text-[#8acb13] drop-shadow-md">
              Discover More
            </div>
          </div>
        </div>
        <div className=" absolute bottom-0 left-0 right-0 w-full">
          <img src={facwave} alt="" className="w-full object-cover" />
        </div>
        <div className="absolute z-10 w-full bottom-3 h-auto left-0 right-0 rotate-[181deg] opacity-30">
          <img src={facwave} className="w-full h-auto rotate-180" alt="" />
        </div>
      </section>
      
      {/* content */}
      <section id="facilities" className="w-full bg-[#f1dace] relative py-10 md:pb-20 mb-10 md:mb-0">
        <div className="w-full max-w-[1400px] m-auto">
          <div className="grid grid-cols-1 w-full place-items-center md:grid-cols-2 gap-10 px-2 md:px-0">
            {/* Left */}
            <div className=" w-full grid grid-cols-2 md:grid-cols-2 gap-3 relative z-40 max-h-[800px] no-scrollbar ">
              <div className=" flex flex-col w-full gap-3 pt-20">
                <motion.div
                ref={ref4}
                initial={{rotate:"-10deg", opacity:1,x:-50}}
                animate={inView4 ? {rotate:0,x:0,opacity:1,transition:{duration:0.8}} : {}}
                className="w-full h-[200px] md:h-[400px] rounded-tr-[30px] rounded-bl-[30px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] overflow-hidden relative">
                  <div className="absolute top-0 bottom-0 right-0 left-0">
                    <img
                      src={blackshade}
                      className="w-full h-full opacity-50"
                      alt=""
                    />
                  </div>
                  <img
                    src={fac1}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </motion.div>
                <motion.div
                ref={ref5}
                initial={{rotate:"10deg", opacity:1,x:50}}
                animate={inView5 ? {rotate:0,x:0,opacity:1,transition:{duration:0.8}} : {}}
                className="w-full h-[200px] md:h-[400px] rounded-tl-[30px] rounded-br-[30px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] overflow-hidden relative">
                  <div className="absolute top-0 bottom-0 right-0 left-0">
                    <img
                      src={blackshade}
                      className="w-full h-full opacity-50"
                      alt=""
                    />
                  </div>
                  <img
                    src={fac2}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </motion.div>
              </div>
              <div className="flex flex-col gap-3 ">
                <motion.div
                 ref={ref6}
                 initial={{rotate:"10deg", opacity:1,x:50}}
                 animate={inView6 ? {rotate:0,x:0,opacity:1,transition:{duration:0.8}} : {}}
                className="w-full h-[200px] md:h-[400px] rounded-tl-[30px] rounded-br-[30px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] overflow-hidden relative">
                  <div className="absolute top-0 bottom-0 right-0 left-0">
                    <img
                      src={blackshade}
                      className="w-full h-full opacity-50"
                      alt=""
                    />
                  </div>
                  <img
                    src={fac3}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </motion.div>
                <motion.div
                ref={ref5}
                initial={{rotate:"-10deg", opacity:1,x:50}}
                animate={inView5 ? {rotate:0,x:0,opacity:1,transition:{duration:0.8}} : {}}
                className="w-full h-[200px] md:h-[400px] rounded-tr-[30px] rounded-bl-[30px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] overflow-hidden relative">
                  <div className="absolute top-0 bottom-0 right-0 left-0">
                    <img
                      src={blackshade}
                      className="w-full h-full opacity-50"
                      alt=""
                    />
                  </div>
                  <img
                    src={fac4}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </motion.div>
              </div>
            </div>
            {/* Right */}
            <div>
              <motion.div
              ref={ref6}
              initial={{x:100,opacity:0}}
              animate={inView6 ? {x:0,opacity:1,transition:{duration:0.5}} : {}}
              className="text-[#202020] font-semibold text-sm md:text-base">
                At Abhaya Ayurveda,
              </motion.div>
              <motion.div
              ref={ref7}
              initial={{x:100,opacity:0}}
              animate={inView7 ? {x:0,opacity:1,transition:{duration:0.5,delay:0.2}} : {}}
              className="font-bold md:text-[40px] text-[20px] leading-tight text-[#053630]">
                we offer facilities
              </motion.div>
              <motion.div
              ref={ref8}
              initial={{x:100,opacity:0}}
              animate={inView8 ? {x:0,opacity:1,transition:{duration:0.5,delay:0.4}} : {}}
              className="font-semibold text-[#202020] text-sm md:text-base flex justify-end mb-5">
                to ensure your comfort and well-being, combining traditional
              </motion.div>
              <motion.div
              ref={ref9}
              initial={{x:100,opacity:0}}
              animate={inView9 ? {x:0,opacity:1,transition:{duration:0.5,delay:0.6}} : {}}
              className="mb-10  paraFont">
                  At our hospital, we provide the best ayurvedic treatment in
                  wayanad kerala, we use only the high quality, all-natural
                  ingredients in our Ayurvedic treatments. Our experienced chefs
                  prepare delicious and healthy meals using organic, locally
                  sourced ingredients, making sure that every meal is both
                  nutritious and delicious. Also we offer a calm and quite
                  atmosphere for our patients with all amenities
              </motion.div>
              <div className="flex flex-col justify-center gap-5">
                <motion.div
                ref={ref10}
                initial={{x:100,opacity:0}}
                animate={inView10 ? {x:0,opacity:1,transition:{duration:0.5,delay:0.8}} : {}}
                className="px-4 py-5 rounded-tl-3xl paraFont rounded-br-3xl backdrop-blur-sm bg-[#ffffff74] relative">
                  <span className="w-[40px] h-[40px] absolute right-0 top-[-15px]">
                    <img
                      src={small}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </span>{" "}
                  <span className="font-semibold paraFont">AC / Non AC Rooms</span> - Choose between comfortable AC or non-AC rooms for a pleasant stay.
                </motion.div>
                <motion.div
                ref={ref11}
                initial={{x:100,opacity:0}}
                animate={inView11 ? {x:0,opacity:1,transition:{duration:0.5,delay:1}} : {}}
                className="px-4 py-5 paraFont rounded-tl-3xl rounded-br-3xl backdrop-blur-sm bg-[#ffffff74] relative">
                  <span className="w-[40px] h-[40px] absolute right-0 top-[-15px]">
                    <img
                      src={small}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </span>{" "}
                  <span className="font-semibold paraFont">Hygienic Food</span> - Enjoy hygienic, freshly prepared food for a safe and delightful dining experience.
                </motion.div>
                <motion.div
                ref={ref12}
                initial={{x:100,opacity:0}}
                animate={inView12 ? {x:0,opacity:1,transition:{duration:0.5,delay:1.1}} : {}}
                className="px-4 py-5 paraFont rounded-tl-3xl rounded-br-3xl backdrop-blur-sm bg-[#ffffff74] relative">
                  <span className="w-[40px] h-[40px] absolute right-0 top-[-15px]">
                    <img
                      src={small}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </span>{" "}
                  <span className="font-semibold paraFont">Free WiFi</span> - Stay connected with our fast and free Wi-Fi throughout your stay.
                </motion.div>
                <motion.div
                ref={ref13}
                initial={{x:100,opacity:0}}
                animate={inView13 ? {x:0,opacity:1,transition:{duration:0.5,delay:1.2}} : {}}
                className="px-4 paraFont py-5 rounded-tl-3xl rounded-br-3xl backdrop-blur-sm bg-[#ffffff74] relative">
                  <span className="w-[40px] h-[40px] absolute right-0 top-[-15px]">
                    <img
                      src={small}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </span>{" "}
                  <span className="font-semibold paraFont">Parking Facility</span> - Convenient and secure parking available for all guests
                </motion.div>
                <motion.div
                ref={ref14}
                initial={{x:100,opacity:0}}
                animate={inView14 ? {x:0,opacity:1,transition:{duration:0.5,delay:1.3}} : {}}
                className="px-4 paraFont py-5 rounded-tl-3xl rounded-br-3xl backdrop-blur-sm bg-[#ffffff74] relative">
                  <span className="w-[40px] h-[40px] absolute right-0 top-[-15px]">
                    <img
                      src={small}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </span>{" "}
                  <span className="font-semibold paraFont">Experienced Team</span> - Our experienced team is here to provide great service and a comfortable stay.
                </motion.div>
                <motion.div
                ref={ref15}
                initial={{x:100,opacity:0}}
                animate={inView15 ? {x:0,opacity:1,transition:{duration:0.5,delay:1.4}} : {}}
                className="px-4 paraFont py-5 rounded-tl-3xl rounded-br-3xl backdrop-blur-sm bg-[#ffffff74] relative">
                  <span className="w-[40px] h-[40px] absolute right-0 top-[-15px]">
                    <img
                      src={small}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </span>{" "}
                  <span className="font-semibold paraFont">24 X 7 Service</span> - Enjoy 24x7 services for your comfort and convenience, anytime you need.
                </motion.div>
                <motion.div
                ref={ref16}
                initial={{x:100,opacity:0}}
                animate={inView16 ? {x:0,opacity:1,transition:{duration:0.5,delay:1.4 }} : {}}
                className="px-4 paraFont py-5 rounded-tl-3xl rounded-br-3xl backdrop-blur-sm bg-[#ffffff74] relative">
                  <span className="w-[40px] h-[40px] absolute right-0 top-[-15px]">
                    <img
                      src={small}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </span>{" "}
                  <span className="font-semibold paraFont">Natural and Calm Atmosphere</span> - Experience a natural and calm atmosphere for a peaceful and relaxing stay.
                </motion.div>
                <motion.div
                ref={ref17}
                initial={{x:100,opacity:0}}
                animate={inView17 ? {x:0,opacity:1,transition:{duration:0.5,delay:1.5}} : {}}
                className="px-4 paraFont py-5 rounded-tl-3xl rounded-br-3xl backdrop-blur-sm bg-[#ffffff74] relative">
                  <span className="w-[40px] h-[40px] absolute right-0 top-[-15px]">
                    <img
                      src={small}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </span>{" "}
                  <span className="font-semibold paraFont">Easy Access</span> - Enjoy easy access to all key locations for a convenient and hassle-free experience.
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hidden md:flex w-full mt-[-10px] mb-10 relative">
        <div className="absolute right-2 bottom-10 z-40">
          <img src={bgimg} alt="" className="w-[200px] h-[200px] " />
        </div>
        <img
          src={beigewaveorg}
          alt=""
          className="w-full h-full object-cover rotate-180"
        />
      </div>

      <section className="mb-20 w-full">
        <div className="w-full">
          <div className="md:text-[50px] text-[30px] text-center mb-5 md:mb-10 font-bold">
            Gallery
          </div>
          <div className="grid grid-cols-1 place-items-center md:grid-cols-3 lg:grid-cols-3 w-full gap-5 max-w-[1400px] mx-auto">
            {images.map((image) => (
              <div
                key={image.id} // Move the key here to the outermost div
                className="w-full h-[330px] p-4 border-[#8acb13] border border-[ridge] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
              >
                <div
                  className="w-full h-[300px] cursor-pointer"
                  onClick={() => openModal(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 backdrop-blur-sm">
            <button
              className="absolute top-10 right-10 text-white text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-screen rounded-lg"
              />
            </div>
          </div>
        )}
      </section>
      <section  className="w-full flex justify-center items-center mx-auto relative py-10">
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

export default Facilities;
