import React from "react";
const HeaderArrowRight = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " header-right-arrow"}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};
export default HeaderArrowRight;
