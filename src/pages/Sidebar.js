import React from "react";
import styled from "styled-components";
import Todoinput from "./Todoinput";
import Todoinputlist from "./Todoinputlist";

const Sidebarwrapper = styled.section`
  display: flex;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 15px;
  width: 23vw;
  height: 200vh;
  flex-direction: column;
  background-color: #f2f2f2;
`;

const Sidebar = ({ clickedlist, setClickedlist }) => {
  const todolist = clickedlist.todolist;
  const onDelete = (key) => {
    const clicked = todolist.find((x) => x.key === key);
    setClickedlist({
      ...clickedlist,
      todolist: [...todolist.filter((x) => x !== clicked)],
    });
  };

  const onCheck = (key) => {
    const clicked = todolist.find((x) => x.key === key);
    const idx = todolist.indexOf(clicked);
    clicked.isChecked = !clicked.isChecked;
    setClickedlist({
      ...clickedlist,
      todolist: [
        ...todolist.slice(0, idx),
        clicked,
        ...todolist.slice(idx + 1),
      ],
    });
  };

  return (
    <Sidebarwrapper>
      <Todoinput clickedlist={clickedlist} setClickedlist={setClickedlist} />
      <Todoinputlist
        clickedlist={clickedlist}
        onDelete={onDelete}
        onCheck={onCheck}
      />
    </Sidebarwrapper>
  );
};

export default Sidebar;
