import React from "react";
import Section from "./Section.jsx";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header>
        <h1>Shrishti Chaurasia</h1>
        <h2>MERN Stack Developer</h2>
        <p>
          📞 +91-8791356308 | ✉️ shrishtichaurasia637@gmail.com
          <br />
          <a href="https://www.linkedin.com/in/shrishti-chaurasia-1ab1a6270/">
            LinkedIn
          </a>{" "}
          |<a href="https://github.com/ShrishtiChaurasia"> GitHub</a>
        </p>
      </header>

      <Section title="Education">
        <p>
          <strong>Rajiv Academy For Technology and Management</strong> - BCA in
          Computer Science, Mathura, Uttar Pradesh
        </p>
        <p>
          <strong>Sri Anardevi Khandelwal Mahila Polytechnic</strong> - Diploma
          in Electrical and Electronics Engineering
        </p>
      </Section>

      <Section title="Experience">
        <p>
          <strong>ViaFye</strong> - Web Developer Intern (Jun 2024 – Jul 2024)
        </p>
        <ul>
          <li>Developed a web app using REST API and MongoDB.</li>
          <li>Fixed bugs, added features, and built a REST API.</li>
        </ul>
      </Section>

      <Section title="Projects">
        <p>
          <strong>CelestiaWander</strong> - A vacation rental platform with
          secure user authentication.
        </p>
        <p>
          <strong>Simon Says Game</strong> - A game project using HTML, CSS,
          JavaScript with pattern and score tracking.
        </p>
        <p>
          <strong>GitHub-User-Search-App</strong> - React app with responsive
          design and real-time GitHub user data.
        </p>
      </Section>

      <Section title="Technical Skills">
        <p>
          Technologies: HTML5, CSS3, JavaScript, MongoDB, Express, React, Redux
          Toolkit, Node.js, C++, Tailwind CSS, Bootstrap, Framer Motion, GSAP,
          MySQL
        </p>
        <p>Tools: VS Code, Git, GitHub, Postman</p>
      </Section>

      <Section title="Achievements">
        <ul>
          <li>
            Solved 300+ problems across LeetCode, CodeStudio, and GeeksforGeeks.
          </li>
          <li>Highest rating of 750,229 on LeetCode.</li>
        </ul>
      </Section>

      <Section title="Certifications">
        <p>Web Development Certificate - Apna College</p>
      </Section>
    </div>
  );
};

export default Resume;
