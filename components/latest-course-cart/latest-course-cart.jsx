import React from "react";
import { Row, Col } from "react-bootstrap";

import style from "./latest-course-cart.module.scss";

const LatestCourseCart = ({ course }) => {
  return (
    <Row className="mb-5 ml-3">
      <Col>
        <img src={course.img} width="100%" height="150px" />
      </Col>
      <Col>
        <div style={{ fontWeight: "900" }} className="text-white mb-3">
          {course.title}
        </div>
        <div className="d-flex mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="16"
            viewBox="0 0 14 16"
            className="ml-3"
          >
            <path
              id="Icon_awesome-user-tie"
              data-name="Icon awesome-user-tie"
              d="M7,8A4,4,0,1,0,3,4,4,4,0,0,0,7,8ZM9.994,9.019,8.5,15l-1-4.25L8.5,9h-3l1,1.75L5.5,15,4.006,9.019A4.193,4.193,0,0,0,0,13.2v1.3A1.5,1.5,0,0,0,1.5,16h11A1.5,1.5,0,0,0,14,14.5V13.2A4.193,4.193,0,0,0,9.994,9.019Z"
              fill="#f8f3eb"
            />
          </svg>

          <span style={{ fontSize: "1.2rem", color: "#f8f3eb" }}>
            {course.teacher}
          </span>
        </div>
        <p
          className="overflow-hidden mb-0"
          style={{
            height: "60px",
            color: "#f7f7f7",
            fontSize: "1.2rem",
            lineHeight: "1.3",
            fontWeight: "400",
          }}
        >
          {course.text}
        </p>
        <div>
          <button className={style["button"]}>
            مشاهده دوره
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
                  stroke="#ffd798"
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
                  stroke="#ffd798

                  "
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                />
              </g>
            </svg>
          </button>
        </div>
      </Col>
    </Row>
  );
};
export default LatestCourseCart;
