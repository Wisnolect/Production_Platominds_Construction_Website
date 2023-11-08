import React, { useState } from "react";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import ReactPlayer from "react-player";

const Videos = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="flex flex-col pt-5 justify-center items-center px-1 mb-8 mt-6">
      <ReactPlayer
        url="/videos/vid1.mp4"
        width="100%"
        height="400px"
        playing
        controls
        playIcon={
          <div className="h-[100px] w-[100px] text-sm bg-orange-300 rounded-full flex flex-col justify-center items-center animate-pulse hover:animate-none hover:bg-orange-600">
            <BsFillCollectionPlayFill size="3em"/> Play Video
          </div>
        }
        light="/vid_bg.jpg"
      />
    </div>
  );
};

export default Videos;
