import { SET_LOGIN, LOGOUT } from "../constants";
const loginReducer = (token = null, action) => {
    if (action.type === SET_LOGIN || action.type === LOGOUT) {
        return action.payload;
    }
    return token;
}

export default loginReducer;