"use client";
import { useEffect, useState } from "react";
import ImgSlider from "@/components/ImgSlider/ImgSlider";
import Modal from "@/components/Modal/Modal";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import Pagination from "@/components/Pagination/Pagination";
import getVideoById from "@/helpers/getVideoById";
import videosIds from "@/constants/videos";

export interface ISlide {
  id: string;
  videoId: string;
  picture: string;
  link: string;
}

export default function Home() {
  const [videos, setVideos] = useState<ISlide[]>([]);

  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlideId, setSelectedSlideId] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoDataArray: ISlide[] = await Promise.all(
          videosIds.map(async (id) => {
            const videoData: ISlide = await getVideoById(id);
            if (videoData) {
              return videoData;
            } else {
              throw new Error(`Error fetching video ${id}`);
            }
          })
        );
        setVideos(videoDataArray);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const openModal = (id: string): void => {
    setIsModalOpen(true);
    setSelectedSlideId(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const currentSlide = videos.find(({ id }) => id === selectedSlideId);

  return (
    <main className="flex min-h-screen flex-col items-center  p-10">
      <h1 className="uppercase font-bold text-white text-3xl lg:text-5xl mb-20">
        Video Slider
      </h1>
      <ImgSlider openModal={openModal} videos={videos} />
      {isModalOpen && (
        <Modal close={closeModal}>
          <VideoPlayer link={currentSlide?.link} />
          <Pagination
            videos={videos}
            currentSlide={currentSlide}
            setSelectedSlideId={setSelectedSlideId}
          />
        </Modal>
      )}
    </main>
  );
}
