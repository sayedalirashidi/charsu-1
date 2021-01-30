import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCart from "../project-cart/project-cart";
import ScrollMenu from "react-horizontal-scrolling-menu";

let list = [
  { name: "item1" },
  { name: "item2" },
  { name: "item3" },
  { name: "item4" },
  { name: "item5" },
  { name: "item6" },
  { name: "item7" },
  { name: "item8" },
  { name: "item9" },
  { name: "item10" },
  { name: "item11" },
  { name: "item12" },
  { name: "item13" },
  { name: "item14" },
  { name: "item15" },
  { name: "item16" },
  { name: "item17" },
  { name: "item18" },
  { name: "item19" },
  { name: "item20" },
  { name: "item21" },
  { name: "item22" },
  { name: "item23" },
  { name: "item24" },
  { name: "item25" }
];
const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
};

export const Menu = (list, selected) =>
  list.map(el => {
    const { name } = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });


    const menu = this.menuItems;


const Projects = ({ data }) => {
  return (
    <>
      <div className="App">
        <ScrollMenu
          alignCenter={alignCenter}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          clickWhenDrag={clickWhenDrag}
          data={menu}
          dragging={dragging}
          hideArrows={hideArrows}
          hideSingleArrow={hideSingleArrow}
          onFirstItemVisible={this.onFirstItemVisible}
          onLastItemVisible={this.onLastItemVisible}
          onSelect={this.onSelect}
          onUpdate={this.onUpdate}
          ref={el => (this.menu = el)}
          scrollToSelected={scrollToSelected}
          selected={selected}
          transition={+transition}
          translate={translate}
          wheel={wheel}
        />
      </div>
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
        {data.projects &&
          data.projects.map((item) => (
            <Col lg={4} md={6} xs={12}>
              <ProjectCart projectData={item} />
            </Col>
          ))}
      </Row>
    </div>
    </>
  );
};
export default Projects;
