import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const VerifyUser = () => {
  const [state, setState] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const email = queryParams.get("email");
  const token = queryParams.get("token");
  const callApi = useEffect(() => {
    const validateUser = async () => {

      if (!email && !token) {
        navigate("/");
      } else {
        const userSignUp = axios.post(`http://localhost:8000/signup?token=${token}&email=${email}`,null)
      }
    };
    validateUser();
  });

  return <div>You have been verified</div>;
};

export default VerifyUser;
