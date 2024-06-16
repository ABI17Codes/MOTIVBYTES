import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { URL } from "../../url.js";
import { UserContext } from "../Context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  async function hanndleLogin(e) {
    e.preventDefault();
    try {
      const res = await axios.post(URL + "/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      setError(false);
      setUser(res.data);
      navigate("/");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <div>
      <div>
        <h1 className="text-center my-5">LOGIN HERE!</h1>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={hanndleLogin}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                {/* <div className="my-4">
                  <ReCAPTCHA
                    sitekey="6Le_4fYpAAAAACtHRN9igyvpOKy_j_d-T_T--rPL"
                    // onChange={onChange}
                  />
                </div> */}
                {error && (
                  <h6 className="m-4" style={{ color: "red" }}>
                    Somthings went wrong. Try again!
                  </h6>
                )}

                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
              <h5 className="m-5 fw-bold">
                Don't have an account? <Link to="/register">Register</Link>
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Login;
