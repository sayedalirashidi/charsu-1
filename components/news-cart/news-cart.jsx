import React from "react";
import style from "./news-cart.module.scss";
import jalali from "moment-jalaali";

const NewsCart = ({ newsData }) => {
  return (
    <div>
      <div className="news-img-container">
        <img
          src={newsData.img}
          height="251px"
          width="100%"
          className="mb-3 news-img"
        />
        <div className="news-date text-light">
          {jalali(newsData.created_at).format("jYYYY/jM/jD")}
        </div>
      </div>
      <div>
        <h3 className="text-secondary mb-3">{newsData.title}</h3>
        <p style={{ maxHeight: "75px", overflow: "hidden" }} className="mb-3">
          {newsData.text}
        </p>
      </div>
      <div className="d-flex justify-content-end">
        <button className={style["button"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.715"
            height="10.724"
            viewBox="0 0 22.715 10.724"
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
                stroke="#0098A0"
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
                stroke="#0098A0"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default NewsCart;
