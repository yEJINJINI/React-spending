import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import GlobalStyle from "../GlobalStyle";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Detail = () => {
  const { selectedExpense, modifying, deleting } = useContext(AppContext);

  const [date, setDate] = useState(selectedExpense.date);
  const [item, setItem] = useState(selectedExpense.item);
  const [amount, setAmount] = useState(selectedExpense.amount);
  const [description, setDescription] = useState(selectedExpense.description);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //선택된게 없을 때.. 왜? 이미 존재하는 데이터이면 굳이 불러올 필요가 없기 때문에
    if (!selectedExpense) {
      const savedExpenses = JSON.parse(localStorage.getItem("expenses"));
      //데이터가 없으면 빈 배열을 반환하기
      const foundExpense = savedExpenses.find((expense) => expense.id === id);
      // 불러온 데이터 객체의 id가 현재 Detail 컴포넌트의 id와 일치하는지 .. 일치하는 내역 찾기!
      if (foundExpense) {
        // 일치하면 해당 내역의 데이터를 set 함수를 통해 상태 업데이트 하기
        setDate(foundExpense.date);
        setItem(foundExpense.item);
        setAmount(foundExpense.amount);
        setDescription(foundExpense.description);
      }
    }
  }, [selectedExpense, id]);

  const modifyHandler = () => {
    const modifiedExpense = {
      ...selectedExpense,
      date,
      item,
      amount,
      description,
    };
    modifying(modifiedExpense);
    navigate("/");
  };

  const deleteHandler = () => {
    deleting(selectedExpense.id);
    navigate("/");
  };

  return (
    <Whole>
      <GlobalStyle />
      <MainForm>
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
        </InputForm>
        <div>
          <ModifyBtn onClick={modifyHandler}>수정</ModifyBtn>
          <DeleteBtn onClick={deleteHandler}>삭제</DeleteBtn>
          <BackBtn onClick={() => navigate("/")}>뒤로 가기</BackBtn>
        </div>
      </MainForm>
    </Whole>
  );
};

export default Detail;

const Whole = styled.div`
  display: flex;
`;
const MainForm = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 30px auto;
  padding: 20px;
  max-width: 1000px;
  border-radius: 20px;
  background-color: white;
`;
const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 800px;
`;

//버튼 css
const ModifyBtn = styled.button`
  text-align: center;
  width: 100px;
  height: 45px;
  padding: 10px;
  margin: 5px;

  font-size: 15px;
  background-color: #f6f7fa;
  border: none;
  border-radius: 10px;
  &:hover {
    background: green;
    color: white;
  }
`;
const DeleteBtn = styled.button`
  text-align: center;
  width: 100px;
  height: 45px;
  padding: 10px;
  margin: 5px;

  font-size: 15px;
  background-color: #f6f7fa;
  border: none;
  border-radius: 10px;
  &:hover {
    background: #eb4545;
    color: white;
  }
`;
const BackBtn = styled.button`
  text-align: center;
  width: 100px;
  height: 45px;
  padding: 10px;
  margin: 5px;

  font-size: 15px;
  background-color: #f6f7fa;
  border: none;
  border-radius: 10px;
  &:hover {
    background: #7b7c7b;
    color: white;
  }
`;
