import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCart from "../project-cart/project-cart";

const Projects = ({ data }) => {
  return (
    <div style={{ marginBottom: "8rem" }} id="projects">
      <Row className="mb-5 justify-content-between">
        <Col md={7} md={6} xs={12}>
          <div className="text-secondary subtitle">{data.projects_title1}</div>
          <h2 className="text-dark title">{data.projects_title2}</h2>
        </Col>

        <Col md={4} xs={12} className="ml-md-5">
          <p className="paragraph ml-md-5">{data.projects_text}</p>
        </Col>
      </Row>
      <Row className="project-carts horizontal-scroll">
        {data.projects &&
          data.projects.map((item) => (
            <Col lg={4} md={6} xs={12}>
              <ProjectCart projectData={item} />
            </Col>
          ))}
      </Row>
    </div>
  );
};
export default Projects;
