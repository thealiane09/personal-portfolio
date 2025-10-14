import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Header */}
      <div id="header">
        <div className="top">
          {/* Logo */}
          <div id="logo">
            <span className="image avatar48">
              <img src="images/Thea Prof.jpg" alt="Profile" />
            </span>
            <h1 id="title">ALTIA G. INALE</h1>
            <p>Business Analyst</p>
          </div>

          {/* Nav */}
          <nav id="nav">
            <ul>
              <li><a href="#top" id="top-link"><span className="icon solid fa-home">Biography</span></a></li>
              <li><a href="#portfolio" id="portfolio-link"><span className="icon solid fa-th">Projects</span></a></li>
              <li><a href="#about" id="about-link"><span className="icon solid fa-user">Skills</span></a></li>
              <li><a href="#contact" id="contact-link"><span className="icon solid fa-user">Contact</span></a></li>
              <li><a href="#resume" id="resume-link"><span className="icon solid fa-envelope">Resume</span></a></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main */}
      <div id="main">
        {/* Biography Section */}
        <section id="top" className="one dark cover">
          <div className="container">
            <header>
              <h2 className="alt">Hi! I'm <strong>Altia Inale</strong></h2>
              <p>Welcome to my personal portfolio.</p>
            </header>
            <footer>
              <a href="#portfolio" className="button scrolly">View Projects</a>
            </footer>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="two">
          <div className="container">
            <header><h2>Projects</h2></header>
            <p>Showcasing some of my works and accomplishments.</p>
            <div className="row">
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="#" className="image fit"><img src="images/pic02.jpg" alt="" /></a>
                  <header><h3>Ipsum Feugiat</h3></header>
                </article>
              </div>
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="#" className="image fit"><img src="images/pic04.jpg" alt="" /></a>
                  <header><h3>Magna Nullam</h3></header>
                </article>
              </div>
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="#" className="image fit"><img src="images/pic06.jpg" alt="" /></a>
                  <header><h3>Dolor Penatibus</h3></header>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="about" className="three">
          <div className="container">
            <header><h2>Skills</h2></header>
            <a href="#" className="image featured"><img src="images/pic08.jpg" alt="Skills" /></a>
            <p>
              I specialize in data analysis, system documentation, and project coordination. 
              Passionate about improving business processes through technology and collaboration.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="four">
          <div className="container">
            <header><h2>Contact</h2></header>
            <form>
              <div className="row">
                <div className="col-6 col-12-mobile">
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="col-6 col-12-mobile">
                  <input type="email" name="email" placeholder="Email" />
                </div>
                <div className="col-12">
                  <textarea name="message" placeholder="Message"></textarea>
                </div>
                <div className="col-12">
                  <input type="submit" value="Send Message" />
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="four">
          <div className="container">
            <header><h2>Resume</h2></header>
            <a
              href="https://drive.google.com/drive/folders/1AJpkb3YfdlVvIlf775_DKeWWSlRzhVmO"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View My Resume
              <img src="images/pic08.jpg" alt="Resume" />
            </a>
            <p>
              I am Jocelyn Bendoy, 24 years old from Cabuyao, Laguna. 
              Currently taking Associate in Computer Technology (ACT2) at La Verdad Christian College, 
              with a ladderized path toward a BS in Information Systems. My goal is to become a competent 
              Business Analyst who bridges the gap between technology and business needs.
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div id="footer">
        <ul className="copyright">
          <li>© Altia Inale. All rights reserved.</li>
          <li>Design by <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
      </div>
    </>
  );
}

export default App;
