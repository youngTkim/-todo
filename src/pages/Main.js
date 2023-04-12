import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Example from "./Example";

const MainWrapper = styled.main`
  display: flex;
  padding: 1.5rem;
  padding-top: 70px;
  background-color: #ffffff;
`;

const Main = () => {
  const [monthlist, setMonthlist] = useState([
    {
      day: 1,
      todolist: [],
    },
    {
      day: 2,
      todolist: [],
    },
    {
      day: 3,
      todolist: [],
    },
    {
      day: 4,
      todolist: [],
    },
    {
      day: 5,
      todolist: [],
    },
    {
      day: 6,
      todolist: [],
    },
    {
      day: 7,
      todolist: [],
    },
    {
      day: 8,
      todolist: [],
    },
    {
      day: 9,
      todolist: [],
    },
    {
      day: 10,
      todolist: [],
    },
    {
      day: 11,
      todolist: [],
    },
    {
      day: 12,
      todolist: [],
    },
  ]);
  const [clickedlist, setClickedlist] = useState({
    day: 1,
    todolist: [],
  });
  const [preidx, setPreidx] = useState(0);
  const changeClickedlist = () => {
    const x = [...monthlist];
    x[preidx] = clickedlist;
    setMonthlist([...x]);
  };
  const handleonClickedlist = (idx) => {
    if (clickedlist.day !== idx) {
      const x = [...monthlist];
      x[preidx] = clickedlist;
      setMonthlist([...x]);
      const clickedDay = monthlist.find((x) => x.day === idx);
      setPreidx(monthlist.indexOf(clickedDay));
      setClickedlist(clickedDay);
    }
  };
  useEffect(() => changeClickedlist(), [clickedlist.todolist]);
  return (
    <MainWrapper>
      <Sidebar
        clickedlist={clickedlist}
        setClickedlist={setClickedlist}
        changeClickedlist={changeClickedlist}
      />
      <Example
        monthlist={monthlist}
        handleonClickedlist={handleonClickedlist}
      />
    </MainWrapper>
  );
};

export default Main;
