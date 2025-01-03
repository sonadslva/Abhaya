import React, { useState } from "react";

import backpain from "../assets/backpain.jpg";
import neckpain from "../assets/neckpain.jpg";
import hairfall from "../assets/hairfall.jpg";
import legpain from "../assets/legpain.jpeg";
import migraine from "../assets/migrain.jpg";
import women from "../assets/women.jpeg";
import frozensholder from "../assets/frozensholder.jpg";
import childcare from "../assets/childcare.jpg";
import Ayurvedic1 from "../assets/ayurvedic-header.jpg";
import Ayurvedic2 from "../assets/Ayurvedic-Treatment-in-Kerala.jpg";
import Ayurvedic3 from "../assets/Treatment.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Dhara from "../assets/Dharaa.jpg";
import img from "../assets/img.jpg";
import navarakizi from "../assets/navarakizhi.jpg";
import elakizhi from "../assets/elakizhi.jpg";
import pizhichil from '../assets/pizichill.jpg'
import Shirodhara from '../assets/Shirodhara.jpg'
import kashayadhara from '../assets/kashayadhara.jpg'
import ayurvedicmassage from '../assets/ayurvedicmassage.jpg'
import nasyam from '../assets/nasyam.jpg'
const Team = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const handleNext = () => {
    if (visibleIndex < 6) setVisibleIndex(visibleIndex + 1);
  };

  const handlePrev = () => {
    if (visibleIndex > 0) setVisibleIndex(visibleIndex - 1);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-full bg-neutral-200">
        <section>
          <div className="w-full ">
            <img
              src={img}
              alt="ayur"
              className="w-full h-[600px] flex object-cover"
            />
          </div>
        </section>
      </div>

      {/* treatment */}
      <section className="w-full h-full bg-pink-100 py-16">
        <div className="container mx-auto px-6 relative overflow-hidden  w-[1200px]">
          <h1 className="text-center text-2xl font-bold mb-8">
            TREATMENTS AVAILABLE
          </h1>
          <div className="flex items-center relative">
            <button
              onClick={handlePrev}
              disabled={visibleIndex === 0}
              className="absolute left-0 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400 focus:outline-none disabled:opacity-50 z-10"
            >
              ←
            </button>
            <div
              className="flex transition-transform duration-300 "
              style={{ transform: `translateX(-${visibleIndex * 150}px)` }}
            >
              <div className="p-6 rounded-lg  shadow-md text-center w-[300px] flex-shrink-0">
                <img
                  src={backpain}
                  alt="Ayurvedic Treatment for Back Pain"
                  className="w-full h-48 object-cover rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold">
                  Ayurvedic Treatment for Back Pain
                </h4>
                <p className="mt-4 text-gray-600 text-sm">
                  Tailored therapies including Abhyanga (herbal oil massage) and
                  Kati Basti to alleviate back pain and improve spinal health.
                </p>
              </div>
              <div className="p-6 rounded-lg  shadow-md text-center w-[300px] flex-shrink-0">
                <img
                  src={neckpain}
                  alt="Ayurvedic Treatment for Neck Pain"
                  className="w-full h-48 object-cover rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold">
                  Ayurvedic Treatment for Neck Pain
                </h4>
                <p className="mt-4 text-gray-600 text-sm">
                  Therapies such as Greeva Basti relieve neck stiffness and
                  improve mobility.
                </p>
              </div>
              <div className="p-6 rounded-lg  shadow-md text-center w-[300px] flex-shrink-0">
                <img
                  src={childcare}
                  alt="Ayurvedic Treatment for Child Illness"
                  className="w-full h-48 object-cover rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold">
                  Ayurvedic Treatment for Child Illness
                </h4>
                <p className="mt-4 text-gray-600 text-sm">
                  Pediatric Ayurvedic care includes herbal remedies, oil
                  massages, and dietary guidance to enhance immunity.
                </p>
              </div>
              <div className="p-6 rounded-lg  shadow-md text-center w-[300px] flex-shrink-0">
                <img
                  src={legpain}
                  alt="Ayurvedic Treatment for Leg Pain"
                  className="w-full h-48 object-cover rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold">
                  Ayurvedic Treatment for Leg Pain
                </h4>
                <p className="mt-4 text-gray-600 text-sm">
                  Therapies such as Janu Basti target leg pain, improve
                  circulation, and address muscle stiffness.
                </p>
              </div>
              <div className="p-6 rounded-lg  shadow-md text-center w-[300px] flex-shrink-0">
                <img
                  src={frozensholder}
                  alt="Ayurvedic Treatment for Frozen Shoulder"
                  className="w-full h-48 object-cover rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold">
                  Ayurvedic Treatment for Frozen Shoulder
                </h4>
                <p className="mt-4 text-gray-600 text-sm">
                  Specialized treatments like Pichu reduce shoulder stiffness
                  and restore mobility.
                </p>
              </div>
              <div className="p-6 rounded-lg  shadow-md text-center w-[300px] flex-shrink-0">
                <img
                  src={hairfall}
                  alt="Ayurvedic Treatment for Hairfall and Dandruff"
                  className="w-full h-48 object-cover rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold">
                  Ayurvedic Treatment for Hairfall and Dandruff
                </h4>
                <p className="mt-4 text-gray-600 text-sm">
                  Shirodhara and herbal scalp treatments promote hair growth and
                  combat dandruff.
                </p>
              </div>
              <div className="p-6 rounded-lg  shadow-md text-center w-[300px] flex-shrink-0">
                <img
                  src={migraine}
                  alt="Ayurvedic Treatment for Migraine"
                  className="w-full h-48 object-cover rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold">
                  Ayurvedic Treatment for Migraine
                </h4>
                <p className="mt-4 text-gray-600 text-sm">
                  Shirodhara, Nasya, and herbal formulations are used to
                  alleviate migraine pain.
                </p>
              </div>
              <div className="p-6 rounded-lg  shadow-md text-center w-[300px] flex-shrink-0">
                <img
                  src={women}
                  alt="Ayurvedic Treatment for Women Illness"
                  className="w-full h-48 object-cover rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold">
                  Ayurvedic Treatment for Women Illness
                </h4>
                <p className="mt-4 text-gray-600 text-sm">
                  Treatments focus on menstrual irregularities, hormonal
                  balance, and overall reproductive health.
                </p>
              </div>
            </div>
            <button
              onClick={handleNext}
              disabled={visibleIndex >= 6}
              className="absolute right-0 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400 focus:outline-none disabled:opacity-50 z-10"
            >
              →
            </button>
          </div>
        </div>
      </section>
      {/* services */}
      <section className="flex items-center justify-center p-6 bg-gray-100">
  <div className="grid grid-cols-1 gap-8">
    {[
      {
        title: "Dhara",
        overview:
          "Dhara is a therapeutic procedure where medicated liquids such as herbal oils, milk, or buttermilk are poured steadily over specific body parts or the entire body.",
        benefits:
          "Improves blood circulation, relaxes the mind, and alleviates stress-related disorders like insomnia and anxiety.",
        uses:
          "Used to treat neurological disorders, skin conditions, and joint pain.",
        image: Dhara,
      },
      {
        title: "Navarakizhi",
        overview:
          "A rejuvenation therapy where a bolus of cooked medicinal rice (Navara) is dipped in herbal decoctions and milk, then massaged over the body.",
        benefits:
          "Enhances skin texture, boosts immunity, and strengthens muscles.",
        uses:
          "Recommended for neurological disorders, rheumatism, and post-natal care.",
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
        benefits:
          "Calms the mind, improves sleep quality, and reduces stress.",
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
    ].map((service, index) => (
      <div
        key={index}
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-lg overflow-hidden transition-transform transform hover:scale-105 rounded-lg w-[1200px]`}
      >
        <div className="flex flex-col justify-center p-6 space-y-4">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2 text-center md:text-left">{service.title}</h2>
          <div>
            <h3 className="text-lg font-semibold paraFont mb-1">Overview</h3>
            <p className="text-gray-600 leading-relaxed paraFont text-base">{service.overview}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold paraFont mb-1">Benefits</h3>
            <p className="text-gray-600 leading-relaxed paraFont text-base">{service.benefits}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold paraFont mb-1">Common Uses</h3>
            <p className="text-gray-600 leading-relaxed paraFont text-base">{service.uses}</p>
          </div>
        </div>
        <div className=" f-full flex items-center justify-center p-4">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-[350px]  flex object-cover rounded-md shadow-sm border border-gray-200"
          />
        </div>
      </div>
    ))}
  </div>
</section>


      {/* disease */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 ml-20 mr-20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0">
            {/* Left: Text and List Section */}
            <div className="md:w-[50%] text-center md:text-left">
              <h2 className="text-4xl font-extrabold text-green-600 mb-6">
                Abhaya Ayurveda Hospital
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                Offers effective and result-based Panchakarma & Ayurveda
                treatments for various health concerns.
              </p>

              <ol className="list-none space-y-4 text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-10">
                  {/* Left Column */}
                  <div className="space-y-2">
                    <li className="flex items-center text-lg text-gray-700">
                      <span className="mr-2 text-blue-500">➤</span>
                      Back Pain
                    </li>
                    <li className="flex items-center text-lg text-gray-700">
                      <span className="mr-2 text-blue-500">➤</span>
                      Knee Pain
                    </li>
                    <li className="flex items-center text-lg text-gray-700">
                      <span className="mr-2 text-blue-500">➤</span>
                      Joint Pain
                    </li>
                    <li className="flex items-center text-lg text-gray-700">
                      <span className="mr-2 text-blue-500">➤</span>
                      Diabetes
                    </li>
                    <li className="flex items-center text-lg text-gray-700">
                      <span className="mr-2 text-blue-500">➤</span>
                      Asthma
                    </li>
                    <li className="flex items-center text-lg text-gray-700">
                      <span className="mr-2 text-blue-500">➤</span>
                      Obesity
                    </li>
                    <li className="flex items-center text-lg text-gray-700">
                      <span className="mr-2 text-blue-500">➤</span>
                      Cholesterol
                    </li>
                  </div>
                  {/* Right Column */}
                  <div className="space-y-2">
                    <li className="flex items-center text-lg text-gray-700">
                      <span className="mr-2 text-blue-500">➤</span>
                      Sinusitis
                    </li>
                    <li className="flex items-center text-lg text-gray-700">
                      <span className="mr-2 text-blue-500">➤</span>
                      Migraine
                    </li>
                    <li className="flex items-center text-lg text-gray-700">
                      <span className="mr-2 text-blue-500">➤</span>
                      Infertility
                    </li>
                    <li className="flex items-center text-lg text-gray-700">
                      <span className="mr-2 text-blue-500">➤</span>
                      Arthritis
                    </li>
                    <li className="flex items-center text-lg text-gray-700">
                      <span className="mr-2 text-blue-500">➤</span>
                      Osteoarthritis
                    </li>
                    <li className="flex items-center text-lg text-gray-700">
                      <span className="mr-2 text-blue-500">➤</span>
                      Rheumatoid Arthritis
                    </li>
                    <li className="flex items-center text-lg text-gray-700">
                      <span className="mr-2 text-blue-500">➤</span>
                      Neck Pain
                    </li>
                  </div>
                </div>
              </ol>
            </div>

            {/* Right: Image Section */}
            <div className="md:w-[50%] flex justify-center">
              <img
                src={Ayurvedic1}
                alt="Ayurveda Treatment"
                className="rounded-tl-[200px] rounded-bl-[200px] shadow-2xl transform hover:scale-105 transition duration-300 mr-[200px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
