import ProductCarts from "../product-carts/product-carts";
import React, { Component } from "react";
import Slider from "react-slick";
import LeftArrow from "../arrows/arrow-left";
import ArrowLeft from "../arrows/arrow-left";
import ArrowRight from "../arrows/arrow-right";
import { Row, Col } from "react-bootstrap";
import CategorySlider from "../category-slider/category-slider";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " right-arrow"}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " left-arrow"}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <ArrowRight />,
      prevArrow: <ArrowLeft />,
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
    const settings2 = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <ArrowRight />,
      prevArrow: <ArrowLeft />,
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
        <div style={{ margin: "10rem 0"}}>
          <div className="text-secondary" style={{ marginBottom: "30px"  }}>
            {this.props.data.products_title1}
          </div>
          <h2 className="text-dark mb-lg-5">
            {" "}
            {this.props.data.products_title2}
          </h2>
          <Slider {...settings} className="mr-lg-n3">
            {this.props.data.products &&
              this.props.data.products.map((productData) => (
                <ProductCarts productData={productData} />
              ))}
          </Slider>
        </div>
        <div className="category-container" style={{ marginBottom: "10rem" }}>
          <Slider {...settings2}>
            {this.props.data.categories &&
              this.props.data.categories.map((productCategory) => (
                <div>
                  <div
                    className="category-name-container"
                    style={{ marginRight: "30px" }}
                  >
                    <img
                      src={productCategory.img}
                      width="100%"
                      height="112px"
                      alt=""
                    />
                    <div className="category-name text-secondary text-center py-1">
                      {productCategory.title}
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </>
    );
  }
}
