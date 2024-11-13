import { Container, Col } from "react-bootstrap";
import NoProjectImg from "../../assets/no-project.svg"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h3 className="project-heading">
          My Recent <strong className="red">Works </strong>
        </h3>
        <p >
          New Projects are coming soon.
        </p>
        <Col
          md={5}
          className="project-img"
        >
          <img src={NoProjectImg} alt="No Project" className="img-fluid" />
        </Col>
      </Container>
    </Container>
  );
}

export default Projects;
