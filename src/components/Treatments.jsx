import React, { useState } from "react";
import backpain from "../assets/backpain.jpg";
import neckpain from "../assets/neckpain.jpg";
import hairfall from "../assets/hairfall.jpg";
import legpain from "../assets/legpain.jpeg";
import migraine from "../assets/migrain.jpg";
import women from "../assets/women.jpeg";
import frozensholder from "../assets/frozensholder.jpg";
import childcare from "../assets/childcare.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Dhara from "../assets/Dharaa.jpg";
import navarakizi from "../assets/navarakizhi.jpg";
import elakizhi from "../assets/elakizhi.jpg";
import pizhichil from "../assets/pizichill.jpg";
import Shirodhara from "../assets/Shirodhara.jpg";
import kashayadhara from "../assets/kashayadhara.jpg";
import ayurvedicmassage from "../assets/ayurvedicmassage.jpg";
import nasyam from "../assets/nasyam.jpg";
import whiteWave from "../assets/whitewave.png";
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
import tbg from "../assets/tbg.jpg";


const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default middle card index
  const [visibleIndex, setVisibleIndex] = useState(0);

  const handleNext = () => {
    if (visibleIndex < 6) setVisibleIndex(visibleIndex + 1);
  };

  const handlePrev = () => {
    if (visibleIndex > 0) setVisibleIndex(visibleIndex - 1);
  };
  const services = [
    {
      title: "Dhara",
      overview:
        "Dhara is a therapeutic procedure where medicated liquids such as herbal oils, milk, or buttermilk are poured steadily over specific body parts or the entire body.",
      benefits:
        "Improves blood circulation, relaxes the mind, and alleviates stress-related disorders like insomnia and anxiety.",
      uses: "Used to treat neurological disorders, skin conditions, and joint pain.",
      image: Dhara,
    },
    {
      title: "Navarakizhi",
      overview:
        "A rejuvenation therapy where a bolus of cooked medicinal rice (Navara) is dipped in herbal decoctions and milk, then massaged over the body.",
      benefits:
        "Enhances skin texture, boosts immunity, and strengthens muscles.",
      uses: "Recommended for neurological disorders, rheumatism, and post-natal care.",
      image: navarakizi,
    },
    {
      title: "Elakizhi",
      overview:
        "A technique where a bolus filled with medicinal leaves is heated and used to massage the body.",
      benefits:
        "Reduces joint pain, improves muscle flexibility, and promotes detoxification.",
      uses: "Often used for arthritis, back pain, and sports injuries.",
      image: elakizhi,
    },
    {
      title: "Pizhichil",
      overview:
        "Known as 'Thailadhara,' Pizhichil involves pouring warm medicated oils continuously over the body while simultaneously performing a gentle massage.",
      benefits:
        "Enhances blood circulation, soothes the nervous system, and promotes skin health.",
      uses: "Treats paralysis, arthritis, and nervous disorders.",
      image: pizhichil,
    },
    {
      title: "Shirodhara",
      overview:
        "A relaxation therapy where a continuous stream of warm herbal oil or milk is poured over the forehead (third eye region).",
      benefits: "Calms the mind, improves sleep quality, and reduces stress.",
      uses: "Treats insomnia, depression, and anxiety-related conditions.",
      image: Shirodhara,
    },
    {
      title: "Kashaya Dhara",
      overview:
        "A variation of Dhara that uses herbal decoctions (kashaya) instead of oils. These decoctions are customized based on the individual's health condition.",
      benefits:
        "Detoxifies the body, improves skin health, and reduces inflammation.",
      uses: "Ideal for conditions like arthritis, psoriasis, and muscle stiffness.",
      image: kashayadhara,
    },
    {
      title: "Ayurvedic Massage",
      overview:
        "A therapeutic massage using herbal oils tailored to the individual's dosha (body constitution).",
      benefits:
        "Relieves stress, improves blood circulation, and revitalizes the skin.",
      uses: "Effective for pain management, fatigue, and overall relaxation.",
      image: ayurvedicmassage,
    },
    {
      title: "Nasyam",
      overview:
        "A nasal treatment where herbal oils or powders are administered through the nostrils.",
      benefits:
        "Clears sinus blockages, improves respiratory health, and enhances cognitive function.",
      uses: "Effective for sinusitis, migraines, and chronic headaches.",
      image: nasyam,
    },
  ];

  const treatmentsLists = [
    {
      title: "Back Pain",
      img: backpain,
      sub: "Ayurvedic Treatment for Back Pain",
    },
    {
      title: "Neck Pain",
      img: neckpain,
      sub: "Ayurvedic Treatment for Neck Pain",
    },
    {
      title: "Child Illness",
      img: childcare,
      sub: "Ayurvedic Treatment for Child Illness",
    },
    {
      title: "Leg Pain",
      img: legpain,
      sub: "Ayurvedic Treatment for Leg Pain",
    },
    {
      title: "Hair Fall",
      img: hairfall,
      sub: "Ayurvedic Treatment for Hair Fall",
    },
    {
      title: "Frozen Sholder",
      img: frozensholder,
      sub: "Ayurvedic Treatment for Frozen Sholder",
    },
    {
      title: "Migraine",
      img: migraine,
      sub: "Ayurvedic Treatment for Migrain",
    },
    {
      title: "Women",
      img: women,
      sub: "Ayurvedic Treatment for Women Diseases",
    },
  ];
  const openModal = (item) => {
    setSelectedTreatment(item);
  };

  const closeModal = () => {
    setSelectedTreatment(null);
  };
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  return (
    <div className="flex flex-col overflow-hidden">
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
            <div className="md:text-[100px] text-[35px] font-black text-[#fff] leading-tight banner-title md:mb-5 mb-2">
              Ayurveda – The Science of Life,
              <span className="block banner-title">
                Healing Beyond Boundaries
              </span>
            </div>
            <div className="px-2 max-w-[1150px] mx-auto text-sm lg:text-base text-[#fff] md:text-xl mb-10 paraFont">
              Discover the profound healing power of Ayurveda, an ancient
              practice that nurtures both body and mind. At Abhaya Ayurvedic we
              believe in restoring harmony through nature’s wisdom. <span className="hidden md:flex">Our
              treatments are designed to not just alleviate symptoms, but to
              bring about deep, lasting wellness. Every therapy is a step
              towards your holistic well-being, helping you live life in balance
              and vitality.</span>
            </div>
            <div className="flex justify-center items-center gap-2 md:gap-10">
              <div className="px-10 py-2 rounded-3xl font-bold bg-[#ffffff] text-[#8acb13] drop-shadow-md">
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

      {/* Treatment */}

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
            <div className="">
              <div className="w-[400px] h-[550px] bg-[#bc5555] relative">
                <img
                  src={treat7}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-[400px] h-[550px] md:mt-28 bg-[#621313] relative">
              <img src={middle} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[400px] h-[550px] md:mt-60 bg-[#393838] relative">
              <img src={treat6} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className=" absolute bottom-0 left-2 w-[250px] h-[250px] hidden md:flex rounded-full overflow-hidden">
            <img src={aaa} alt="" />
          </div>
          <div></div>
        </div>
      </section>

      <section
        className="mb-20 relative py-10 bg-[#FFF9D9]"
        id="treatment-treatments"
      >
        <div className=" h-[700px]">
          <div className="md:text-[50px] text-[30px] font-bold text-center mb-3">
            Our Treatments
          </div>
          <div className="mb-10 text-center max-w-[1000px] mx-auto text-sm md:text-base px-1 md:px-0 paraFont">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, sapiente soluta rem quae suscipit distinctio error quam
            quos neque iure debitis totam facere esse animi provident tempore
            laboriosam perspiciatis cum. Saepe beatae iusto ad, odio iste
            reiciendis blanditiis, dolorem recusandae a accusamus expedita et
            alias similique? Aspernatur doloremque repellat sint placeat sequi
            omnis nisi quidem tempora. Fuga libero aperiam odio?
          </div>
          {/* Slider */}
          <div className="w-full flex justify-center items-center max-w-[1400px] mx-auto">
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
              {treatmentsLists.map((item, i) => (
                <SwiperSlide key={i}>
                  <div
                    className={`w-full flex flex-col items-center rounded-tr-[] justify-center transition-all duration-500 relative ${
                      activeIndex === i ? "h-[400px]" : "h-[300px] mt-[50px]"
                    }`}
                  >
                    <img
                      src={blackshade}
                      className="top-0 bottom-0 right-0 left-0 absolute w-full h-full object-cover opacity-70"
                      alt=""
                    />
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                    <div className=" absolute bottom-5 flex flex-col justify-center items-center">
                      <h3 className="text-white font-bold text-lg mt-4">
                        {item.title}
                      </h3>
                      <p className="text-white text-sm">{item.sub}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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

      <section className="w-full relative overflow-hidden mb-20">
        <div className=" absolute top-0 bottom-0 left-0 right-0 -z-10 opacity-60 w-full">
          <img
            src={bottomSide}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="max-w-[1400px] mx-auto">
          <div className="md:text-[50px] text-[30px] font-bold text-center mb-2">
            Lorem ipsum dolor sit
          </div>
          <div className="text-center max-w-[1000px] mx-auto text-sm md:text-base px-2 md:px-0 paraFont">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            consequatur dolores harum nihil soluta id, quo quae repellat quasi
            provident, odit aliquam adipisci sunt laborum vero, repellendus illo
            praesentium Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Tenetur dicta eum nihil veritatis similique, labore omnis
            exercitationem numquam nisi error eius non vel nostrum corrupti
            corporis. Nemo, obcaecati! Quo, fugit.
          </div>
        </div>
      </section>

      <section className="w-full mb-10 py-10 px-2 md:px-0">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 md:gap-20 gap-32 max-w-[1400px] mx-auto">
            {services.map((item) => (
              <div className="w-full md:h-[350px] h-[300px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] relative rounded-br-[50px] px-4 py-5">
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
                <div className=" absolute md:top-[-50px] top-[-80px] left-0 w-[170px] h-[150px] bg-[#15f3ff] rounded-tr-[30px]">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[#000] text-3xl font-bold flex justify-center mb-2 md:mb-5 text-center pt-14 md:pt-10">
                  {item.title}
                </div>
                <div className="flex md:mb-5 mb-2 text-sm md:text-base text-center md:text-start paraFont">{item.overview}</div>
                <div className="flex flex-col gap-2">
                  <div className="font-bold">Benefits : </div>
                  <div className="paraFont text-sm md:text-base">{item.benefits}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
