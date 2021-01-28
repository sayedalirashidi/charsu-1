import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classnames from "classnames";
import axios from "axios";
import style from "./footer.module.scss";
import SocialMedia from "../social-media/social-media";

const quickAccess = [
  { href: "test", title: "پاسخ به پرسش‌های متداول" },
  { href: "test", title: "قوانین و مقررات" },
  { href: "test", title: "پشتیبانی خرید" },
  { href: "test", title: "حریم خصوصی" },
  { href: "test", title: "ارتباط مستقیم با مدیریت" },
];
const sublinks = [
  { href: "test", title: "پایگاه اطلاع رسانی ریاست جمهوری" },
  { href: "test", title: "وبسایت وزارت راه و شهرسازی" },
  { href: "test", title: "پایگاه اینترنتی وزارت نیرو" },
  { href: "test", title: "سازمان برنامه و بودجه کشور" },
  { href: "test", title: "سازمان نظام مهندسی ساختمان تهران" },
];
const Footer = () => {
  const [data, setdata] = useState("");
  useEffect(() => {
    axios.get("http://103.215.223.142:8000/api/footer").then((res) => {
      setdata(res.data.data);
    });
  }, []);
  return (
    <>
      <div className={style["footer-container"]}>
        <div className="mb-5 margin-LR">
          <div>
            <img
              src="../logo.png"
              alt="logo"
              width="179px"
              height="96px"
              className="d-block"
            />
          </div>
          <Row className="justify-content-between">
            <Col xs={12} md={6} lg={3} className="mt-3 mt-md-5 mb-5 mb-md-0">
              <div className="text-justify mb-3 mb-md-4">{data.text}</div>
              <Row>
                <Col className="d-flex align-items-center justify-content-end">
                  <div>{data.email}</div>
                  <div
                    className={classnames(
                      style["contact"],
                      "d-flex align-items-center"
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14.562"
                      height="10.921"
                      viewBox="0 0 14.562 10.921"
                    >
                      <path
                        id="Icon_simple-gmail"
                        data-name="Icon simple-gmail"
                        d="M14.562,5.41v9.1a.894.894,0,0,1-.91.91h-.91V7.162L7.281,11.083,1.82,7.162v8.259H.91a.893.893,0,0,1-.91-.91V5.41A.894.894,0,0,1,.91,4.5h.3L7.281,8.9l6.067-4.4h.3a.894.894,0,0,1,.91.91Z"
                        transform="translate(0 -4.5)"
                        fill="#0098a0"
                      />
                    </svg>
                  </div>
                </Col>
                <Col className="d-flex align-items-center justify-content-end">
                  <div className="ml-2">{data.phone}</div>
                  <div
                    className={classnames(
                      style["contact"],
                      "d-flex align-items-center"
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13.176"
                      height="13.176"
                      viewBox="0 0 13.176 13.176"
                    >
                      <path
                        id="Icon_awesome-phone"
                        data-name="Icon awesome-phone"
                        d="M12.7.633,10.02.015a.622.622,0,0,0-.708.358L8.077,3.255a.616.616,0,0,0,.178.721L9.814,5.252a9.537,9.537,0,0,1-4.56,4.56L3.978,8.252a.617.617,0,0,0-.721-.178L.375,9.31a.625.625,0,0,0-.36.71L.633,12.7a.617.617,0,0,0,.6.479,11.939,11.939,0,0,0,11.94-11.94A.617.617,0,0,0,12.7.633Z"
                        transform="translate(0.001 0.001)"
                        fill="#0098a0"
                      />
                    </svg>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6} lg={4} className="mt-n4">
              <Row>
                <Col xs={6}>
                  <h5 className="text-secondary mb-5 font-weight-bold">
                    دسترسی سریع
                  </h5>
                  <ul>
                    <li className="mb-4">
                      <a href={data.accessLink1}>{data.accessTitle1}</a>
                    </li>
                    <li className="mb-4">
                      <a href={data.accessLink2}>{data.accessTitle2}</a>
                    </li>
                    <li className="mb-4">
                      <a href={data.accessLink3}>{data.accessTitle3}</a>
                    </li>
                    <li className="mb-4">
                      <a href={data.accessLink4}>{data.accessTitle4}</a>
                    </li>
                    <li className="mb-4">
                      <a href={data.accessLink5}>{data.accessTitle5}</a>
                    </li>
                  </ul>
                </Col>
                <Col xs={6}>
                  <h5 className="text-secondary mb-5 font-weight-bold">
                    پیوند ها
                  </h5>
                  <ul>
                    <li className="mb-4">
                      <a href={data.connectionLink1}>{data.connectionTitle1}</a>
                    </li>
                    <li className="mb-4">
                      <a href={data.connectionLink2}>{data.connectionTitle2}</a>
                    </li>
                    <li className="mb-4">
                      <a href={data.connectionLink3}>{data.connectionTitle3}</a>
                    </li>
                    <li className="mb-4">
                      <a href={data.connectionLink4}>{data.connectionTitle4}</a>
                    </li>
                    <li className="mb-4">
                      <a href={data.connectionLink5}>{data.connectionTitle5}</a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={12} lg={3} className="mt-n4 social-container">
              <h5 className="text-secondary mb-5 font-weight-bold">
                شبکه های اجتماعی
              </h5>
              <Row className="justify-content-bewteen">
                <Col md="6" lg="12">
                  <SocialMedia data={data} />
                </Col>
                <Col md="6" lg="12" className="p-lg-0">
                  <div className="d-flex justify-content-between mt-5">
                    <img src="./images/light.png" width="90px" height="90px" />
                    <img
                      src="./images/cd30d311-e630-412b-adb8-fd38a69fc8f4.png"
                      width="90px"
                      height="90px"
                    />
                    <img src="./images/light.png" width="90px" height="90px" />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div className="bg-primary text-light text-center p-4 margin-LR">
        تمام حقوق این سایت متعلق به شرکت چارسو امید توسعه میباشد و هرگونه کپی
        برداری بدون درج منبع آن پیگرد قانونی خواهد داشت
      </div>
    </>
  );
};
export default Footer;
