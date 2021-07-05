import React, { createContext, useReducer, useContext } from "react";

const AuthContext = createContext({

});

const { Provider } = AuthContext;

const reducer = (state, action) => {
    switch (action.type) {
        case "login":
            return { ...state, userId: action.payload };
        case "logout":
            return { ...state, userId: null };
        default:
            throw new Error(`Invalid action type: ${action.type}`);
    }
};
const AuthProvider = ({ value = {}, ...props }) => {
    const [state, dispatch] = useReducer(reducer, value);
    return <Provider value={[state, dispatch]} {...props} />;
};
const useAuthContext = () => {
    return useContext(AuthContext);
};
export { AuthProvider, useAuthContext };