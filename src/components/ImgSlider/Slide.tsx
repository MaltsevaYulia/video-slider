import React from "react";
import Image from "next/image";
import { ISlide } from "@/app/page";
import styles from "./Slider.module.css";

interface SlideProps {
  video: ISlide;
  openModal: (id:string) => void;
}

const Slide: React.FC<SlideProps> = ({ video, openModal }) => {
  const {id, videoId, picture} = video;
  return (
    <div onClick={() => openModal(id)}>
      <Image
        src={picture}
        alt={`Video vimeo id ${videoId}`}
        className={styles.img}
        width={640}
        height={360}
        priority
      />
    </div>
  );
};

export default Slide;

