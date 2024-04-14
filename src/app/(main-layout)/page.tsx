import React from "react";
import Banner from "../components/Home/Banner";
import FlashSales from "../components/Home/FlashSales";
import Categories from "../components/Home/Categories";
import Trending from "../components/Home/Trending";
const MainPage = () => {
  return (
    <div>
      <Banner />
      <FlashSales />
      <Categories />
      <Trending />
    </div>
  );
};

export default MainPage;
