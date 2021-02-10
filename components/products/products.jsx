import ProductCarts from "../product-carts/product-carts";
import React, { Component } from "react";
import Slider from "react-slick";
import LeftArrow from "../arrows/arrow-left";
import ArrowLeft from "../arrows/arrow-left";
import ArrowRight from "../arrows/arrow-right";
import { Row, Col } from "react-bootstrap";
import CategorySlider from "../category-slider/category-slider";


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
      nextArrow: <div className="big-arrows"><svg xmlns="http://www.w3.org/2000/svg" width="26.715" height="14.724" viewBox="0 0 22.715 10.724"><g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(0.5 0.707)"><path id="Path_1" data-name="Path 1" d="M29.215,18H7.5" transform="translate(-9.5 -13.32)" fill="none" stroke="#0098a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path id="Path_2" data-name="Path 2" d="M11.866,16.811,16,12.155,11.866,7.5" transform="translate(5.5 -7.5)" fill="none" stroke="#0098a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg></div>,
      prevArrow: <div className="big-arrows"><svg xmlns="http://www.w3.org/2000/svg" width="26.715" height="14.724" viewBox="0 0 22.715 10.724"><g id="Icon_feather-arrow-left" data-name="Icon feather-arrow-left" transform="translate(0.5 0.707)"><path id="Path_1" data-name="Path 1" d="M29.215,18H7.5" transform="translate(-7.5 -13.32)" fill="none" stroke="#0098a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path id="Path_2" data-name="Path 2" d="M11.866,16.811,7.5,12.155,11.866,7.5" transform="translate(-7.5 -7.5)" fill="none" stroke="#0098a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg></div>,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            nextArrow:'', 
            prevArrow:'', 
          },
        },
        {
          breakpoint: 766,
          settings: {
            slidesToShow: 2,
            nextArrow:'', 
            prevArrow:'', 
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1.1,
            rtl:true,
            nextArrow:'', 
            prevArrow:'', 
          },
        },
      ],
    };
    const settings2 = {
      dots: false,
      infinite: true,
      slidesToShow: 4.1,
      slidesToScroll: 1,
      nextArrow: <div className="big-arrows"><svg xmlns="http://www.w3.org/2000/svg" width="26.715" height="14.724" viewBox="0 0 22.715 10.724"><g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(0.5 0.707)"><path id="Path_1" data-name="Path 1" d="M29.215,18H7.5" transform="translate(-9.5 -13.32)" fill="none" stroke="#0098a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path id="Path_2" data-name="Path 2" d="M11.866,16.811,16,12.155,11.866,7.5" transform="translate(5.5 -7.5)" fill="none" stroke="#0098a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg></div>,
      prevArrow: <div className="big-arrows"><svg xmlns="http://www.w3.org/2000/svg" width="26.715" height="14.724" viewBox="0 0 22.715 10.724"><g id="Icon_feather-arrow-left" data-name="Icon feather-arrow-left" transform="translate(0.5 0.707)"><path id="Path_1" data-name="Path 1" d="M29.215,18H7.5" transform="translate(-7.5 -13.32)" fill="none" stroke="#0098a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path id="Path_2" data-name="Path 2" d="M11.866,16.811,7.5,12.155,11.866,7.5" transform="translate(-7.5 -7.5)" fill="none" stroke="#0098a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg></div>,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3.1,
            nextArrow:'', 
            prevArrow:'', 
          },
        },
        {
          breakpoint: 766,
          settings: {
            slidesToShow: 2.1,
            rtl:true,
            nextArrow:'', 
            prevArrow:'', 
            rtl:true,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1.1,
            nextArrow:'', 
            prevArrow:'', 
          },
        },
      ],
    };
    return (
      <>
        <div className="category-container-top product-margin-top">
          <div className="text-secondary product-margin-bottom">
            {this.props.data.products_title1}
          </div>
          <h2 className="text-dark mb-lg-6">
            {" "}
            {this.props.data.products_title2}
          </h2>
          <Slider {...settings} className="">
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
                  <div className="category-name-container pr-cart-margin" >
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
