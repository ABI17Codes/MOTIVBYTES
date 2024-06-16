import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Talks from "../Components/Talks";
import Speakers from "../Components/Speakers";
import IMAGES from "../assets/images.jsx";
import Reviews from "../Components/Reviews.jsx";
import Newsletter from "../Components/Newsletter.jsx";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import ReactPlayer from "react-player";

const Home = () => {
  return (
    <>
      <Container fluid className="text-center m-0 p-0">
        <ReactPlayer
          url={IMAGES.banner}
          playing={true}
          loop={true}
          controls={false}
          width="640"
          height="360"
        />
      </Container>

      <Container>
        <section>
          <h5 className="mt-3 fw-bold bg-success d-inline-block rounded-pill p-md-3 p-2 text-light">
            Trending Talks
          </h5>
          {/* few video shown in the home page */}
          <Talks />
          {/* navigate to stories */}
          <section>
            <div className="text-center my-5 ">
              <p>
                <Link
                  className="texctdec fw-bold border rounded-pill p-3"
                  to="/stories"
                >
                  View More Videos...
                </Link>
              </p>
            </div>
          </section>
        </section>
      </Container>

      <section>
        <div style={{ backgroundColor: "#fff9e6" }}>
          <Container>
            <Row xs={1} md={2} lg={3} className="text-center py-5">
              <Col className=" bg-white rounded p-5">
                <Image width={"52px"} src={IMAGES.motivation} />
                <h4 className="fw-bold py-3">Motivation to Grow</h4>
                <p>
                  Veritatis architecto beatae dicta nemo enim ipsam volupta
                  bibendum arcu vitae.
                </p>
              </Col>
              <Col className=" bg-white rounded p-5">
                <Image width={"52px"} src={IMAGES.leadership} />
                <h4 className="fw-bold py-3">Leadership Skills</h4>
                <p>
                  Veritatis architecto beatae dicta nemo enim ipsam volupta
                  bibendum arcu vitae
                </p>
              </Col>
              <Col className=" bg-white rounded p-5">
                <Image width={"52px"} src={IMAGES.SelfAwareness} />
                <h4 className="fw-bold py-3">Self Awareness</h4>
                <p>
                  Veritatis architecto beatae dicta nemo enim ipsam volupta
                  bibendum arcu vitae
                </p>
              </Col>
              <Col className=" bg-white rounded p-5">
                <Image width={"52px"} src={IMAGES.SelfDevelopment} />
                <h4 className="fw-bold py-3">Self Development</h4>
                <p>
                  Veritatis architecto beatae dicta nemo enim ipsam volupta
                  bibendum arcu vitae
                </p>
              </Col>
              <Col className=" bg-white rounded p-5">
                <Image width={"52px"} src={IMAGES.ManageTime} />
                <h4 className="fw-bold py-3">Manage Time Scene</h4>
                <p>
                  Veritatis architecto beatae dicta nemo enim ipsam volupta
                  bibendum arcu vitae
                </p>
              </Col>
              <Col className="bg-white rounded p-5">
                <Image width={"52px"} src={IMAGES.improvement} />
                <h4 className="fw-bold py-3">Improve Life Skills</h4>
                <p>
                  Veritatis architecto beatae dicta nemo enim ipsam volupta
                  bibendum arcu vitae
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Meet with our speakers */}
      <Speakers />

      {/* Reviews */}
      <Reviews />

      {/* Subscribe our newsletter */}
      <Newsletter />
    </>
  );
};

export default Home;
