import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import slide1 from "../../../assets/slide-1.png";
import slide2 from "../../../assets/slide-2.png";
import slide3 from "../../../assets/slide-3.png";

const slides = [
  { id: "1", image: slide1 },
  { id: "2", image: slide2 },
  { id: "3", image: slide3 },
];

export function Carousel() {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      autoplay={{ delay: 5000 }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img
            src={slide.image}
            alt="Slide"
            className="w-full h-80 object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
