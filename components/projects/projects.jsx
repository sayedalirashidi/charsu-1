import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCart from "../project-cart/project-cart";
import Slider from "react-slick";

const Projects = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '',//<!-- <div className="big-arrows"><svg xmlns="http://www.w3.org/2000/svg" width="26.715" height="14.724" viewBox="0 0 22.715 10.724"><g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(0.5 0.707)"><path id="Path_1" data-name="Path 1" d="M29.215,18H7.5" transform="translate(-9.5 -13.32)" fill="none" stroke="#0098a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path id="Path_2" data-name="Path 2" d="M11.866,16.811,16,12.155,11.866,7.5" transform="translate(5.5 -7.5)" fill="none" stroke="#0098a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg></div> -->,
    prevArrow: '',// <div className="big-arrows"><svg xmlns="http://www.w3.org/2000/svg" width="26.715" height="14.724" viewBox="0 0 22.715 10.724"><g id="Icon_feather-arrow-left" data-name="Icon feather-arrow-left" transform="translate(0.5 0.707)"><path id="Path_1" data-name="Path 1" d="M29.215,18H7.5" transform="translate(-7.5 -13.32)" fill="none" stroke="#0098a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path id="Path_2" data-name="Path 2" d="M11.866,16.811,7.5,12.155,11.866,7.5" transform="translate(-7.5 -7.5)" fill="none" stroke="#0098a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg></div>,
    responsive: [
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
    <div style={{ marginBottom: "8rem" }} id="projects">
      <Row className="mb-5 justify-content-between">
        <Col md={7} md={6} xs={12}>
          <div className="text-justify text-secondary subtitle">{data.projects_title1}</div>
          <h2 className="text-dark title">{data.projects_title2}</h2>
        </Col>
        <Col md={4} xs={12} className="ml-md-5">
          <p className="text-justify paragraph ml-md-5">{data.projects_text}</p>
        </Col>
      </Row>
      <Row className="width text-justify project-carts horizontal-scroll">
        <Slider {...settings}>
        {data.projects &&
          data.projects.map((item) => (
            <Col lg={4} md={6} xs={12}>
              <ProjectCart projectData={item} />
            </Col>
          ))}
        </Slider>
      </Row>
    </div>
    </>
  );
};
export default Projects;
{/*
import ScrollMenu from "react-horizontal-scrolling-menu";

const Projects = ({ data }) => {
  const list = data.projects &&
      data.projects.map((item) => (
        <Col lg={4} md={6} xs={12}>
          <ProjectCart className="new-prj" projectData={item} /> 
        </Col>
      ))
  return (
    <div className="App">
      <div style={{ marginBottom: "8rem" }} id="projects">
        <Row className="mb-5 justify-content-between">
          <Col md={7} md={6} xs={12}>
            <div className="text-justify text-secondary subtitle">{data.projects_title1}</div>
              <h2 className="text-dark title">{data.projects_title2}</h2>
          </Col>

          <Col md={4} xs={12} className="ml-md-5">
            <p className="text-justify paragraph ml-md-5">{data.projects_text}</p>
          </Col>
        </Row>
        <Row className="text-justify project-carts horizontal-scroll">
          <ScrollMenu data={list} />
        </Row>
      </div>
    </div>
  );
};
export default Projects;
*/}
