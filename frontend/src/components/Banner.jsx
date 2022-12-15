import React from "react";
import Nasa from "../svg/Nasa.jpg";
const Banner = () => {
  return (
    <div className="bannerImg" style={{ backgroundImage: `url(${Nasa})` }}>
      <p></p>
      <h1>UPCOMING LAUNCH NASA’S SWOT MISSION</h1>
      <div>
        <h1 className="details">SWOT mission coverage will be provided by NASA. Tune in to NASA.gov/live to watch the live broadcast, starting at 3:00 a.m. PT on Friday, December 16.</h1>
      </div>
    </div>
  );
};

export default Banner;
