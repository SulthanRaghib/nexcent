import React from "react";
import "../../assets/css/styles.css";

const P36 = ({
  textColor,
  textSize,
  textWeight,
  textTitle,
  centerText = false,
  style,
}) => {
  return (
    <p
      className="title-client"
      style={{
        color: textColor,
        fontSize: textSize,
        fontWeight: textWeight,
        textAlign: centerText ? "center" : "left",
        ...style,
      }}
    >
      {textTitle}
    </p>
  );
};

export default P36;
