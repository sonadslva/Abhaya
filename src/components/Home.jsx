import React, {useEffect, useState} from "react";

import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import img3 from '../assets/abhayaroom4.jpg'
import img4 from '../assets/abhayaroom5.jpeg'
import img5 from '../assets/abhayaroom6.jpeg'
import about01 from "../assets/about01.jpg"
import about02 from "../assets/about02.jpg"
import Dhara from '../assets/Dharaa.jpg'
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import navarakizi from '../assets/navarakizhi.jpg'
import pizichil from '../assets/pizichill.jpg'
import colorShade from "../assets/black-shade.png"
import ayurorg from "../assets/ayurorg.png"
import quotes from "../assets/Quotes.png"
import bgVideo from "../assets/bgvideo.mp4"
import treat from "../assets/treat.png"
import dec1 from "../assets/dec1.png"
import whiteWave from "../assets/whitewave.png"
import beigeWave from "../assets/greenwave.png"
import ayurBg from "../assets/ayurBg.jpg"
import greenShade from "../assets/black-shade.png"
import t1 from "../assets/t1.jpg"
import cimg from "../assets/cimg.png"
import customerreview from "../assets/cutomerreview.jpg"
import { collection, getDocs } from 'firebase/firestore';
import { db } from './Firebase';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import ayurvedicmassage from "../assets/ayurvedicmassage.jpg";
const Home = () => {
  const navigate = useNavigate();

  const [testimonials,setTestimonials]=useState([])
  const [activeIndex, setActiveIndex] = useState(0); // Default middle card index

 
  const handleTreatment = () => {
    navigate("/treatment");
    window.scrollTo(0, 0);
  };

  const handleFacility = () => {
    navigate("/facilities");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Ensures scroll to top on initial render
  }, []);

  useEffect(() => {
    const fetchTestimonials = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'Testimonials'));
            const testimonialList = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setTestimonials(testimonialList);
        } catch (error) {
            console.error('Error fetching testimonials:', error);
        }
    };

    fetchTestimonials();
}, []);

