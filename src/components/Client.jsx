import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import required modules
import { Grid, Pagination } from 'swiper';

const Client = () => {
  const data = [
    '/clients/1.png',
    '/clients/2.png',
    '/clients/3.png',
    '/clients/4.png',
    '/clients/5.png',
    '/clients/6.png',
    '/clients/7.png',
    '/clients/8.png',
    '/clients/1.png',
    '/clients/2.png',
  ];

  return (
    <div className="client container mt-70">
      <h2 className="title text-4xl font-bold after-bg">OUR CLIENTS</h2>
      <div className="py-10">
        <Swiper
          slidesPerView={1}
          grid={{ rows: 2, fill: 'row' }}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="grid  our_client  pb-40"
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
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
              <img alt="client" src={da} width={498} height={600} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Client;
