import React, { useState, useEffect, useRef } from "react";
import blackshade from "../assets/black-shade.png";
import fac3 from "../assets/fac3.jpg";
import { ImLocation } from "react-icons/im";
import { MdLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import whiteWave from "../assets/beigewaveorg.png";
import dec from "../assets/decorg.png"

import ayurBg from "../assets/ayurBg.jpg"
import greenShade from "../assets/black-shade.png"
import { FaWhatsapp } from "react-icons/fa6";
import contactBg from "../assets/contact.png"
import { TbDeviceLandlinePhone } from "react-icons/tb";
const ContactUs = () => {
  const [result, setResult] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
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

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "99cd9b1b-42f6-4d57-ae7a-f34790b7e745");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        setIsPopupVisible(true); // Show the popup when form is successfully submitted
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setResult("Error submitting form");
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false); // Close the popup when clicked
  };

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
        <a href="https://wa.me/+919048121977">
          <FaWhatsapp />
        </a>
      </div>
      <section className="relative flex flex-col justify-center items-center h-screen z-10 mb-10">
        {/* Background images */}
        <div className="absolute w-full h-full top-0 left-0">
          <img src={blackshade} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute w-full h-full -z-10">
          <img
            src={contactBg}
            alt="ayur"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="absolute z-30 flex flex-col justify-center items-center text-center w-full h-full">
          <div className="md:text-[100px] text-[35px] font-black text-[#fff] leading-tight banner-title mb-5">
            Connect With Us
            <span className="block banner-title">Today!</span>
          </div>
          {/* <div className="px-2 max-w-[1150px] text-sm mx-auto text-[#fff] md:text-xl mb-10 paraFont">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            ratione, hic culpa ullam minus labore veritatis similique aut
            expedita accusantium molestias <span className="hidden md:flex">repudiandae odio corrupti temporibus
            ducimus beatae eligendi dolorum ipsum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quis odio perferendis</span>
          </div> */}
          <div className="flex justify-center items-center gap-2 md:gap-10">
            <div
              onClick={scrollToElement}
              className="px-10 py-2 cursor-pointer rounded-3xl font-bold bg-[#ffffff] text-[#8acb13] drop-shadow-md"
            >
              Discover More
            </div>
          </div>
        </div>
        <div className=" absolute bottom-0 left-0 z-20 right-0 w-full">
          <img src={whiteWave} alt="" className="w-full object-cover" />
        </div>
        <div className="absolute z-10 w-full bottom-[20px] h-auto left-0 right-0 rotate-[184deg] opacity-30">
          <img
            src={whiteWave}
            className="w-full h-auto rotate-180"
            alt=""
          />
        </div>
      </section>

      <section
        id="facilities"
        className="w-full mb-10 flex flex-col justify-center items-center"
      >
        <div className="text-center">
          <div className="text-center font-bold">
            " Connecting You with Solutions - Reach Out to Us Anytime! "
          </div>
          <div className="md:text-[70px] text-[30px] relative paraFont3">
            Get In Touch
            <span className="absolute hidden lg:flex top-0 w-auto h-[60px] md:h-[100px]  right-[-130px]">
              <img src={dec} alt="" className=" w-full h-full object-contain" />
            </span>
            <span className="absolute hidden lg:flex top-[-5px] md:top-[-0px]  left-2 md:left-[-135px] w-auto h-[60px] md:h-[100px]">
              <img
                src={dec}
                alt=""
                className=" w-full h-full transform scale-x-[-1] object-contain"
              />
            </span>
          </div>
        </div>
      </section>

      <section className="w-full mb-10">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="w-full max-w-[1200px] mx-auto md:h-[600px] rounded-3xl grid grid-cols-1 place-items-center md:grid-cols-12">
            {/* Left */}
            <div className="md:col-span-4 h-full w-full rounded-l-3xl relative">
              <div className="w-full hidden md:flex h-full rounded-l-3xl overflow-hidden">
                <img src={fac3} alt="" className="w-full h-full object-cover" />
              </div>
              <div className=" md:absolute md:h-[70%] w-full md:w-[300px] rounded-t-3xl py-10 md:py-0 md:rounded-3xl bg-[#00863c] md:bg-[#000000] left-[-100px] top-24 backdrop-blur-sm flex flex-col justify-center items-center gap-5 paraFont">
                <div className="flex flex-col justify-center items-center px-2 gap-1">
                  <div className="text-[#fff] font-bold text-xl flex items-center gap-2 ">
                    <span>
                      <ImLocation />
                    </span>{" "}
                    Location
                  </div>
                  <div className="text-center text-[14px] text-[#e0dede] ">
                    Mandad, Muttil, Wayanad, Kerala
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center px-2 gap-1">
                  <div className="text-[#fff] font-bold text-xl flex items-center gap-2">
                    <span>
                      <MdLocalPhone />
                    </span>{" "}
                    Phone
                  </div>
                  <div className="text-center text-[14px] text-[#e0dede]">
                    +91 9048121977
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center px-2 gap-1">
                  <div className="text-[#fff] font-bold text-xl flex items-center gap-2">
                    <span>
                      <TbDeviceLandlinePhone />
                    </span>{" "}
                    Landline
                  </div>
                  <div className="text-center text-[14px] text-[#e0dede]">
                    +91 4936231232
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center px-2 gap-1">
                  <div className="text-[#fff] font-bold text-xl flex items-center gap-2">
                    <span>
                      <HiOutlineMail />
                    </span>{" "}
                    Email
                  </div>
                  <div className="text-center text-[14px] text-[#e0dede]">
                    info@abhayaayurveda.com
                  </div>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="col-span-8 h-full w-full bg-[#92c83e] md:rounded-r-3xl rounded-b-3xl py-10 px-5">
              <div className="text-center mb-10 text-[40px] text-[#fff] font-bold">
                Contact Form
              </div>
              <div>
                <form
                  className="flex flex-col justify-center items-center w-full gap-5"
                  onSubmit={onSubmit}
                >
                  <input
                    type="text"
                    placeholder="Full Name..."
                    className="border-none outline-none px-4 py-4 w-full rounded-xl"
                    name="name"
                  />
                  <input
                    type="email"
                    placeholder="Email..."
                    className="border-none outline-none px-4 py-4 w-full rounded-xl"
                    name="email"
                  />
                  <input
                    type="text"
                    placeholder="Subject..."
                    className="border-none outline-none px-4 py-4 w-full rounded-xl"
                  />
                  <textarea
                    id=""
                    placeholder="Message"
                    className="border-none outline-none px-4 py-4 w-full rounded-xl"
                    name="message"
                  ></textarea>
                  <div className="flex justify-center items-center">
                    <button
                      className="px-20 py-3 rounded-3xl bg-[#fff] font-semibold"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {isPopupVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg text-center shadow-lg max-w-sm w-full">
              <p className="text-lg font-semibold text-green-500">{result}</p>
              <button
                onClick={closePopup}
                className="mt-4 py-2 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      <section className="mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62527.187564109496!2d76.0430885!3d11.6269688!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60de3eb355e55%3A0xd3231bf88f22fdbe!2sAbhaya%20Ayurvedic%20Hospital!5e0!3m2!1sen!2sin!4v1736399594403!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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

export default ContactUs;
