import React from 'react';
import "./ProjectCardStyle.css";
import {FaArrowRight} from "react-icons/fa";
import {FiGithub} from "react-icons/fi";
import Tilt from 'react-parallax-tilt';

export default function ProjectCard(props) {
  const handleOnClick = () => {
    window.open(`${props.projectLink}`);
  }

  const handleDemoClick = () => {
    window.open(`${props.deployedProjectLink}`);
  }

  return (
    <div className='project-window' id={props.id}>
      <div className={`project-wrapper ${props.className}`}>
        <div className="about-project">
          <div className="project-title">{props.projectTitle}</div>
          <div className="desc">{props.projectDesc}</div>
          <div className='button-group' style={{ display: 'flex', gap: '1rem' }}>
            <button 
              className='btn' 
              onClick={props.projectLink ? handleOnClick : null} 
              disabled={!props.projectLink}
              style={{
                backgroundColor: props.projectLink ? 'initial' : 'gray',
                cursor: props.projectLink ? 'pointer' : 'not-allowed'
              }}
            >
              <span>
                {props.projectLink ? (
                  <>
                    View on<FiGithub className="social" size={20} style={{ marginLeft: "8px", position: "relative", top: "2px", strokeWidth: "3" }} />
                  </>
                ) : (
                  "Code Private"
                )}
              </span>
              <FaArrowRight className='btn-arrow' size={22} style={{ marginLeft: "1rem" }} />
            </button>
            {props.deployedProjectLink && (
              <button className='btn' onClick={handleDemoClick}>
                <span>View Demo</span>
                <FaArrowRight className='btn-arrow' size={22} style={{ marginLeft: "1rem" }} />
              </button>
            )}
          </div>
        </div>
        <Tilt className="project-img" gyroscope={true} >
          <a href={props.deployedProjectLink} target="_blank" rel="noopener noreferrer"><img src={props.projectImg} alt="Displaying Project" /></a>
        </Tilt>
      </div>
    </div>
  )
}