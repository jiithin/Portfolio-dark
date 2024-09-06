import React from "react";
import { FiChevronUp } from "react-icons/fi";
import styled from "@emotion/styled";
import { Link as ScrollLink } from "react-scroll";
import { HiDownload } from "react-icons/hi";

const SiderBar = styled.div`
background:transparent;
 
backdrop-filter: blur(40px);

  position: fixed;
  height: 100%;
  width: 100%;
  /* top: 0; */
  left: 0;
  z-index: 999;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FiChevronUp )`
  font-size: 2rem;
  color: #fff;
  position: absolute;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  top: 5rem;
  cursor: pointer;
`;
export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .menu-item + .menu-item {
    margin-top: 4rem;
 
  }
`;

export const NavLink = styled(ScrollLink)`
  color: #fff;
  cursor: pointer;
  font-size: 1.7rem;

  &:hover {
    color: rgb(119, 119, 121);
  }
`;

export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  font-size: 1.7rem;
`;

function Dropdown({ isOpen, toggle }) {
  return (
    <SiderBar isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle} style={{color: '#c0dbeb'}}/>
      <NavMenu>
        <NavLink
          onClick={toggle}
          className="menu-item text"
          to="projects"
          style={{color: '#012c3d'}}
        >
          Projects
        </NavLink>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="about"
          style={{color: '#012c3d'}}
        >
          About
        </NavLink>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="education"
          style={{color: '#012c3d'}}
        >
          Expertise
        </NavLink>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="contact"
          style={{color: '#012c3d'}}
        >
          Contact
        </NavLink>
      </NavMenu>
      <NavBtn onClick={toggle}>
        <a
          className="btn"
          href="/JithinKP.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{color: '#012c3d'}}
        >
          Resume < HiDownload color="#012c3d"/>
        </a>
      </NavBtn>
    </SiderBar>
  );
}

export default Dropdown;
