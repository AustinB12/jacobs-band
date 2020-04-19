import React from "react";

import Video from "../../components/video/video";

import "../../styles/pages/videos.scss";

const VideosPage = () => {
  return (
    <div className={"video-container"}>
      <h1>Videos</h1>
      <Video />
    </div>
  );
};
export default VideosPage;
