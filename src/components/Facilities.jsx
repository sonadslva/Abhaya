import React ,{useState} from "react";
import img1 from "../assets/abhayaroom2.jpeg";
import img2 from "../assets/abhayaroom3.jpeg";
import img3 from "../assets/abhayaroom4.jpg";
import img4 from "../assets/abhayaroom5.jpeg";
import img5 from "../assets/abhayaroom6.jpeg";
import img6 from "../assets/abhayaroom7.jpeg";
import img7 from '../assets/abhayatreatment.jpeg';
import img8 from '../assets/abhayatreatmentroom.jpg'
import img9 from '../assets/abhayarooms1.jpg'
import blackshade from "../assets/black-shade.png"
import small from "../assets/small.png"
import beigewaveorg from "../assets/beigewaveorg.png"
import fac1 from "../assets/fac1.jpg"
import fac2 from "../assets/fac2.jpg"
import fac3 from "../assets/fac3.jpg"
import fac4 from "../assets/fac4.jpg"
import facwave from "../assets/facwave.png"
import bgimg from "../assets/bgimg.png"
import slide2 from "../assets/b1.jpg"
import ayurBg from "../assets/ayurBg.jpg"
import greenShade from "../assets/black-shade.png"
const Facilities = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: img1, alt: "Image 1" },
    { id: 2, src: img3, alt: "Image 2" },
    { id: 3, src: img5, alt: "Image 3" },
    { id: 4, src: img7, alt: "Image 4" },
    { id: 5, src: img6, alt: "Image 5" },
    { id: 6, src: img4, alt: "Image 6" },
    { id: 7, src: img8, alt: "Image 8" },
    { id: 8, src: img9, alt: "Image 9" },
    { id: 9, src: img2, alt: "Image 2" },

  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  
  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div>
      <section className="relative overflow-hidden flex flex-col justify-center items-center h-screen">
        {/* Background images */}
        <div className="absolute w-full h-full top-0 left-0">
          <img src={blackshade} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute w-full h-full -z-10">
          <img src={slide2} alt="ayur" className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="absolute z-30 flex flex-col justify-center items-center text-center w-full h-full">
          <div className="md:text-[100px] text-[50px] font-black text-[#fff] leading-tight banner-title mb-5">
            Lorem ipsum dolor sit{" "}
            <span className="block banner-title">amet consectetur</span>
          </div>
          <div className="px-2 max-w-[1150px] mx-auto text-sm paraFont text-[#fff] md:text-xl mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            ratione, hic culpa ullam minus labore veritatis similique aut
            expedita accusantium molestias repudiandae odio corrupti temporibus
            ducimus beatae eligendi dolorum ipsum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quis odio perferendis
          </div>
          <div className="flex justify-center items-center gap-2 md:gap-10">
            <div className="px-10 py-2 rounded-3xl font-bold bg-[#ffffff] text-[#8acb13] drop-shadow-md">
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

      <section className="w-full bg-[#f1dace] relative py-10 mb-10 md:mb-0">
        <div className="w-full max-w-[1400px] m-auto">
          <div className="grid grid-cols-1 w-full place-items-center md:grid-cols-2 gap-10 px-2 md:px-0">
            {/* Left */}
            <div className=" w-full grid grid-cols-2 md:grid-cols-2 gap-3 relative z-40 overflow-y-scroll max-h-[800px] no-scrollbar ">
              <div className=" flex flex-col w-full gap-3 pt-20">
                <div className="w-full h-[400px] rounded-tr-[30px] rounded-bl-[30px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] overflow-hidden relative">
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
                </div>
                <div className="w-full h-[400px] rounded-tl-[30px] rounded-br-[30px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] overflow-hidden relative">
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
                </div>
              </div>
              <div className="flex flex-col gap-3 ">
                <div className="w-full h-[400px] rounded-tl-[30px] rounded-br-[30px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] overflow-hidden relative">
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
                </div>
                <div className="w-full h-[400px] rounded-tr-[30px] rounded-bl-[30px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] overflow-hidden relative">
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
                </div>
              </div>
            </div>
            {/* Right */}
            <div>
              <div className="text-[#202020] font-semibold text-sm md:text-base">
                Lorem ipsum dolor sit
              </div>
              <div className="font-bold md:text-[50px] text-[30px] leading-tight text-[#053630]">
                Lorem ipsum dolor sit
              </div>
              <div className="font-semibold text-[#202020] text-sm md:text-base flex justify-end mb-5">
                Lorem ipsum dolor sit Lorem ipsum dolor sit
              </div>
              <div className="mb-10 text-sm md:text-base paraFont">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                odit, ad nesciunt aperiam quae exercitationem eligendi ex
                voluptate. Nostrum porro voluptates perferendis illum esse
                cumque, neque voluptatibus tenetur nulla ipsam?
              </div>
              <div className="flex flex-col justify-center gap-5">
                <div className="px-4 py-5 rounded-tl-3xl paraFont rounded-br-3xl backdrop-blur-sm bg-[#ffffff74] relative">
                  <span className="w-[40px] h-[40px] absolute right-0 top-[-15px]">
                    <img
                      src={small}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </span>{" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                  vero Lorem
                </div>
                <div className="px-4 py-5 paraFont rounded-tl-3xl rounded-br-3xl backdrop-blur-sm bg-[#ffffff74] relative">
                  <span className="w-[40px] h-[40px] absolute right-0 top-[-15px]">
                    <img
                      src={small}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </span>{" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                  vero Lorem
                </div>
                <div className="px-4 py-5 paraFont rounded-tl-3xl rounded-br-3xl backdrop-blur-sm bg-[#ffffff74] relative">
                  <span className="w-[40px] h-[40px] absolute right-0 top-[-15px]">
                    <img
                      src={small}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </span>{" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                  vero Lorem
                </div>
                <div className="px-4 paraFont py-5 rounded-tl-3xl rounded-br-3xl backdrop-blur-sm bg-[#ffffff74] relative">
                  <span className="w-[40px] h-[40px] absolute right-0 top-[-15px]">
                    <img
                      src={small}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </span>{" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                  vero Lorem
                </div>
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
              <div className="w-full h-[330px] p-4 border-[#8acb13] border border-[ridge] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                <div
                  key={image.id}
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

export default Facilities;
