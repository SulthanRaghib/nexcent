import React from "react";
import UnlockIMG from "../assets/img/mobile-login.png";
import P36 from "../components/Paragraph";
import Button from "../components/Button";

const Unlock = () => {
  return (
    <div className="container">
      <div className="unlock">
        <div className="left-unlock">
          <img className="img-unlock" src={UnlockIMG} alt="unlock" />
        </div>
        <div className="right-unlock">
          <P36
            textTitle="The unseen of spending three years at Pixelgrade"
            textColor="#4D4D4D"
          />
          <P36
            textTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
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

export default Unlock;
