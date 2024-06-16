import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Image,
  Row,
  Placeholder,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { URL } from "../../url.js";
import IMAGES from "../assets/images.jsx";

const Talks = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      setLoader(true);
      try {
        const res = await axios.get(URL + "/stories");
        // console.log(res.data);
        // if(!res.ok){
        //   throw new Error("failed to fetch data");
        // }
        // const jsondata = await res.json()
        setData(res.data);
        setLoader(false);
      } catch (error) {
        console.error(error);
        setError("Error fetching data. Please try again later.");
        setLoader(true);
      }
    };
    fetchdata();
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
            {data.map((item) => (
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
  );
};

export default Talks;
