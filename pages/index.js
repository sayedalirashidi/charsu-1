import React, { useState, useEffect } from "react";
import Head from "next/head";
import CustomNavbar from "../components/custom-navbar/custom-navbar";
import Footer from "../components/footer/footer";
import HomePage from "../components/home-page/home-page";
import axios from "axios";

const navColor = "white !important";

const Home = () => {
  const [data, setdata] = useState([]);
  console.log("index", data);

  useEffect(() => {
    axios.get("http://localhost:8000/api/pages/index").then((res) => {
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
        <title>Charsu</title>
        <link rel="icon" href="/fdavicon.ico" />
      </Head>
      <CustomNavbar nameClass={navColor} />
      <HomePage data={data} />
      <Footer />
    </>
  );
};

export default Home;
