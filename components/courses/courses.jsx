import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import classnames from "classnames";
import LatestCourseCart from "../latest-course-cart/latest-course-cart";

import style from "./courses.module.scss";
const imgSrc = [
  "./images/annie-spratt-HfCg-1.png",
  "./images/bf50bba792c90823000bbbb65cb84e64.png",
  "./images/devon-owens-JVXcRDu1tVI-unsplash.png",
  "./images/annie-spratt-HfCg-1.png",
  "./images/devon-owens-JVXcRDu1tVI-unsplash.png",
  "./images/annie-spratt-HfCg-1.png",
  "./images/devon-owens-JVXcRDu1tVI-unsplash.png",
  "./images/nick-morrison-FHnnjk1Yj7Y-unsplash.png",
];
const LatestCourses = ({ coursesData }) => {
  return (
    <div className="vertical-scroll latest-courses">
      {coursesData &&
        coursesData.map((course) => <LatestCourseCart course={course} />)}
    </div>
  );
};
const FavoriteCourses = ({ popularCourses }) => {
  return (
    <div className="vertical-scroll latest-courses">
      {popularCourses &&
        popularCourses.map((course) => <LatestCourseCart course={course} />)}
    </div>
  );
};

const Courses = ({ data }) => {
  const [courses, setcourses] = useState(1);
  return (
    <>
      <Row className="justify-content-between">
        <span className="course-main-box course-headline text-justify mb-5">
          <div
            className="mb-4 course-class"
          >
            {data.courses_title1}
          </div>
          <h2 style={{ color: "#f8f3eb" }} className="mb-5">
            {data.courses_title2}
          </h2>
          <img
            src="./images/campaign-creators-gMsnXqILjp4-unsplash.png"
            width="100%"
            height="260px"
            className="mb-4 "
          />
          <div>
            <Row className="justify-content-between align-items-center mb-4">
              <Col as="div" style={{ color: "#ffd798", fontSize: "1.8rem" }}>
                معماری نوین در ایران
              </Col>
              <Col
                as="div"
                style={{ color: "#ffd798" }}
                className="text-left d-flex align-items-center justify-content-end"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  className="ml-3"
                >
                  <path
                    id="Icon_awesome-user-tie"
                    data-name="Icon awesome-user-tie"
                    d="M7,8A4,4,0,1,0,3,4,4,4,0,0,0,7,8ZM9.994,9.019,8.5,15l-1-4.25L8.5,9h-3l1,1.75L5.5,15,4.006,9.019A4.193,4.193,0,0,0,0,13.2v1.3A1.5,1.5,0,0,0,1.5,16h11A1.5,1.5,0,0,0,14,14.5V13.2A4.193,4.193,0,0,0,9.994,9.019Z"
                    fill="#ffd798"
                  />
                </svg>

                {/* <i className="fa fa-user ml-3" style={{ fontSize: "2rem" }} /> */}
                <span style={{ fontSize: "1.2rem" }}>دکتر تابش</span>
              </Col>
            </Row>
            <div className="text-white mb-3 selected-course">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </div>
            <div className="d-flex justify-content-end">
              <button className={style["button"]}>
                مشاهده دوره
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.715"
                  height="10.724"
                  viewBox="0 0 22.715 10.724"
                  className="mr-4"
                >
                  <g
                    id="Icon_feather-arrow-left"
                    data-name="Icon feather-arrow-left"
                    transform="translate(0.5 0.707)"
                  >
                    <path
                      id="Path_1"
                      data-name="Path 1"
                      d="M29.215,18H7.5"
                      transform="translate(-7.5 -13.32)"
                      fill="none"
                      stroke="#f8f3eb"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                    />
                    <path
                      id="Path_2"
                      data-name="Path 2"
                      d="M11.866,16.811,7.5,12.155,11.866,7.5"
                      transform="translate(-7.5 -7.5)"
                      fill="none"
                      stroke="#f8f3eb"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </span>
        <Col lg={6} md={12} xs={12} className="text-justify">
          <ul className="d-flex mb-5">
            <li
              className={classnames(
                courses == 1 ? [style.active] : null,
                "mb-4  ml-5"
              )}
              onClick={() => setcourses(1)}
              style={{ color: "rgba(247,247,247,0.3)", cursor: "pointer" }}
            >
              آخرین دوره ها
            </li>
            <li
              className={classnames(
                courses == 2 ? [style.active] : null,
                "mb-4"
              )}
              onClick={() => setcourses(2)}
              style={{ color: "rgba(247,247,247,0.3)", cursor: "pointer" }}
            >
              محبوب ترین دوره ها
            </li>
          </ul>
          {courses == 1 && <LatestCourses coursesData={data.courses} />}
          {courses == 2 && <FavoriteCourses popularCourses={data.popular} />}
        </Col>
      </Row>
    </>
  );
};
export default Courses;
