import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import ContactForm from './components/ContactForm'
import AnimatedCursor from "react-animated-cursor"


function App() {
  return (
    <>
    <AnimatedCursor
      color="#fff"
      innerSize={8}
      outerSize={50}
      innerScale={1}
      outerScale={2.2}
      outerAlpha={0}
      outerStyle={{
        background: '#ffffff',
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: '#F94892'
      }}
    />
    <div>
      <Navbar />
      <HomeBanner id = "home"/>
      <ProjectCard
        id = "project"
        className = "odd"
        projectTitle="AI Doctor: Self Care Made Easy"
        projectDesc="A one-stop solution for your health management, relevant FirstAid, Hospitals, and appropriate Doctors."
        projectLink="https://github.com/parthlathiya2697/Healthcare-AI-Chatbot"
        deployedProjectLink="https://aihealthcare.parthlathiya.wiki/"
        projectImg={require('./images/projectAiDoctor.png')}
      />

      <ProjectCard
        projectTitle="AI Fashion: Analyse your Clothing Sense"
        projectDesc="A place where you can analyse your clothing sense and Improve upon it."
        projectLink="https://github.com/parthlathiya2697/Fashion-Sense-Rating"
        deployedProjectLink=""
        projectImg={require('./images/projectAiFashion.png')}
      />

      <ProjectCard
        className = "odd"
        projectTitle="AI Branding: Create your Brand's Presence"
        projectDesc="Single Click solution to creating a whole lot of assets for branding "
        projectLink="https://github.com/parthlathiya2697/AI-Branding-Solution"
        deployedProjectLink=""
        projectImg={require('./images/projectAiBranding.png')}
      />
      <AboutMe id = 'about' />
      <SkillCard id = 'skills' />
      <ContactForm id = 'contact' />
      <Footer />
    </div>
    </>
  );
}

export default App;
