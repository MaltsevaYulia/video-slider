import axios from "axios";
import { nanoid } from "nanoid";
import { ISlide } from "@/app/page";

const getVideoById = async (videoId: string): Promise<ISlide> => {
  try {
    const response = await axios({
      method: "get",
      url: `https://v1.nocodeapi.com/slider/vimeo/tBoeDsbXqXFxmMem/videoInfo?video_id=${videoId}`,
      params: {},
    });

   
    return {
      id: nanoid(),
      videoId,
      picture: response.data.pictures.sizes[3].link.toString(),
      link: response.data.player_embed_url.toString(),
    };
  } catch (error) {
    
    console.log(error);
    throw new Error("Failed to fetch video data");
  }
  
};

export default getVideoById;
