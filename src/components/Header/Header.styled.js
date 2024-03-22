import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  height: 100px;
`;

export const StyledLink = styled(NavLink)`
  color: #454545;
  background: rgb(247, 247, 247);
  padding: 5px 0;
  margin: 16px 0;
  text-decoration: none;
  font-weight: 700;
  font-size: 19px;
  border-radius: 10px;
  display: grid;
  justify-items: center;
  align-items: center;
  width: 250px;
  &.active {
    border-bottom: 1px solid #454545;
    text-shadow: 0px 2px 17px rgba(246, 246, 246, 1);
  }
  &.active:hover {
    border-bottom: 1px solid #e44848;
  }
  &:hover {
    transform: scaleX(1);
    color: #e44848;
  }
`;
