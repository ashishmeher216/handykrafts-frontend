import axios from "../../helpers/axios";
import { authConstants } from "./constants";
import { toast } from "react-toastify";

export const signup = (user) => {
    return async (dispatch) => {
        dispatch({ type: authConstants.SIGNUP_REQUEST });

        axios
            .post("/user/signup", user)
            .then((response) => {
                console.log(response);
                const { message } = response.data;
                dispatch({
                    type: authConstants.SIGNUP_SUCCESS,
                    payload: { message },
                });

                toast.success(`${message}`, {
                    position: toast.POSITION.TOP_CENTER
                });
                //if account created successfully, then do automatic sign in 
                const userlogin = {email:user.email,password:user.password}
                dispatch(signin(userlogin))
            })
            .catch((error) => {
                toast.error(`${error.response.data.message}`, {
                    position: toast.POSITION.TOP_CENTER
                  });
                dispatch({
                    type: authConstants.SIGNUP_FAILURE,
                    payload: { error: error },
                });
            });
    };
};
export const signin = (user) => {
    return async (dispatch) => {
        //dispatch a login request
        dispatch({ type: authConstants.LOGIN_REQUEST });

        axios
            .post("/user/signin", {
                ...user,
            })
            .then((response) => {
                // console.log(response.data);
                const { token, payload, message } = response.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                dispatch({
                    type: authConstants.LOGIN_SUCCESS,
                    payload: { token, payload },
                });

                toast.success(`${message}`, {
                    position: toast.POSITION.TOP_CENTER
                  });
            })
            .catch((error) => {
                console.log(error)
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: { error: error },
                });

                toast.error(`${error.response.data.message}`, {
                    position: toast.POSITION.TOP_CENTER
                  });
            });
    };
};

export const isUserLoggedIn = () => {
    return async (dispatch) => {
        const token = localStorage.getItem("token");
        if (token) {
            const user = JSON.parse(localStorage.getItem("user"));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: { token, user },
            });
        } 
        else {
            toast.error("You need to login again!",{
                position: toast.POSITION.TOP_CENTER
              });
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: "You need to login again!" },
            });
            
        }
    };
};

export const signout = () => {
    return async (dispatch) => {
        dispatch({ type: authConstants.LOGOUT_REQUEST });

        axios
            .post("/user/signout")
            .then((response) => {
                localStorage.clear();
                dispatch({ type: authConstants.LOGOUT_SUCCESS });
                toast.success("Log out successful",{
                    position: toast.POSITION.TOP_CENTER
                  });
            })
            .catch((error) => {
                dispatch({
                    type: authConstants.LOGOUT_FAILURE,
                    payload: { error: error },
                });
                toast.error("You must be logged in to logout!",{
                    position: toast.POSITION.TOP_CENTER
                  });
            });
    };
};
