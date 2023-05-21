import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper';

export default function WhatsNew() {
  const data = [
    '/whatus/1.png',
    '/whatus/2.png',
    '/whatus/1.png',
    '/whatus/2.png',

    '/whatus/1.png',

    '/whatus/2.png',

    '/whatus/1.png',

    '/whatus/2.png',
  ];
  return (
    <section className="whats_new">
      <h2 className=" text-4xl py-11  container relative before:absolute before:w-[15%] before:bg-[#DACD57] before:h-4  before:top-[80%] before:left-[10%] font-bold">
        WHATS <span className="text-[#DACD57]">NEW</span> WITH US?
      </h2>
      <div className="py-10">
        <Swiper
          // centeredSlides={true}
          slidesPerView={1}
          loop={true}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          id="whatsNew"
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {data.map((da, i) => (
            <SwiperSlide key={i}>
              <img alt="whats new " src={da} width={498} height={600} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
