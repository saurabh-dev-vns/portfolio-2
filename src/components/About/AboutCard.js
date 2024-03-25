import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="red">Saurabh Sahani </span>
            from <span className="red"> UP, India.</span>
            <br />
            <br />
            I am currently pursuing my <span className="red">BTECH</span> in <span className="red">CSE</span> from KIT.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
