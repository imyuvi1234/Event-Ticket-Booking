"use client";
import React, { useState, createContext } from "react";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [state, setState] = useState("asd")
    const [isLogin, setIsLogin] = useState(true)
    const [loginState, setLoginState] = useState(true)
   
  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        isLogin,
        setIsLogin,
        loginState,
        setLoginState,
      }}>
      <div>{children}</div>
    </AppContext.Provider>
  );
};
