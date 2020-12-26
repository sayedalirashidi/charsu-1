import React, { useState, useEffect } from "react";
import ContactUs from "../components/contact-us/contact-us";
import CustomNavbar from "../components/custom-navbar/custom-navbar";
import Footer from "../components/footer/footer";
import Head from "next/head";
import axios from "axios";

const navColor = "#5a5a5a !important";

const Main = () => {
  const [data, setdata] = useState([]);
  console.log("contact", data);

  useEffect(() => {
    axios.get("http://103.215.223.142:8000/api/contact").then((res) => {
      setdata(res.data.data);
    });
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        />
        <title>چارسو امید و توسعه</title>
        <link rel="icon" href="/fdavicon.ico" />
      </Head>
      <CustomNavbar nameClass={navColor} />
      <ContactUs data={data} />
      <Footer />
    </>
  );
};
export default Main;
