import React,{ useState } from "react";
import pback from "../assets/pback.jpg";
import blackshade from "../assets/black-shade.png"
import leaf3 from "../assets/leaf3.png"
import b2 from "../assets/b2.jpg"
import whiteWave from "../assets/whitewave.png";
import p1 from "../assets/p1.jpg"
import p2 from "../assets/p2.jpg"
import treat from "../assets/treat5.jpg"
import treat1 from "../assets/pack1.jpg"
import treat2 from "../assets/treat1.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Packages = () => {

  const packageLists = [
    {content : "HEALTH IN YOUR HANDS THE RIGHT CAREAT THE RIGHT TIME", image : treat, sub : "HEALTH CARE", subDesc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex consectetur voluptatibus velit, nihil quas deserunt nulla, quo beatae earum molestias aperiam exercitationem. Voluptatem qui voluptatum, illum repellendus aspernatur ab.", price : "3200" },
    {content : "HEALTH IN YOUR HANDS THE RIGHT CAREAT THE RIGHT TIME", image : treat1, sub : "HEALTH CARE", subDesc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex consectetur voluptatibus velit, nihil quas deserunt nulla, quo beatae earum molestias aperiam exercitationem. Voluptatem qui voluptatum, illum repellendus aspernatur ab.", price : "3200" },
    {content : "HEALTH IN YOUR HANDS THE RIGHT CAREAT THE RIGHT TIME", image : treat2, sub : "HEALTH CARE", subDesc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex consectetur voluptatibus velit, nihil quas deserunt nulla, quo beatae earum molestias aperiam exercitationem. Voluptatem qui voluptatum, illum repellendus aspernatur ab.", price : "3200" },
  ]

  return (
    <div>
      <section className="relative overflow-hidden flex flex-col justify-center items-center h-[700px]">
        {/* Background images */}
        <div className="absolute w-full h-full top-0 left-0">
          <img src={blackshade} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute w-full h-full -z-10 bottom-19">
          <img src={b2} alt="ayur" className="w-full h-full object-cover  " />
        </div>

        {/* Content */}
        <div className="absolute z-30 flex flex-col justify-center items-center text-center w-full h-full">
          <div className="text-[100px] font-black text-[#fff] leading-tight banner-title mb-5">
            Lorem ipsum dolor sit{" "}
            <span className="block banner-title">amet consectetur</span>
          </div>
          <div className="px-2 max-w-[1150px] mx-auto text-[#fff] md:text-xl mb-10">
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
          <img src={whiteWave} alt="" className="w-full object-cover" />
        </div>
      </section>

      <section className=" relative w-full mb-20 flex justify-center flex-col items-center">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 gap-10">
            {/* left */}
            <div className=" relative flex justify-center items-center gap-5">
              <div className=" absolute bg-[#fff] p-3 w-[50%] drop-shadow-2xl">
                <div className="p-2 border border-[#6bcb1c] flex flex-col justify-center items-center">
                  <div className="w-auto h-[40px] mb-2">
                    <img
                      src={leaf3}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="leading-tight text-center mb-2 font-bold">
                    Renew Yourself <span className="block">With Ayurveda</span>
                  </div>
                  <div className="text-sm px-2 text-center font-extralight">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Reprehenderit
                  </div>
                </div>
              </div>
              <div className="md:w-[50%] h-[450px] w-full overflow-hidden rounded-tl-[50px] shadow-lg">
                <img src={p1} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-[450px] md:w-[50%] overflow-hidden rounded-br-[50px] shadow-lg">
                <img src={p2} alt="" className="h-full w-full object-cover" />
              </div>
            </div>
            {/* right */}
            <div className="w-full h-[500px] rounded-xl overflow-hidden">
              <div>
                <div className="text-base font-semibold text-[#b0e51e]">
                  Lorem ipsum dolor sit
                </div>
                <div className="text-[35px] font-bold">
                  Lorem ipsum dolor sit
                </div>
                <div className="font-semibold mb-6">
                  Lorem ipsum dolor sit amet consectetur
                </div>
                <div className="mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus voluptatibus mollitia cum consectetur laboriosam
                  recusandae qui iure sequi numquam commodi minus, quod
                  doloribus soluta officia voluptatum architecto, sed quo natus.
                  Deleniti, facilis maiores. Magni vel molestias consectetur,
                  quos non maxime porro repudiandae voluptatem voluptates quasi
                  atque dignissimos natus quaerat. Explicabo architecto aut
                  rerum in, nulla deleniti enim porro hic debitis.
                </div>
                <ul className="flex flex-col gap-2 w-full text-base">
                  <li className="px-4 rounded-xl py-4 w-full border backdrop-blur-lg drop-shadow-sm bg-[#b0e51e] text-[#fff]">
                    Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor
                    ipsum dolor
                  </li>
                  <li className="px-4 rounded-xl py-4 w-full border backdrop-blur-lg bg-[#b0e51e] drop-shadow-sm text-[#fff]">
                    Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor
                    ipsum dolor
                  </li>
                  <li className="px-4 rounded-xl py-4 w-full border backdrop-blur-lg bg-[#b0e51e] drop-shadow-sm text-[#fff]">
                    Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor
                    ipsum dolor
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" w-full py-20 flex flex-col justify-center items-center bg-[#FFF9D9]">
      <div className="max-w-[1400px] mx-auto">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
        >
          {packageLists.map((list, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 transition-all duration-500">
                <div className="text-[50px] leading-tight">
                  HEALTH IN <span className="block">YOUR HANDS</span>
                  <span className="block">THE RIGHT CARE</span>
                  <span className="block">AT THE RIGHT TIME</span>
                </div>
                <div className="p-2 rounded-full w-full md:w-[80%] h-[550px] border border-[#a90808] overflow-hidden">
                  <div className="w-full h-full bg-[#0c8021] rounded-full overflow-hidden">
                    <img src={list.image} className="w-full h-full object-cover" alt="Treatment" />
                  </div>
                </div>
                <div>
                  <div className="text-3xl mb-5">{list.sub}</div>
                  <div className="mb-10">{list.subDesc}</div>
                  <div className="text-3xl font-bold text-end">{list.price}/-</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

    <section className=" relative flex flex-col justify-center items-center backdrop-blur-sm  bg-cover bg-center  inset-0 h-[300px]">
        <div className=" absolute top-0 bottom-0 left-0 right-0 h-full w-full -z-10  ">
          <img
            src={pback}
            className="h-full w-full blur-background backdrop-blur-sm object-cover "
            alt=""
          />
        </div>
        <div className="p-8 sm:p-16 rounded-xl  mx-auto mt-10">
          <h1 className="text-4xl font-bold text-[#fff] text-center mb-8">
            Ayurvedic Center Packages
          </h1>
          <div className="text-[#fff]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab quam maiores similique obcaecati dolorum voluptates eius, assumenda est repellendus nesciunt.
          </div>

         
        </div>
      </section>
    </div>
  );
};

export default Packages;
