import React from 'react'
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import { HiDownload } from "react-icons/hi";
function Header({toggle}) {

    const goToLink = () => {
        window.location.href = 'https://portfolio-jithin.vercel.app'
      };

  return (
    <>
    <div className="Container" style={{padding: 0}}>
      <Nav>
        <Logo onClick={goToLink} >
          <img src="/earth.svg" alt="jithin" />
        </Logo>
        <NavMenu>
        <NavLink className="menu-item" to="home">
            Home
          </NavLink>

          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>

          <NavLink className="menu-item" to="education">
            Education
          </NavLink>
          
          <NavLink className="menu-item" to="contact">
            Contact Me
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn"
            href="/JithinKP.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
           Resume <HiDownload color="#c0dbeb"/>
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
    </>
  )
}

export default Header