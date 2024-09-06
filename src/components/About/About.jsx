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
        <Fade direction='up' triggerOnce={true}>
          <Image
            src="/me.png"
            alt="my-photo"
          />
        </Fade>
          <div className="AboutBio">
            <Fade >
              <p>
                Hello! I'm <strong>Jithin</strong>. And I'm from the enchanting lands of Kerala, India. Armed with a bachelor's degree in Mechanical Engineering from Kannur University. However, my heart was drawn to the captivating world of information technology, fueled by an insatiable curiosity about the inner workings of modern technologies. Driven by this passion, I embarked on a journey of self-directed learning, delving into the intricacies of web development and JavaScript.
              </p>
            </Fade>

            <br />
            
        

            <Fade >
              <p>
              Today, I stand as a proficient MEA(R)N stack developer, having honed my skills through dedicated practice and hands-on experience. My current endeavor finds me serving as an intern at Luminar Technolab, where I am afforded the opportunity to apply my expertise and contribute to innovative projects. Each day presents new challenges and opportunities for growth, and I embrace them eagerly as I continue to evolve and thrive in the dynamic landscape of technology.
              </p>
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </Fade>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <Zoom triggerOnce={true} key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </Zoom>
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