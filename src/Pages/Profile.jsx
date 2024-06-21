import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import IMAGES from "../assets/images";
import { URL } from "../../url.js";
import Profileposts from "../Components/Profileposts.jsx";

function Profile() {
  const { setUser } = useContext(UserContext); 
  const [name, setName] = useState(""); 
  const [count, setCount] = useState(0)
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = useParams(); 

  //fetch username
  useEffect(() => {
    const fetchUsername = async () => {
      try {
        if (id) {
          const res = await axios.get(`${URL}/profile/${id}`); 
          setName(res.data.username);
          // console.log(res); 
        }
      } catch (error) {
        console.error("Error fetching name:", error); // Log error if fetch fails
      }
    };

    fetchUsername(); 
  }, [id]); 

// posts count
useEffect(() => {
const postCount = async () => {
  try {
  
    const res = await axios.get(`${URL}/profile/${id}/videoCount`); 
    // console.log(res.data);
    setCount(res.data.count);
  } catch (error) {
    console.error(error);
  }
};

  postCount();
}, [id])



  // logout fuction
  async function handleLogout() {
    try {
      const res = await axios.get(`${URL}/logout`, { withCredentials: true });
      setUser(false);
      navigate("/");
      console.log("logoutted");
    } catch (error) {
      console.error(error);
    }
  }

  return (
<>
{user ?     <>
      <Container>
        <Row className="text-center my-3 ">
          <Col className="d-flex align-items-center justify-content-center gap-5 my-3">
            <div>
              <Image
                width={"50px"}
                height={"50px"}
                className="rounded-circle"
                src={IMAGES.user}
              />
              <h5 className="fw-bold pt-2">{name}</h5>
            </div> 
            <div>
              <h5 className="fw-bold">Posts</h5>
              <h5 className="fw-bold">{count}</h5>
            </div>
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          </Col>
        </Row>
      </Container>
      <Profileposts />
    </> : <h2>Please login first</h2>}
</>
  );
}

export default Profile;
