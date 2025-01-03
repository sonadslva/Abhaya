import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import slide1 from '../assets/mainslide.jpg';
import slide2 from '../assets/mainslide1.jpg';
import slide3 from '../assets/mainslide2.jpg';

const ImageSlider = () => {
  const slides = [
    {
      src: slide1,
      alt: 'Slide 1',
      // quote: '"Nature itself is the best physician."',
      // author: 'Hippocrates',
    },
    {
      src: slide2,
      alt: 'Slide 2',
      // quote: '"The earth has music for those who listen."',
      // author: 'William Shakespeare',
    },
    {
      src: slide3,
      alt: 'Slide 3',
      // quote: '"Look deep into nature, and then you will understand everything better."',
      // author: 'Albert Einstein',
    },
  ];

  return (
    <section className="image-slider w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slider-container">
              <div className="slider-text">
                <h1>{slide.quote}</h1>
                <p>{slide.author}</p>
              </div>
              <img src={slide.src} alt={slide.alt} className="slider-image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageSlider;
