import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCard({
  imgSrc,
  title,
  description,
  techStack,
  gitLink,
  liveLink,
}) {
  return (
    <Card className="shadow rounded-4 selection">
      <Card.Body className="card-bg rounded-4">
        <Card.Img
          variant="top"
          src={imgSrc}
          alt={title}
          height={200}
          className="rounded-4 object-fit-cover"
        />
        <Card.Title className="text-white text-start my-2 fs-5 fw-bold truncate">
          {title}
        </Card.Title>
        <Card.Text className="text-white text-start my-2 fs-6 truncate-2">
          {description}
        </Card.Text>
        <div className="d-flex flex-wrap align-items-center justify-content-center my-4">
          {techStack.map((techImgSrc, index) => (
            <span className="me-2" key={index}>
              <Card.Img src={techImgSrc} alt="icon" height={25} width="auto" />
            </span>
          ))}
        </div>
        <div className="d-flex justify-content-between mt-4">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <button
              className="white-btn me-3 fw-medium"
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </button>
          </a>
          <a href={gitLink} target="_blank" rel="noopener noreferrer">
            <button className="purple-btn ms-3 fw-medium">GitHub</button>
          </a>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
