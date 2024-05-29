import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
import InputSection from "../components/InputSection";
import MonthBtn from "../components/MonthBtn";
import MonthDetail from "../components/MonthDetail";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const Main = () => {
  const { selectedMonth } = useContext(AppContext);
  const [expenses, setExpenses] = useState(() => {
    const localData = localStorage.getItem("expenses");
    return localData ? JSON.parse(localData) : [];
  });

  // 등록 후, data 변화가 생길 때마다 로컬스토리지에 저장하기 ...
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const filteredExpenses = expenses.filter((expense) => {
    const expenseMonth = new Date(expense.date).getMonth() + 1;
    return expenseMonth === selectedMonth;
  });

  return (
    <Whole>
      <GlobalStyle />

      <MainForm>
        <InputSection expenses={expenses} setExpenses={setExpenses} />
        <MonthBtn />
        <MonthDetail filteredExpenses={filteredExpenses} />
      </MainForm>
    </Whole>
  );
};

export default Main;

const Whole = styled.div`
  display: flex;
  justify-content: center;
`;
const MainForm = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-around;

  margin-top: 30px;
  padding: 20px;
  max-width: 1000px;
  height: auto;
  border-radius: 20px;
`;
