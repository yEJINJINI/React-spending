import { createContext, useState } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  return (
    <MainContext.Provider
      value={{
        addExpense,
        setSelectedMonth,
        selectedMonth,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
