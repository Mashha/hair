import "../styles/testimonials.css";
import { data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay, Pagination } from "swiper";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h1>Mnenja strank</h1>
      <div className="testimonials-inner">
        <Swiper
          modules={[Autoplay, Pagination]}
          navigation
          slidesPerView={1}
          speed={900}
          className="mySwiper"
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {data.map((singleSlide, index) => (
            <SwiperSlide key={index}>
              <div className="block">
                <div className="top">
                  <div className="user">
                    <div className="image">
                      <img src={singleSlide.url} alt="" />
                    </div>
                    <div className="info">
                      <h2 className="user-name">{singleSlide.name}</h2>
                      <h4>client</h4>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <div className="content">
                    <p>{singleSlide.text}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
