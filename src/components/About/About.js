import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import codingGirlImg from "../../Assets/coding-girl.svg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h3 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="red">I'M</strong>
            </h3>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={codingGirlImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h3 className="project-heading">
          Experience
        </h3>

        <Techstack />

        <h3 className="project-heading">
          <strong className="red">Tools</strong> I use
        </h3>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
