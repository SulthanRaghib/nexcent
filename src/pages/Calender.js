import React from "react";
import ImgCalender from "../assets/img/calender.png";
import P36 from "../components/Paragraph";
import Button from "../components/Button";

const Calender = () => {
  return (
    <div className="container mb-40">
      <div className="unlock">
        <div className="left-unlock">
          <img className="img-unlock" src={ImgCalender} alt="unlock" />
        </div>
        <div className="right-unlock">
          <P36
            textTitle="How to design your site footer like we did"
            textColor="#4D4D4D"
          />
          <P36
            textTitle="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, 
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat
            a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea 
            dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod 
            augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla 
            commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, 
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
            textColor="#717171"
            textSize="14px"
            textWeight="400"
          />
          <div>
            <Button btnText={"Learn More"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
