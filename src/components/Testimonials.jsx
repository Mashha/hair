import "../styles/testimonials.css";
import { data } from "./Data";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
// import "swiper/modules/navigation/navigation.min.css"
// import "swiper/css/effect-fade"
import "swiper/css/bundle";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h1>Mnenja strank</h1>
      <div className="testimonials-inner">
        <Swiper
          //modules={[EffectFade]}
          slidesPerView={1}
          className="mySwiper"
        >
          {data.map((singleSlide, index) => (
            <SwiperSlide key={index}>
              <h1>{singleSlide.name}</h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
