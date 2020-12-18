import React from "react";
import { Row, Col } from "react-bootstrap";

const ProjectCart = ({ projectData }) => {
  return (
    <div className="ml-3">
      <img
        src={projectData.img}
        alt=""
        width="100%"
        height="230px"
        className="mb-3"
      />
      <Row className="justify-content-between align-items-center mb-4">
        <Col style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
          {projectData.title}
        </Col>
        <Col className="text-left d-flex align-items-center justify-content-end text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13.69"
            height="19.557"
            viewBox="0 0 13.69 19.557"
            className="ml-2"
          >
            <path
              id="Icon_material-location-on"
              data-name="Icon material-location-on"
              d="M14.345,3A6.84,6.84,0,0,0,7.5,9.845c0,5.134,6.845,12.712,6.845,12.712S21.19,14.979,21.19,9.845A6.84,6.84,0,0,0,14.345,3Zm0,9.29A2.445,2.445,0,1,1,16.79,9.845,2.446,2.446,0,0,1,14.345,12.29Z"
              transform="translate(-7.5 -3)"
              fill="#0098a0"
            />
          </svg>

          {/* <i className="fa fa-map-pin ml-2" style={{ fontSize: "2rem" }} /> */}
          <span style={{ fontSize: "1.2rem" }}>{projectData.city}</span>
        </Col>
      </Row>
      <p style={{ height: "105px", overflowY: "hidden" }}>{projectData.text}</p>
      <Row className="justify-content-end">
        <button className="button text-secondary">
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
                stroke="#0098a0"
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
                stroke="#0098a0"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
              />
            </g>
          </svg>
        </button>
      </Row>
    </div>
  );
};
export default ProjectCart;
