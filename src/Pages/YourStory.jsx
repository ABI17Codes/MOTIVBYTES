import React, { useContext, useState } from "react";
import IMAGES from "../assets/images";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/YourStory.css";
import { UserContext } from "../Context/UserContext";
import axios from "axios";
import { URL } from "../../url";

function YourStory() {
  const [title, setTitle] = useState("");
  const [videolink, setVideolink] = useState("");
  const [description, setDescription] = useState("");

  const { user } = useContext(UserContext);
  // const user = true;
  const navigate = useNavigate();

  async function handleVideoUpload(e) {
    e.preventDefault();
    // e.stopPropagation();
    const formData = {
      title,
      videolink,
      description,
      username: user.username,
      userId: user.id
    };
    try {
      const res = await axios.post(URL + "/yourstory", formData, {
        withCredentials: true
      });
      // res.json(res.data)
      navigate("/stories",res.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {user ? (
        <div>
          <div className="becomeaspeakerbgimage text-center">
            <h2 className="text-center text-white pt-4">Become a Speaker</h2>
            <div className="d-flex justify-content-center align-items-center my-3">
              <h5>
                <Link className="texctdec fw-bold" to="/">
                  Home
                </Link>
              </h5>
              <Image width={"15px"} className="mx-3 pb-1" src={IMAGES.next} />
              <h5 className="fw-bold text-white">Become a Speaker</h5>
            </div>
            <p className="text-center text-white fw-bold py-md-3">
              Inventore veritatis et architecto beatae vitae dicta explicabo
              nemo ipsam voluptatem voluptas
            </p>
          </div>
          <Container>
            <Row className="justify-content-center my-5 ">
              <Col xs lg="6">
                <Form onSubmit={handleVideoUpload}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      Enter your name <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      placeholder="name..."
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>
                      Enter your video Youtube link{" "}
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="url"
                      placeholder="https://www.youtube.com/embed/HQRqmdadBio?si=wAmkcm_C1razCIYp"
                      value={videolink}
                      onChange={(e) => setVideolink(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>
                      Video Description <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Description..."
                      rows={10}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button
                    as="input"
                    type="submit"
                    value="Submit"
                    className="my-4 text-center w-50"
                    variant="success"
                  />
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="my-5">
            If you want Become a Speaker, Please Login First!
          </h3>
          <h5 className="my-5">
            <Link to="/login">Login</Link>
          </h5>
        </div>
      )}
    </>
  );
}

export default YourStory;
