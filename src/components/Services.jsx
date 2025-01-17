import React from "react";
import service from '../assets/service.jpeg'
import { FaWhatsapp } from "react-icons/fa6";
const AyurvedaService = () => {
  const services = [
    {
      img: service, 
      title: "Abhyanga (Ayurvedic Massage)",
      description:
        "A rejuvenating full-body massage with herbal oils to promote relaxation, detoxification, and improved blood circulation.",
    },
    {
      img: service, 
      title: "Shirodhara Therapy",
      description:
        "A calming treatment where warm herbal oil is poured on the forehead to relieve stress, improve sleep, and enhance mental clarity.",
    },
    {
      img: service,
      title: "Panchakarma Detox",
      description:
        "A five-step purification therapy to eliminate toxins from the body and restore balance in the mind and body.",
    },
    {
      img: service, 
      title: "Herbal Steam Bath",
      description:
        "A therapeutic steam bath infused with medicinal herbs to detoxify the skin and relieve joint pain.",
    },
   
  ];

  return (
    <div className="bg-gray-100 py-12 px-5">
        <div className="fixed bottom-10 right-10 z-[999] text-[#fff] bg-[#58F978] p-2 rounded-full text-[50px]">
                <a href="tel:+919048121977">
                  <FaWhatsapp />
                </a>
              </div>
        <div className="mb-10"></div>
    <div className="bg-gray-50 py-10 px-5">
      <h1 className="text-center text-3xl font-bold text-green-800 mb-8">
        Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden w-[300px]"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-green-700">
                {service.title}
              </h2>
              <p className="text-gray-700 mt-2 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AyurvedaService;
