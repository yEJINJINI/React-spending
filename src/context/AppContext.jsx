import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  //선택된 달, 클릭한 달 저장
  const [selectedMonth, setSelectedMonth] = useState("");
  //상세페이지로 이동할 선택된 객체
  const [selectedExpense, setSelectedExpense] = useState("");

  //객체 수정할 함수
  const modifying = (selected) => {
    const expenses = JSON.parse(localStorage.getItem("expenses"));
    const selectedExpenses = expenses.map((expense) =>
      expense.id === selected.id ? selected : expense
    );
    localStorage.setItem("expenses", JSON.stringify(selectedExpenses));
  };

  //객체 삭제할 함수
  const deleting = (id) => {
    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    const selectedExpenses = expenses.filter((expense) => expense.id !== id);
    localStorage.setItem("expenses", JSON.stringify(selectedExpenses));
  };

  return (
    <AppContext.Provider
      value={{
        selectedMonth,
        setSelectedMonth,
        selectedExpense,
        setSelectedExpense,
        modifying,
        deleting,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
