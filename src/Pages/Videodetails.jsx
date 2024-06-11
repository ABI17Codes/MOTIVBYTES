import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";

const Videodetails = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center my-5">
          <Col xs lg="7">
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
            <hr class="bg-dark border-3 border-top border-dark" />
            <h5 className="fw-bold">Description</h5>
            <p>Veritatis architecto beatae dicta nemo enim ipsam volupta
            bibendum arcu vitaeVeritatis architecto beatae dicta nemo enim ipsam volupta
            bibendum arcu vitaeVeritatis architecto beatae dicta nemo enim ipsam volupta
            bibendum arcu vitaeVeritatis architecto beatae dicta nemo enim ipsam volupta
            bibendum arcu vitaeVeritatis architecto beatae dicta nemo enim ipsam volupta
            bibendum arcu vitaeVeritatis architecto beatae dicta nemo enim ipsam volupta
            bibendum arcu vitae</p>
            <hr class="bg-dark border-3 border-top border-dark" />

            <div>
              <h5 className="fw-bold">Comments : </h5>
              <Form.Control
                as="textarea"
                placeholder="Post your comments..."
                rows={3}
              />
              <Button className="my-4 text-center" variant="success">
                Submit
              </Button>
              <hr class="bg-dark border-3 border-top border-dark" />
              
              <hr class="bg-dark border-3 border-top border-dark" />
              <div className="d-flex gap-3">
                <Image
                  width={"45px"}
                  height={"45px"}
                  className="rounded-circle"
                  src="https://assetwp.droitlab.com/wp-content/uploads/2022/10/Img-7.jpg"
                />
                <div>
                  <p className="fw-bold">Abishek s</p>
                  <p>
                    Veritatis architecto beatae dicta nemo enim ipsam
                    voluptabibendum arcu vitae...
                  </p>
                </div>
              </div>
              <hr class="bg-dark border-3 border-top border-dark" />
              <div className="d-flex gap-3">
                <Image
                  width={"45px"}
                  height={"45px"}
                  className="rounded-circle"
                  src="https://assetwp.droitlab.com/wp-content/uploads/2022/10/Img-7.jpg"
                />
                <div>
                  <p className="fw-bold">Abishek s</p>
                  <p>
                    Veritatis architecto beatae dicta nemo enim ipsam
                    voluptabibendum arcu vitae...
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Videodetails;
