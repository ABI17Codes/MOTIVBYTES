import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import IMAGES from '../assets/images.jsx'

const Ourteam = () => {
  return (
    <div style={{backgroundColor:'#f6f5f1'}}>
    <p className="text-center fw-bold display-5 pt-3">
      Meet our TEAM
    </p>
   <Container>
   <Row xs={2} md={3} lg={4} className="text-center fw-bold">
      <Col className="p-4">
        <Image
          className="rounded w-100"
          src={IMAGES.img}
        />
        <p>Rafael E. Kennison</p>
      </Col>
      <Col className="p-4">
        <Image
          className="rounded w-100"
          src={IMAGES.img}
        />
        <p>John T. Johnson</p>
      </Col>
      <Col className="p-4">
        <Image
          className="rounded w-100"
          src={IMAGES.img}
        />
        <p>Rafael E. Kennison</p>
      </Col>  
      <Col className="p-4">
        <Image
          className="rounded w-100"
          src={IMAGES.img}
        />
        <p>Rafael E. Kennison</p>
      </Col>         
    </Row>
   </Container>
  </div>
  )
}

export default Ourteam