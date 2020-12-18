import React from "react";

const HeaderArrowLeft = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " header-left-arrow"}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

export default HeaderArrowLeft;
