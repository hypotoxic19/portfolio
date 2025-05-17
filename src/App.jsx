// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
// ProfileModal.jsx




import sticker from './assets/sticker.gif';
import profilePic from './assets/profile.jpg';
import htmlLogo from './assets/html.png';
import cssLogo from './assets/css.png';
import jsLogo from './assets/javascript.png';
import reactLogo from './assets/react.png';
import nodeLogo from './assets/node.png';
import nextLogo from './assets/next.png';
import djangoLogo from './assets/django.png';
import express from './assets/express.png';
import aiub from './assets/aiub.png';



import BarChart from './components/BarChart';


const fullText = `Hello! I’m Digonto — a passionate Web Developer from AIUB’s Computer Science & Engineering program.

With expertise in creating dynamic and responsive websites, I specialize in crafting seamless user experiences through clean code and modern technologies. I’m driven by innovation and dedicated to turning ideas into efficient digital solutions.

Let’s build something amazing together!`;

const techStack = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "Next.js", logo: nextLogo },
  { name: "Django", logo: djangoLogo },
  { name: "Express", logo: express },
];
const AboutModal = ({ onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <img
        src={aiub}
        alt="American International University Logo"
        style={{ width: "200px", marginBottom: "1rem" }}
      />
      <h2>About Me</h2>
      <p><strong>Undergrad Institution:</strong> American International University(CSE)</p>
      <p><strong>Name:</strong> Digonto</p>
      <p><strong>Total Projects Completed:</strong> 10</p> {/* Replace 10 with your actual number */}
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);
  

  

  

  return (
    <div className="App">
    <div className="grid-background">
      <div className="portfolio">
      <div>
      <img
              src={profilePic}
              alt="Profile"
              className="profile-pic"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                cursor: 'pointer',
                border: '2px solid #39ff14',
              }}
              onClick={() => setModalOpen(true)}
            />
      
      
    </div>

        <header className="hero">
          <nav className="navbar">
            <ul className="nav-links">
              <li><a href="#home" className="nav-btn">Home</a></li>
              <li>
            <a href="#about" className="nav-btn" onClick={(e) => {
              e.preventDefault(); // prevent default anchor jump
              setAboutModalOpen(true);
            }}>
              About
            </a>
          </li>
              <li><a href="#projects" className="nav-btn">Projects</a></li>
              <li><a href="#contact" className="nav-btn">Contact</a></li>
              <li><a href="#experience" className="nav-btn">Experience</a></li>
            </ul>
          </nav>
        </header>

        <div className="intro-container">
          <div className="sticker-container">
            <img src={sticker} alt="Animated Sticker" className="sticker" />
        
          </div>
         
        </div>

        <div id="experience" className="experience-section">
          <h2 className="expert-title">Expert At</h2>

          <div className="experience-logos">
            {techStack.map((tech, index) => (
              <img
                key={index}
                src={tech.logo}
                alt={tech.name}
                className="experience-logo"
                title={tech.name}
              />
            ))}
          </div>
        </div>

      </div>

      <div id="skills">
        <h2 style={{ textAlign: 'center', color: '#1db954' }}>Skill Chart</h2>
        <BarChart />
      </div>

      <section id="projects" className="section">
  <h2 className="section-title">Projects</h2>
  <div className="projects">
    <div className="card">
      <img src="src/assets/itzfeed.PNG" alt="SkillShare Token Project" className="project-screenshot" />
      <h3>SkillShare Token</h3>
      <p>Ethereum-based token with gasless transfer.</p>
      <a href="https://itzfeed.com" target="_blank" rel="noopener noreferrer" className="visit-btn">
        Visit Site
      </a>
    </div>

    <div className="card">
      <img src="/images/messmonitor.png" alt="Mess Monitor Web App" className="project-screenshot" />
      <h3>Mess Monitor Web App</h3>
      <p>Tracks meal costs, deposits, and participation.</p>
      <a href="https://itzfeed.com" target="_blank" rel="noopener noreferrer" className="visit-btn">
        Visit Site
      </a>
    </div>
    <div className="card">
      <img src="src/assets/itzfeed.PNG" alt="SkillShare Token Project" className="project-screenshot" />
      <h3>SkillShare Token</h3>
      <p>Ethereum-based token with gasless transfer.</p>
      <a href="https://your-skillshare-site.com" target="_blank" rel="noopener noreferrer" className="visit-btn">
        Visit Site
      </a>
    </div>
    <div className="card">
      <img src="src/assets/itzfeed.PNG" alt="SkillShare Token Project" className="project-screenshot" />
      <h3>SkillShare Token</h3>
      <p>Ethereum-based token with gasless transfer.</p>
      <a href="https://your-skillshare-site.com" target="_blank" rel="noopener noreferrer" className="visit-btn">
        Visit Site
      </a>
    </div>
    <div className="card">
      <img src="src/assets/itzfeed.PNG" alt="SkillShare Token Project" className="project-screenshot" />
      <h3>SkillShare Token</h3>
      <p>Ethereum-based token with gasless transfer.</p>
      <a href="https://your-skillshare-site.com" target="_blank" rel="noopener noreferrer" className="visit-btn">
        Visit Site
      </a>
    </div>
    <div className="card">
      <img src="src/assets/itzfeed.PNG" alt="SkillShare Token Project" className="project-screenshot" />
      <h3>SkillShare Token</h3>
      <p>Ethereum-based token with gasless transfer.</p>
      <a href="https://your-skillshare-site.com" target="_blank" rel="noopener noreferrer" className="visit-btn">
        Visit Site
      </a>
    </div>
  </div>
</section>


<section id="contact" className="contact-section">
  <hr className="section-separator" />
  <h2 className="contact-title">Contact</h2>
  <p className="contact-info">Feel free to reach out through any of the platforms below:</p>
  
  <div className="social-links">
    <a href="mailto:digonto@example.com" className="social-link email">📧 Email</a>
    <a href="https://github.com/digonto" target="_blank" className="social-link github">🐙 GitHub</a>
    <a href="https://facebook.com/digonto" target="_blank" className="social-link facebook">📘 Facebook</a>
  </div>
</section>



<footer className="footer">
  <p>© 2025 Digonto. All rights reserved.</p>
</footer>


    </div>

    {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Hello, I’m Digonto</h2>
            <p>This is a profile modal. You can customize this!</p>
            <button onClick={() => setModalOpen(false)}>Close</button>
          </div>
        </div>
      )}

{aboutModalOpen && <AboutModal onClose={() => setAboutModalOpen(false)} />}
     
    </div>
  );
};

export default App;
