import React from "react";
import { Row, Col } from "react-bootstrap";
import NewsCart from "../news-cart/news-cart";
import style from "./news.module.scss";

const News = ({ data }) => {
  return (
    <div className="news-container">
      <Row className="justify-content-between align-items-center mb-5 px-lg-4">
        <h2 className="text-dark mb-0">{data.news_title}</h2>
        <button className={style["button"]}>
          همه اخبار و مقالات
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15.46"
            height="9.31"
            viewBox="0 0 15.46 9.31"
            className="mr-3"
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
        </button>
      </Row>
      <Row className="news-carts horizontal-scroll">
        {data.news &&
          data.news.map((newsData) => (
            <Col md={4} xs={12}>
              <NewsCart newsData={newsData} />
            </Col>
          ))}
      </Row>
    </div>
  );
};
export default News;
