import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import classnames from "classnames";

const AboutUs = ({ data }) => {
  const [documents, setdocuments] = useState(1);
  return (
    <div className="main-container about-us">
      <Row className="justify-content-between box-mobile box-left my-lg-5">
        <Col
          lg={9}
          xs={12}
          className="d-flex flex-column justify-content-between"
        >
          <div className="text-secondary mb-3">شعار ما بهترین تعهد ماست</div>
          <h2 className="title text-dark mt-2 mb-5">کیفیت ، تخصص ، صداقت</h2>
          <div className="poet-box box_banner position-relative">
            <div className="d-block poet-text">
              من که ره بردم به گنجِ حُسنِ بی‌پایان دوست
            </div>
            <div className="d-block text-left poet-text">
              صد گدای همچو خود را بعد از این قارون کنم
            </div>
          </div>
          <Row className="justify-content-md-between  justify-content-center  navigation-buttons mt-5 mt-lg-0">
            <Col
              xs={12}
              lg="auto"
              className="navigation my-2 my-lg-0 ml-2 d-flex align-items-center justify-content-center about-margin-button">
              <a className="text-secondary" href="#engineering-oath">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.846"
                  height="16.154"
                  viewBox="0 0 18.846 16.154"
                  className="ml-3"
                >
                  <g
                    id="Icon_ionic-md-paper"
                    data-name="Icon ionic-md-paper"
                    transform="translate(-2.25 -4.5)"
                  >
                    <path
                      id="Path_74"
                      data-name="Path 74"
                      d="M20.423,4.5H8.981a.693.693,0,0,0-.673.694V6.519H4.017A1.772,1.772,0,0,0,2.25,8.286v8.729a3.646,3.646,0,0,0,3.618,3.639H17.634A3.47,3.47,0,0,0,21.1,17.2V5.173A.675.675,0,0,0,20.423,4.5ZM8.308,7.865v8.077H6.541V8.673A2.054,2.054,0,0,0,6.4,7.865ZM7.592,18.609a2.484,2.484,0,0,1-1.7.7A2.3,2.3,0,0,1,3.6,17.015V8.673a.8.8,0,1,1,1.6,0v7.942a.675.675,0,0,0,.673.673H8.287A2.213,2.213,0,0,1,7.592,18.609ZM19.75,17.2a2.126,2.126,0,0,1-2.116,2.1H8.783a3.517,3.517,0,0,0,.871-2.293V5.888h10.1Z"
                      fill="#0098a0"
                    />
                    <path
                      id="Path_75"
                      data-name="Path 75"
                      d="M17.438,9.563h6.731v2.356H17.438Z"
                      transform="translate(-6.101 -2.034)"
                      fill="#0098a0"
                    />
                    <path
                      id="Path_76"
                      data-name="Path 76"
                      d="M17.438,15.75h6.731V17.1H17.438Z"
                      transform="translate(-6.101 -4.519)"
                      fill="#0098a0"
                    />
                    <path
                      id="Path_77"
                      data-name="Path 77"
                      d="M17.438,20.25h6.731V21.6H17.438Z"
                      transform="translate(-6.101 -6.327)"
                      fill="#0098a0"
                    />
                    <path
                      id="Path_78"
                      data-name="Path 78"
                      d="M23.942,24.75H17.212s0,1.346-.337,1.346H23.13C23.942,26.1,23.942,25.213,23.942,24.75Z"
                      transform="translate(-5.875 -8.135)"
                      fill="#0098a0"
                    />
                  </g>
                </svg>
                سوگند نامه مهندسی
              </a>
            </Col>
            <Col
              xs={12}
              lg="auto"
              className="navigation my-2 my-lg-0 mx-2 mx-md-0 mx-lg-2  d-flex align-items-center justify-content-center"
            >
              <a
                className="text-secondary"
                href="#
company-assignment"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.6"
                  height="17.764"
                  viewBox="0 0 17.6 17.764"
                  className="ml-3"
                >
                  <g
                    id="iconfinder_UI_Essentials_dart_mission_goal_success_6646038"
                    transform="translate(0.5 0.5)"
                  >
                    <line
                      id="Line_4"
                      data-name="Line 4"
                      y1="4.572"
                      x2="4.527"
                      transform="translate(7.474 4.645)"
                      fill="none"
                      stroke="#0098a0"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1"
                    />
                    <path
                      id="Path_42"
                      data-name="Path 42"
                      d="M28.036,5.048H25.018V2L22,5.048V8.1h3.018Z"
                      transform="translate(-11.436 -2)"
                      fill="none"
                      stroke="#0098a0"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1"
                    />
                    <ellipse
                      id="Ellipse_8"
                      data-name="Ellipse 8"
                      cx="4.527"
                      cy="4.572"
                      rx="4.527"
                      ry="4.572"
                      transform="translate(3.521 4.064)"
                      fill="none"
                      stroke="#0098a0"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1"
                    />
                    <path
                      id="Path_43"
                      data-name="Path 43"
                      d="M17.627,6.693A7.9,7.9,0,0,1,18.845,11a7.923,7.923,0,1,1-7.923-8,7.712,7.712,0,0,1,4.266,1.231"
                      transform="translate(-3 -2.238)"
                      fill="none"
                      stroke="#0098a0"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1"
                    />
                  </g>
                </svg>
                ماموریت سازمانی
              </a>
            </Col>
            <Col
              xs={12}
              lg="auto"
              className="navigation my-2 my-lg-0 mx-2 mx-md-0 mx-lg-2 d-flex align-items-center justify-content-center"
            >
              <a
                className="text-secondary"
                href="#
principles-of-professional-ethics"
              >
                <svg
                  id="iconfinder_Tick_1737369"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16.594"
                  height="16.867"
                  viewBox="0 0 16.594 16.867"
                  className="ml-3"
                >
                  <path
                    id="Path_44"
                    data-name="Path 44"
                    d="M68.638,60.338a8.435,8.435,0,1,0,8.3,8.434A8.375,8.375,0,0,0,68.638,60.338Zm0,15.537a7.1,7.1,0,1,1,6.988-7.1A7.054,7.054,0,0,1,68.638,75.875Z"
                    transform="translate(-60.341 -60.338)"
                    fill="#0098a0"
                  />
                  <path
                    id="Path_45"
                    data-name="Path 45"
                    d="M142.287,169.31l-5.316,5.506-2.634-1.939a.741.741,0,0,0-1.045.17.769.769,0,0,0,.167,1.062l3.156,2.323a.739.739,0,0,0,.972-.083l5.767-5.973a.769.769,0,0,0-.01-1.075A.739.739,0,0,0,142.287,169.31Z"
                    transform="translate(-130.063 -164.396)"
                    fill="#0098a0"
                  />
                </svg>
                اصول اخلاق حرفه ای
              </a>
            </Col>
            <Col
              xs={12}
              lg="auto"
              className="navigation my-2 my-lg-0 mx-2 mx-md-0 mx-lg-2 d-flex align-items-center justify-content-center"
            >
              <a
                className="text-secondary"
                href="#
earned-titles"
              >
                <svg
                  id="Layer_2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.155"
                  height="23.841"
                  viewBox="0 0 19.155 23.841"
                  className="ml-3"
                >
                  <g
                    id="Group_38"
                    data-name="Group 38"
                    transform="translate(0 0)"
                  >
                    <path
                      id="Path_54"
                      data-name="Path 54"
                      d="M24.28,11.7a6.456,6.456,0,0,0-4.441,1.749h0a5.766,5.766,0,0,0,0,8.445,6.514,6.514,0,0,0,8.882,0,5.766,5.766,0,0,0,0-8.445A6.456,6.456,0,0,0,24.28,11.7Zm3.813,9.6a5.548,5.548,0,0,1-3.813,1.493A5.629,5.629,0,0,1,20.467,21.3a5.008,5.008,0,0,1-1.57-3.625,5.08,5.08,0,0,1,1.57-3.625,5.548,5.548,0,0,1,3.813-1.493,5.629,5.629,0,0,1,3.813,1.493,5.008,5.008,0,0,1,1.57,3.625A5.08,5.08,0,0,1,28.093,21.3Z"
                      transform="translate(-14.77 -8.587)"
                      fill="#0098a0"
                    />
                    <path
                      id="Path_55"
                      data-name="Path 55"
                      d="M25.32,21.268,23.66,19.69l-.314.3L22,21.353l3.364,3.2,5.562-5.289L29.177,17.6Zm.045,2.09-2.108-2,.449-.469,1.66,1.578,3.858-3.668.493.469Z"
                      transform="translate(-16.976 -11.97)"
                      fill="#0098a0"
                    />
                    <path
                      id="Path_56"
                      data-name="Path 56"
                      d="M29.865,12.461a2.722,2.722,0,0,0-.224-.64c-.179-.256-.4-.469-.538-.682a1.509,1.509,0,0,1-.359-.512.9.9,0,0,1-.045-.384V9.561a2.064,2.064,0,0,0-.224-.981,1.682,1.682,0,0,0-.493-.469,6.922,6.922,0,0,0-.807-.384,1.908,1.908,0,0,1-.538-.3,3.725,3.725,0,0,1-.449-.768l-.269-.512a1.681,1.681,0,0,0-.493-.469,2.108,2.108,0,0,0-1.032-.171h-.718a1.044,1.044,0,0,1-.4-.043,2.1,2.1,0,0,1-.718-.512,1.991,1.991,0,0,0-.493-.341,1.139,1.139,0,0,0-.673-.213h-.135a1.5,1.5,0,0,0-.628.128,3.083,3.083,0,0,0-.763.341,2.371,2.371,0,0,1-.538.213h-.09a2.315,2.315,0,0,1-.673-.128,3.066,3.066,0,0,0-.942-.171,1.1,1.1,0,0,0-.493.085,1.861,1.861,0,0,0-.583.341A3.58,3.58,0,0,0,16,5.893c-.179.213-.314.384-.449.426a.673.673,0,0,1-.314.085c-.224.043-.493.085-.807.171a1.929,1.929,0,0,0-.9.426,1.939,1.939,0,0,0-.359.554A7.2,7.2,0,0,0,13,8.409a1.165,1.165,0,0,1-.179.554,2.263,2.263,0,0,1-.673.554c-.135.128-.314.213-.493.384a1.217,1.217,0,0,0-.359.554,1.734,1.734,0,0,0-.09.469,2.668,2.668,0,0,0,.179.9,2.267,2.267,0,0,1,.135.64v.085a1.793,1.793,0,0,1-.314.725,5.6,5.6,0,0,0-.269.512,1.306,1.306,0,0,0-.135.6v.128a2.723,2.723,0,0,0,.224.64c.179.256.4.469.538.682a1.509,1.509,0,0,1,.359.512.9.9,0,0,1,.045.384v.682a2.064,2.064,0,0,0,.224.981,1.682,1.682,0,0,0,.493.469,6.923,6.923,0,0,0,.807.384,1.908,1.908,0,0,1,.538.3,3.725,3.725,0,0,1,.449.768l.269.512a1.681,1.681,0,0,0,.493.469c.045.043.135.043.179.085l-1.884,5.331,2.961-.9,1.794,2.431L20.355,22.4a.043.043,0,0,0,.045-.043L22.463,28.2l1.794-2.431,2.961.9L25.11,20.692l.045-.043a1.568,1.568,0,0,1,.359-.128c.224-.043.493-.085.807-.171a1.518,1.518,0,0,0,1.256-.981,7.2,7.2,0,0,0,.179-.853,1.165,1.165,0,0,1,.179-.554,2.263,2.263,0,0,1,.673-.554c.135-.128.314-.213.493-.384a1.217,1.217,0,0,0,.359-.554,1.734,1.734,0,0,0,.09-.469,2.668,2.668,0,0,0-.179-.9,2.267,2.267,0,0,1-.135-.64V14.38a1.793,1.793,0,0,1,.314-.725,5.6,5.6,0,0,0,.269-.512,1.306,1.306,0,0,0,.135-.6A.094.094,0,0,1,29.865,12.461ZM17.933,26.322l-1.121-1.535-1.884.554,1.391-3.881h.673a1.044,1.044,0,0,1,.4.043,2.1,2.1,0,0,1,.718.512,1.991,1.991,0,0,0,.493.341,1.139,1.139,0,0,0,.673.213h0Zm5.876-1.535-1.121,1.535-1.525-4.35c.045,0,.135-.043.179-.043h.09a2.315,2.315,0,0,1,.673.128,3.066,3.066,0,0,0,.942.171,1.1,1.1,0,0,0,.493-.085,1.861,1.861,0,0,0,.583-.341c.09-.085.179-.213.269-.3l1.346,3.881Zm5.114-11.9c-.09.171-.179.384-.314.64a2.56,2.56,0,0,0-.314.81v.171a2.668,2.668,0,0,0,.179.9,2.267,2.267,0,0,1,.135.64c0,.085,0,.128-.045.171a.756.756,0,0,1-.179.213,3.276,3.276,0,0,1-.583.426,2.343,2.343,0,0,0-.673.64,1.447,1.447,0,0,0-.224.554c-.09.3-.09.554-.179.768a.943.943,0,0,1-.224.469.744.744,0,0,1-.269.128c-.179.085-.449.085-.718.171a2.787,2.787,0,0,0-.9.3,3.819,3.819,0,0,0-.852.853,2.48,2.48,0,0,1-.314.341c-.09.085-.179.128-.224.171-.045,0-.09.043-.179.043a2.315,2.315,0,0,1-.673-.128,3.066,3.066,0,0,0-.942-.171h-.179a2.89,2.89,0,0,0-1.121.426,3.307,3.307,0,0,0-.4.213,1.187,1.187,0,0,1-.314.085h-.045a.66.66,0,0,1-.269-.085,2.588,2.588,0,0,1-.583-.469,2.467,2.467,0,0,0-.807-.469,2.2,2.2,0,0,0-.718-.085,4,4,0,0,1-.718,0,1.347,1.347,0,0,1-.538-.085.468.468,0,0,1-.179-.213,4.482,4.482,0,0,1-.314-.64,2.836,2.836,0,0,0-.493-.768,3.967,3.967,0,0,0-1.077-.6,1.638,1.638,0,0,1-.4-.213c-.09-.085-.179-.128-.224-.171a1.172,1.172,0,0,1-.09-.512v-.682a1.9,1.9,0,0,0-.09-.682,2.869,2.869,0,0,0-.718-.981,1.4,1.4,0,0,1-.269-.341.407.407,0,0,1-.09-.256v-.043a.443.443,0,0,1,.09-.3c.09-.171.179-.384.314-.64a2.56,2.56,0,0,0,.314-.81V12.5a2.668,2.668,0,0,0-.179-.9,2.267,2.267,0,0,1-.135-.64c0-.085,0-.128.045-.171a.756.756,0,0,1,.179-.213A3.277,3.277,0,0,1,13,10.158a2.343,2.343,0,0,0,.673-.64,1.447,1.447,0,0,0,.224-.554c.09-.3.09-.554.179-.768a.943.943,0,0,1,.224-.469h0a.744.744,0,0,1,.269-.128c.179-.085.449-.085.718-.171a2.787,2.787,0,0,0,.9-.3,3.819,3.819,0,0,0,.852-.853,2.48,2.48,0,0,1,.314-.341c.09-.085.179-.128.224-.171.045,0,.09-.043.179-.043a2.315,2.315,0,0,1,.673.128,3.066,3.066,0,0,0,.942.171h.179a2.89,2.89,0,0,0,1.121-.426,3.307,3.307,0,0,0,.4-.213,1.187,1.187,0,0,1,.314-.085h.045a.66.66,0,0,1,.269.085,2.588,2.588,0,0,1,.583.469,2.467,2.467,0,0,0,.807.469,2.3,2.3,0,0,0,.583.043,4,4,0,0,1,.718,0,1.347,1.347,0,0,1,.538.085.468.468,0,0,1,.179.213,4.482,4.482,0,0,1,.314.64,2.836,2.836,0,0,0,.493.768,3.967,3.967,0,0,0,1.077.6,1.638,1.638,0,0,1,.4.213c.09.085.179.128.224.171a1.172,1.172,0,0,1,.09.512v.682a1.9,1.9,0,0,0,.09.682,2.869,2.869,0,0,0,.718.981,1.4,1.4,0,0,1,.269.341.407.407,0,0,1,.09.256v.043C29.013,12.674,28.968,12.759,28.923,12.887Z"
                      transform="translate(-10.8 -4.4)"
                      fill="#0098a0"
                    />
                  </g>
                </svg>
                عناوین کسب شده
              </a>
            </Col>
            <Col
              xs={12}
              lg="auto"
              className="navigation my-2 my-lg-0 mx-2 mx-md-0 mx-lg-2 d-flex align-items-center justify-content-center"
            >
              <a className="text-secondary" href="#cooperation-with-companies">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="25"
                  viewBox="0 0 27 25"
                  className="ml-3"
                >
                  <g id="Layer_2" data-name="Layer 2" transform="translate(0)">
                    <g id="Icons">
                      <g id="Cooperation" transform="translate(0)">
                        <rect
                          id="Rectangle_67"
                          data-name="Rectangle 67"
                          width="27"
                          height="25"
                          transform="translate(0)"
                          fill="none"
                        />
                        <path
                          id="Path_46"
                          data-name="Path 46"
                          d="M26.869,15.847l-5.24-5.4a1.319,1.319,0,0,0-1.886,0l-.732.754a1.418,1.418,0,0,0-.058,1.873,3.01,3.01,0,0,1-2.353.717,3.865,3.865,0,0,0-2.281.421h-.031l-1.8-.236a.888.888,0,0,1-.53-.268l-.6-.615a1.418,1.418,0,0,0-.049-1.882l-.732-.754a1.319,1.319,0,0,0-1.886,0L3.447,15.847a1.418,1.418,0,0,0,0,1.943l.732.754h0a1.318,1.318,0,0,0,1.828.051l1.149,1.179a1.543,1.543,0,0,1,.368.661,5.367,5.367,0,0,0,1.347,2.391h0a1.576,1.576,0,0,0,.038,1.512,1.482,1.482,0,0,0,1.278.745h0a1.555,1.555,0,0,0,.435,1.092,1.464,1.464,0,0,0,1.06.448h0a1.582,1.582,0,0,0,.449,1.092,1.45,1.45,0,0,0,1.756.264l.081.083a1.458,1.458,0,0,0,1.374.417,1.5,1.5,0,0,0,1.078-.972l.184.19a1.455,1.455,0,0,0,2.443-.555l.22.227a1.465,1.465,0,0,0,2.115,0,1.573,1.573,0,0,0,0-2.179l-.22-.227a1.41,1.41,0,0,0,.534-.352,1.531,1.531,0,0,0,.278-1.785l.085-.093A4.249,4.249,0,0,0,23.2,20.546a3.344,3.344,0,0,1,.9-1.73l.229-.236a1.318,1.318,0,0,0,1.828-.051h0l.732-.754A1.418,1.418,0,0,0,26.869,15.847ZM4.8,17.891l-.732-.735a.472.472,0,0,1,0-.652l5.254-5.416a.44.44,0,0,1,.651,0l.7.754a.472.472,0,0,1,0,.671L5.45,17.891a.44.44,0,0,1-.651,0ZM9.77,24.006a.656.656,0,0,1,0-.925.611.611,0,0,1,.876,0,.66.66,0,0,1,.011.913A.614.614,0,0,1,9.77,24.006Zm1.5,1.54a.652.652,0,0,1-.134-.7.619.619,0,0,1,.583-.389.6.6,0,0,1,.449.185.661.661,0,0,1,0,.925h0a.621.621,0,0,1-.92-.019Zm1.5,1.54a.652.652,0,0,1,0-.925h0a.612.612,0,0,1,1.037.3.646.646,0,0,1-.293.712.606.606,0,0,1-.744-.1ZM21.1,23.992a.629.629,0,0,1-.9,0h0l-4.558-4.713a.444.444,0,0,0-.463-.207.456.456,0,0,0-.357.368.468.468,0,0,0,.2.477l5.734,5.925a.653.653,0,0,1,.184.463.639.639,0,0,1-.184.463.611.611,0,0,1-.876,0l-5.734-5.93a.439.439,0,0,0-.558.064.473.473,0,0,0-.062.575l4.558,4.69a.668.668,0,0,1,0,.925.622.622,0,0,1-.9,0l-4.535-4.713a.439.439,0,0,0-.558.064.473.473,0,0,0-.062.575l3.413,3.515a.668.668,0,0,1,0,.925.622.622,0,0,1-.9,0l-.081-.083a1.566,1.566,0,0,0-.034-1.513,1.473,1.473,0,0,0-1.282-.739,1.531,1.531,0,0,0-.433-1.09,1.441,1.441,0,0,0-1.062-.436,1.543,1.543,0,0,0-.706-1.341,1.449,1.449,0,0,0-1.48-.047h0a4.457,4.457,0,0,1-1.1-2,2.33,2.33,0,0,0-.6-1.064L6.627,17.965l4.113-4.237.593.611a1.776,1.776,0,0,0,1.037.523l.925.12-2.209,2.276a1.768,1.768,0,0,0-.484,1.7,1.71,1.71,0,0,0,1.215,1.251,1.652,1.652,0,0,0,1.649-.5l1.486-1.531a1.222,1.222,0,0,1,1.019-.356l5.11,5.264a.662.662,0,0,1,0,.907Zm1.239-3.608a3.4,3.4,0,0,1-.9,1.73l-.031.032L17.942,18.58a5.783,5.783,0,0,0,1.347.194.41.41,0,0,0,.319-.117.437.437,0,0,0,.13-.322.456.456,0,0,0-.449-.463,5.176,5.176,0,0,1-2.429-.685,2.09,2.09,0,0,0-2.546.347l-1.486,1.531a.8.8,0,0,1-.821.307.821.821,0,0,1-.613-.641.845.845,0,0,1,.311-.841l2.245-2.313a3.026,3.026,0,0,1,2.555-.893,3.865,3.865,0,0,0,3.058-.957l4.127,4.237-.225.227a4.275,4.275,0,0,0-1.123,2.192Zm3.92-3.238-.745.745a.44.44,0,0,1-.651,0l-5.218-5.379a.472.472,0,0,1,0-.671l.732-.754a.44.44,0,0,1,.651,0L26.249,16.5a.472.472,0,0,1,0,.652Z"
                          transform="translate(-2.092 -6.561)"
                          fill="#0098a0"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                همکاری با شرکت ها
              </a>
            </Col>
          </Row>
        </Col>
        <Col md={3} className="d-none d-lg-block">
          <img
            className="d-none d-lg-block"
            src="./images/Smart-cities-759x500.png"
            width="240px"
            // height="488px"
          />
        </Col>
      </Row>
      <div className="box-center p-5 box-mobile  my-lg-5" id="engineering-oath">
        <h2 className="title text-dark mt-2 mb-5">سوگند نامه مهندسی</h2>
        <p className="text-dark overflow-hidden text-justify">
          من در پیشگاه خداوند متعال ، سوگند یاد می‌کنم : در مقام یک مهندس ، در
          تمام فعالیت‌های خود، صداقت، دقت، نظم، حفظ منافع اجتماع و رعایت حقوق
          همگان را سر لوحه‌ی کار خود در نظر گرفته، ایمنی، سلامت و آینده‌ی
          انسان‌ها را در نظر بگیرم و منافع مردم را برتر از همه‌ی تمایلات ...
          خویش قرار دهم{" "}
        </p>
        <div className="d-flex justify-content-end">
          <button className="button text-secondary  bg-white border-bottom border-top-0 border-left-0 border-right-0 border-secondary p-0 ">
            مطالعه متن کامل
          </button>
        </div>
      </div>
      <div
        className="information-box box-mobile box-left p-5 d-flex  my-lg-5"
        id="company-assignment"
      >
        <div className="d-none d-md-block">
          <img
            src="./images/josue-isai-ramos-figueroa-qvBYnMuNJ9A-unsplash.png"
            width="450px"
            height="686px"
          />
        </div>
        <div className="mr-md-5">
          <div className="text-secondary mb-3">برای بهترین ها تلاش میکنیم</div>
          <h2 className="text-dark title mt-2 mb-5">
            خط مشی و ماموریت سازمانی{" "}
          </h2>
          <ul>
            <li className="mb-lg-4 mr-5 position-relative">
              ایجاد بستر مناسب برای مشارکت نیروهای متخصص و متعهد در صحنه توسعه
              اقتصادی کشور
            </li>
            <li className="mb-lg-4 mr-5 position-relative">
              کارآفرینی برای جوانان وطن عزیزمان ایران
            </li>
            <li className="mb-lg-4 mr-5 position-relative">
              اعتماد آفرینی در اجرای مناسب و به ‌موقع تعهدات
            </li>
            <li className="mb-lg-4 mr-5 position-relative">
              پاسخگو در قبال کارفرما
            </li>
            <li className="mb-lg-4 mr-5 position-relative">
              نهادینه کردن کیفیت در کل زنجیره ارائه خدمات
            </li>
            <li className="mb-lg-4 mr-5 position-relative">
              بهره‌مندی از کارکنان توانمند و دانش محور
            </li>
            <li className="mb-lg-4 mr-5 position-relative">
              توجه به سلامت، ایمنی، رشد و ایجاد انگیزه و خشنودی کارکنان
            </li>
            <li className="mb-lg-4 mr-5 position-relative">
              تلاش در جهت ارتقاء سطح علمی و فرهنگی کارکنان
            </li>
            <li className="mb-lg-4 mr-5 position-relative">
              متعهد به حفظ محیط زیست در راستای مسئولیت اجتماعی
            </li>
            <li className="mb-lg-4 mr-5 position-relative">
              اعتقاد به فرهنگ دینی، ملی و تجلی آن در رفتار، گفتار و کردار خود
            </li>
            <li className="mb-lg-4 mr-5 position-relative">
              پایبندی به ارزش های اخلاقی (اعتماد و احترام متقابل، برخورد صادقانه
              و صریح، عدل (...و انصاف، پایبندی به قانون، وفای به عهد و
            </li>
            <li className="mb-lg-4 mr-5 position-relative">
              استفاده از تجربیات بزرگان و صاحب نظران در ارائه خدمت
            </li>
          </ul>
        </div>
      </div>
      <div
        className="box-center p-5  my-lg-5"
        id="principles-of-professional-ethics"
      >
        <div className="text-secondary mb-3">رو تیتر این بخش</div>
        <h2 className="text-dark title mt-2 mb-5 nezam">
          نظام نامه رفتار حرفه ای اخلاقی در مهندسی ساختمان
        </h2>
        <p className="overflow-hidden text-dark text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
        <div className="d-flex justify-content-end">
          <button className="button text-secondary  bg-white border-bottom border-top-0 border-left-0 border-right-0 border-secondary p-0 ">
            مطالعه متن کامل
          </button>
        </div>
      </div>
      <div
        className="documents box-mobile box-right py-5  my-lg-5"
        id="earned-titles"
      >
        <Row className="justify-content-between">
          <Col lg={8} xs={12}>
            <div className="text-secondary mb-3">
              برای بهترین ها تلاش میکنیم
            </div>
            <h2 className="title  text-dark mt-2 mb-5">اسناد</h2>
          </Col>
          <Col lg={4} xs={12} className="mb-3 mb-lg-0">
            <ul className="d-flex">
              <li
                onClick={() => setdocuments(1)}
                className={classnames(
                  "mx-3",
                  "documents-navigation",
                  documents == 1 ? "active" : null
                )}
              >
                گواهینامه ها
              </li>
              <li
                onClick={() => setdocuments(2)}
                className={classnames(
                  "mx-3",
                  "documents-navigation",
                  documents == 2 ? "active" : null
                )}
              >
                لوح تقدیر
              </li>
              <li
                onClick={() => setdocuments(3)}
                className={classnames(
                  "mx-3",
                  "documents-navigation",
                  documents == 3 ? "active" : null
                )}
              >
                انجمن ها
              </li>
            </ul>
          </Col>
        </Row>
        {documents === 1 && (
          <Row className="justify-content-between flex-nowrap scroll-box horizontal-scroll">
            {data.certificates &&
              data.certificates.map((item) => (
                <Col xs={12} md={4} lg={3} className="mb-5">
                  <img src={item.img} width="210px" height="289px" alt="" />
                  <div className="text-secondary mt-4">{item.title}</div>
                </Col>
              ))}
          </Row>
        )}
        {documents === 2 && (
          <Row className="justify-content-between flex-nowrap scroll-box horizontal-scroll">
            {data.appreciations &&
              data.appreciations.map((item) => (
                <Col xs={12} md={4} lg={3} className="mb-5 mb-lg-0">
                  <img src={item.img} width="210px" height="289px" alt="" />
                  <div className="text-secondary mt-4">{item.title}</div>
                </Col>
              ))}
          </Row>
        )}
        {documents === 3 && (
          <Row className="justify-content-between flex-nowrap scroll-box horizontal-scroll">
            {data.communities &&
              data.communities.map((item) => (
                <Col xs={12} md={4} lg={3} className="mb-5 mb-lg-0">
                  <img src={item.img} width="210px" height="289px" alt="" />
                  <div className="text-secondary mt-4">{item.title}</div>
                </Col>
              ))}
          </Row>
        )}
      </div>
      <div
        className="box-center p-5 box-mobile  my-lg-5"
        id="cooperation-with-companies"
      >
        <div className="text-secondary mb-3">برای بهترین ها تلاش میکنیم</div>
        <h2 className="title  text-dark mt-2 mb-5">
          همکاری با شرکت ها و مجموعه ها
        </h2>
        <Row className="flex-nowrap justify-content-between overflow-auto horizontal-scroll">
          {data.companies &&
            data.companies.map((item) => (
              <Col className="my-4 mx-4">
                <img src={item.img} alt="" width="176px" height="95px" />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};
export default AboutUs;
