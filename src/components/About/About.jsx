import React from 'react'
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  AboutWrapper,
} from "./AboutElements";

import { Fade, Zoom } from 'react-awesome-reveal';
function About() {
  return (
    <>

    
    
    <AboutWrapper id="about">
      <div className="Container">
        <Fade direction='left' triggerOnce={true}>  
        <div className="SectionTitle">About Me</div>
        </Fade>
        <div className="BigCard">
        <Fade triggerOnce={true}>
          <Image
            src="/me.png"
            alt="my-photo"
          />
        </Fade>
          <div className="AboutBio">
            <Fade >
              <p>
                Hello! I'm <strong>Jithin</strong>. And I'm a MEA(R)N stack developer, having honed my skills through dedicated practice and hands-on experience. My passion for technology drives me to continuously learn and explore innovative solutions, ensuring that I deliver seamless user experiences and impactful software projects.
              </p>
            </Fade>

            <br />
            
        

            <Fade >
              <p>
              My expertise lies in building dynamic and responsive web applications that provide seamless user experiences. I am well-versed in React, Node.js, Express.js, and MongoDB, with a strong emphasis on creating efficient, scalable, and maintainable code. I am eager to explore innovative solutions and contribute to impactful software projects.
              </p>
              <div className="tagline2">
              I am proficient in the following technologies :
              </div>
            </Fade>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <Fade cascade damping={0.1} triggerOnce={true} key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </Fade>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </AboutWrapper>
    </>
  )
}

export default About