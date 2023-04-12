import React from "react";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NotCheckCircleIcon from "@mui/icons-material/RadioButtonUnchecked";

const Container = styled.section`
  display: flex;
  padding: 1rem;
  overflow-x: scroll;
  scroll-behavior: smooth;
`;

const Day = styled.article`
  flex-shrink: 0;
  width: calc(20vw);
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  box-sizing: border-box;
  overflow-y: auto;
  height: 150vh;
  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;
  ul {
    padding: 5px;
  }
  ul li {
    list-style: none;
  }
  span {
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
    border-radius: 5px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }
`;

const Example = ({ monthlist, handleonClickedlist }) => {
  return (
    <Container>
      {monthlist.map((x) => {
        return (
          <Day>
            <span key={x.day} onClick={() => handleonClickedlist(x.day)}>
              <h2>{x.day}일</h2>
            </span>
            <ul>
              {x.todolist.map((y) => {
                return (
                  <li key={y.key}>
                    <span>
                      {y.isChecked ? (
                        <CheckCircleIcon />
                      ) : (
                        <NotCheckCircleIcon />
                      )}
                    </span>
                    {y.name}
                  </li>
                );
              })}
              {/* <li>{x.todolist[0].name}</li> */}
            </ul>
          </Day>
        );
      })}
    </Container>
  );
};

export default Example;
