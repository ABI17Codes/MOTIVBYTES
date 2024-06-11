import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Talks = () => {
  return (
    <div>
      <Container className="my-3">
        <Row xs={1} md={2} lg={3} className="g-3">
          <Col>
            <div className="ratio ratio-16x9 rounded">
              <iframe
                className="rounded"
                src="https://www.youtube.com/embed/HQRqmdadBio?si=wAmkcm_C1razCIYp"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <h5 className="py-2 fw-bold">
              <Link className="texctdec" to="/stories/videodetails">
                17 ఏళ్లకే అప్పుల్లో మునిగిపోయా !|CLEARED DEBTS | BUSINESS |
                AVINASH MADA
              </Link>
            </h5>
            <div className="d-flex">
              <Image
                width={"35px"}
                height={"35px"}
                className="rounded-circle"
                src="https://assetwp.droitlab.com/wp-content/uploads/2022/10/Img-7.jpg"
              />
              <p className="fw-bold p-1">Abishek s</p>
            </div>
          </Col>
          <Col>
            <div className="ratio ratio-16x9 rounded">
              <iframe
                className="rounded"
                src="https://www.youtube.com/embed/cEg4q9yqaJQ?si=nA31E0NX0Y_zcnur"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <h5 className="py-2 fw-bold">
              Money சேமிப்பு டிரிக்ஸ், must watch | Mohan Kumar
            </h5>
            <div className="d-flex">
              <Image
                width={"35px"}
                height={"35px"}
                className="rounded-circle"
                src="https://assetwp.droitlab.com/wp-content/uploads/2022/10/Img-7.jpg"
              />
              <p className="fw-bold p-1">Abishek s</p>
            </div>
          </Col>
          <Col>
            <div className="ratio ratio-16x9 rounded">
              <iframe
                className="rounded"
                src="https://www.youtube.com/embed/cEg4q9yqaJQ?si=nA31E0NX0Y_zcnur"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>

            <h5 className="py-2 fw-bold">
              Money சேமிப்பு டிரிக்ஸ், must watch | Mohan Kumar
            </h5>
            <div className="d-flex">
              <Image
                width={"35px"}
                height={"35px"}
                className="rounded-circle"
                src="https://assetwp.droitlab.com/wp-content/uploads/2022/10/Img-7.jpg"
              />
              <p className="fw-bold p-1">Abishek s</p>
            </div>
          </Col>
          <Col>
            <div className="ratio ratio-16x9 rounded">
              <iframe
                className="rounded"
                src="https://www.youtube.com/embed/HQRqmdadBio?si=wAmkcm_C1razCIYp"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <h5 className="py-2 fw-bold">
              17 ఏళ్లకే అప్పుల్లో మునిగిపోయా ! | CLEARED DEBTS | BUSINESS |
              AVINASH MADA
            </h5>
            <div className="d-flex">
              <Image
                width={"35px"}
                height={"35px"}
                className="rounded-circle"
                src="https://assetwp.droitlab.com/wp-content/uploads/2022/10/Img-7.jpg"
              />
              <p className="fw-bold p-1">Abishek s</p>
            </div>
          </Col>
          <Col>
            <div className="ratio ratio-16x9 rounded">
              <iframe
                className="rounded"
                src="https://www.youtube.com/embed/HQRqmdadBio?si=wAmkcm_C1razCIYp"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
            <h5 className="py-2 fw-bold">
              17 ఏళ్లకే అప్పుల్లో మునిగిపోయా ! | CLEARED DEBTS | BUSINESS |
              AVINASH MADA
            </h5>
            <div className="d-flex">
              <Image
                width={"35px"}
                height={"35px"}
                className="rounded-circle"
                src="https://assetwp.droitlab.com/wp-content/uploads/2022/10/Img-7.jpg"
              />
              <p className="fw-bold p-1">Abishek s</p>
            </div>
          </Col>
          <Col>
            <div className="ratio ratio-16x9 rounded">
              <iframe
                className="rounded"
                src="https://www.youtube.com/embed/cEg4q9yqaJQ?si=nA31E0NX0Y_zcnur"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>

            <h5 className="py-2 fw-bold">
              Money சேமிப்பு டிரிக்ஸ், must watch | Mohan Kumar
            </h5>
            <div className="d-flex">
              <Image
                width={"35px"}
                height={"35px"}
                className="rounded-circle"
                src="https://assetwp.droitlab.com/wp-content/uploads/2022/10/Img-7.jpg"
              />
              <p className="fw-bold p-1">Abishek s</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Talks;
