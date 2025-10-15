import React, { useState } from "react";
import "./App.css";
import profilePic from './assets/Head.jpg';
// Icons
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
  FaDatabase,
  FaFacebookF,
  FaInstagram,
  FaViber,
  FaLinkedin,
} from "react-icons/fa";
import { SiLaravel, SiGmail } from "react-icons/si";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Background and floating shapes */}
      <div className="neural-background" />
      <div className="geometric-shapes">
        {[...Array(6)].map((_, i) => (
          <div className="shape" key={i}></div>
        ))}
      </div>

      {/* Hamburger Button */}
      <button 
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

    
      <header className="glass">
        <nav>
          <a href="#home" className="logo">
            MY PERSONAL PORTFOLIO
          </a>
        </nav>
      </header>

      
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <a href="#home" onClick={closeMenu}>Biography</a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>About</a>
        </li>
        <li>
          <a href="#projects" onClick={closeMenu}>Projects</a>
        </li>
        <li>
          <a href="#skills" onClick={closeMenu}>Skills</a>
        </li>
        <li>
          <a href="#resume" onClick={closeMenu}>Resume</a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </li>
      </ul>

     
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Hello, I'm Altia Gonzales Inale</h1>
          <p>
            Welcome to my personal portfolio! Explore my projects, skills, and
            background below.
          </p>
        </div>
      </section>

     <section className="about glass" id="biography">
  <h2>Biography</h2>
  <div className="about-content">
    <div className="profile-pic-wrapper">
      <img src="src/assets/Head.jpg" alt="Head.jpg" className="profile-pic" />
    </div>
    <div className="bio">
      <p>
        Hello! I’m Altia Gonzales Inale from Bicol, Philippines. I am a curious and open-minded person who likes learning at my own pace and exploring different experiences. I try to approach challenges with patience and take things one step at a time.
I am currently a 3rd-year student pursuing a Bachelor of Information Systems. While I am still figuring out my strengths in this field, I continue to attend my classes and complete my coursework. I focus on doing my best and learning gradually, even if the subject isn’t my main passion.
Outside of my studies, I enjoy reading, watching Thai movies, and following comics. I like activities that let me relax, be creative, and explore new ideas. These hobbies help me balance my time and stay motivated in my personal life.
      </p>
    </div>
  </div>
</section>


   
<section className="about glass" id="about">
  <h2>About Me</h2>
  <div className="about-text">
    <ul>
      <li><strong>Name:</strong> Altia Gonzales Inale</li>
      <li><strong>Age:</strong> 21 years old</li>
      <li><strong>Birthday:</strong> August 9, 2004</li>
      <li><strong>Location:</strong> Bicol, Philippines</li>
    </ul>
  </div>
</section>


      <section className="projects" id="projects">
        <h2>My Projects</h2>
        <div className="project-cards">
          <div className="project-card">
            <div className="project-icon-wrapper">
              <span>📖</span>
            </div>
            <h3>Akbay</h3>
            <p>
           One of our projects in System Analysis and Design was a mobile app called *AKBAY*, which stands for *Aklat at Ka-akbay*—meaning 'Book and Buddy'. The goal of this app is to serve as a study companion for students, helping them organize their books, notes, and learning resources in one place. Through the system analysis process, we identified user needs, planned the app’s features, and designed a user-friendly interface. It was a meaningful experience that allowed us to apply what we learned in class to a real-world solution that supports student learning
            </p>
          </div>

          <div className="project-card">
            <div className="project-icon-wrapper">
              <span>🗒</span>
              <a 
  href="https://github.com/MarkJasonPatron/note-app"  
  target="_blank" 
  rel="noopener noreferrer"
  className="contact-icon"
>
</a>
            </div>
            <h3>Note App</h3>
            <p>
              The purpose of a note app using the Laravel framework is to create a simple web application that allows users to manage their important notes. This app is built using the Laravel framework with Breeze for quick and easy user authentication. It enables users to create, read, update, and delete their notes through a user-friendly interface. The app is designed to be accessible only to authenticated users, ensuring security and privacy.
            </p>
          </div>

          <div className="project-card">
            <div className="project-icon-wrapper">
              <span>🧁</span>
              
            </div>
            <h3>Toronto Cupcakes</h3>
            <p>
              I’m proud to say we enhanced the Toronto Cupcake website using the principles we learned in our HCI subject. It was a hands-on project where we applied concepts like user-centered design, accessibility, and usability to improve the site's overall experience. We focused on making it more intuitive, visually appealing, and easier to navigate for customers. It really helped us understand how HCI works in real-world applications, and it was exciting to see our ideas come to life!

            </p>
          </div>
        </div>
      </section>


<section className="skills glass" id="skills">
  <h2>Skills</h2>

  
  <div className="skills-icons">
    <div className="skill-item">
      <FaHtml5 />
      <span>HTML5</span>
    </div>
    <div className="skill-item">
      <FaJsSquare />
      <span>JavaScript</span>
    </div>
    <div className="skill-item">
      <FaReact />
      <span>React</span>
    </div>
    <div className="skill-item">
      <FaPhp />
      <span>PHP</span>
    </div>
    <div className="skill-item">
      <SiLaravel />
      <span>Laravel</span>
    </div>
  </div>

  {/* Description */}
  <p style={{ marginTop: "1.5rem" }}>
    I am continuously learning and exploring new ways to improve my skills as a student. 
    While I have been practicing programming languages like HTML, JavaScript, React, PHP, and Laravel, 
    I also focus on developing soft skills that help me become a better learner and collaborator. 
    Skills such as communication, problem-solving, teamwork, time management, and creativity allow me 
    to approach challenges with a clear mindset, work effectively with others, and stay organized in 
    my projects. I believe that balancing technical expertise with strong interpersonal abilities 
    is key to growing both academically and personally.
  </p>

 
  <h3 style={{ marginTop: "2rem" }}>Soft Skills</h3>
  <div className="skills-icons">
    <div className="skill-item">
      <span>🤝 Good Communication</span>
    </div>
    <div className="skill-item">
      <span>🧠 Problem Solving</span>
    </div>
    <div className="skill-item">
      <span>👥 Teamwork</span>
    </div>
    <div className="skill-item">
      <span>🎯 Time Management</span>
    </div>
    <div className="skill-item">
      <span>💡 Creativity</span>
    </div>
  </div>
</section>

    
      <section className="resume glass" id="resume">
        <h2>Resume</h2>
        <p>Download my professional resume below. It contains my skills, experience, and achievements for your reference.</p>
        <a href="/resume.pdf" download className="download-btn">
          Download Resume
        </a>
      </section>

      <section className="contact glass" id="contact">
  <h2>Contact Me</h2>
  <div className="contact-icons">
   
    <a
      href="https://www.facebook.com/thea.liane.gonzales.inale"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-icon"
    >
      <FaFacebookF />
    </a>

   
    <a
      href="https://www.instagram.com/sisthea_inale"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-icon"
    >
      <FaInstagram />
    </a>

    
    <a
      href="viber://chat?number=09926301295"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-icon"
    >
      <FaViber />
    </a>

   
   <a 
  href="https://mail.google.com/mail/?view=cm&to=inalealtia15@gmail.com" 
  target="_blank" 
  rel="noopener noreferrer"
  className="contact-icon"
>
  <SiGmail />
</a>



    <a
      href="https://www.linkedin.com/in/altia-inale-723461289/"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-icon"
    >
      <FaLinkedin />
    </a>
  </div>
  <p>Feel free to reach out via any of the channels above!</p>
</section>


     
      <footer className="glass">
        <p>© 2025 Altia Gonzales Inale. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;