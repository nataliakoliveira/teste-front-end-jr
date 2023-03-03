import React from "react";
import './BannerPrincipal.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-title">Venha conhecer nossas promoções</h1>
        <h2 className="banner-subtitle">50% Off nos produtos</h2>
        <button className="banner-btn">Ver produto</button>
      </div>
      <div className="banner-image"></div>
    </div>
  )
}

export default Banner;
