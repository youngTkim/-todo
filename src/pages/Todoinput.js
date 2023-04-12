import React from "react";
import { useState } from "react";
import styled from "styled-components";

const TodoinputWrapper = styled.article`
  display: flex;
  justify-content: center;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    overflow: hidden;
    flex: 1;
    height: 1rem;
    margin: 2px;
  }
`;

const Todoinput = ({ clickedlist, setClickedlist }) => {
  const todolist = clickedlist.todolist;
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const handleinput = () => {
    setClickedlist({
      ...clickedlist,
      todolist: [
        ...todolist,
        { key: Date.now(), name: input, isChecked: false },
      ],
    });
    setInput("");
  };

  return (
    <TodoinputWrapper>
      <Div>
        제목:
        <input onChange={onChange} value={input} required />
        <button className="margin" onClick={handleinput}>
          등록
        </button>
      </Div>
    </TodoinputWrapper>
  );
};

export default Todoinput;
