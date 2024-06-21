import React, { useEffect, useState } from "react";
import { Col, Container, Image, Placeholder, Row } from "react-bootstrap";
import Talks from "../Components/Talks";
import Speakers from "../Components/Speakers";
import IMAGES from "../assets/images.jsx";
import Reviews from "../Components/Reviews.jsx";
import Newsletter from "../Components/Newsletter.jsx";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import ReactPlayer from "react-player";
import { URL } from "../../url.js";
import axios from "axios";

const Home = () => {

  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchHomeVideos = async () => {
      try {
        const response = await axios.get(`${URL}`);
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching home videos:', error);
      }
    };

    fetchHomeVideos();
  }, []);

  
  // change the url format to embed link for youtbue video shown
  const getEmbedUrl = (videolink) => {
    const videoId =
      videolink.split("v=")[1]?.split("&")[0] ||
      videolink.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  // loading animation
  const PlaceholderCard = () => (
    <Col>
      <div>
        <div className="ratio ratio-16x9 rounded bg-secondary">
          <Placeholder as="div" animation="glow" className="w-100 h-100"></Placeholder>
        </div>
        <h6 className="pt-2 fw-bold">
          <Placeholder as="p" animation="glow">
            <Placeholder xs={8} />
          </Placeholder>
        </h6>
        <div className="d-flex justify-content-start align-items-start">
          <Placeholder as="div" animation="glow">
            <Placeholder
              className="rounded-circle"
              style={{ width: "25px", height: "25px" }}
            />
          </Placeholder>
          <Placeholder as="p" animation="glow" className="fw-bold px-2">
            <Placeholder xs={4} />
          </Placeholder>
        </div>
      </div>
    </Col>
  );

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
          <>
      {loader ? (
        <Container className="my-3">
          <Row xs={1} md={2} lg={3} className="g-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <PlaceholderCard key={index} />
            ))}
          </Row>
        </Container>
      ) : (
        <Container className="my-3">
          <Row xs={1} md={2} lg={3} className="g-3">
            {videos.map((item) => (
              <Col key={item._id}>
                <div>
                  <div className="ratio ratio-16x9 rounded">
                    <iframe
                      className="rounded"
                      src={getEmbedUrl(item.videolink)}
                      title="YouTube video"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h6 className="pt-2 fw-bold">
                    <Link
                      className="texctdec text-dark"
                      to={`/stories/${item._id}`}
                    >
                      {item.title}
                    </Link>
                  </h6>
                  <div className="d-flex justify-content-start align-items-start">
                    <Image
                      width={"25px"}
                      height={"25px"}
                      className="rounded-circle"
                      src={IMAGES.user}
                    />
                    <p className="fw-bold px-2">@{item.username}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
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
