"use client";
import React, { useState, createContext } from "react";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [state, setState] = useState("asd")

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
      }}>
      <div>{children}</div>
    </AppContext.Provider>
  );
};
