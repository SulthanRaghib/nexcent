import React from "react";

const Button = ({
  btnTextSize,
  btnTextWeight,
  btnText,
  btnBg,
  btnColor,
  showIcon = false,
  icon,
}) => {
  return (
    <div className="flex-button">
      <button
        className="btn-hero"
        style={{
          backgroundColor: btnBg,
          color: btnColor,
          fontSize: btnTextSize,
          fontWeight: btnTextWeight,
        }}
      >
        {btnText}
        {showIcon && icon && <span style={{ marginLeft: "10px" }}>{icon}</span>}
      </button>
    </div>
  );
};

export default Button;
