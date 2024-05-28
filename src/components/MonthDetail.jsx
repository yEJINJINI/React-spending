import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MonthDetail = ({ expenses, setSelectedExpense }) => {
  const navigate = useNavigate();

  const clickedHandler = (expense) => {
    setSelectedExpense(expense);
    navigate(`/detail/${expense.id}`);
  };

  return (
    <Section>
      {expenses.length > 0 ? (
        <Ul>
          {expenses.map((expense) => (
            <Li
              key={expense.id}
              onClick={() => {
                clickedHandler(expense);
              }}
            >
              <Three>
                <Date>{expense.date}</Date>
                <Item>
                  {expense.item} - {expense.description}
                </Item>
              </Three>
              <Amount>{expense.amount}</Amount>
            </Li>
          ))}
        </Ul>
      ) : (
        <P>지출 내역이 존재하지 않습니다.</P>
      )}
    </Section>
  );
};

export default MonthDetail;
const Section = styled.section`
  background-color: white;
  border-radius: 20px;
  margin-bottom: 20px;
  height: auto;
  width: 800px;
`;
const Ul = styled.ul`
  padding-left: 0;
  list-style: none;
`;
const Li = styled.li`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 20px;
  margin: 10px;
`;
const Three = styled.div`
  display: flex;
  flex-direction: column;
`;
const Date = styled.span`
  color: gray;
  font-size: 15px;
  margin-bottom: 5px;
`;
const Item = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const Amount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: green;
  font-size: 24px;
  font-weight: 900;
`;

const P = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 15px;

  color: green;
  font-size: 24px;
  font-weight: 900;
`;
