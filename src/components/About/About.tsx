import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Github from "./Github";
// import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import codingGirlImg from "../../Assets/coding-girl.svg";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", alignItems: "center" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h3 className="about-heading" >
              Know Who <strong className="red">I'M</strong>
            </h3>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            className="about-img"
          >
            <img src={codingGirlImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        {/* <h3 className="project-heading">
          Experience
        </h3>
        <div className="expe-ani">
          <Techstack />
        </div>

        <h3 className="project-heading">
          <strong className="red">Tools</strong> I use
        </h3>
        <Toolstack /> */}

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
