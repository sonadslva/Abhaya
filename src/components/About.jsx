import React, { useState } from "react";
import ayur1 from '../assets/ayur2.jpg'
import ayurveda3 from '../assets/ayurveda3.png'
import aboutbg from '../assets/slide1.jpg';
import aboutimg1 from '../assets/ayur1.jpg'
import aboutimg2 from '../assets/treat2.png'
import greenWave from "../assets/greenwave.png"
import blackshade from "../assets/black-shade.png"
import whiteWave from "../assets/whitewave.png";
import t1 from "../assets/t1.jpg"
import c1 from "../assets/circle.jpg"
import c2 from "../assets/fac4.jpg"
import ayurBg from "../assets/ayurBg.jpg"
import greenShade from "../assets/black-shade.png"
const Team = () => {
  const [activeDoctor, setActiveDoctor] = useState(null);

  const toggleContent = (doctorIndex) => {
    setActiveDoctor(activeDoctor === doctorIndex ? null : doctorIndex);
  };

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
          <div className="lg:text-[100px] 4xl:text-[150px] text-[50px] font-black text-[#fff] leading-tight banner-title mb-5">
            Where Ancient Wisdom
            <span className="block banner-title">Meets Natural Healing</span>
          </div>
          <div className="px-2 max-w-[1200px] w-full  mx-auto text-[#fff] md:text-xl mb-10 paraFont 4xl:text-2xl">
            Harness the timeless secrets of Ayurveda to restore balance,
            rejuvenate your body, and awaken your inner vitality. Experience
            healing that honors both tradition and nature
          </div>
          <div className="flex justify-center items-center gap-2 md:gap-10">
            <div className="px-10 py-2 rounded-3xl font-bold bg-[#ffffff] text-[#8acb13] drop-shadow-md 4xl:text-xl">
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

      <section className="w-full max-w-[1400px] mx-auto relative px-2 md:px-0 mb-10 md:mb-0">
        <div className="md:flex md:justify-center md:items-center">
          <div className="w-full md:w-[50%] md:h-[450px] 4xl:h-[550px] bg-[#c3995f] py-10 px-6">
            <div className="md:text-[35px] text-[30px] 4xl:text-[50px] leading-tight mb-5 text-[#fff]">
              Healing Naturally, Caring Compassionately
            </div>
            <div className="mb-5 text-[#eaeaea] text-sm md:text-base paraFont 4xl:text-xl">
              <b>Abhaya Ayurveda Hospital</b> is a holistic approach that
              integrates the mind, body, and spirit in all aspects of patient
              care. We believe that every individual has his or her own
              constitution, and it is our's to help everyone achieve their
              maximum health potential.
            </div>
            <div className="mb-5 text-[#f0f0f0] text-sm md:text-base paraFont 4xl:text-xl">
              Our hospital excels in exceptional patient care, advanced
              technology, and a compassionate medical team. With expert doctors,
              modern facilities, and personalized treatments, we prioritize
              safety, comfort, and satisfaction. Trust us for quality healthcare
              and a seamless healing experience.
            </div>
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
            <div className="w-full h-[200px] 4xl:h-[350px] bg-[#92C83E] rounded-tr-[50px] rounded-bl-[50px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-no-repeat overflow-hidden flex object-cover">
              <img
                src={aboutimg1}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full h-[200px] 4xl:h-[350px] bg-[#92C83E] rounded-tl-[50px] rounded-br-[50px] bg-no-repeat overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              <img
                src={aboutimg2}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full h-[200px] 4xl:h-[350px] bg-[#92C83E] rounded-tl-[50px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-br-[50px] bg-no-repeat overflow-hidden">
              <img
                src={aboutimg2}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full h-[200px] 4xl:h-[350px] bg-[#92C83E] rounded-tr-[50px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-bl-[50px] bg-no-repeat overflow-hidden">
              <img
                src={aboutimg1}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="px-2 md:px-0">
            <div className="mb-5 md:text-[50px] 4xl:text-[60px] text-[30px] leading-tight font-bold text-[#fff]">
              Ayurvedic Treatments: Revitalizing Life, Naturally
            </div>
            <div className="text-[#f0efef] text-sm md:text-base paraFont 4xl:text-xl">
              Step into the world of Ayurveda, where ancient therapies harmonize
              with modern life to bring lasting wellness. From easing chronic
              ailments to rejuvenating your body and mind, Ayurvedic treatments
              are rooted in balance and holistic healing. Discover the
              transformative effects of natural remedies and personalized care,
              restoring vitality to your life—one step at a time
              <span className="block mt-5 paraFont">
                From improving digestion and boosting immunity to reducing
                stress and enhancing mental clarity, Ayurveda fosters overall
                wellness. Its therapies, like herbal treatments and rejuvenating
                massages, harmonize the body with nature, offering a sustainable
                path to vitality and balance.
              </span>
            </div>
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
              <h2 className="md:text-4xl 4xl:text-[60px] text-[30px] font-bold text-[#92C83E] mb-4">
                The Science of Ayurveda
              </h2>
              <p className="paraFont md:text-lg text-sm">
                Ayurveda, often referred to as the "Science of Life," is a
                5,000-year-old system of natural healing rooted in ancient
                Indian traditions. It is based on the principle of balancing the
                three doshas—Vata, Pitta, and Kapha—which govern physical and
                mental well-being.
              </p>
              <p className="paraFont md:text-lg text-sm">
                Ayurveda believes in the harmony between mind, body, and spirit
                and offers personalized treatments based on one's dosha.{" "}
                <span className="paraFont block mt-3">
                  This holistic science emphasizes personalized care, using
                  herbal medicines, dietary adjustments, yoga, and detoxifying
                  therapies to restore harmony. Beyond treating illnesses,
                  Ayurveda aims to prevent diseases and promote a balanced,
                  healthy, and fulfilling life by aligning the body, mind, and
                  spirit with nature’s rhythms.
                </span>
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
        {/* Bottom Side */}
        {/* <div className=" absolute rotate-180 bottom-0">
          <img src={bottomSide} alt="" className="opacity-70" />
        </div> */}
      </section>

      <section className="w-full mx-auto relative">
        <div className="py-10 md:pt-20 bg-[#FFF9D9]">
          <div className="md:flex justify-center mb-10 items-center gap-10 px-2 md:px-0 grid grid-cols-1 place-items-center max-w-[1400px] mx-auto">
            <div className="md:w-[50%] w-full relative flex justify-center items-center">
              <div className="hidden md:flex absolute h-[150px] w-[150px] rounded-full top-2 left-20">
                <img src={c1} alt="" className="w-full h-full rounded-full" />
              </div>
              <div className=" absolute h-[150px] w-[150px] rounded-full bg-[#34874a] bottom-0 right-0">
                <img
                  src={c2}
                  alt=""
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div className=" absolute right-10 top-0 w-[70px] h-[70px] rounded-full bg-[#34874a] opacity-50"></div>
              <div className="hidden md:flex absolute left-32 bottom-0 w-[40px] h-[40px] rounded-full bg-[#34874a] opacity-50"></div>
              <div className="w-[300px] md:w-[400px] md:h-[400px] h-[300px] lg:w-[500px] lg:h-[500px] overflow-hidden rounded-full">
                <img
                  src={t1}
                  alt=""
                  className="w-full h-full object-cover right-10"
                />
              </div>
            </div>
            <div className="md:w-[50%]">
              <div className="mb-5 md:text-[50px] text-[30px] leading-tight font-bold">
              Where Care Meets Innovation
              </div>
              <div className="text-sm md:text-base paraFont">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium qui doloremque adipisci veniam! Recusandae veniam
                doloribus architecto, eum labore sint harum ea doloremque nulla
                voluptate amet neque perferendis dolores cum! Neque assumenda
                repudiandae minima quia totam ipsa asperiores tempora
                repellendus, quaerat odit sed optio, fuga eaque? Odio doloremque
                quaerat dolorum, mollitia eos ab neque omnis quis. Velit
                inventore quibusdam explicabo?
                <span className="block mt-5 paraFont">
                  Excepturi, hic minima. Et, minima itaque eaque unde officia
                  velit nam temporibus ipsam culpa fugit cupiditate similique
                  quis ad voluptates est. Odit similique, nulla iure repellat
                  maxime sit cum. Illo?
                </span>
                <span className="block mt-5 paraFont">
                  Facere provident quia praesentium neque nostrum quos pariatur
                  odio eligendi tempora dolorem, ratione non numquam sequi aut
                  perferendis inventore nesciunt magnam quae minima voluptate
                  tenetur molestias sit eveniet. Odio, eveniet?
                </span>
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
  );
};

export default Team;
