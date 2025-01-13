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

const Team = () => {
  const [activeDoctor, setActiveDoctor] = useState(null);

  const toggleContent = (doctorIndex) => {
    setActiveDoctor(activeDoctor === doctorIndex ? null : doctorIndex);
  };

  return (
    <div className="">
      <section className="relative overflow-hidden flex mb-10 flex-col justify-center items-center h-[700px]">
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
          <div className="text-[100px] font-black text-[#fff] leading-tight banner-title mb-5">
            Where Ancient Wisdom
            <span className="block banner-title">Meets Natural Healing</span>
          </div>
          <div className="px-2 max-w-[1150px] mx-auto text-[#fff] md:text-xl mb-10">
            Harness the timeless secrets of Ayurveda to restore balance,
            rejuvenate your body, and awaken your inner vitality. Experience
            healing that honors both tradition and nature
          </div>
          <div className="flex justify-center items-center gap-2 md:gap-10">
            <div className="px-10 py-2 rounded-3xl font-bold bg-[#ffffff] text-[#8acb13] drop-shadow-md">
              Discover More
            </div>
          </div>
        </div>

        <div className=" absolute bottom-0 left-0 right-0 w-full">
          <img src={whiteWave} alt="" className="w-full object-cover" />
        </div>
      </section>

      <section className="w-full max-w-[1400px] mx-auto relative">
        <div className="md:flex md:justify-center md:items-center">
          <div className="w-full md:w-[50%] h-[450px] bg-[#c3995f] py-10 px-6">
            <div className="text-[35px] leading-tight mb-5 text-[#fff]">
              Healing Naturally, Caring Compassionately
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
            <div className="w-full h-[200px] bg-[#92C83E] rounded-tr-[50px] rounded-bl-[50px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-no-repeat overflow-hidden flex object-cover">
              <img
                src={aboutimg1}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full h-[200px] bg-[#92C83E] rounded-tl-[50px] rounded-br-[50px] bg-no-repeat overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              <img
                src={aboutimg2}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full h-[200px] bg-[#92C83E] rounded-tl-[50px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-br-[50px] bg-no-repeat overflow-hidden">
              <img
                src={aboutimg2}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full h-[200px] bg-[#92C83E] rounded-tr-[50px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-bl-[50px] bg-no-repeat overflow-hidden">
              <img
                src={aboutimg1}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="mb-5 text-[50px] leading-tight font-bold text-[#fff]">
              Ayurvedic Treatments: Revitalizing Life, Naturally
            </div>
            <div className="text-[#f0efef]">
              Step into the world of Ayurveda, where ancient therapies harmonize
              with modern life to bring lasting wellness. From easing chronic
              ailments to rejuvenating your body and mind, Ayurvedic treatments
              are rooted in balance and holistic healing. Discover the
              transformative effects of natural remedies and personalized care,
              restoring vitality to your life—one step at a time
              <span className="block mt-5">
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

      <section className=" w-full mx-auto relative">
        <div className="px-4 max-w-[1400px] mx-auto">
          <div className="flex items-center justify-center">
            <div className="md:w-[50%] text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-[#92C83E] mb-4">
                The Science of Ayurveda
              </h2>
              <p className="paraFont text-lg">
              Ayurveda, often referred to as the "Science of Life," is a
                  5,000-year-old system of natural healing rooted in ancient
                  Indian traditions. It is based on the principle of balancing
                  the three doshas—Vata, Pitta, and Kapha—which govern physical
                  and mental well-being.
              </p>
              <p className="paraFont text-lg">
                Ayurveda believes in the harmony between mind, body, and spirit
                and offers personalized treatments based on one's dosha.{" "}
                <span className="paraFont block mt-3">
                   This holistic science emphasizes
                  personalized care, using herbal medicines, dietary
                  adjustments, yoga, and detoxifying therapies to restore
                  harmony. Beyond treating illnesses, Ayurveda aims to prevent
                  diseases and promote a balanced, healthy, and fulfilling life
                  by aligning the body, mind, and spirit with nature’s rhythms.
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
        <div className="pt-[150px] bg-[#FFF9D9]">
          <div className="flex justify-center mb-10 items-center gap-10">
            <div className="md:w-[50%] w-full relative flex justify-center items-center">
              <div className=" absolute h-[150px] w-[150px] rounded-full top-2 left-20">
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
              <div className=" absolute left-32 bottom-0 w-[40px] h-[40px] rounded-full bg-[#34874a] opacity-50"></div>
              <div className="w-[300px] md:w-[400px] md:h-[400px] h-[300px] lg:w-[500px] lg:h-[500px] overflow-hidden rounded-full">
                <img
                  src={t1}
                  alt=""
                  className="w-full h-full object-cover right-10"
                />
              </div>
            </div>
            <div className="md:w-[50%]">
              <div className="mb-5 text-[30px] font-bold">
                Lorem ipsum dolor sit amet consectetur
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium qui doloremque adipisci veniam! Recusandae veniam
                doloribus architecto, eum labore sint harum ea doloremque nulla
                voluptate amet neque perferendis dolores cum! Neque assumenda
                repudiandae minima quia totam ipsa asperiores tempora
                repellendus, quaerat odit sed optio, fuga eaque? Odio doloremque
                quaerat dolorum, mollitia eos ab neque omnis quis. Velit
                inventore quibusdam explicabo?
                <span className="block mt-5">
                  Excepturi, hic minima. Et, minima itaque eaque unde officia
                  velit nam temporibus ipsam culpa fugit cupiditate similique
                  quis ad voluptates est. Odit similique, nulla iure repellat
                  maxime sit cum. Illo?
                </span>
                <span className="block mt-5">
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
    </div>
  );
};

export default Team;
