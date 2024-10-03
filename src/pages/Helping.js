import React from "react";
import P36 from "../components/Paragraph";
import ImgPeople from "../assets/img/icon-people.png";
import ImgFinger from "../assets/img/icon-finger.png";
import ImgClub from "../assets/img/icon-club.png";
import ImgPayment from "../assets/img/icon-payment.png";

const Helping = () => {
  return (
    <div className="bg-silver">
      <div className="container mb-40">
        <div className="helping">
          <div className="left-helping">
            <P36 textTitle={"Helping a local"} textColor={"#4D4D4D"} />
            <P36 textTitle={"business reinvent itself"} textColor={"#4CAF4F"} />
            <P36
              textTitle={"We reached here with our hard work and dedication"}
              textColor={"#18191F"}
              textSize={"16px"}
              textWeight={"400"}
            />
          </div>
          <div className="right-helping">
            <div className="row">
              <img src={ImgPeople} alt="img-people" className="img-helping" />
              <div className="text-row">
                <P36
                  textTitle={"2,245,341"}
                  textColor={"#4D4D4D"}
                  textSize={"28px"}
                  textWeight={"700"}
                />
                <P36
                  textTitle={"Members"}
                  textColor={"#717171"}
                  textSize={"16px"}
                  textWeight={"400"}
                />
              </div>
            </div>
            <div className="row">
              <img src={ImgClub} alt="img-club" className="img-helping" />
              <div className="text-row">
                <P36
                  textTitle={"2,245,341"}
                  textColor={"#4D4D4D"}
                  textSize={"28px"}
                  textWeight={"700"}
                />
                <P36
                  textTitle={"Members"}
                  textColor={"#717171"}
                  textSize={"16px"}
                  textWeight={"400"}
                />
              </div>
            </div>
            <div className="row">
              <img src={ImgFinger} alt="img-finger" className="img-helping" />
              <div className="text-row">
                <P36
                  textTitle={"2,245,341"}
                  textColor={"#4D4D4D"}
                  textSize={"28px"}
                  textWeight={"700"}
                />
                <P36
                  textTitle={"Members"}
                  textColor={"#717171"}
                  textSize={"16px"}
                  textWeight={"400"}
                />
              </div>
            </div>
            <div className="row">
              <img src={ImgPayment} alt="img-payment" className="img-helping" />
              <div className="text-row">
                <P36
                  textTitle={"2,245,341"}
                  textColor={"#4D4D4D"}
                  textSize={"28px"}
                  textWeight={"700"}
                />
                <P36
                  textTitle={"Members"}
                  textColor={"#717171"}
                  textSize={"16px"}
                  textWeight={"400"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helping;
