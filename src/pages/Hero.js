import React from "react";
import HeroIMG from "../assets/img/hero.png";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="bg-silver">
      <div className="container hero mb-40">
        <div className="left-hero">
          <p className="title-hero color-grey">Lessons and insights</p>
          <p className="title-hero color-green">from 8 years</p>
          <p className="subtitle-hero color-grey mb-40">
            Where to grow your business as a photographer: site or social media?
          </p>
          {/* <button className="btn-hero">Register</button> */}
          <Button btnText={"Register"} />
        </div>
        <div className="right">
          <img className="img-hero" src={HeroIMG} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
