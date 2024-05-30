import { Section } from "../pages/Main";
import styled from "styled-components";

export default function MonthButton({ month, setMonth }) {
  const months = [1, 2, 3, 4, 5, 6, , 7, 8, 9, 10, 11, 12];

  return (
    <Section>
      <Months>
        {months.map((element) => (
          <Button
            key={element}
            selected={element === month}
            onClick={() => setMonth(element)}
          >
            {element}월
          </Button>
        ))}
      </Months>
    </Section>
  );
}
const Months = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 750px;
  margin: 20px;
  flex-wrap: wrap;
`;
const Button = styled.button`
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 60px;
  padding: 20px;
  margin: 5px;

  cursor: pointer;
  font-size: 18px;
  background-color: ${(props) =>
    props.selected
      ? "var(--black-alpha-100, green)"
      : "var(--bq-form,#f6f7fa)"};

  color: ${(props) =>
    props.selected
      ? "var(--white-alpha-100, #fff)"
      : "var(--black-alpha-100, #000)"};
  border: none;
  border-radius: 10px;

  &:hover {
    background: green;
    color: white;
  }
`;
