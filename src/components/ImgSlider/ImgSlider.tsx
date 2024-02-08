import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ISlide } from "@/app/page";
import Slide from "./Slide";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImgSlider = ({
  videos,
  openModal,
}: {
  videos: ISlide[];
  openModal: (id: string) => void;
}) => {
  return (
    <Swiper
      style={{ width: "100%" }}
      spaceBetween={10}
      slidesPerView={4}
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 3000 }}
    >
      {videos.map((video) => (
        <SwiperSlide key={video.id}>
          <Slide video={video} openModal={openModal} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImgSlider;
