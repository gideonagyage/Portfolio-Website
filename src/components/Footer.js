import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="bg-white purple-text py-4 mt-2" variant="white">
      <Container>
        <Row>
          <Col md={6} className="text-center fw-bold text-md-start">
            <p>
              &copy; {new Date().getFullYear()} Gideon Agyage. All rights
              reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-end">
              <li className="ms-3">
                <a
                  href="https://github.com/gideonagyage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="purple-txt"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </li>
              <li className="ms-3">
                <a
                  href="https://www.linkedin.com/in/gideonagyage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="purple-txt"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </li>
              <li className="ms-3">
                <a
                  href="https://www.instagram.com/gideonagyage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="purple-txt"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
