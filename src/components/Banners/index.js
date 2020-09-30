import React from "react";
import "./Banners.css";

export default function Banner({ bannerUrl }) {
  return (
    <div className="banner-wrapper">
      <div className="overlay"></div>
      <img src={bannerUrl}></img>
      <h1>WE WANT TO HEAR FROM YOU</h1>
      <div className='banner-logo'></div>
    </div>
  );
}
