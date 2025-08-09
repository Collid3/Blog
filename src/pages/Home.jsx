import React from "react";
import HomeHeader from "../components/Home/Header";
import Blogs from "../components/Home/BlogSection/Blogs";
import Closure from "../components/Home/Closure";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeHeader />
      <Blogs />
      <Closure />
      <Footer />
    </div>
  );
};

export default Home;
