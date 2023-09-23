import { Box, TextField, Typography, styled } from "@mui/material";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import {
  handleSignUp,
  handleValidation,
} from "../functions/authValidation";
import {  handleSignSubmit } from "../functions/authentication";
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
`;
const LeftSide = styled(Box)`
  padding: 40px 33px;
  max-width: 40%;
  height: 75vh;

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
  const { open, handleClose } = useContext(DataContext);
  const showDialogStatus = {
    

    signup: {
      value: false,
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
  // console.log(status, "debug");

  const [formError, setFormError] = useState({
    phone: "",
    email: "",
    username: "",
    password: "",
  });
  

  
  const [infoMessage, setInfoMessage] = useState({
    success: false,
    message: "",
  });

  
  const [feedbckRstPwd,setFeedbckRstPwd] = useState({
    info:'',
    type:'',
  });
 

  return (
    
    <Box>
      <Dialog
        open={dialogStatus}
        onClose={() => dispatch({ type: CLOSE })}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ sx: { maxWidth: "unset" } }}
      >
        
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
                  handleSignSubmit(formData, formError, setInfoMessage);
                }}
              >
                CONTINUE
              </OtpBtn>
              
            </RightSide>
          </DialogContent>
        
      </Dialog>
    </Box>
  );
};

export default LoginDialog;
