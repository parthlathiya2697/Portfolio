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
        <HomeBanner id="home" />
        <ProjectCard
          id="project"
          className="odd"
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
          deployedProjectLink="https://aifashion.parthlathiya.wiki/"
          projectImg={require('./images/projectAiFashion.png')}
        />

        <ProjectCard
          className="odd"
          projectTitle="AI Branding: Create your Brand's Presence"
          projectDesc="Single Click solution to creating a whole lot of assets for branding."
          projectLink="https://github.com/parthlathiya2697/AI-Branding-Solution"
          deployedProjectLink="https://aibranding.parthlathiya.wiki/"
          projectImg={require('./images/projectAiBranding.png')}
        />

        <ProjectCard
          projectTitle="Revolutionizing Indoor Farming"
          projectDesc="Experience the future of agriculture with our innovative hydroponic and aeroponic solutions."
          projectLink="https://github.com/parthlathiya2697/Modern-Farm-X.git"
          deployedProjectLink="https://modern-farming.parthlathiya.wiki/"
          projectImg={require('./images/projectModernFarm.png')}
        />

        <ProjectCard
          className="odd"
          projectTitle="AI PPT Generator"
          projectDesc="The most efficient way to generate PPTs."
          projectLink=""
          deployedProjectLink="https://ppt-generator.parthlathiya.wiki/"
          projectImg={require('./images/projectPptGenerator.png')}
        />

        <ProjectCard
          projectTitle="Invest in the Next Big Thing"
          projectDesc="Your gateway to IPO investments. Research, analyze, and apply for IPOs all in one place."
          projectLink=""
          deployedProjectLink="https://ipo-platform.parthlathiya.wiki/"
          projectImg={require('./images/projectIpoPlatform.png')}
        />

        <ProjectCard
          projectTitle="Chat with your documents in seconds"
          projectDesc="PDF GPT allows you to have conversations with any PDF document. Simply upload your file and start asking questions right away."
          projectLink=""
          deployedProjectLink="https://ipo-platform.parthlathiya.wiki/"
          projectImg={require('./images/projectIpoPlatform.png')}
        />

        <AboutMe id='about' />
        <SkillCard id='skills' />
        <ContactForm id='contact' />
        <Footer />
      </div>
    </>
  );
}

export default App;
