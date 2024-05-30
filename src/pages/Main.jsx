import styled from "styled-components";
import InputForm from "../mainComponents/inputForm";
import MonthButton from "../mainComponents/MonthButton";
import MonthExpenses from "../mainComponents/MonthExpenses";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Main() {
  const expenses = useSelector((state) => state.expenses);
  console.log(expenses);

  const [month, setMonth] = useState(1);

  const filteredExpenses = expenses.filter(
    (expense) => expense.month === month
  );

  return (
    <Container>
      <InputForm month={month} />
      <MonthButton month={month} setMonth={setMonth} />
      <MonthExpenses expenses={filteredExpenses} />
    </Container>
  );
}
const Container = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px auto;
`;
export const Section = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
`;
