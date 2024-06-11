import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
// import { LuHeadphones } from "react-icons/lu";
// import { GoHeart } from "react-icons/go";
// import { FaRegCommentDots } from "react-icons/fa6";
// import { CgProfile } from "react-icons/cg";
// import Banner from "../assets/banner.png";
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
            <h5 className="py-2">
              17 ఏళ్లకే అప్పుల్లో మునిగిపోయా ! | CLEARED DEBTS | BUSINESS |
              AVINASH MADA
            </h5>
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
            <h5 className="py-2">Money சேமிப்பு டிரிக்ஸ், must watch | Mohan Kumar</h5>
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
            
            <h5 className="py-2">Money சேமிப்பு டிரிக்ஸ், must watch | Mohan Kumar</h5>
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
            <h5 className="py-2">
              17 ఏళ్లకే అప్పుల్లో మునిగిపోయా ! | CLEARED DEBTS | BUSINESS |
              AVINASH MADA
            </h5>
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
            <h5 className="py-2">
              17 ఏళ్లకే అప్పుల్లో మునిగిపోయా ! | CLEARED DEBTS | BUSINESS |
              AVINASH MADA
            </h5>
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
            
            <h5 className="py-2">Money சேமிப்பு டிரிக்ஸ், must watch | Mohan Kumar</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Talks;
