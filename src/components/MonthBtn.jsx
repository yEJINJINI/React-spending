import React from "react";
import styled from "styled-components";

const MonthBtn = ({ setSelectedMonth }) => {
  const months = [1, 2, 3, 4, 5, 6, , 7, 8, 9, 10, 11, 12];
  return (
    <Section>
      <Months>
        {months.map((month) => (
          <Button key={month} onClick={() => setSelectedMonth(month)}>
            {month}월
          </Button>
        ))}
      </Months>
    </Section>
  );
};

export default MonthBtn;

const Section = styled.section`
  background-color: white;
  border-radius: 20px;
  margin-bottom: 20px;
`;
const Months = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 870px;
  margin: 20px;
  flex-wrap: wrap;
`;
const Button = styled.button`
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 60px;
  padding: 20px;
  margin: 5px;

  cursor: pointer;
  font-size: 18px;
  background-color: #f6f7fa;
  border: none;
  border-radius: 10px;
  &:hover {
    background: green;
    color: white;
  }
`;
