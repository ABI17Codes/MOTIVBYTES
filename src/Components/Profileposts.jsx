import React, { useContext, useEffect, useState } from "react";
import IMAGES from "../assets/images";
import { UserContext } from "../Context/UserContext";
import { Link, useParams } from "react-router-dom";
import { Button, Col, Container, Image, Row, Placeholder } from "react-bootstrap";
import axios from "axios";
import { URL } from "../../url.js";

const Profileposts = ({ userId }) => {
  const { setUser } = useContext(UserContext);
  // const [name, setName] = useState("");
  const [loader, setLoader] = useState(false);
  const [video, setVideo] = useState("");
  const { id } = useParams();

  // fetch profile post
  useEffect(() => {
    const fetchuserpost = async () => {
      setLoader(true);
        try {
            const res = await axios.get(`${URL}/profile/${id}/posts`);
            // console.log(res.data); 
            setVideo(res.data);
            setLoader(false);
          } catch (error) {
            setLoader(false);
            console.error('Error fetching user posts:', error);
          }
    };

    fetchuserpost();
  }, [userId]);

  // change the url format to embed link for youtbue video shown
  const getEmbedUrl = (videolink) => {
    const videoId =
      videolink.split("v=")[1]?.split("&")[0] ||
      videolink.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const PlaceholderCard = () => (
    <Col>
      <div>
        <div className="ratio ratio-16x9 rounded bg-secondary">
          <Placeholder
            as="div"
            animation="glow"
            className="w-100 h-100"
          ></Placeholder>
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
      { loader ? (
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
          {Array.isArray(video) && video.length > 0 ? (
         video.map((video) => (
          <Col key={video._id}> {/* Assuming _id is the correct unique identifier */}
            <div>
              <div className="ratio ratio-16x9 rounded">
                <iframe
                  className="rounded"
                  src={getEmbedUrl(video.videolink)} // Update this function as per your implementation
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
              <h6 className="pt-2 fw-bold">
                <Link
                  className="text-decoration-none text-dark"
                  to={`/stories/${video._id}`} // Ensure this is the correct path
                >
                  {video.title}
                </Link>
              </h6>
              <div className="d-flex justify-content-start align-items-start">
                <Image
                  width={"25px"}
                  height={"25px"}
                  className="rounded-circle"
                  src={IMAGES.user}
                />
                <p className="fw-bold px-2">@{video.username}</p>
              </div>
            </div>
          </Col>
        ))
      ) : (
        <p>No videos available</p>
      )}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Profileposts;
