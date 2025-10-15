import React, { useEffect } from "react";
import "./App.css";


function App() {
  useEffect(() => {
    const backToTopButton = document.getElementById("backToTop");

    const handleScroll = () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== Header ===== */}
      <header className="site-header">
        <div className="container">
          <h1 className="logo">My Profile</h1>
          <nav className="nav">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#biography">Biography</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h2>I'm <span className="highlight">Nathaniel Miguel David</span></h2>
            <p>A passionate Software Quality Assurance from the Philippines</p>
          </div>
          <div className="hero-image">
            <img
              src="https://i.postimg.cc/Sqg3w3r7/Gemini-Generated-Image-masdqxmasdqxmasd.png"
              alt="Profile"
            />
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="section about">
        <div className="container">
          <h3 className="section-title">About Me</h3>
          <p className="section-desc">
            A Software Quality Assurance aspirant dedicated to ensuring the excellence of every digital product. Focused on delivering reliable, efficient, and user-friendly software through meticulous testing, keen attention to detail, and continuous learning about quality standards and emerging technologies.
          </p>
        </div>
      </section>

      {/* ===== Biography ===== */}
      <section id="biography" className="section biography">
        <div className="container bio-container">
          <h3 className="section-title">Biography</h3>
          <ul className="bio-list">
            <li><strong>Full Name:</strong> Nathaniel Miguel C. David</li>
            <li><strong>Birthday:</strong> January 15, 2004</li>
            <li><strong>Email:</strong> nathanielmiguelcastrodavid@email.com</li>
            <li><strong>Phone:</strong> +63 9614747140</li>
            <li><strong>Address:</strong> Pampanga, Philippines</li>
          </ul>
        </div>
      </section>

      {/* ===== Skills ===== */}
      <section id="skills" className="section skills">
        <div className="container">
          <h3 className="section-title">Skills</h3>
          <div className="skills-grid">
            {[
              { name: "Manual Testing", level: "40%" },
              { name: "Test Case Creation", level: "40%" },
              { name: "Adaptability and Flexibility", level: "60%" },
            ].map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="bar">
                  <div className="fill" style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Resume ===== */}
      <section id="resume" className="section resume">
        <div className="container">
          <h3 className="section-title">Resume</h3>
          <div className="resume-grid">
            <div className="resume-column">
              <h4>Education</h4>
              <ul>
                <li>
                  <h5>Bachelor of Science in Information System</h5>
                  <p><strong>La Verdad Christian College</strong> — 2023 - 2025</p>
                  <p>Bachelor of Science in Information System (BSIS) is a college program that focuses on using technology to solve business problems. It teaches students how to design, manage, and improve information systems that help organizations work more efficiently.</p>
                </li>
                <li>
                  <h5>Senior High School (General Academic Strand)</h5>
                  <p><strong>Macabebe High School</strong> — 2021 - 2023</p>
                  <p>Learned fundamental concepts in various academic disciplines, fostering critical thinking and adaptability.</p>
                  <p>A Senior High School graduate recognized with honors for academic excellence.</p>
                </li>
              </ul>
            </div>

            <div className="resume-column">
              <h4>Experience</h4>
              <ul>
                <li>
                  <h5>Bazar Seller</h5>
                  <p><strong>Lhai's Bazar</strong> — Dec 2018 - Nov 2019</p>
                  <p>Operated cash register, handled payments, and maintained a clean and organized checkout area. Collaborated with team members to provide excellent customer service and meet sales goals.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="resume-download">
            <a
              href="https://drive.google.com/uc?export=download&id=1a-UbXOm2FoLQthVCvaLhhRABarU_UOk1"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="section contact">
        <div className="container">
          <h3 className="section-title">Contact Me</h3>
          <p className="section-desc">
            I’m always open to discussing new projects, creative ideas, or opportunities.
          </p>
          <div className="contact-links">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nathanielmiguelcastrodavid@gmail.com"
              target="_blank"
              className="btn contact-btn"
            >
              📧 Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/nathanielmiguel-david-7184702bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn contact-btn"
            >
              🔗 Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="site-footer">
        <div className="container">
          <p>© 2025 Nathaniel Miguel David. All Rights Reserved.</p>
        </div>
      </footer>

      {/* ===== Back to Top Button ===== */}
      <button
        id="backToTop"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  );
}

export default App;
