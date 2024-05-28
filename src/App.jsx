import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./pages/Main";
import Detail from "./pages/Detail";

const App = () => {
  //상세페이지로 이동할 선택된 객체
  const [selectedExpense, setSelectedExpense] = useState("");

  //객체 수정할 함수
  const modifying = (selected) => {
    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main setSelectedExpense={setSelectedExpense} />}
        />
        <Route
          path="/detail/:id"
          element={
            <Detail
              selectedExpense={selectedExpense}
              modifying={modifying}
              deleting={deleting}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
