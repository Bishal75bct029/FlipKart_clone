import { Box, Checkbox, TextField, Typography, styled } from "@mui/material";
import { Children, createContext, useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import LoginBtn, { DataContext } from "./LoginBtn";
import {
  handleForgotPwd,
  handleLogin,
  handleLoginValidation,
  handleSignUp,
  handleValidation,
} from "../functions/authValidation";
import { Login, handleSignSubmit } from "../functions/authentication";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE, OPEN } from "../../../redux/constants/handleLoginDialog";
import isValidEmail from "../functions/isEmail";
import axios from "axios";

const DialogContent = styled(Box)`
  /* min-width: 400px; */
  max-width: 670px !important;
  /* overflow: auto; */
  display: flex;

  max-width: 1000px;
  min-height: 75vh;
  overflow: auto;
`;
const LeftSide = styled(Box)`
  padding: 40px 33px;
  max-width: 40%;
  height: auto;

  background: url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center/222px 140px no-repeat;
  background-position: center bottom 45px;
  background-color: #2874f0;
`;
const RightSide = styled(Box)`
  ${(props) =>
    props.status.login.value
      ? `
        
    padding: 52px 35px 16px;
    `
      : `
        padding:40px 35px 16px;
    `}
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const OtpBtn = styled(Button)`
  width: 100%;
  color: white;
  background-color: #fb641b;
  padding: 10px 20px;
  font-size: 15px;
  border-radius: 2px;
  text-transform: none;
`;
const CreateAccount = styled(Typography)`
  color: #2874f0;
  font-size: 14px;
  font-weight: 500;
  margin-top: auto;
  margin-bottom: 10px;
  text-align: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: none;
  }
`;

const ExistBtn = styled(Button)`
  height: 48px;
  font-size: 15px;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  line-height: 180%;
  color: #2874f0;
`;

const Error = styled("span")`
  margin-top: 0;
  margin-bottom: 10px;
  line-height: 1;
  font-size: 12px;
  color: red;
`;

const Success = styled(Box)`
  margin-top: 0;
  border-radius: 2px;
  text-align: center;
  line-height: 1;
  font-size: 16px;
  /* text-transform: capitalize; */
  ${(props) =>
    props.success
      ? `
  padding: 4px;
  background-color:#96c296 ;
  color: #098609; `
      : `
   color:red;
   `}
  margin-bottom: 10px;
