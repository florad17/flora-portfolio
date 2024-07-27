import React from "react";
import Card from "react-bootstrap/Card";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Flora Dedvukaj </span>
            from <span className="purple"> New Jersey.</span>
            <br />
            A natural born problem solver.
            <br />
            I am a motivated Computer Science and Mathematics student with dreams to become a Software/AI Engineer.
            <br />
            Apart from coding, some other activities that I love to do include:
          </p>
          <ul>
            <li className="about-activity">
              Yoga
            </li>
            <li className="about-activity">
              Poetry
            </li>
            <li className="about-activity">
              Baking
            </li>
            <li className="about-activity">
              Watching Movies (Good Will Hunting is my favorite.)
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
