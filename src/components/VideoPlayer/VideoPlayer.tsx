import React from "react";

const VideoPlayer = ({ link }: { link: string | undefined }) => {
  return (
    <>
      {link ? (
        <iframe
          src={`${link}&autoplay=1&loop=1`}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          allow="autoplay"
        ></iframe>
      ) : (
        <div>Can not get the video</div>
      )}
    </>
  );
};

export default VideoPlayer;
