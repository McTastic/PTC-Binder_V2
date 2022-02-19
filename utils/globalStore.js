import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

// This file will be used to store the global state of the application so we can keep track of thing's like who is signed and anything else we need to remember across the application.

export const Store = createContext();

const initialState = {
  // if a user exists in the cookies, then we will set the userInfo to the userInfo stored in the cookies otherwise we will set it to null.
  userInfo: Cookies.get("userInfo")
    ? JSON.parse(Cookies.get("userInfo"))
    : null,
};

function reducer(state, action) {
  switch (action.type) {
    case "USER_LOGIN": {
      return { ...state, userInfo: action.payload };
    }
    case "USER_LOGOUT": {
      return { ...state, userInfo: null };
    }
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
