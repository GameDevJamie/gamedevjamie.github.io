import React from "react";

type Props = {
  videoSrcURL: string;
  videoTitle: string;
};

//object-fit: fill
const Video = ({ videoSrcURL, videoTitle }: Props) => (
  <div className="w-full h-full">
    <video controls={false} muted autoPlay loop>
      <source src={videoSrcURL} type="video/mp4" />
    </video>
  </div>
);
export default Video;
