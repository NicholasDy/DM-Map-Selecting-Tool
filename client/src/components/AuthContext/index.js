import React, { createContext, useReducer, useCallback, useContext } from "react";

const AuthContext = createContext();

const { Provider } = AuthContext;

const initialState = {
    user: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case "login":
            return { ...state, user: action.payload };
        case "logout":
            return { ...state, user: null };
        default:
            throw new Error(`Invalid action type: ${action.type}`);
    }
};


const AuthProvider = ({ value = initialState, ...props }) => {
    const [state, dispatch] = useReducer(reducer, value);

    const login = useCallback(user => {
        dispatch({ type: "login", payload: user });
    });

    const logout = useCallback(user => {
        dispatch({ type: "logout" });
    });

    const providerValue = { ...state, login, logout };
    return <Provider value={providerValue} {...props} />;
};
const useAuthContext = () => {
    return useContext(AuthContext);
};
export { AuthProvider, useAuthContext };