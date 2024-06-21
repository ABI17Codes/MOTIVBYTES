import { React, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
  Placeholder,
} from "react-bootstrap";
import { URL } from "../../url.js";
import axios from "axios";
import IMAGES from "../assets/images.jsx";
import { UserContext } from "../Context/UserContext.jsx";

const Videodetails = () => {
  const [data, setData] = useState({});
  const [comments, setComments] = useState([]);
  const [postComment, setPostComment] = useState("");
  const [loader, setLoader] = useState(false);
  const { user } = useContext(UserContext);
  const { id } = useParams();

  // Fetching the video details
  useEffect(() => {
    const fetchVideoDetails = async () => {
      setLoader(true);
      try {
        const res = await axios.get(`${URL}/stories/${id}`, { withCredentials: true });
        setData(res.data);
        // console.log(res.data);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching video details:", error);
        setLoader(false);
      }
    };
    fetchVideoDetails();
  }, [id]);


  // new comment post
  async function handlecreateComment(e) {
    e.preventDefault();
    if (!user) {
      console.error("User is not defined. Cannot post comment.");
      return;
    }
    const newComment = {
      comment: postComment,
      postId: id,
      username: user.username,
      userId: user.id,
    };
    // console.log(newComment);
    try {
      const res = await axios.post(
        `${URL}/comment/create`,
        newComment,
        { withCredentials: true }
      );
      // console.log(res.data);
      // setComments(res.data);
      setComments([...comments, res.data]);
      setPostComment("");
      // fetchComments();
      // window.location.reload(true)
    } catch (error) {
      console.error("Error posting comment:", error);
     
    }
  }


  // Fetching the comments
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`${URL}/comments/stories/${id}`, { withCredentials: true });
        setComments(res.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, [id]);


  // Convert video URL to embed URL
  const getEmbedUrl = (videolink) => {
    if (!videolink) {
      return "";
    }
    const videoId =
      videolink.split("v=")[1]?.split("&")[0] ||
      videolink.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };




  return (
    <div>
      <Container>
        <Row className="justify-content-center my-5">
          <Col xs lg="7">
            {loader ? (
              <>
                <div className="ratio ratio-16x9 rounded bg-secondary">
                  <Placeholder
                    as="div"
                    animation="glow"
                    className="w-100 h-100"
                  ></Placeholder>
                </div>
                <Placeholder as="h6" animation="glow" className="py-2 fw-bold">
                  <Placeholder xs={6} />
                </Placeholder>
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
                <hr className="bg-dark border-3 border-top border-dark" />
                <Placeholder as="h5" animation="glow" className="fw-bold">
                  <Placeholder xs={4} />
                </Placeholder>
                <Placeholder as="p" animation="glow">
                  <Placeholder xs={12} />
                  <Placeholder xs={10} />
                  <Placeholder xs={12} />
                  <Placeholder xs={8} />
                </Placeholder>
                <hr className="bg-dark border-3 border-top border-dark" />
                <Placeholder as="h5" animation="glow" className="fw-bold">
                  <Placeholder xs={4} />
                </Placeholder>
                <Form>
                  <Placeholder as={Form.Control} animation="glow" rows={2} />
                  <Placeholder.Button
                    variant="success"
                    xs={6}
                    className="my-4"
                  />
                </Form>
              </>
            ) : (
              <>
                <div className="ratio ratio-16x9 rounded">
                  <iframe
                    className="rounded"
                    src={getEmbedUrl(data.videolink)}
                    title="YouTube video"
                    allowFullScreen
                  ></iframe>
                </div>
                <h6 className="py-2 fw-bold">{data.title}</h6>
                <div className="d-flex justify-content-start align-items-start">
                  <Image
                    width={"25px"}
                    height={"25px"}
                    className="rounded-circle"
                    src={IMAGES.user}
                  />
                  <p className="fw-bold px-2">@{data.username}</p>
                </div>
                <hr className="bg-dark border-3 border-top border-dark" />
                <h5 className="fw-bold">Description</h5>
                <p>{data.description}</p>
                <hr className="bg-dark border-3 border-top border-dark" />
                <div>
                  <h5 className="fw-bold">Comments :</h5>
                  <Form onSubmit={handlecreateComment}>
                    <Form.Control
                      as="textarea"
                      placeholder="Post your comments..."
                      rows={2}
                      value={postComment}
                      onChange={(e) => setPostComment(e.target.value)}
                    />
                    <Button
                      as="input"
                      type="submit"
                      value="Submit"
                      className="my-4 text-center w-50"
                      variant="success"
                    />
                  </Form>
                  <hr className="bg-dark border-3 border-top border-dark" />
                  {comments.map((c) => (
                    <div key={c._id} className="d-flex gap-2">
                      <Image
                        width={"35px"}
                        height={"35px"}
                        className="rounded-circle"
                        src={IMAGES.user}
                      />
                      <div>
                        <p className="fw-bold my-1">{c.username}</p>
                        <p>{c.comment}</p>
                      </div>
                      <hr className="bg-dark border-3 border-top border-dark" />
                    </div>
                  ))}
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Videodetails;
