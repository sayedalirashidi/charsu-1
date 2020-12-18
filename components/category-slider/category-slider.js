import React, { Component } from "react";
import Slider from "react-slick";
import HeaderArrowLeft from "../arrows/header/header-arrow-left";
import HeaderArrowRight from "../arrows/header/header-arrow-right";

export default class CategorySlider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <HeaderArrowRight />,
      prevArrow: <HeaderArrowLeft />,
    };
    console.log("sliderImg", this.props.sliderImg);
    return (
      <>
        <div className="header-img">
          <Slider {...settings}>
            {this.props.sliderImg &&
              this.props.sliderImg.map((slider) => (
                <div>
                  <img src={slider.img} />
                </div>
              ))}
          </Slider>
        </div>
      </>
    );
  }
}
