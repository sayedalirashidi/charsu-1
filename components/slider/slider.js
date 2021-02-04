import React, { Component } from "react";
import Slider from "react-slick";
import HeaderArrowLeft from "../arrows/header/header-arrow-left";
import HeaderArrowRight from "../arrows/header/header-arrow-right";

export default class CustomArrows extends Component {
  constructor(props) {
    super(props);
        this.slide = this.slide.bind(this);

  }
  slide(y){
    y > 0 ? (
       this.slider.slickNext()
    ) : (
       this.slider.slickPrev()
    )
}
  render() {
    const settings = {
      nextArrow: <svg xmlns="http://www.w3.org/2000/svg" width="22.715" height="10.724" viewBox="0 0 22.715 10.724"><g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(0.5 0.707)"><path id="Path_1" data-name="Path 1" d="M29.215,18H7.5" transform="translate(-7.5 -13.32)" fill="none" stroke="#0098a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path id="Path_2" data-name="Path 2" d="M11.866,16.811,16,12.155,11.866,7.5" transform="translate(5.5 -7.5)" fill="none" stroke="#0098a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg>,
      prevArrow: <svg xmlns="http://www.w3.org/2000/svg" width="22.715" height="10.724" viewBox="0 0 22.715 10.724"><g id="Icon_feather-arrow-left" data-name="Icon feather-arrow-left" transform="translate(0.5 0.707)"><path id="Path_1" data-name="Path 1" d="M29.215,18H7.5" transform="translate(-7.5 -13.32)" fill="none" stroke="#0098a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path id="Path_2" data-name="Path 2" d="M11.866,16.811,7.5,12.155,11.866,7.5" transform="translate(-7.5 -7.5)" fill="none" stroke="#0098a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg>,
    };
    return (
      <>
        <div className="header-img">
          <Slider ref={slider => this.slider = slider } {...settings}>
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
