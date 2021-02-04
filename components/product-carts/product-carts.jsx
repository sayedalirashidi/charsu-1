import React from "react";

import style from "./product-carts.module.scss";

const ProductCarts = ({ productData }) => {
  const windowWidth = window.innerWidth;
  const priceClassName = (windowWidth > 992) ? 'd-flex' : ''
  return (
    <div style={{ marginLeft: "70px" }}>
      <img src={productData.img} width="100%" height="300px" className="mb-3" />
      <div>
        <div className="product-title">{productData.title}</div>
        <div className={priceClassName+ " justify-content-between align-items-center mt-4"}>
          <div className="left-sided text-secondary">{productData.price}</div>
          <button className={style["button"] + " left-sided" }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.46"
              height="9.31"
              viewBox="0 0 15.46 9.31"
              className="mr-2"
            >
              <g
                id="Icon_feather-arrow-left"
                data-name="Icon feather-arrow-left"
                transform="translate(0.5 0.707)"
              >
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M29.215,18H7.5"
                  transform="translate(-7.5 -13.32)"
                  fill="none"
                  stroke="#00626d

                  "
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M11.866,16.811,7.5,12.155,11.866,7.5"
                  transform="translate(-7.5 -7.5)"
                  fill="none"
                  stroke="#00626d



                  "
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                />
              </g>
            </svg>
            مشاهده محصول
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCarts;
