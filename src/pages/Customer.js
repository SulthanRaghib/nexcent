import React from "react";
import ImgClient1 from "../assets/img/client-1.png";
import ImgClient2 from "../assets/img/client-2.png";
import ImgClient3 from "../assets/img/client-3.png";
import ImgClient4 from "../assets/img/client-4.png";
import ImgClient5 from "../assets/img/client-5.png";
import ImgClient6 from "../assets/img/client-6.png";
import ImgCustomer from "../assets/img/img-customer.png";
import P36 from "../components/Paragraph";
import Button from "../components/Button";

const Customer = () => {
  return (
    <div className="bg-silver">
      <div className="container">
        <div className="customer mb-40">
          <div className="right-customer">
            <img
              className="img-customer"
              src={ImgCustomer}
              alt="img-customer"
            />
          </div>
          <div className="left-customer">
            <P36
              textTitle={`Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum 
              risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida 
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie 
              mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse 
              eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae 
              placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur 
              id nibh id sem dignissim finibus ac sit amet magna.`}
              textColor={"#717171"}
              textSize={"16px"}
              textWeight={"500"}
            />
            <P36
              textTitle={"Tim Smith"}
              textColor={"#4CAF4F"}
              textSize={"20px"}
              textWeight={"600"}
            />
            <P36
              textTitle={"British Dragon Boat Racing Association"}
              textColor={"#89939E"}
              textSize={"16px"}
              textWeight={"400"}
            />
            <div className="flex-meet">
              <img className="img-client" src={ImgClient1} alt="client" />
              <img className="img-client" src={ImgClient2} alt="client" />
              <img className="img-client" src={ImgClient3} alt="client" />
              <img className="img-client" src={ImgClient4} alt="client" />
              <img className="img-client" src={ImgClient5} alt="client" />
              <img className="img-client" src={ImgClient6} alt="client" />
              <Button
                btnText={"Meet the customer"}
                btnBg={"#F5F7FA"}
                btnColor={"#4CAF4F"}
                showIcon={true}
                btnTextSize={"20px"}
                btnTextWeight={"600"}
                icon={<i class="bi bi-arrow-right"></i>}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
