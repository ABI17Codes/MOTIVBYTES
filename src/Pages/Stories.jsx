import React from "react";
import { Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";
import IMAGES from "../assets/images";
import Talks from "../Components/Talks";

const Stories = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col xs lg="4">
            <InputGroup className="my-3">
              <Form.Control
                type="search"
                placeholder="Search here..."
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
              />
              <Image
                width={"40px"}
                className="border rounded-end p-2 bg-secondary"
                src={IMAGES.search}
              />
            </InputGroup>
          </Col>
        </Row>
        <Talks />
        {/* <Talks /> */}
      </Container>
    </div>
  );
};

export default Stories;
