import { FiSlack } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";

export const Nav = styled.nav`
  top: 0;
  left:0;
  right:0;
  background:transparent;
 
  backdrop-filter: blur(4px);
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
 
`;

export const NavLink = styled(ScrollLink)`
  color: #c0dbeb;
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #95adb8;
  }
`;
export const Logo = styled('div')`
  img {
    margin-left: 20px;
    width: 30px;
    height: 30px;
  }
`;

export const Bars = styled(FiSlack)`
  display: none;
  color: #012c3d;
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  .menu-item + .menu-item {
    margin-left: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
color: #c0dbeb;
font-size: 1.1rem;

  display: flex;
  align-items: center;
  margin-right: 24px;
  cursor: pointer;
  &:hover {
    color: #95adb8;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
