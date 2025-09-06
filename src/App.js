import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-brand">David</div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => {
          document.querySelector(".navbar-links").classList.toggle("active");
        }}>
          &#9776; {/* Unicode hamburger icon */}
        </div>

        {/* Nav Links */}
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      
      {/* Home Section */ }
  <section id="home" className="home">
    <h1 className="name">David Awodi</h1>

    <div className="tagline">
      <span>Software Engineer</span>
      <span>Veteran</span>
      <span>Problem Solver</span>
    </div>

    <p className="intro">
      Passionate about building scalable applications, solving complex problems,
      and creating impactful solutions that bridge technology and people.
    </p>

    <a href="#contact">
      <button className="btn-primary">Contact Me</button>
    </a>
  </section>

  {/* About Section */ }
  <section id="about" className="Section About">
    <h1 className="SectionTitle">
      About <span className="Accent">Me</span>
    </h1>
    <p className="SectionIntro">
      I grew up in Nigeria where access to technology was limited. When I moved
      to the U.S., I finally had the chance to fully pursue my passion for
      software development. From teaching myself programming with Python to
      serving in the Marine Corps while studying Computer Science, my journey has
      been one of persistence, discipline, and growth.
    </p>

    <div className="CardGrid">
      <div className="Card">
        <h2>Experience</h2>
        <p>
          Over the past three years, I’ve built my foundation as a software developer,
          working on projects that range from personal portfolio apps to full-stack
          solutions deployed in the cloud. My strongest skills are with C#, .NET, and
          Azure, where I’ve learned how to turn ideas into reliable applications that
          solve real problems.
          <br /><br />
          Beyond just writing code, I’ve developed the habit of thinking like a
          problem solver, breaking down challenges, designing solutions, and learning
          new tools when the situation calls for it. My time in the Marine Corps gave
          me the discipline and leadership to thrive in fast-paced environments, and I
          carry that same mindset into every project I take on as a developer.
        </p>
      </div>

      <div className="Card">
        <h2>Military Background</h2>
        <p>
          Serving in the United States Marine Corps as an electrician taught me lessons
          I carry everywhere I go. I worked with mission-critical power systems, where
          precision and reliability were non-negotiable. Leading Marines and managing
          equipment gave me not only technical skills, but also the discipline,
          teamwork, and leadership that shape how I approach challenges today.
          <br /><br />
          The military didn’t just sharpen my hands-on skills — it built a mindset of
          persistence and accountability. Whether I’m troubleshooting power grids or
          debugging code, I bring the same focus on solving the problem, supporting the
          team, and getting the job done.
        </p>
      </div>

      <div className="Card">
        <h2>Education</h2>
        <p>
          <b>Bachelor’s in Computer Science</b> – University of Maryland Global Campus
          <br /> Expected Graduation: Summer 2025
        </p>
        <p>
          <b>Associate’s Degree in General Studies</b> – University of Maryland Global Campus
          <br /> Completed: December 2025
        </p>
        <p>
          <b>Microsoft Software & Systems Academy (MSSA)</b> – Cloud Application Development
          <br /> Certificate of Completion
        </p>

        <h3 style={{ marginTop: "15px", color: "#f4d03f" }}>Certifications</h3>
        <ul className="CertList">
          <li>Artificial Intelligence Foundations: Machine Learning (LinkedIn, Jul 2025)</li>
          <li>Artificial Intelligence Foundations: Neural Networks (LinkedIn, Jul 2025)</li>
          <li>Software Development Fundamentals (LinkedIn, Dec 2024)</li>
          <li>Foundational C# with Microsoft (freeCodeCamp, Oct 2024)</li>
        </ul>
      </div>

      <div className="Card">
        <h2>Skills</h2>
        <div className="SkillsGrid">
          <span>C#</span>
          <span>Java</span>
          <span>Microsoft Azure</span>
          <span>Docker / Docker Compose</span>
          <span>JavaScript</span>
          <span>Linux</span>
          <span>CI/CD Pipelines</span>
          <span>React</span>
          <span>PostgreSQL / SQLite</span>
          <span>Blazor</span>
          <span>Agile</span>
          <span>PowerShell Scripting</span>
          <span>.NET / ASP.NET</span>
          <span>Windows / MacOS</span>
          <span>Android</span>
          <span>Bash Scripting</span>
          <span>REST / TLS / OpenSSL</span>
          <span>Git / GitHub Actions</span>
          <span>AI / ML Fundamentals</span>
          <span>Leadership & Team Management</span>
          <span>Military Electrical Systems</span>
        </div>
      </div>


      <div className="Card hobbies-card">
        <h2>Extra Hobbies</h2>
        <p>
          Outside of coding, I spend a lot of time around cars. I enjoy diagnosing
          problems, fixing engines, and taking them out on the road just to feel the
          performance and freedom they bring. Working on cars keeps me sharp as a
          hands-on problem solver, almost like being a little mechanic on the side.
          <br /><br />
          Beyond cars, I also believe in giving back to my community. I volunteer my
          time helping the homeless through food drives, and I’ve joined cleanup
          projects like keeping the beach safe and clean for everyone. These
          experiences balance me out, reminding me that while tech builds the future,
          small acts of service keep us connected in the present.
        </p>
      </div>


    </div>
  </section>

  {/* Projects Section */ }
  <section id="projects" className="section projects">
    <h1 className="SectionTitle blue-title">Projects</h1>

    <div className="project-list">
      {/* CodeChat */}
      <div className="project-card">
        <div className="preview" style={{ backgroundImage: "url('./Images/CodeChat.jpg')" }}></div>
        <div className="content">
          <h3>CodeChat: Azure Hosted Blazor Chat App</h3>
          <p>
            A Blazor chat app with secure chatrooms and SignalR, hosted on Azure
            with real-time messaging features.
          </p>
          <div className="tags">
            <span>C#</span>
            <span>.NET 8</span>
            <span>Blazor</span>
            <span>Azure</span>
            <span>SignalR</span>
          </div>
          <a href="https://github.com/yourusername/codechat" target="_blank" rel="noopener noreferrer" className="project-link">
            See Project
          </a>
        </div>
      </div>

      {/* Student Grade Management */}
      <div className="project-card">
        <div className="preview" style={{ backgroundImage: "url('./Images/studentGrade.jpg')" }}></div>
        <div className="content">
          <h3>Student Grade Management System</h3>
          <p>
            A C# console app that allows users to input student grades, calculate GPA,
            find class averages, and rank top students.
          </p>
          <div className="tags">
            <span>C#</span>
            <span>.NET</span>
            <span>Console App</span>
          </div>
          <a href="https://github.com/yourusername/student-grade-management" target="_blank" rel="noopener noreferrer" className="project-link">
            See Project
          </a>
        </div>
      </div>

      {/* Library Management System */}
      <div className="project-card">
        <div className="preview" style={{ backgroundImage: "url('./Images/LibraryProj.jpg')" }}></div>
        <div className="content">
          <h3>Library Management System</h3>
          <p>
            A Java console app for managing books, check-ins, checkouts, and late fees.
            Includes CRUD operations and exception handling.
          </p>
          <div className="tags">
            <span>Java</span>
            <span>OOP</span>
            <span>Console App</span>
          </div>
          <a href="https://github.com/yourusername/library-management-system" target="_blank" rel="noopener noreferrer" className="project-link">
            See Project
          </a>
        </div>
      </div>

      {/* SideQuest */}
      <div className="project-card">
        <div className="preview" style={{ backgroundImage: "url('./Images/SideQuest.jpg')" }}></div>
        <div className="content">
          <h3>SideQuest: Task Marketplace App</h3>
          <p>
            Uber-style task marketplace app where users can post or accept gigs.
            <b> Coming soon...</b>
          </p>
          <div className="tags">
            <span>React</span>
            <span>.NET</span>
            <span>Azure</span>
          </div>
          <a href="#" className="project-link disabled">
            Coming Soon
          </a>
        </div>
      </div>
    </div>
  </section>


  {/* Contact Section */ }
  <section id="contact" className="section contact">
    <h1 className="SectionTitle">
      <span className="Accent">Contact</span> Me
    </h1>

    <div className="ContactGrid">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/david-awodi-sde"
        target="_blank"
        rel="noopener noreferrer"
        className="ContactCard"
      >
        <i className="fab fa-linkedin"></i>
        <p>LinkedIn</p>
      </a>

      {/* Email */}
      <a
        href="mailto:davidawodi@outlook.com"
        className="ContactCard"
      >
        <i className="fas fa-envelope"></i>
        <p>Email Me</p>
      </a>

      {/* Phone */}
      <div className="ContactCard">
        <i className="fas fa-phone"></i>
        <p>+1 (336) 254-5170</p>
      </div>
    </div>
  </section>

    </div >
  );
}

export default App;
