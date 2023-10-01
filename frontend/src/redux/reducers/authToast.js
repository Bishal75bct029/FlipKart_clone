import {
  LOGIN_FAILURE_TOASTIFY,
  LOGIN_SUCCESS_TOASTIFY,
  LOGOUT_SUCCESS_TOASTIFY,
  RESET_AUTH_TOAST,
  SIGNUP_FAILURE_TOASTIFY,
  SIGNUP_SUCCESS_TOASTIFY,
} from "../constants/authToast";

export const authToast = (state = { login: false, signup: false }, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS_TOASTIFY:
      return { login: 'success', signup: false };

    case LOGOUT_SUCCESS_TOASTIFY:
        return {...state,login:'logout',signup:false}

    case LOGIN_FAILURE_TOASTIFY:
      return { login: 'failed', signup: false };

    case SIGNUP_SUCCESS_TOASTIFY:
      return { login: false, signup: true };

    case SIGNUP_FAILURE_TOASTIFY:
      return { login: false, signup: false };


    case RESET_AUTH_TOAST:
      return {login:false,signup:false}

    default:
      return state;
  }
};
