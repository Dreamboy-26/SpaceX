import React from "react";
import Nasa from "../svg/Nasa.jpg";
const Banner = () => {
  return (
    <div className="bannerImg" style={{ backgroundImage: `url(${Nasa})` }}>
      <h1>
        <span>UPCOMING LAUNCH</span>NASA’S SWOT MISSION
      </h1>
    </div>
  );
};

export default Banner;
