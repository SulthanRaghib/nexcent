import React from "react";
import ImgClient1 from "../assets/img/client-1.png";
import ImgClient2 from "../assets/img/client-2.png";
import ImgClient3 from "../assets/img/client-3.png";
import ImgClient4 from "../assets/img/client-4.png";
import ImgClient5 from "../assets/img/client-5.png";
import ImgClient6 from "../assets/img/client-6.png";

const Client = () => {
  return (
    <div>
      <div className="container client mb-40">
        <div className="client-top">
          <p className="title-client color-grey">Our Clients</p>
          <p className="subtitle-client color-grey">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="client-bottom container">
          <img className="img-client" src={ImgClient1} alt="client" />
          <img className="img-client" src={ImgClient2} alt="client" />
          <img className="img-client" src={ImgClient3} alt="client" />
          <img className="img-client" src={ImgClient4} alt="client" />
          <img className="img-client" src={ImgClient5} alt="client" />
          <img className="img-client" src={ImgClient6} alt="client" />
          <img className="img-client" src={ImgClient3} alt="client" />
        </div>
      </div>
    </div>
  );
};

export default Client;