`;

const LoginDialog = () => {
  const dispatch = useDispatch();
  const dialogStatus = useSelector((state) => state.handleLoginDialog);
  // const { open, handleClose } = useContext(DataContext);
  const showDialogStatus = {
    login: {
      value: true,
      data: {
        top: "Login",
        bottom: "Get access to your Orders, Wishlist and Recommendations",
      },
    },

    signup: {
      value: false,
      data: {
        top: `Looks like you're new here!`,
        bottom: "Sign up with you mobile number to get started",
      },
    },
    forgotPassword: {
      value: false,
      data: {
        top: `Forgot Password? No Worry`,
        bottom: ``,
      },
    },
  };
  const [status, setStatus] = useState({ ...showDialogStatus });
  const [frgotPwdData, setFrgotPwdData] = useState();
  const [mailFormErr, setMailFormErr] = useState("");
  const handleOnChange = (e) => {
    setFrgotPwdData(e.target.value);
    if (!isValidEmail(e.target.value) && e.target.value != "") {
      setMailFormErr("Must be type mail");
    } else if (e.target.value === "" || isValidEmail(e.target.value)) {
      setMailFormErr("");
    }
  };
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    username: "",
    password: "",
    seller: false,
  });

  const [formError, setFormError] = useState({
    phone: "",
    email: "",
    username: "",
    password: "",
  });
  const [loginFormError, setLoginFormError] = useState({
    email: "",
    password: "",
  });

  const [infoMessage, setInfoMessage] = useState({
    success: false,
    message: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [feedbckRstPwd, setFeedbckRstPwd] = useState({
    info: "",
    type: "",
  });
  const handlePwdSubmit = async () => {
    if (!mailFormErr) {
      try {
        const response = await axios.get(
          `https://flip-kart-clone-ojm5.vercel.app//forget_password?email=${frgotPwdData}`
        );

        setFeedbckRstPwd({ info: response.data.message, type: "success" });
      } catch (error) {
        setFeedbckRstPwd({ info: error.response.data.message, type: "fail" });
      }
    }
  };
useEffect(()=>{
  if(!status.login.value){
    setLoginData({
      email: "",
      password: "",
    });

    setLoginFormError({
      email: "",
      password: "",
    });
  }

  if(!status.forgotPassword.value){
    setFrgotPwdData('')
  }
},[status])
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setFormData({ ...formData, seller: event.target.checked });
  };

  const handleClose = () => {
    setStatus({
      login: {
        value: true,
        data: {
          top: "Login",
          bottom: "Get access to your Orders, Wishlist and Recommendations",
        },
      },

      signup: {
        value: false,
        data: {
          top: `Looks like you're new here!`,
          bottom: "Sign up with you mobile number to get started",
        },
      },
      forgotPassword: {
        value: false,
        data: {
          top: `Forgot Password? No Worry`,
          bottom: ``,
        },
      },
    });
    setLoginData({
      'email':'',
      password:'',
    });

    setInfoMessage({
      success: false,
      message: "",
    });

    setFeedbckRstPwd({
      info: "",
      type: "",
    });

    setFormError({
      phone: "",
      email: "",
      username: "",
      password: "",
    });

    setLoginFormError({
      email: "",
      password: "",
    });
    dispatch({ type: CLOSE });
  };

  return (
    <Box>
      <Dialog
        open={dialogStatus}
        onClose={() => handleClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ sx: { maxWidth: "unset" } }}
      >
        {status.login.value ? (
          <DialogContent>
            <LeftSide>
              <Typography
                style={{
                  fontSize: "28px",
                  fontWeight: 500,
                  color: "white",
                }}
              >
                {status.login.data.top}
              </Typography>
              <Box
                variant="span"
                style={{
                  fontSize: "18px",
                  color: "#DBDBDB",
                  lineHeight: "150%",
                  marginTop: "15px",
                }}
              >
                {status.login.data.bottom}
              </Box>
            </LeftSide>
            <RightSide status={status}>
              <TextField
                variant="standard"
                onChange={(e) =>{

                  handleLoginValidation(
                    e,
                    loginData,
                    setLoginData,
                    formError,
                    setLoginFormError
                    );
                    //  setLoginFormError({...loginFormError})

                  }
                }
                value={loginData.email}
                label="Enter Email/Mobile number"
                name="email"
                style={{
                  marginBottom: "20px",
                  width: "100%",
                }}
              />
              {loginFormError.email && <Error>{loginFormError.email}</Error>}
              <TextField
                variant="standard"
                value={loginData.password}
                onChange={(e) =>{
                  handleLoginValidation(
                    e,
                    loginData,
                    setLoginData,
                    formError,
                    setLoginFormError
                  );
                  // setLoginFormError({...loginFormError,message:''})
                }
                }
                label="Enter Password"
                name="password"
                type="password"
                style={{
                  marginBottom: "20px",
                  width: "100%",
                }}
              />
              {loginFormError.password && (
                <Error>{loginFormError.password}</Error>
              )}
              {
                loginFormError.message && (
                  <Error>{loginFormError.message}</Error>
                )
              }

              <Typography
                style={{
                  fontSize: "12px",
                  color: "#878787",
                  marginTop: "10px",
                  marginBottom: "15px",
                }}
              >
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Typography>
              <OtpBtn
                variant="contained"
                onClick={() => {
                  Login(loginFormError, loginData,setLoginData, dispatch,setLoginFormError);
                }}
              >
                Login
              </OtpBtn>
              <Typography
                style={{
                  marginBottom: 10,
                  marginTop: 10,
                  fontSize: 20,
                  fontWeight: 500,
                  textAlign: "center",
                  color: "#212121",
                }}
              >
                OR
              </Typography>

              <OtpBtn
                onClick={(e) => handleForgotPwd(e, showDialogStatus, setStatus)}
                variant="contained"
              >
                Forgot Password ?
              </OtpBtn>
              <CreateAccount
                onClick={(e) => handleSignUp(e, showDialogStatus, setStatus)}
              >
                New to Flipkart? Create an account
              </CreateAccount>
            </RightSide>
          </DialogContent>
        ) : status.signup.value ? (
          <DialogContent>
            <LeftSide>
              <Typography
                style={{
                  fontSize: "28px",
                  fontWeight: 500,
                  color: "white",
                }}
              >
                {status.signup.data.top}
              </Typography>
              <Box
                variant="span"
                style={{
                  fontSize: "18px",
                  color: "#DBDBDB",
                  lineHeight: "150%",
                  marginTop: "15px",
                }}
              >
                {status.signup.data.bottom}
              </Box>
            </LeftSide>
            <RightSide status={status}>
              <TextField
                variant="standard"
                label="Enter Mobile number"
                name="phone"
                value = {formData.phone}
                onChange={(e) =>
                  handleValidation(
                    e,
                    formData,
                    setFormData,
                    formError,
                    setFormError
                  )
                }
                style={{
                  marginBottom: "5px",
                  width: "100%",
                }}
              />
              {formError.phone && <Error>{formError.phone}</Error>}
              <TextField
                variant="standard"
                label="Enter Email"
                name="email"
                value ={formData.email}
                onChange={(e) =>
                  handleValidation(
                    e,
                    formData,
                    setFormData,
                    formError,
                    setFormError
                  )
                }
                style={{
                  marginBottom: "5px",
                  marginTop: "10px",
                  width: "100%",
                }}
              />
              {formError.email && <Error>{formError.email}</Error>}
              <TextField
                variant="standard"
                label="Enter Username"
                name="username"
                value = {formData.username}
                onChange={(e) =>
                  handleValidation(
                    e,
                    formData,
                    setFormData,
                    formError,
                    setFormError
                  )
                }
                style={{
                  marginBottom: "5px",
                  marginTop: "10px",
                  width: "100%",
                }}
              />
              {formError.username && <Error>{formError.username}</Error>}
              <TextField
                variant="standard"
                label="Enter Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={(e) =>
                  handleValidation(
                    e,
                    formData,
                    setFormData,
                    formError,
                    setFormError
                  )
                }
                style={{
                  marginBottom: "15px",
                  marginTop: "10px",
                  width: "100%",
                }}
              />
              {formError.password && <Error>{formError.password}</Error>}
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 14,
                  color: "#878787",
                }}
              >
                <Checkbox checked={checked} onChange={handleChange} />{" "}
                <Box variant="span">Become a Seller</Box>
              </Box>
              <Typography
                style={{
                  fontSize: "12px",
                  color: "#878787",
                  marginTop: "10px",
                  marginBottom: "15px",
                }}
              >
                {infoMessage.success ? (
                  <Success success={true}>{infoMessage.message}</Success>
                ) : (
                  <Success success={false}>{infoMessage.message}</Success>
                )}
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Typography>
              <OtpBtn
                variant="contained"
                onClick={() => {
                  handleSignSubmit(formData, setFormData, formError, setInfoMessage);
                }}
              >
                CONTINUE
              </OtpBtn>
              <ExistBtn
                onClick={(e) =>{ handleLogin(e, showDialogStatus, setStatus);setInfoMessage('')}}
                style={{
                  textTransform: "none",
                  marginTop: "25px",
                }}
              >
                Existing User? Log In
              </ExistBtn>
            </RightSide>
          </DialogContent>
        ) : (
          <DialogContent>
            <LeftSide>
              <Typography
                style={{
                  fontSize: "28px",
                  fontWeight: 500,
                  color: "white",
                }}
              >
                {status.forgotPassword.data.top}
              </Typography>
              <Box
                variant="span"
                style={{
                  fontSize: "18px",
                  color: "#DBDBDB",
                  lineHeight: "150%",
                  marginTop: "15px",
                }}
              >
                {status.login.data.bottom}
              </Box>
            </LeftSide>
            <RightSide status={status}>
              {feedbckRstPwd.type != "success" && (
                <TextField
                  variant="standard"
                  value={frgotPwdData}
                  onChange={(e) => handleOnChange(e)}
                  label="Enter Email/Mobile number"
                  name="email"
                  style={{
                    marginBottom: "20px",
                    width: "100%",
                  }}
                />
              )}

              {mailFormErr && <Error>{mailFormErr}</Error>}

              {!feedbckRstPwd && (
                <Typography
                  style={{
                    fontSize: "12px",
                    color: "#878787",

                    marginBottom: "15px",
                  }}
                >
                  Please Provide your registered email. A mail will be sent to
                  verify you.
                </Typography>
              )}
              {feedbckRstPwd.info && feedbckRstPwd.type === "success" ? (
                <Typography
                  style={{
                    fontSize: 14,
                    backgroundColor: "#ccffcc",
                    borderRadius: "2",
                    padding: "4px",
                    color: "green",
                  }}
                >
                  {feedbckRstPwd.info}
                </Typography>
              ) : (
                <Error style={{ fontSize: "14px" }}>{feedbckRstPwd.info}</Error>
              )}

              {feedbckRstPwd.type != "success" && (
                <OtpBtn variant="contained" onClick={handlePwdSubmit}>
                  Continue
                </OtpBtn>
              )}
            </RightSide>
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
};

export default LoginDialog;
