import React from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";

const Spending = () => {
  return (
    <Whole>
      <MainForm>
        <InputForm>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>날짜</Form.Label>
            <Form.Control type="text" placeholder="YYYY-MM-DD" value={""} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>항목</Form.Label>
            <Form.Control type="text" placeholder="지출 항목" value={""} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>금액</Form.Label>
            <Form.Control type="number" placeholder="지출 금액" value={""} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>내용</Form.Label>
            <Form.Control type="text" placeholder="지출 내용" value={""} />
          </Form.Group>
        </InputForm>
        <div>
          <ModifyBtn>수정</ModifyBtn>
          <DeleteBtn>삭제</DeleteBtn>
          <BackBtn>뒤로 가기</BackBtn>
        </div>
      </MainForm>
    </Whole>
  );
};

export default Spending;

const Whole = styled.div`
  display: flex;
  background-color: #9fd19f;
  height: auto;
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
