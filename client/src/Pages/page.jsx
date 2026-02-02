import React from "react";
import { useSelector } from "react-redux";
import MyCart from "./MyCart";
import Home from "./home";

const Page = () => {
  const pages = useSelector((state) => state.pages);

  return <div>{pages.home ? <Home /> : <MyCart />}</div>;
};

export default Page;
