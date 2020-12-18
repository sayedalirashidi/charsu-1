import React from "react";

const ArrowLeft = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " left-arrow"}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

export default ArrowLeft;
