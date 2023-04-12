import React from "react";
import styled from "styled-components";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
const Listwrapper = styled.div`
  ul {
    padding: 5px;
  }
  ul li {
    display: flex;
    list-style: none;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Todoinputlist = ({ clickedlist, onDelete, onCheck }) => {
  const todolist = clickedlist.todolist;
  return (
    <Listwrapper>
      <ul>
        {todolist.map((x) => {
          return (
            <li key={x.key}>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  onCheck(x.key);
                }}
              >
                {x.isChecked ? <CheckBoxIcon /> : <CheckBoxBlankIcon />}
              </span>
              {x.name}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(x.key);
                }}
              >
                <DeleteForeverIcon />
              </button>
            </li>
          );
        })}
      </ul>
    </Listwrapper>
  );
};

export default Todoinputlist;
