import React, { useState } from 'react'
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  HeroFirst,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import { Slide } from 'react-awesome-reveal';
function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
    
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer id="home">
        <HeroWrapper>
        <HeroFirst>
            <Slide>
              <Image
                src="/me.png"
                alt="this supposed to be a picture"
              />
            </Slide>
          </HeroFirst>
          <HeroLeft>
            <Slide>
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hi, I\'m Jithin.',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 100 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'A Recat/Angular Developer.',
                    1000,
                    'Node JS Devoloper.',
                    1000,
                    'Open Source Contributer.',
                    1000,
                    'MEA(R)N Stack Developer.',
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={0} //set repeat to 1 can also set to Infinity
                />
              }
            </Slide>

          </HeroLeft>
          <HeroRight>
            <Slide>
              <Image
                src="/me.png"
                alt="this supposed to be a picture"
              />
            </Slide>
          </HeroRight>
        </HeroWrapper>
        
        {/* whats the point of this code in hero page ihave no clue */}
        {/* {showScrollDown &&<ScrollAnimation animateIn="flipInX" offset={0}>
        <ScrollDown to="projects" id="scrollDown">
          <ScrollLink>
            Scroll down
            <img
              src="/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
        </ScrollAnimation>} */}
      </HeroContainer>
    </main>
  )
}

export default Hero