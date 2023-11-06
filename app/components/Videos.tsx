// import React from "react";

// const Videos = () => {
//   return (
//     <div className="flex flex-col pt-5 justify-center items-center px-1 mb-8 ">
//       <h1 className="orange_gradient text-2xl lg:text-3xl font-bold p-2 fade-in-element">
//         Varadvinayak Park in Action: Showcasing Our Vision and Projects
//       </h1>
//       <div className="flex flex-col justify-center items-center">
//         <div className="flex flex-col lg:flex-row justify-center items-center my-5 group">
//           <div className="flex shadow-lg shadow-gray-400 group-hover:shadow-2xl rounded-lg p-2 bg-gray-300 rounded-l-md justify-center items-center h-[100px] w-[250px] lg:h-[150px] lg:w-[250px]">
//             <p className="text-sm ">
//               Lorem ipsum dolor sit iste amet consectetur adipisicing elit.
//               Consectetur at praesentium iste Consectetur at praesentium iste.
//             </p>
//           </div>
//           <span className="h-[50px] w-[8px] lg:h-[8px] lg:w-[100px] bg-gray-300 "></span>
//           <span className="h-[15px] w-[25px] lg:h-[25px] lg:w-[15px] bg-gray-300 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none"></span>
//           <div className="flex shadow-2xl shadow-gray-300 p-2 bg-gray-300">
//             <video controls width="800" height="450">
//               <source src="/videos/vid1.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//         <div className="flex flex-col lg:flex-row justify-center items-center my-5 group">
//           <div className="flex shadow-lg shadow-gray-400 group-hover:shadow-2xl rounded-lg p-2 bg-gray-300 rounded-l-md justify-center items-center h-[100px] w-[250px] lg:h-[150px] lg:w-[250px]">
//             <p className="text-sm ">
//               Lorem ipsum dolor sit iste amet consectetur adipisicing elit.
//               Consectetur at praesentium iste Consectetur at praesentium iste.
//             </p>
//           </div>
//           <span className="h-[50px] w-[8px] lg:h-[8px] lg:w-[100px] bg-gray-300 "></span>
//           <span className="h-[15px] w-[25px] lg:h-[25px] lg:w-[15px] bg-gray-300 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none"></span>
//           <div className="flex shadow-2xl shadow-gray-300 p-2 bg-gray-300">
//             <video controls width="800" height="450">
//               <source src="/videos/vid2.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//         <div className="flex flex-col lg:flex-row justify-center items-center my-5 group">
//           <div className="flex shadow-lg shadow-gray-400 group-hover:shadow-2xl rounded-lg p-2 bg-gray-300 rounded-l-md justify-center items-center h-[100px] w-[250px] lg:h-[150px] lg:w-[250px]">
//             <p className="text-sm ">
//               Lorem ipsum dolor sit iste amet consectetur adipisicing elit.
//               Consectetur at praesentium iste Consectetur at praesentium iste.
//             </p>
//           </div>
//           <span className="h-[50px] w-[8px] lg:h-[8px] lg:w-[100px] bg-gray-300 "></span>
//           <span className="h-[15px] w-[25px] lg:h-[25px] lg:w-[15px] bg-gray-300 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none"></span>
//           <div className="flex shadow-2xl shadow-gray-300 p-2 bg-gray-300">
//             <video controls width="800" height="450">
//               <source src="/videos/vid3.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Videos;

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
