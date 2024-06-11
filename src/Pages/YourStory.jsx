import React from 'react'
import IMAGES from '../assets/images'
import { Col, Container, Form, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Styles/YourStory.css'
const YourStory = () => {
  return (
    <div>
       <div className="becomeaspeakerbgimage text-center">
        <h2 className="text-center text-white pt-4">Become a Speaker</h2>
        <div className="d-flex justify-content-center align-items-center my-3">
          <h5>
            <Link className="texctdec" to="/">
              Home
            </Link>
          </h5>
          <Image  width={"15px"} className="mx-3 pb-1" src={IMAGES.next} />
          <h5 className="fw-bold text-white">Become a Speaker</h5>
        </div>
        <p className="text-center text-white fw-bold py-md-3">
            Inventore veritatis et architecto beatae vitae dicta explicabo nemo
            ipsam voluptatem voluptas
          </p>
      </div>
      <Container>
      <Row className="justify-content-center my-5 ">
          <Col xs lg="6">
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter your name <span className="text-danger">*</span></Form.Label>
        <Form.Control type="text" placeholder="name..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter your video Youtube link <span className="text-danger">*</span></Form.Label>
        <Form.Control type='url' placeholder="https://www.youtube.com/embed/HQRqmdadBio?si=wAmkcm_C1razCIYp" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Video Description <span className="text-danger">*</span></Form.Label>
        <Form.Control as="textarea" placeholder='Description...' rows={10} />
      </Form.Group>
    </Form>
    </Col>
    </Row>
      </Container>
    </div>
  )
}

export default YourStory