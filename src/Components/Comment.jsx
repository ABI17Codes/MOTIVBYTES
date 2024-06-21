import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { Button,Image } from "react-bootstrap";
import { URL } from "../../url.js";

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [postComment, setPostComment] = useState("");
  const { user } = useContext(UserContext);
  const { id } = useParams();

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
      userId: user._id,
    };
    console.log(newComment);
    // console.log(user._id);
    try {
      const res = await axios.post(`${URL}/comment/create`, newComment, {
        withCredentials: true,
      });
      console.log(res.data);
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
        const res = await axios.get(`${URL}/comments/stories/${id}`, {
          withCredentials: true,
        });
        setComments(res.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, [id]);

  return (
    <div>
      <div>
        <h5 className="fw-bold">Comments : </h5>
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
    </div>
  );
};

export default Comment;
