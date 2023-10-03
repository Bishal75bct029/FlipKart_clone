import { useLocation } from "react-router";
import queryString from "query-string";
import { useState } from "react";
import { Typography, Button, Grid, Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const PasswordReset = () => {
  const [state, setState] = useState(false);
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const token = queryParams.token;
  const email = queryParams.email;
  fetch(`https://flip-kart-clone-ojm5.vercel.app//reset_password?token=${token}&email=${email}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.json().then((data) => {
        throw new Error(data.message);
      });
    })
    .then((data) => {
      console.log(data.message);
      setState(true);
    })
    .catch((error) => {
      setState(false);
      console.log("loveyou jaanu");
      console.log(error);
    });

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    // Perform client-side validation
    if (!password || !confirmPassword) {
      setError("Both password fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
  };

  const handleSubmit = async () => {
    
    if (!password || !confirmPassword) {
      setError("Both password fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("")
    const data = {
      token: token,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "https://flip-kart-clone-ojm5.vercel.app//password_changed",
        data
      );
      const success =  toast.success("Password changed successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
       
        onClose:()=>{
  
          // navigate('/',{replace:true})
          // if(confirm("Your password has been successfully changed")){
            navigate('/',{replace:true})
          // }
        }
      });
      

      
    } catch (error) {
      toast.error("An error occurred while changing the password", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      {state ? (
        <Grid
          container
          align="center"
          justifyContent="center"
          style={{ marginTop: 30 }}
        >
          <Grid item>
            <Typography variant="h5">Reset Your Password</Typography>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <TextField
              label="New Password"
              type="password"
              fullWidth
              margin="normal"
              style={{ height: "50px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Confirm Password"
              type="password"
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ width: "100%" }}
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                handleResetPassword(), handleSubmit();
              }}
            >
              Reset Password
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Typography>Invalid link</Typography>
      )}
      <ToastContainer />
    </>
  );
};

export default PasswordReset;
