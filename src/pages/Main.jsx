import React, { useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Outlet } from "react-router-dom";

const Main = () => {
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [cost, setCost] = useState(0);
  const [content, setContent] = useState("");

  return (
    <Whole>
      <MainForm>
        <Section>
          <InputForm>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>날짜</Form.Label>
              <Form.Control
                type="text"
                placeholder="YYYY-MM-DD"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>항목</Form.Label>
              <Form.Control
                type="text"
                placeholder="지출 항목"
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>금액</Form.Label>
              <Form.Control
                type="number"
                placeholder="지출 금액"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>내용</Form.Label>
              <Form.Control
                type="text"
                placeholder="지출 내용"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="success"
              style={{
                marginBottom: "15px",
              }}
            >
              저장
            </Button>{" "}
          </InputForm>
        </Section>
        <Section>
          <Months>
            <MonthBtn>1월</MonthBtn>
            <MonthBtn>2월</MonthBtn>
            <MonthBtn>3월</MonthBtn>
            <MonthBtn>4월</MonthBtn>
            <MonthBtn>5월</MonthBtn>
            <MonthBtn>6월</MonthBtn>
            <MonthBtn>7월</MonthBtn>
            <MonthBtn>8월</MonthBtn>
            <MonthBtn>9월</MonthBtn>
            <MonthBtn>10월</MonthBtn>
            <MonthBtn>11월</MonthBtn>
            <MonthBtn>12월</MonthBtn>
          </Months>
        </Section>

        <Outlet />
      </MainForm>
    </Whole>
  );
};

export default Main;

const Whole = styled.div`
  display: flex;
  justify-content: center;
  background-color: #9fd19f;
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
const Section = styled.section`
  background-color: white;
  border-radius: 20px;
`;
const InputForm = styled.div`
  display: flex;
  padding: 20px;
  align-items: flex-end;
  flex-wrap: wrap;
`;
const Months = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 870px;
  margin: 20px;
  flex-wrap: wrap;
`;
const MonthBtn = styled.button`
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 60px;
  padding: 20px;
  margin: 5px;

  font-size: 18px;
  background-color: #f6f7fa;
  border: none;
  border-radius: 10px;
  &:hover {
    background: green;
    color: white;
  }
`;
