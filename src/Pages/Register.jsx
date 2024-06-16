import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { URL } from "../../url.js";

const Register = () => {
  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  async function hanndleRegister(e) {
    e.preventDefault();
    try {
      const res = await axios.post(`${URL}/register`, {
        username,
        phonenumber,
        email,
        password,
      });
      setUsername(res.data.username);
      setPhonenumber(res.data.phonenumber);
      setEmail(res.data.email);
      setPassword(res.data.password);
      // console.log(username);
      // console.log(phonenumber);
      // console.log(email);
      // console.log(password);
      setError(false);
      navigate("/login");
     
    } catch (error) {
        if (error.response && error.response.status === 409) {
        setError(error.response.data.message); // Set the specific error message
      } else {
        setError("Something went wrong. Try again!");
      }
      // console.error('Error during registration:', error);
      // setError(true);
      // // console.log(error);
      // console.error(error)
    }
  }


  return (
    <div>
      <div>
        <h1 className="text-center my-5">REGISTER HERE!</h1>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={hanndleRegister}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your Phone Number"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                    required
                  />
                </Form.Group>
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
                    {error}
                  </h6>
                )}
                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
              <h5 className="m-5 fw-bold">
                Have an account? <Link to="/login">Login</Link>
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Register;
