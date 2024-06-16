import React, { useContext } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "../Styles/Footer.css";
import { Link} from "react-router-dom";
import IMAGES from "../assets/images";
import { UserContext } from "../Context/UserContext";

function Footer(){
  const {user} = useContext(UserContext);
  // const user = true;

  return (
    <div>
      {/* style={{backgroundColor:"#dee8ff"}} */}
      <div style={{ backgroundColor: "#003deb" }}>
        <Container className="py-4">
          <Row xs={1} md={2} lg={4}>
            <Col>
              <h4>
                <Link className="texctdec fw-bold" to="/">
                  MOTIVBYTES
                </Link>
              </h4>
            </Col>
            <Col>
              <ul className="footer-list">
                <li className="py-2">
                  <Link className="texctdec" to="/">
                    <Image
                      className="mx-2"
                      width={"25px"}
                      src={IMAGES.footerarrow}
                    />
                    Home
                  </Link>
                </li>
                <li className="py-2">
                  <Link className="texctdec" to="/contact">
                    <Image
                      className="mx-2"
                      width={"25px"}
                      src={IMAGES.footerarrow}
                    />
                    Contact
                  </Link>
                </li>
                <li className="py-2">
                  <Link className="texctdec" to="/about">
                    <Image
                      className="mx-2"
                      width={"25px"}
                      src={IMAGES.footerarrow}
                    />
                    About Us
                  </Link>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="footer-list">
                <li className="py-2">
                  <Link className="texctdec" to="#">
                    <Image
                      className="mx-2"
                      width={"25px"}
                      src={IMAGES.footerarrow}
                    />
                    Facebook
                  </Link>
                </li>
                <li className="py-2">
                  <Link className="texctdec" to="#">
                    <Image
                      className="mx-2"
                      width={"25px"}
                      src={IMAGES.footerarrow}
                    />
                    Instagram
                  </Link>
                </li>
                <li className="py-2">
                  <Link className="texctdec" to="#">
                    <Image
                      className="mx-2"
                      width={"25px"}
                      src={IMAGES.footerarrow}
                    />
                    X (Twitter)
                  </Link>
                </li>
                <li className="py-2">
                  <Link className="texctdec" to="#">
                    <Image
                      className="mx-2"
                      width={"25px"}
                      src={IMAGES.footerarrow}
                    />
                    Youtube
                  </Link>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="footer-list">
                <li className="py-2">
                  {user ? (
                    <Link className="texctdec" to="/yourstory">
                      <Image
                        className="mx-2"
                        width={"25px"}
                        src={IMAGES.footerarrow}
                      />
                      Become a Speaker
                    </Link>
                  ) : (
                    <Link
                      className="texctdec"
                      to="#"
                      onClick={() => {
                        alert(
                          "If you want Become a Speaker, Please Login First"
                        );
                      }}
                    >
                      <Image
                        className="mx-2"
                        width={"25px"}
                        src={IMAGES.footerarrow}
                      />
                      Become a Speaker
                    </Link>
                  )}
                </li>
                <li className="py-2">
                  <Link className="texctdec" to="/stories">
                    <Image
                      className="mx-2"
                      width={"25px"}
                      src={IMAGES.footerarrow}
                    />
                    Inspiring Stories
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="text-center fw-bold my-2 py-3">
        <p>MOTIVBYTES.com &copy; 2024 All copyrights Recived.</p>
      </div>
    </div>
  );
};

export default Footer;
