import React from "react";
const ArrowRight = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " right-arrow"}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};
export default ArrowRight;
