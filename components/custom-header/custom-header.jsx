import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "../slider/slider";
import classnames from "classnames";

const CustomHeader = ({ data }) => {
  const [showMore, setshowMore] = useState(false);

  return (
    <div className="header-container">
      <Row className="margin-LR">
        <Col xs="12" lg="5">
          <div className="position-relative h-100">
            <div className="text-secondary mb-3">{data.header_title1}</div>
            <h2 className="text-dark">{data.header_title2}</h2>
            <p
              className={classnames(
                "text-justify mb-5 header-text",
                !showMore ? "less-text" : "more-text"
              )}
            >
              {data.header_text}
            </p>
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
              }}
            >
              <i
                className="fa fa-long-arrow-down"
                style={{ color: "#dbdbdb", fontSize: "3rem" }}
              />
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