const treatmentLists = [
  {name : "Dhara", image : Dhara, desc : "Ayurvedic Therapy"},
  {name : "Navara Kizhi", image : navarakizi, desc : "Ayurvedic Therapy"},
  {name : "Pizichil", image : pizichil, desc : "Ayurvedic Therapy"},
  {name : "Navara Kizhi", image : navarakizi, desc : "Ayurvedic Therapy"},
]

  return (
    <>
      <div>
        <div className="w-full overflow-hidden relative flex flex-col justify-center items-center h-screen">
          <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full z-10 opacity-80">
            <img
              src={colorShade}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full ">
            <video
              src={bgVideo}
              autoPlay
              loop
              type="video/mp4"
              muted
              playsInline
              className="w-full h-full object-cover"
            ></video>
          </div>
          <div className="absolute flex flex-col justify-center items-center z-30">
            <div className="lg:text-[100px] 5xl:text-[150px] text-[50px] font-black text-[#fff] text-center leading-tight banner-title mb-5">
              Holistic approach
              <span className="block banner-title">of Ayurveda</span>
            </div>
            <div className="px-2 4xl:max-w-[1300px] 4xl:w-full w-[1150px] mx-auto text-[#fff] 4xl:text-2xl text-sm md:text-xl text-center mb-10 paraFont">
              We use modern concepts to combine ancient wisdom with holistic
              healing approaches in order to maintain and honor the ever-lasting
              legacy of Ayurveda. We seek to create a healthier, more balanced
              world for generations to come, by bringing together traditional
              Ayurvedic concepts and innovative advances to ensure people remain
              healthy for generations to come.
            </div>
            <div className="flex justify-center items-center gap-2 md:gap-10">
              <div className="md:px-10 px-8 py-2 text-sm md:text-base rounded-3xl font-bold 4xl:text-xl bg-[#ffffff] text-[#8acb13] drop-shadow-md">
                Discover More
              </div>
              <div className="md:px-10 px-8 md:text-base text-sm py-2 rounded-3xl font-bold border 4xl:text-xl border-[#fff] text-[#8acb13] drop-shadow-md backdrop-blur-md">
                More Details
              </div>
            </div>
          </div>

          <div className="absolute z-40 w-full bottom-[-10px] lg:bottom-[-10px] h-auto left-0 right-0 rotate-180">
            <img
              src={whiteWave}
              className="w-full h-auto rotate-180 drop-shadow-2xl"
              alt=""
            />
          </div>
          <div className="absolute z-30 w-full bottom-[1px] h-auto left-0 right-0 rotate-[181deg] opacity-30">
            <img
              src={whiteWave}
              className="w-full h-auto rotate-180 drop-shadow-2xl"
              alt=""
            />
          </div>
        </div>

        {/* aboutus */}
        <section className="w-full flex justify-center items-center  flex-col mx-auto relative">
          <div className=" absolute right-5 top-0 -z-10 md:z-20 md:w-[100px] md:h-[100px] w-[80px] h-[80px] ayurAnim">
            <img
              src={ayurorg}
              alt=""
              className="w-full h-full object-contain "
            />
          </div>
          <div className=" bg-cover bg-center relative  py-5 px-2 md:px-8  mb-2 w-full 4xl:max-w-[1500px] 4xl:w-full max-w-[1400px]  mx-auto">
            <div className="md:flex md:justify-center md:items-center grid-cols-1 place-items-center gap-10">
              {/* left */}
              <div className="md:w-[50%] w-full">
                <div className="md:text-[50px] text-[30px] font-bold text-[#92C83E] ">
                  About Us
                </div>
                <div className="mb-2 paraFont text-sm md:text-base">
                  <b className="paraFont font-black">
                    Abhaya Ayurveda Hospital
                  </b>{" "}
                  is a holistic approach that integrates the mind, body, and
                  spirit in all aspects of patient care. We believe that every
                  individual has his or her own constitution, and it is our's to
                  help everyone achieve their maximum health potential.
                </div>
                <div>
                  <div className="mb-2 md:text-[50px] text-[30px] font-bold md:font-semibold text-[#92C83E]">
                    Why Abhaya Ayurveda
                  </div>
                  <div className="paraFont text-sm md:text-base mb-5 md:mb-0">
                    Our hospital stands out for its exceptional patient care,
                    cutting-edge technology, and compassionate team of medical
                    professionals. With highly qualified doctors,
                    state-of-the-art facilities, and a commitment to
                    personalized treatment, we ensure the highest quality
                    healthcare. Our focus on patient safety, comfort, and
                    satisfaction, coupled with a wide range of specialized
                    services, makes us the trusted choice for your health and
                    well-being. Choose us for a seamless healthcare experience
                    where your health is our priority.
                  </div>
                </div>
              </div>
              {/* right */}
              <div className="md:w-[50%] w-full py-2">
                <div className="relative h-[400px] w-full">
                  <div className="absolute h-[80%] w-[90%] left-0 top-0 bg-[#200] rounded-3xl overflow-hidden">
                    <img
                      src={about01}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute h-[60%] w-[70%] right-0 bottom-0 bg-[#ac5555] rounded-3xl overflow-hidden">
                    <img
                      src={about02}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-auto">
          <img src={beigeWave} className="w-full h-full object-cover" alt="" />
        </div>

        {/* Team */}
        <section className="w-full flex relative justify-center items-center flex-col mx-auto bg-[#92C83E] mix-blend-multiply py-10 md:py-0">
          {/* <div className=" absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-10">
              <img src={bgshape} alt="" className="w-full h-full object-cover opacity-5 mix-blend-multiply" />
            </div> */}
          <div className=" bg-center pb-2 px-2 md:px-8 max-w-[1400px] mx-auto ">
            <div className="md:flex md:justify-center md:items-center grid-cols-1 place-items-center gap-10 px-2">
              {/* left */}
              <div className=" md:w-[50%] mb-5 md:mb-0 w-full rounded-tl-[50px] rounded-br-[50px] md:rounded-tl-[100px] overflow-hidden md:rounded-br-[100px]">
                <img
                  src={t1}
                  alt="Doctorimg"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* right */}
              <div className="text-center md:w-[50%] ">
                <div className="md:text-[50px] text-[30px] font-bold leading-tight mb-3 md:mb-0 text-[#fff]">
                  PROFESSIONAL AYURVEDIC SPECIALIST
                </div>
                <div className="paraFont md:mt-5 text-[#f4f4f4] text-sm md:text-base">
                  Our Ayurvedic treatments, based on the concept that our body
                  is a microcosm of the universe, have, at the Abhaya Ayurveda
                  Hospital, always taken into account that the proper
                  integration of body, mind, and spirit can give a life in
                  complete wellness with prevention and healing of various
                  conditions. Under the visionary leadership of{" "}
                  <b> Dr. Ajitha Kumari</b>, our hospital thrives in delivering
                  exceptional healthcare, combining expertise, compassion, and
                  innovation to transform lives.
                </div>
                {/* <div className="text-center mt-8">
                  <Link
                    to="/team"
                    className="flex items-center gap-2 justify-center py-2 px-6 rounded-lg text-lg transition-all paraFont"
                  >
                    View More
                    <span>
                      <HiArrowRight />
                    </span>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <div className=" mb-10 w-full mt-[-10px] h-full relative">
          <div className="absolute right-2 bottom-[-30px] z-40 ">
            <img
              src={cimg}
              alt=""
              className="md:w-[300px] md:h-[300px] w-[100px] h-[100px] "
            />
          </div>
          <img
            src={beigeWave}
            className="w-full h-full object-cover rotate-180"
            alt=""
          />
        </div>

        {/* Treatments */}
        <section className="md:mb-20 mb-10  mx-auto w-full relative">
          <div className="md:w-[200px] w-[80px] md:top-2 top-[-40px] md:left-2 h-auto absolute">
            <img
              src={treat}
              alt=""
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
          <div className="md:w-[200px] w-[80px] md:top-2 top-[-40px] right-0 md:right-2 h-auto absolute">
            <img
              src={treat}
              alt=""
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
          <div>
            <div className="text-center mb-3 md:text-[50px] text-[30px]  text-[#92C83E] font-bold">
              Healing with Ayurveda
            </div>
            <div className="text-center text-sm md:text-base px-1 md:px-0 mb-10 max-w-[900px] mx-auto paraFont font-mediu,">
              Ayurveda, an ancient system of medicine originating in India,
              offers holistic treatments aimed at balancing the body, mind, and
              spirit. Various therapeutic techniques
            </div>
            <div className="flex justify-center items-center w-full">
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
              >
                {treatmentLists.map((list, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-[450px] flex flex-col object-cover relative -z-10 treatment-bg">
                      <div className="w-full h-[450px] mix-blend-multiply">
                        <img
                          src={list.image}
                          alt={list.name || "Treatment Image"}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="absolute bottom-5 text-white flex flex-col justify-center">
                          <div className="text-3xl text-center">
                            {list.name || "DHARA"}
                          </div>
                          <div className="text-sm text-center">
                            {list.description || "Ayurvedic Therapy"}
                          </div>
                          <div className="mt-3">
                            <button
                              className="px-10 py-2 rounded-md border"
                              onClick={handleTreatment}
                            >
                              View More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* <div className="w-full h-[450px] flex flex-col object-cover relative -z-10 treatment-bg">
                <div className="w-full h-[450px] mix-blend-multiply">
                  <img
                    src={navarakizi}
                    alt="Ayur1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center items-center ">
                  <div className=" absolute bottom-5 text-white flex flex-col justify-center">
                    <div className="text-3xl text-center">NAVARAKIZHI </div>
                    <div className="text-sm text-center">
                      Rejuvenation Therapy
                    </div>
                    <div className="mt-3">
                      <button className="px-10 py-2 rounded-md border">
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[450px] flex flex-col object-cover relative -z-10 treatment-bg">
                <div className="w-full h-[450px] mix-blend-multiply">
                  <img
                    src={pizichil}
                    alt="Ayur1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center items-center ">
                  <div className=" absolute bottom-5 text-white flex flex-col justify-center">
                    <div className="text-3xl text-center">PIZHICHIL</div>
                    <div className="text-sm text-center">Thailadhara</div>
                    <div className="mt-3">
                      <button className="px-10 py-2 rounded-md border">
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/*Facilities  */}
        <section className=" mb-10  max-w-[1400px] mx-auto w-full">
          <div>
            <div className="md:flex justify-between items-center mb-10 px-2 md:px-0">
              <div className="md:text-[50px] text-[30px] md:w-[50%] font-bold leading-tight text-[#92C83E]">
                What We Offer
                <span className="block md:text-[40px] text-[30px]">
                  Where Care Meets Comfort.
                </span>
              </div>
              <div className="md:w-[50%] paraFont">
                Our Ayurvedic hospital boasts modern amenities, including
                well-equipped therapy rooms, serene accommodations, and natural
                surroundings for a tranquil healing experience. We offer a
                hygienic environment, an on-site pharmacy with authentic herbal
                medicines, and spaces for yoga and meditation to enhance overall
                wellness.{" "}
              </div>
            </div>
            <div className="md:flex gap-5 px-2 md:px-0">
              {/* Left Section */}
              <div className="w-full h-[520px] md:w-[60%] flex flex-col object-cover relative treatment-bg">
                {/* Background Image */}
                <div className="w-full h-full mix-blend-multiply">
                  <img
                    src={img3}
                    alt="Ayur1"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content Overlay */}
                <div className="absolute bottom-10 w-full flex justify-center">
                  <div className="flex justify-between items-center w-[90%] px-5 text-white">
                    <div className="flex flex-col leading-tight">
                      <div className="text-lg">Gallery</div>
                      <div className="text-[35px]">
                        Abhaya Ayurvedic Hospital
                      </div>
                    </div>
                    <button
                      className="px-5 py-2 rounded-md text-white text-[40px] bg-transparent"
                      onClick={handleFacility}
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="md:w-[40%] flex flex-col gap-5">
                {/* Top Box */}
                <div className="w-full h-[250px] relative treatment-bg">
                  <img
                    src={img5}
                    alt="room"
                    className="w-full h-full object-cover mix-blend-multiply"
                  />
                  <div className="absolute bottom-5 w-full px-5 flex justify-between items-center text-white">
                    <div>
                      <div className="text-sm">Gallery</div>
                      <div className="text-xl">Abhaya Ayurvedic Hospital</div>
                    </div>
                    <button
                      className="px-5 py-2 rounded-md text-white text-[35px] bg-transparent"
                      onClick={handleFacility}
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                </div>

                {/* Bottom Box */}
                <div className="w-full h-[250px] relative treatment-bg">
                  <img
                    src={img4}
                    alt="room"
                    className="w-full h-full object-cover mix-blend-multiply"
                  />
                  <div className="absolute bottom-5 w-full px-5 flex justify-between items-center text-white">
                    <div>
                      <div className="text-sm">Gallery</div>
                      <div className="text-xl">Abhaya Ayurvedic Hospital</div>
                    </div>
                    <button
                      className="px-5 py-2 rounded-md text-white text-[35px] bg-transparent"
                      onClick={handleFacility}
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className=" mx-auto w-full relative py-10 overflow-hidden flex flex-col justify-start items-center bg-[#FFF9D9] -z-10">
          <div className=" absolute top-0 bottom-0 right-0 left-0 w-full opacity-50 h-full -z-10">
            {/* <img src={slide} alt="" className="w-full h-full object-cover" /> */}
          </div>
          <div className="absolute right-0 bottom-72  -z-10 md:top-2 md:h-full h-[300px]">
            <img src={dec1} alt="" />
          </div>
          <div className="max-w-[1400px] mx-auto w-full">
            <div className="md:text-[50px] text-[30px] text-center leading-tight mb-3 text-[#92C83E] font-bold">
              Testimonials<span className="block">Voices of Wellness</span>
            </div>
            <div className="max-w-[900px] mx-auto text-center mb-10 paraFont">
              Here, our customers share their genuine experiences and stories of
              transformation. Each testimonial reflects the trust and
              satisfaction we strive to deliver. Discover how we’ve made a
              difference and let us inspire your journey too!.
            </div>
            <div className="md:flex md:justify-center md:items-center gap-10 px-2 md:px-0">
              <div className="h-[600px] w-full md:w-[50%] p-8 overflow-y-auto ScrollBarDesign">
                <div className="space-y-6">
                  {testimonials.map((test) => (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <p className="text-gray-800 italic text-base paraFont">
                        <span>
                          <img src={quotes} alt="" />
                        </span>{" "}
                        "{test.description}"
                      </p>
                      <p className="mt-4 text-right text-gray-600 font-bold text-base">
                        - {test.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-[50%] h-[200px] md:h-[450px] backdrop-blur-[2px] rounded-tl-[60px] rounded-br-[50px] testimon bg-[#ffffffa2] flex justify-center items-center">
                <div className="w-[90%] mx-auto h-[80%]  rounded-tl-[60px] rounded-br-[50px]">
                  <img
                    src={customerreview}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Us */}
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
              Discover the essence of Ayurveda, where ancient wisdom meets
              modern care. From personalized therapies to natural remedies, we
              ensure a path to holistic healing and lasting wellness. Your
              journey to better health starts here.
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
    </>
  );
};

export default Home;
