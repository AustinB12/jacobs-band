import React from "react";
import {
  faYoutube,
  faSpotify,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialFollow = () => {
  return (
    <div className="social-container">
      <h3>Follow Blue Karma!</h3>
      <a
        href="https://www.youtube.com"  // TODO: change link to go to your profile
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href="https://www.spotify.com" // TODO: change link to go to your profile
        className="spotify social"
      >
        <FontAwesomeIcon icon={faSpotify} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/jacob.adamz/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}

export default SocialFollow;