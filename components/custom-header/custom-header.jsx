import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "../slider/slider";
import classnames from "classnames";

const CustomHeader = ({ data }) => {
  const [showMore, setshowMore] = useState(false);

  return (
    <div className="header-container">
      <Row>
        <Col xs="12" lg="5">
          <div className="position-relative h-100">
            <div className="margin-LR text-secondary mb-3">{data.header_title1}</div>
            <h2 className="margin-LR text-dark">{data.header_title2}</h2>
            <p className={classnames(
              "text-justify mb-5 header-text",
              !showMore ? "less-text" : "more-text"
            )}>{data.header_text}</p>
            { !showMore && 
            <button
              className="header-text-btn px-0 d-none d-lg-block"
              onClick={() => {
                setshowMore(true);
              }}
            >
              مطالعه بیشتر
            </button>
            }
            <a
              href="#projects"
              className="position-absolute display-none d-lg-block"
              style={{
                bottom: "-90px",
                right: "0",
              }}>
              <div className="feather-arrow-down">
              <svg xmlns="http://www.w3.org/2000/svg" width="22.715" height="10.724" viewBox="0 0 22.715 10.724"><g id="Icon_feather-arrow-down" data-name="Icon feather-arrow-down" transform="translate(0.5 0.707)"><path id="Path_1" data-name="Path 1" d="M29.215,18H7.5" transform="translate(-7.5 -13.32)" fill="none" stroke="#dbdbdb" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path id="Path_2" data-name="Path 2" d="M11.866,16.811,16,12.155,11.866,7.5" transform="translate(5.5 -7.5)" fill="none" stroke="#dbdbdb" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg>
            </div>
            </a>
          </div>
        </Col>
        <Col xs="12" lg="6">
          <Slider sliders={data.sliders} />
        </Col>
      </Row>
    </div>
  );
};
export default CustomHeader;
