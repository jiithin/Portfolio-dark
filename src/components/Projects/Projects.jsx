import React from 'react'
import ProjectCard from "./ProjectCard/ProjectCard";
import { Fade } from 'react-awesome-reveal';
function Projects() {
  return (
    <>
   
    <div className="ProjectWrapper" id="projects" style={{marginTop: '10%'}}>
      <div className="Container">
        <Fade direction='left' triggerOnce={true}>
        <div className="SectionTitle">Projects</div>  
        </Fade>
        
        <ProjectCard />
      </div>
    </div>
  </>
  )
}

export default Projects