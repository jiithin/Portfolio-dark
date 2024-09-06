import React from 'react'
import {
    Image,
    EducationtWrapper,
  } from "./EducationElements";
import { Fade } from 'react-awesome-reveal';
function Education() {
  return (
    <>
    
    
    <EducationtWrapper id="education">
      <div className="Container">
        <Fade direction='left' triggerOnce={true}>
        <div className="SectionTitle">Education & Skills</div>
        </Fade>
        
        <div className="BigCard1">
          <Fade direction='up' triggerOnce={true}>
            <Image
            src="/bookicon.svg"
            alt="bookIcon"
          />
          </Fade>
          
          <div className="AboutBio">
            
            <Fade cascade damping={0.1}>
              <h5 style={{fontSize:"20px",color:"#d9e7eb"}}>Bachelors Degree</h5>
              <strong >Mechanical Engineering</strong>.
            <p>
              SNGCET Payyannur , 
               Kannur University.
            </p>
            <small>2014-2018</small>
            
            <br/>

            </Fade>

            <br />
            
          

            
              <div id='skills'>
              <Fade cascade damping={0.1}>
            <h5 style={{fontSize:"20px",color:"#d9e7eb"}}>Technical Skills</h5>

             
                  <p><strong>Programming Languages</strong>: JavaScript,
                  TypeScript.</p>
                  
                  <p><strong>Libraries/Frameworks</strong>: ReactJS, NodeJS,
                  ExpressJS</p>
                  
                  <p><strong>Database</strong>: MongoDB</p>
                  
                  <p><strong>WebTechnologies </strong>: HTML, CSS, Material UI,
                  Bootstrap.</p>
                  
                  <p><strong>VersionControl </strong>: GitHub.</p>
                  
                  <p><strong>Repositories </strong>: GitHub, Azure</p>
                  
                  <p><strong>Testing </strong>: Postman, Insomnia.</p>
                  
                  <p><strong>IDE</strong>: VisualStudio Code.</p>
                  
                  <p><strong>Platforms</strong>: Vercel, Netlify, Render.</p>
                  </Fade>
                </div>
            
            

          
          </div>

        </div>
      </div>
    </EducationtWrapper>
    </>
  )
}

export default Education