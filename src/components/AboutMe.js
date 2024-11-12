import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/profile-image2.jpg";

export default function AboutMe({ id }) {
  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text">
        <h3>Hey there, 👋</h3>
        I'm <span>Parth Lathiya</span>, a Software Engineer with over six years of experience building innovative solutions in <span>automation, AI, and web development</span>. From crafting user-friendly web experiences to creating intelligent automation systems, I’m passionate about using technology to solve real-world problems.

        <br /> <br />
        Outside of coding, I enjoy mentoring teams and collaborating on creative projects that push the boundaries of what's possible. Let’s connect and bring new ideas to life together!
        <br /><br />
        Curious to know more? <a className='resume' href="https://drive.google.com/file/d/1yGX3mN6cvRtawMQ3Nu4mIBwBb57O268T/view?usp=sharing" target="_blank" rel="noopener noreferrer">Check out my resume</a>.
      </div>

      <div className="profile-photo">
        <div className="heading"> About Me</div>
        <img className="img" src={myProfile} alt="Profile" style={{width: '400px', height: 'auto'}}></img>
      </div>
      <div className="name">Parth</div>
    </div>
  );
}
