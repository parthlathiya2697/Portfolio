import React from 'react'
import "./SkillCardStyle.css";
import { FaPython } from "react-icons/fa";
import {DiGit} from "react-icons/di";
import {SiVisualstudiocode, SiReact, SiFigma } from "react-icons/si";
import {TbBrandJavascript, TbBrandHtml5} from "react-icons/tb";
import { IoLogoNpm} from "react-icons/io"
import { DiDjango } from "react-icons/di";
import { SiFastapi } from "react-icons/si";
import { DiUbuntu } from "react-icons/di";

export default function SkillCard({id}) {
  return (
    <>
        <div className="skill-container" id = {id}>
          <div className="skill-header">My Skills</div>
          <div className="skill-box">
            <center><h2>Languages</h2></center>
            <div className="skillset">
              <abbr title='Python'><FaPython className='techLogo'/></abbr>
              <abbr title='HTML 5'><TbBrandHtml5 className='techLogo'/></abbr>
              <abbr title='JavaScript'><TbBrandJavascript className='techLogo'/></abbr>
            </div>                     
          </div>
          <div className="skill-box">
          <center><h2>Libraries and Frameworks</h2></center>
            <div className="skillset">
              <abbr title='Django'><DiDjango className='techLogo'/></abbr>
              <abbr title='FastApi'><SiFastapi className='techLogo'/></abbr>
              <abbr title='ReactJS'><SiReact className='techLogo'/></abbr>
              <abbr title='Git/Github'><DiGit className='techLogo'/></abbr>
              <abbr title='NPM'><IoLogoNpm className='techLogo'/></abbr>
            </div>            
          </div>
          <div className="skill-box">
          <center><h2>Tools & Systems</h2></center>
            <div className="skillset">
              <abbr title='Visual Studio Code'><SiVisualstudiocode className='techLogo'/></abbr>
              <abbr title='Ubuntu'><DiUbuntu className='techLogo'/></abbr>
              <abbr title='Figma'><SiFigma className='techLogo'/></abbr>
            </div>            
          </div>
        </div>
    </>

  )
}
