import React, { useState } from "react";
import classnames from "classnames";
import { useRouter } from "next/router";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Modal,
} from "react-bootstrap";
import FormInput from "../form-input/form-input";

import style from "./custom-navbar.module.scss";

const CustomNavbar = ({ nameClass }) => {
  const router = useRouter();

  const [modalShow, setModalShow] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [searchBox, setsearchBox] = useState(false);

  const changeEmail = (str) => {
    setemail(str);
  };

  const changePassword = (str) => {
    setpassword(str);
  };

  const submitMessage = (e) => {
    e.preventDefault();
    const object = { email, password };
    axios
      .post("http://localhost:8000/api/message", object)
      .then((res) => {});
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className={style["customnavbar"]}
      >
        <Navbar.Brand href="/">
          <img src="/logo.png" alt="logo" width="135px" height="72px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ychizi">
            <Nav.Link
              href="/"
              className={
                router.pathname == "/" ? "mx-3 active-navlink" : "mx-3"
              }
            >
              صفحه نخست
            </Nav.Link>
            <Nav.Link href="#pricing" className="mx-3">
              پروژه های اجرا شده
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className={
                router.pathname == "/contact"
                  ? "mx-3 active-navlink"
                  : "mx-3"
              }
            >
              ارتباط با ما
            </Nav.Link>
            <Nav.Link href="#news" className="mx-3">
              اخبار
            </Nav.Link>
            <Nav.Link
              href="#courses"
              style={{ color: `${nameClass}` }}
              className="mx-3"
            >
              آموزشگاه مجازی
            </Nav.Link>
            <Nav.Link
              href="/about"
              style={{ color: `${nameClass}` }}
              className={
                router.pathname == "/about"
                  ? `mx-3 active-navlink`
                  : ` mx-3`
              }
            >
              درباره ما
            </Nav.Link>
          </Nav>
          <Nav className="mr-lg-5">
            <Button
              onClick={() => setModalShow(true)}
              bg="transparent"
              className={classnames(
                "d-flex align-items-center text-white px-3 py-3 py-lg-2 ml-lg-3 mr-lg-5 justify-content-center",
                style["sign-in"]
              )}
            >
              <span className="ml-3">ورود به حساب</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13.056"
                height="14.5"
                viewBox="0 0 13.056 14.5"
              >
                <g
                  id="Icon_feather-user"
                  data-name="Icon feather-user"
                  transform="translate(0.75 0.75)"
                >
                  <path
                    id="Path_3"
                    data-name="Path 3"
                    d="M17.556,26.833V25.389A2.889,2.889,0,0,0,14.667,22.5H8.889A2.889,2.889,0,0,0,6,25.389v1.444"
                    transform="translate(-6 -13.833)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                  <path
                    id="Path_4"
                    data-name="Path 4"
                    d="M17.778,7.389A2.889,2.889,0,1,1,14.889,4.5,2.889,2.889,0,0,1,17.778,7.389Z"
                    transform="translate(-9.111 -4.5)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                </g>
              </svg>
            </Button>
            <button
              style={{ color: `${nameClass}` }}
              className={classnames(
                "mr-lg-4 d-flex px-3 px-lg-0 py-3  justify-content-center",
                style["search"]
              )}
              onClick={() => setsearchBox(!searchBox)}
            >
              <i className="fa fa-search" />
            </button>
          </Nav>
        </Navbar.Collapse>
        {searchBox == true && (
          <div className="position-absolute search-box">
            <Form inline className="d-flex flex-nowrap">
              <Button style={{ borderRadius: "10px" }}>جستجو</Button>
              <FormControl
                type="text"
                placeholder="جستجو"
                className="mr-sm-2 w-100 ml-5 ml-md-2 ml-lg-0"
                style={{ borderRadius: "10px" }}
              />
            </Form>
          </div>
        )}
      </Navbar>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header className="bg-primary text-white px-5">
          <Modal.Title id="contained-modal-title-vcenter">ورود</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={submitMessage}
            action="http://localhost:8000/api/text"
            method="POST"
          >
            <Row style={{ padding: "20px 100px" }}>
              <Col xs="12">
                <FormInput
                  name="email"
                  type="email"
                  handleChange={changeEmail}
                  value={email}
                  label="ایمیل"
                  required
                />
              </Col>
              <Col xs="12">
                <FormInput
                  name="password"
                  type="password"
                  handleChange={changePassword}
                  value={password}
                  label="کلمه عبور"
                  required
                />
              </Col>
            </Row>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Row className="justify-content-end">
            <Button
              variant="primary"
              type="submit"
              className="px-5 py-3 ml-4 form-button"
              onClick={() => setModalShow(false)}
            >
              ورود
            </Button>
          </Row>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default CustomNavbar;
