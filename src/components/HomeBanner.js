import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon-compressed.png";

export default function HomeBanner({id}) {
  return (
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
              <div className="name">Parth Lathiya</div>
              <div className="staticTitle">
                AI Engineer
                <div className='hrLine'></div>
              </div>
              <ul className="dynamicTitle">
                <li>+<span>Backend Developer</span></li>
              </ul>
              <a className='btn' href="https://www.linkedin.com/in/ParthLathiya14/" target="_blank" rel="noopener noreferrer">Hire Me</a>
            </div>
        </div>
        <div className="mask">
            <img className='bg' src={cartoon} alt="boy-with-laptop" />
        </div>
    </div>
  )
}
