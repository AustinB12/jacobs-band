import React from "react";

import Video from "../../components/video/video";

import "../../styles/pages/videos.scss";

const VideosPage = () => {
  return (
    <div id={"vids"} className={"videos-container"}>
      <Video />
    </div>
  );
};
export default VideosPage;
