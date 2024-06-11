import React from "react";
import "../Styles/About.css";
import Speakers from "../Components/Speakers";
import { Col, Container, Image, Row } from "react-bootstrap";
import IMAGES from "../assets/images";
import { Link } from "react-router-dom";
import Ourteam from "../Components/Ourteam";

const About = () => {
  return (
    <div>
      <div className="aboutbgimage text-center">
        <h2 className="text-center text-white pt-4 fw-bold">About Us</h2>
        <div className="d-flex justify-content-center align-items-center my-3">
          <h5>
            <Link className="texctdec fw-bold" to="/">
              Home
            </Link>
          </h5>
          <Image  width={"15px"} className="mx-3 pb-1" src={IMAGES.next} />
          <h5 className="fw-bold text-white">About</h5>
        </div>
        <p className="text-center text-white fw-bold py-3">
            Inventore veritatis et architecto beatae vitae dicta explicabo nemo
            ipsam voluptatem voluptas
          </p>
      </div>

      <section>
        <Container>
          <div className="text-center pt-5 fw-bold">
          <h4>Here's a Great Place to Start</h4>
          <p>Combines industry knowledge, decades. Duis aute irure dolor in reprehender.it in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur.</p>
          </div>
          <Row xs={1} md={2} lg={2} className="text-center pb-5">
            <Col className=" bg-white rounded p-5">
              <Image width={"52px"} src={IMAGES.vision} />
              <h4 className="fw-bold py-3">Our vision</h4>
              <p>
                Veritatis architecto beatae dicta nemo enim ipsam volupta
                bibendum arcu vitae.Veritatis architecto beatae dicta nemo enim
                ipsam volupta bibendum arcu vitae.
              </p>
            </Col>
            <Col className=" bg-white rounded p-5">
              <Image width={"52px"} src={IMAGES.mission} />
              <h4 className="fw-bold py-3">Our Mission</h4>
              <p>
                Veritatis architecto beatae dicta nemo enim ipsam volupta
                bibendum arcu vitae.Veritatis architecto beatae dicta nemo enim
                ipsam volupta bibendum arcu vitae.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SERVICES */}

      <section></section>
      {/* Meet our team */}
      <Ourteam />
    </div>
  );
};

export default About;
