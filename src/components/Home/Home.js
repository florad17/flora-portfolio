import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import laptopIMG from "../../Assets/laptop.pn.png"
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";
import aiImg from "../../Assets/pink-artificial-intelligence-technology-circuit-file-free-png.webp";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Flora D.</strong>
              </h1>

              <p className="heading-description blockquote">
                I am very passionate about building and developing solutions across the board. Coding is my therapy. 
                I wear many hats, including but not limited to:
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={aiImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about" color="FAA0A0">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                <strong>Feel free to connect with me</strong>
              </p>
                I am open to anything, whether it is a collaboration or a chat!
                <br />
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
