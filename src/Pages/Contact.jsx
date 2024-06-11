import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import IMAGES from "../assets/images";
import "../Styles/Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="aboutbgimage text-center">
        <h2 className="text-center text-white pt-4 fw-bold">Contact Us</h2>
        <div className="d-flex justify-content-center align-items-center my-3">
          <h5>
            <Link className="texctdec fw-bold" to="/">
              Home
            </Link>
          </h5>
          <Image width={"15px"} className="mx-3 pb-1" src={IMAGES.next} />
          <h5 className="fw-bold text-white">Contact</h5>
        </div>
        <p className="text-center text-white fw-bold py-3">
          Inventore veritatis et architecto beatae vitae dicta explicabo nemo
          ipsam voluptatem voluptas
        </p>
      </div>

      <Container className="pt-2 pb-5">
        <h3 className="my-4">Get in Touch with us</h3>
        <Row xs={1} md={2} lg={2}>
          <Col>
            <Image
              width={"100%"}
              className="rounded mb-5"
              src={IMAGES.speaker}
            />
          </Col>
          <Col className="border border-success rounded p-3">
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>
                Name <span className="text-danger">*</span>{" "}
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>
                Email address <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                Message <span className="text-danger">*</span>{" "}
              </Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
            <Button className="my-4 text-center w-50" variant="success">
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
