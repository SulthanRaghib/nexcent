import React from "react";
import P36 from "../components/Paragraph";
import Button from "../components/Button";

const Demo = () => {
  return (
    <div className="bg-silver">
      <div className="container demo-flex">
        <P36
          textTitle={"Pellentesque suscipit fringilla libero eu."}
          textWeight={"600"}
          textSize={"64px"}
          textColor={"#263236"}
          centerText={true}
        />
        <Button
          btnText={"Get a Demo"}
          btnColor={"#FFFFFF"}
          btnBg={"#4CAF50"}
          btnTextSize={"16px"}
          btnTextWeight={"500"}
          showIcon={true}
          icon={<i class="bi bi-arrow-right"></i>}
        />
      </div>
    </div>
  );
};

export default Demo;
