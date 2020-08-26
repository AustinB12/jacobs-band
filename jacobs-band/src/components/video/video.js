import React from "react";

import "../../styles/components/video.scss";

const VideoContainer = () => {
  return (
    <div className={"video-container"}>
      <iframe
        src="https://www.youtube.com/embed/LakeVG6BWZU"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="Is It True Cover"
      ></iframe>
      {/* <iframe
        src="https://www.youtube.com/embed/oYzqufunkgQ"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="Fuzz - What's In My Head - Live Cover"
      ></iframe> */}
      <iframe
        src="https://www.youtube.com/embed/xhs94U3OpsQ"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="Tame Impala - Alter Ego Multi-Instramental Cover (ft. Angie Bula)"
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/dwkeqAO_qDA"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="false"
        title="Half Full Glass of Wine Cover"
      ></iframe>
      {/* <iframe
        src="https://www.youtube.com/embed/KfE5E1TlR8k"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="3"
      ></iframe> */}
      <iframe
        src="https://www.youtube.com/embed/6kSMYOC9O1c"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="4"
      ></iframe>
    </div>
  );
};

export default VideoContainer;
