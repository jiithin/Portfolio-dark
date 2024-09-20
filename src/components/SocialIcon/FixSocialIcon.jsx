import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "@emotion/styled";
import { Fade, Zoom } from "react-awesome-reveal";
import { Tooltip } from "@mui/material";

const SocialContainer = styled.div`
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  #linkedin {
    font-size: 2.3rem;
    color: #95adb8;
    &:hover {
      color: #126bc4;
    }
 
  }

        #github {
    font-size: 2.3rem;
    color: #95adb8;
    &:hover {
      color: #080808;
    }
}

  @media screen and (max-width: 1000px) {
    margin-top: 2rem;
    position: relative;
    top: 0;
    left: 0;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
    }

  #linkedin {
    font-size: 2.3rem;
    color: #126bc4;

    }

    #github {
    font-size: 2.3rem;
    color: #080808;
}
    .item + .item {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;

function FixSocialIcon() {
  const [open, setOpen] = useState(false);
  return (
    <SocialContainer>
      <Fade direction="up" triggerOnce={true}>
        <ul>
          <li className="item">
            <a id="linkedin"
              href="https://www.linkedin.com/in/jiithin-gangadharan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="item">
          <Tooltip title='More projects' placement='bottom' className="tooltip" open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
            <a id="github"
              href="https://github.com/jiithin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub/>
            </a></Tooltip>
          </li>
        </ul>
      </Fade>
    </SocialContainer>
  );
}

export default FixSocialIcon;
