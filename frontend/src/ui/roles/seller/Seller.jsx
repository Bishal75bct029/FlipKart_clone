import React, { useEffect, useState } from "react";
import SideNav from "../components/SideNav";
import Dashboard from "./Dashboard";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "../../theme/customeTheme";
import Order from "./Order";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from "../../../redux/constants/userLogin";
import axios from "axios";
import { Box } from "@mui/material";

const Seller = () => {
  const [selected, setSelected] = useState("Dashboard");
  const [count, setCount] = useState(0);
  const loginCredentials = useSelector((state) => state.loginCredentials);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const validateLogin = async () => {
      if (localStorage.getItem("token") === null) {
        dispatch({ type: LOGIN_FAILURE });
        setCount(count=>count+1);

        return;
      }
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `${token}`,
        };
        const checkLogin = await axios.post("https://flip-kart-clone-9xew.vercel.app//", null, {
          headers: headers,
        });
        console.log("love you");
        console.log(checkLogin.data);
        setCount((count) => count + 1);
        dispatch({ type: LOGIN_SUCCESS, payload: checkLogin.data.token });
      } catch (error) {
        setCount(count=>count+1);
        console.log("error", error);
        return;
      }
    };
    validateLogin();
  }, []);
  useEffect(() => {
    if (loginCredentials.role !== "seller" && count !== 0) {
      console.log(loginCredentials.role, "role");
      navigate("/");
    }
  }, [loginCredentials, count]);

  return (
    <ThemeProvider theme={Theme}>
      {loginCredentials.role !== "seller" ? (
        <Box>{loginCredentials.role}</Box>
      ) : (
        <div
          className="plus-jakarta-sans"
          style={{
            width: "100%",
            backgroundColor: "#f1f5f9",
            height: "100%",
            display: "flex",
            fontFamily: "Plus Jakarta Sans, sans-serif",
            minHeight: "100vh",
          }}
        >
          <SideNav selected={selected} setSelected={setSelected} />
          <Routes>
            
              <Route index path ="/" element = {<Dashboard setSelected={setSelected}/>}/>
              <Route index path ="/dashboard" element = {<Dashboard setSelected={setSelected}/>}/>
              <Route  path ="/orders" element = {<Order setSelected={setSelected}/>}/>
              <Route path ="/products" element = {<Products setSelected={setSelected}/>}/>
              
            
          </Routes>
        </div>
      )}
    </ThemeProvider>
  );
};

export default Seller;
