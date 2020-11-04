import React from "react";
import ImgBg from "../../assets/bg-img.jpg";
export default function Heading() {
  return (
    <div className="hero_container">
      <div className="hero_bg_img">
        <img alt="" src={ImgBg} />
      </div>
      <div className="hero_content">
        <h1>Image Gallery</h1>
        <p>
          Dislaimer. Pictures shown in this project are not owned by me. I am
          just using "UnSplash Api" !
        </p>
        <div className="hero_btns">
          <a href="https://unsplash.com/" target="_blank" rel="noreferrer">
            Unspals Api
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            My Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
