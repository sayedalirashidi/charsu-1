import React from "react";
import classnames from "classnames";

import style from "./property-cards.module.scss";

const Property = ({ cartItems }) => {
  return (
    <div className={style["cart-items"]}>
      <div className={style["title"]}>{cartItems.title}</div>
      <div>
        <i className={classnames(`${cartItems.icon}`, "text-secondary")} />
      </div>
      <div>{cartItems.description}</div>
    </div>
  );
};
export default Property;
