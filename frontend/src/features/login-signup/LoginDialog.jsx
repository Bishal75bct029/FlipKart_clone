import { Box, TextField, Typography, styled } from "@mui/material";
import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { DataContext } from "./LoginBtn";
import isValidEmail from "../../functions/isEmail";
import isOkPassword from "../../functions/passwordValidation";

const DialogContent = styled(Box)`
  min-width: 400px;
  max-width: 670px !important;
  display: flex;
  /* overflow: visible; */
  max-width: 1000px;
  min-height: 75vh;
`;
const LeftSide = styled(Box)`
  padding: 40px 33px;
  max-width: 40%;
  height: 75vh;
  /* display: flex; */
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
  line-height: 1;
  font-size: 12px;
  color: red;
`;

const LoginDialog = () => {
  const { open, handleClose } = useContext(DataContext);
  const showDialogStatus = {
    login: {
      value: "true",
      data: {
        top: "Login",
        bottom: "Get access to your Orders, Wishlist and Recommendations",
      },
    },

    signup: {
      value: "false",
      data: {
        top: `Looks like you're new here!`,
        bottom: "Sign up with you mobile number to get started",
      },
    },
  };
  const [status, setStatus] = useState({ ...showDialogStatus });
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    username: "",
    password: "",
  });
  console.log(status, "debug");
  const handleSignUp = () => {
    setStatus({
      login: { value: false, data: { ...showDialogStatus.login.data } },
      signup: { value: true, data: { ...showDialogStatus.signup.data } },
    });
    console.log(status, "Main hoo hero");
  };

  const handleLogin = () => {
    setStatus({
      login: { value: true, data: { ...showDialogStatus.login.data } },
      signup: { value: false, data: { ...showDialogStatus.signup.data } },
    });
    console.log(status, "Main hoo hero");
  };

  const [formError, setFormError] = useState({
    phone: "",
    email: "",
    username: "",
    password: "",
  });

  const handleValidation = (e) => {
    if (e.target.name == "phone") {
        setFormData((formData)=>({ ...formData, [e.target.name]: e.target.value }));

        if(e.target.value.length > 10) {
          console.log("good");
          console.log(e.target.value);
          setFormError((formError) => ({
            ...formError,
            phone: "*Phone number cannot be greater than 10 digits",
          }));
          console.log(formError.phone);
    }
    
    else {
        setFormError((formError)=>({...formError,phone:''}));
      }
    }
    
    if (e.target.name == "email") 
    {
        setFormData((formData)=>({ ...formData, [e.target.name]: e.target.value }));

        if(!isValidEmail(e.target.value)) {
          setFormError((formError)=>({ ...formError, email: "*Must be type email" }));
        } else {
            setFormError((formError)=>({...formError,email:''}));
          }
    }
    
    if (e.target.name == "username") 
    {
        setFormData((formData)=>({ ...formData, [e.target.name]: e.target.value }));

        if(e.target.value.length < 4) {
          setFormError((formError)=>({
            ...formError,
            username: "*Must be greater than 4 characters",
          }));
        } else {
            setFormError((formError)=>({...formError,username:''}));
          }
    }
    
    if (e.target.name == "password") 
    {
        setFormData((formData)=>({ ...formData, [e.target.name]: e.target.value }));

        if(!isOkPassword(e.target.value)) {
          setFormError((formError)=>({
            ...formError,
            password:
              "*Must be greater than 8 digits with uppercase,lowercase and special character at least one",
          }));
          console.log("are you here?");
        } else {
          setFormError((formError)=>({...formError,password:''}));
        }
    }
    console.log(formError, "k xa");
  };
  const handleSignSubmit = (e) => {
    e.preventDefault();
    console.log('error hai kya',formError)
    if(!Object.values(formError).every(value => !value)){
        console.log('Error hai bhai')
        console.log(formError)
        return
    }
    if(Object.values(formData).some(value => !value)){
        console.log(formData,'formdata hai bhai')
        return
    }
    
    console.log(formData,'hogaya bhai')
  };
  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
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
                label="Enter Email/Mobile number"
                style={{
                  marginBottom: "20px",
                  width: "100%",
                }}
              />
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
              <OtpBtn variant="contained">Request OTP</OtpBtn>
              <CreateAccount onClick={handleSignUp}>
                New to Flipkart? Create an account
              </CreateAccount>
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
                onChange={(e) => handleValidation(e)}
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
                onChange={(e) => handleValidation(e)}
                style={{
                  marginBottom: "5px",
                  marginTop:'10px',
                  width: "100%",
                }}
              />
              {formError.email && <Error>{formError.email}</Error>}
              <TextField
                variant="standard"
                label="Enter Username"
                name="username"
                onChange={(e) => handleValidation(e)}
                style={{
                    marginBottom: "5px",
                    marginTop:'10px',
                  width: "100%",
                }}
              />
              {formError.username && <Error>{formError.username}</Error>}
              <TextField
                variant="standard"
                label="Enter Password"
                type="password"
                name="password"
                onChange={(e) => handleValidation(e)}
                style={{
                    marginBottom: "15px",
                    marginTop:'10px',
                  width: "100%",
                }}
              />
              {formError.password && <Error>{formError.password}</Error>}

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
              <OtpBtn variant="contained" onClick={(e)=>handleSignSubmit(e)}>CONTINUE</OtpBtn>
              <ExistBtn
                onClick={handleLogin}
                style={{
                  textTransform: "none",
                  marginTop: "25px",
                }}
              >
                Existing User? Log In
              </ExistBtn>
            </RightSide>
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
};

export default LoginDialog;
