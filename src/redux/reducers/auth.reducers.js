import { authConstants } from "../actions/constants";

const initState = {
    token:'null',
    fname:'',
    lname:'',
    email:'',
    authenticate:false,
    authenticating:false,
    loading:false,
    error:null
};

const authReducers = (state = initState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating:true
            };
            break;
        
        case  authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                fname:action.payload.payload.fname,
                lname:action.payload.payload.lname,
                email:action.payload.payload.email,
                token:action.payload.token,
                authenticate:true,
                authenticating:false
            }
            // console.log(state);
            break;
        case authConstants.LOGOUT_REQUEST:
            state = {
                ...initState,
                loading: true
            }
            break;
        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...initState
            }
            break;
        case authConstants.LOGOUT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;
        default:
            break;
    }

    return state;
};

export default authReducers