import React from "react";
import ImgCommunity1 from "../assets/img/community-1.png";
import ImgCommunity2 from "../assets/img/community-2.png";
import ImgCommunity3 from "../assets/img/community-3.png";
import P36 from "../components/Paragraph";

const Community = () => {
  return (
    <div>
      <div className="container community mb-40">
        <div className="community-top">
          <P36 textTitle="Manage your entire community" textColor="#4D4D4D" />
          <P36 textTitle="in a single system" textColor="#4D4D4D" />
          <p className="subtitle-community color-grey">
            Who is Nextcent suitable for?
          </p>
        </div>
        <div className="community-bottom container">
          <div className="community-card flex-card">
            <img className="img-card" src={ImgCommunity1} alt="community" />
            <P36
              textTitle="Membership Organisations"
              textColor="#4D4D4D"
              textSize="28px"
            />
            <P36
              textTitle="Our membership management software provides full automation of membership renewals and payments"
              textColor="#717171"
              textSize="14px"
              textWeight="400"
            />
          </div>
          <div className="community-card flex-card">
            <img className="img-card" src={ImgCommunity2} alt="community" />
            <P36
              textTitle="National Associations"
              textColor="#4D4D4D"
              textSize="28px"
            />
            <P36
              textTitle="Our membership management software provides full automation of membership renewals and payments"
              textColor="#717171"
              textSize="14px"
              textWeight="400"
            />
          </div>
          <div className="community-card flex-card">
            <img className="img-card" src={ImgCommunity3} alt="community" />
            <P36
              textTitle="Clubs And Groups"
              textColor="#4D4D4D"
              textSize="28px"
            />
            <P36
              textTitle="Our membership management software provides full automation of membership renewals and payments"
              textColor="#717171"
              textSize="14px"
              textWeight="400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
