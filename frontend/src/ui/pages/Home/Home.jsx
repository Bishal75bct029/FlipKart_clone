import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import Space from "../../components/Space";
import UsernameProvider from "../../../usecontext/UsernameProvider";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../../../redux/actions/getProducts";
import { Slider, Typography } from "@mui/material";

import Slide from "./components/Slide";
  
const Home = () => {
  
  const {productsData} = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch ]); 


  console.log(productsData); 

  // console.log(states)
  return (
    <div>
      <Navbar />
      <Categories />
      <Space>
        <Banner />
      </Space>
      <Space>
        {/* <Typography>Hi</Typography> */}
        <Slide products={productsData} title ="Best of Electronics" />
      </Space>
      <Space>
        <Slide products={productsData} title ="Beauty, Food, Toys and more"/>
      </Space>
      <Space>
        <Slide products={productsData} title ="Gift for Your Loved Ones"/>
      </Space>
    </div>
  );
};

export default Home;
