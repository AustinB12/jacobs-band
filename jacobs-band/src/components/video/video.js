import React from "react";

import "../../styles/components/video.scss";

const VideoContainer = () => {
  return (
    <div className={"video-container"}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dwkeqAO_qDA"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="false"
        title="Half Full Glass of Wine Cover"
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/LakeVG6BWZU"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="Is It True Cover"
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/KfE5E1TlR8k"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6kSMYOC9O1c"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
