import React, { useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";

const InputSection = ({ addExpense }) => {
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const saveHandler = (e) => {
    e.preventDefault();

    const newExpense = {
      id: uuidv4(),
      date,
      item,
      amount,
      description,
    };
    addExpense(newExpense);
    setDate("");
    setItem("");
    setAmount("");
    setDescription("");
  };

  return (
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
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>내용</Form.Label>
          <Form.Control
            type="text"
            placeholder="지출 내용"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Button
          onClick={saveHandler}
          style={{
            marginBottom: "15px",
          }}
          variant="success"
        >
          저장
        </Button>{" "}
      </InputForm>
    </Section>
  );
};

export default InputSection;

const Section = styled.section`
  background-color: white;
  border-radius: 20px;
  margin-bottom: 20px;
`;
const InputForm = styled.form`
  display: flex;
  padding: 20px;
  align-items: flex-end;
  flex-wrap: wrap;
`;
