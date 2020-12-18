import React from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "../slider/slider";

const CustomHeader = ({ data }) => {
  return (
    <div className="header-contianer">
      <Row>
        <Col xs="12" lg="5">
          <div className="position-relative h-100">
            <div className="text-secondary mb-3">{data.header_title1}</div>
            <h2 className="text-dark">{data.header_title2}</h2>
            <p className="mb-5">{data.header_text}</p>
            <a
              href="#projects"
              className="position-absolute display-none d-lg-block"
              style={{
                bottom: "0",
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
