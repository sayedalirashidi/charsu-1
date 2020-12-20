import React, { useState, useEffect } from "react";
import AboutUs from "../components/about-us/about-us";
import CustomNavbar from "../components/custom-navbar/custom-navbar";
import Footer from "../components/footer/footer";
import Head from "next/head";
import axios from "axios";

const navColor = "#5a5a5a !important";

const Main = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/pages/about-us").then((res) => {
      setdata(res.data.data);
    });
  }, []);

  return (
    <div>
      <Head>
        <link
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        />
        <title>Charsu</title>
        <link rel="icon" href="/fdavicon.ico" />
      </Head>
      <CustomNavbar nameClass={navColor} />
      <AboutUs data={data} />
      <Footer />
    </div>
  );
};

export default Main;
