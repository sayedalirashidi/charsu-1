import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Courses from "../courses/courses";
import Projects from "../projects/projects";
import News from "../news/news";
import CustomHeader from "../custom-header/custom-header";
import Products from "../products/products";

const HomePage = ({ data }) => {
  return (
    <div className="main-container home-page">
      <div className="custom-header">
        <CustomHeader data={data} />
      </div>
      <div className="box-center box-mobile horizontal-scroll">
        <Row className="justify-content-between mx-lg-5 mb-5">
          {data.companies &&
            data.companies.map((logo) => (
              <Col xs="6" md="4" lg="1" className="mb-3 mb-lg-0">
                <img src={logo.img} width="140px" height="70px" />
              </Col>
            ))}
        </Row>
      </div>
      <div className="projects box-left">
        <Projects data={data} />
      </div>
      <div className="courses bg-dark">
        <Courses data={data} />
      </div>
      <Container className="d-lg-block">
        <Products data={data} />
      </Container>
      <div className="news cooprations">
        <News data={data} />
      </div>
    </div>
  );
};
export default HomePage;
