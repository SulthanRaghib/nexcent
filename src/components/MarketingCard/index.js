import React from "react";
import P36 from "../Paragraph";
import Button from "../Button";

const MarketingCard = ({
  cardImg,
  pTitle,
  pColor,
  pWeight,
  pSize,
  pCenterText,
  bText,
  bColor,
  bBg,
  bTextSize,
  bTextWeight,
  bShowIcon,
  bIcon,
}) => {
  return (
    <div className="marketing-card">
      <img src={cardImg} alt="marketing" className="img-marketing" />
      <div className="marketing-card-body">
        <P36
          textTitle={pTitle}
          textColor={pColor}
          textWeight={pWeight}
          textSize={pSize}
          centerText={pCenterText}
        />
        <div className="marketing-card-button">
          <Button
            btnText={bText}
            btnColor={bColor}
            btnBg={bBg}
            btnTextSize={bTextSize}
            btnTextWeight={bTextWeight}
            showIcon={bShowIcon}
            icon={bIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default MarketingCard;
