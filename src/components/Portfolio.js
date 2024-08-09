import React from "react";
import ProjectCard from "./ProjectCard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";

function Portfolio() {
  const projects = [
    {
      imgSrc: "./../assets/img/projects/project-1.png",
      title: "Age Calculator",
      description:
        "A simple yet functional age calculator using React JS. Aim of this project was to focus on mastering state management and event handling.",
      techStack: [
        "./../assets/logos/react-logo.svg",
        "./../assets/logos/bootstrap-logo.svg",
        "./../assets/logos/github-logo.svg",
        "./../assets/logos/css-logo.svg",
        "./../assets/logos/vs-code-logo.svg",
      ],
      gitLink: "https://github.com/gideonagyage/age-calculator",
      liveLink: "https://age-calculator-pi-green-34.vercel.app/",
    },
    {
      imgSrc: "./../assets/img/projects/project-2.png",
      title: "Dynamic Form",
      description:
        "A dynamic form using React JS, focusing on handling user input, validation, and state management.",
      techStack: [
        "./../assets/logos/react-logo.svg",
        "./../assets/logos/bootstrap-logo.svg",
        "./../assets/logos/github-logo.svg",
        "./../assets/logos/css-logo.svg",
        "./../assets/logos/vs-code-logo.svg",
      ],
      gitLink: "https://github.com/gideonagyage/Dynamic-Form",
      liveLink: "https://dynamic-form-topaz.vercel.app/",
    },
    {
      imgSrc: "./../assets/img/projects/project-3.jpeg",
      title: "Medium Landing Page",
      description:
        "Replica of the Medium landing page, built using React. Showcases the use of components, styling, and responsive design principles.",
      techStack: [
        "./../assets/logos/react-logo.svg",
        "./../assets/logos/bootstrap-logo.svg",
        "./../assets/logos/github-logo.svg",
        "./../assets/logos/css-logo.svg",
        "./../assets/logos/vs-code-logo.svg",
      ],
      gitLink: "https://github.com/gideonagyage/Medium-Landing-Page",
      liveLink: "https://medium-landing-page-six.vercel.app/",
    },
    {
      imgSrc: "./../assets/img/projects/project-4.jpeg",
      title: "Quote Generator",
      description:
        "A simple quote generator built using React, demonstrating how to fetch data from an API (API Ninjas).",
      techStack: [
        "./../assets/logos/react-logo.svg",
        "./../assets/logos/bootstrap-logo.svg",
        "./../assets/logos/github-logo.svg",
        "./../assets/logos/css-logo.svg",
        "./../assets/logos/vs-code-logo.svg",
        "./../assets/logos/fa-logo.svg",
      ],
      gitLink: "https://github.com/gideonagyage/Quote-Generator",
      liveLink: "https://quote-generator-three-peach.vercel.app/",
    },
    {
      imgSrc: "./../assets/img/projects/project-5.jpeg",
      title: "Spotify Landing Page",
      description:
        "Recreation of the Spotify landing page, by applying CSS styles, and implementing responsive design principles.",
      techStack: [
        "./../assets/logos/react-logo.svg",
        "./../assets/logos/bootstrap-logo.svg",
        "./../assets/logos/github-logo.svg",
        "./../assets/logos/css-logo.svg",
        "./../assets/logos/vs-code-logo.svg",
        "./../assets/logos/fa-logo.svg",
      ],
      gitLink: "https://github.com/gideonagyage/Spotify-Landing-Page",
      liveLink: "https://spotify-landing-page-gold.vercel.app/",
    },
    {
      imgSrc: "./../assets/img/projects/project-6.jpeg",
      title: "Weather App",
      description:
        "A user-friendly weather app built using React, which demonstrates the integration of a weather API.",
      techStack: [
        "./../assets/logos/react-logo.svg",
        "./../assets/logos/bootstrap-logo.svg",
        "./../assets/logos/github-logo.svg",
        "./../assets/logos/css-logo.svg",
        "./../assets/logos/vs-code-logo.svg",
        "./../assets/logos/fa-logo.svg",
      ],
      gitLink: "https://github.com/gideonagyage/Weather-App",
      liveLink: "https://weather-app-seven-murex-31.vercel.app/",
    },
    {
      imgSrc: "./../assets/img/projects/project-7.jpeg",
      title: "To-Do List App",
      description:
        "A simple yet functional to-do list app that allows users to add, complete, edit, and delete tasks.",
      techStack: [
        "./../assets/logos/react-logo.svg",
        "./../assets/logos/bootstrap-logo.svg",
        "./../assets/logos/github-logo.svg",
        "./../assets/logos/css-logo.svg",
        "./../assets/logos/vs-code-logo.svg",
        "./../assets/logos/fa-logo.svg",
      ],
      gitLink: "https://github.com/gideonagyage/To-Do-List-App",
      liveLink: "https://to-do-list-app-coral-pi.vercel.app/",
    },
    {
      imgSrc: "./../assets/img/projects/project-8.jpeg",
      title: "Stopwatch App",
      description:
        "A stopwatch application with with buttons for start, stop, and reset. Very functional and user-friendly.",
      techStack: [
        "./../assets/logos/react-logo.svg",
        "./../assets/logos/bootstrap-logo.svg",
        "./../assets/logos/github-logo.svg",
        "./../assets/logos/css-logo.svg",
        "./../assets/logos/vs-code-logo.svg",
      ],
      gitLink: "https://github.com/gideonagyage/Stopwatch-App",
      liveLink: "https://stopwatch-app-phi.vercel.app/",
    },
    {
      imgSrc: "./../assets/img/projects/project-9.jpeg",
      title: "Photo Gallery",
      description:
        "A Gallery of Photos using an external API (Unspalsh), with popular key words and a search functionality.",
      techStack: [
        "./../assets/logos/react-logo.svg",
        "./../assets/logos/bootstrap-logo.svg",
        "./../assets/logos/github-logo.svg",
        "./../assets/logos/css-logo.svg",
        "./../assets/logos/vs-code-logo.svg",
        "./../assets/logos/fa-logo.svg",
      ],
      gitLink: "https://github.com/gideonagyage/Photo-Gallery",
      liveLink: "https://photo-gallery-navy-five.vercel.app/",
    },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
      <div className="d-flex justify-content-center align-items-center">
        <div className="card shadow rounded-4 text-center main-scrollable">
          <Navbar />
          <Container className="py-4">
            {/* Legend/ Introduction */}
            <Row className="justify-content-center align-items-center mb-4">
              <Col xs={12} sm={12} md={6} lg={5} className="text-center">
                <h1 className="display-5 fw-bold">
                  Hi, I'm <span className="purple-text">Gideon</span>
                </h1>
                <h4 className="fw-bold">Web Developer & Graphic Designer</h4>
                <h5 className="fw-normal mt-4">
                  A passionate web developer and graphic designer based in
                  <span className="purple-text"> Accra, Ghana.</span>
                </h5>
              </Col>
              <Col xs={12} sm={12} md={6} lg={7} className="text-center">
                <img
                  src="./../assets/img/gideon-profile.png"
                  alt="Gideon Agyage"
                  style={{maxWidth: "100%" }}
                />
              </Col>
            </Row>
            {/* About Me Section */}
            <Row
              id="about-me"
              className="rounded-4 shadow py-4 px-2 border-1 justify-content-center align-items-center mt-5"
            >
              <br /> <br />
              <Col md={5} className="text-center">
                <h4 className="display-6 fw-bold underline-text">About Me</h4>
              </Col>
              <Col md={7} className="text-start my-3">
                <p className="fw-medium fs-6">
                  With a strong background in front-end development, I
                  specialize in creating visually appealing and user-friendly
                  websites using technologies like React and Bootstrap. I thrive
                  on solving complex problems and continuously improving my
                  debugging skills. My goal is to build innovative and efficient
                  web solutions that provide a seamless user experience. When
                  I’m not coding, I enjoy exploring new web development tools
                  and staying updated with the latest industry trends.
                </p>
              </Col>
            </Row>
            {/* Projects Section */}
            <br id="projects" /> <br /> <br />
            <Row className="justify-content-center mt-4">
              <h4 className="display-6 fw-bold underline-text mb-5">
                Projects
              </h4>
              {projects.map((project, index) => (
                <Col md={4} key={index} className="mb-4">
                  <ProjectCard
                    className="card-bg"
                    imgSrc={project.imgSrc}
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    gitLink={project.gitLink}
                    liveLink={project.liveLink}
                  />
                </Col>
              ))}
            </Row>
            {/* Skills Section */}
            <Row
              id="skills"
              className="py-4 px-2 justify-content-center align-items-center mt-5"
            >
              <br /> <br />
              <br /> <br />
              <br /> <br />
              <Col md={5} className="text-center">
                <h4 className="display-6 fw-bold underline-text">Skills</h4>
              </Col>
              <Col
                md={7}
                className="d-flex flex-wrap align-items-center justify-content-center gap-2"
              >
                <span className="purple-pill fw-bold fs-6">
                  Time Management
                </span>
                <span className="purple-pill fw-bold fs-6">Creativity</span>
                <span className="purple-pill fw-bold fs-6">ReactJS</span>
                <span className="purple-pill fw-bold fs-6">
                  Attention to detail
                </span>
                <span className="purple-pill fw-bold fs-6">Bootstrap</span>
                <span className="purple-pill fw-bold fs-6">HTML</span>
                <span className="purple-pill fw-bold fs-6">Adaptability</span>
                <span className="purple-pill fw-bold fs-6">Git/GitHub</span>
                <span className="purple-pill fw-bold fs-6">CSS</span>
                <span className="purple-pill fw-bold fs-6">Communication</span>
                <span className="purple-pill fw-bold fs-6">JavaScript</span>
                <span className="purple-pill fw-bold fs-6">
                  Visual Studio Code
                </span>
              </Col>
            </Row>
            {/* Reflections/Experiences Section */}
            <Row
              id="reflections"
              className="rounded-4 shadow py-4 px-2 border-1 justify-content-center align-items-center mt-5"
            >
              <br /> <br />
              <Col md={5} className="text-center">
                <h4 className="display-6 fw-bold underline-text">
                  Reflections
                </h4>
              </Col>
              <Col md={7} className="text-start my-3">
                <ul className="fw-medium fs-6">
                  <li className=" fw-bold my-1 fs-6">
                    Developed a comprehensive understanding of API integration.
                  </li>
                  <li className=" fw-bold my-1 fs-6">
                    Acquired valuable insights into the implementation of CSS
                    styles.
                  </li>
                  <li className=" fw-bold my-1 fs-6">
                    Mastered the effective use of React Hooks.
                  </li>
                  <li className=" fw-bold my-1 fs-6">
                    Enhanced skills in validation and error handling.
                  </li>
                  <li className=" fw-bold my-1 fs-6">
                    Cultivated a strong appreciation for user experience design.
                  </li>
                  <li className=" fw-bold my-1 fs-6">
                    Improved problem-solving capabilities.
                  </li>
                </ul>
              </Col>
            </Row>
            {/* Contact Me Section */}
            <div id="contact" className="py-4 px-2 mt-4">
              <br /> <br />
              <div className=" gap-2">
                <h4 className="display-6 fw-bold underline-text">Contact Me</h4>
                <div>
                  <div className=" fw-medium fs-5 my-3">
                    Send an email, let's get in touch
                  </div>
                  <a
                    href="mailto:gideonagyage@gmail.com"
                    className="contact-btn fw-bolder text-decoration-none fs-5"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </Container>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
