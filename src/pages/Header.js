import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #f2f2f2;
  position: fixed;
`;

const Nav = styled.nav`
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  width: 100vw;
  height: 70px;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li {
    margin: 0.5rem;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  a:hover {
    background-color: #333;
    color: #f2f2f2;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Nav>
        <h1>My Website</h1>
        <Menu>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </Menu>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
