import React, { Component } from "react";
import Slider from "react-slick";
import HeaderArrowLeft from "../arrows/header/header-arrow-left";
import HeaderArrowRight from "../arrows/header/header-arrow-right";

export default class CustomArrows extends Component {
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
    return (
      <>
        <div className="header-img">
          <Slider {...settings}>
            {this.props.sliders &&
              this.props.sliders.map((slider) => (
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
