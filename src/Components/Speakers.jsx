import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Speakers = () => {
  return (
    <div style={{backgroundColor:'#f6f5f1'}}>
    <p className="text-center fw-bold display-5 pt-3">
      Meet with our speakers
    </p>
   <Container>
   <Row xs={2} md={3} lg={4} className="text-center fw-bold">
      <Col className="p-4">
        <Image
          className="rounded w-100"
          src="https://assetwp.droitlab.com/wp-content/uploads/2022/10/Img-7.jpg"
        />
        <p>Rafael E. Kennison</p>
      </Col>
      <Col className="p-4">
        <Image
          className="rounded w-100"
          src="https://assetwp.droitlab.com/wp-content/uploads/2022/10/Img-7.jpg"
        />
        <p>John T. Johnson</p>
      </Col>
      <Col className="p-4">
        <Image
          className="rounded w-100"
          src="https://assetwp.droitlab.com/wp-content/uploads/2022/10/Img-7.jpg"
        />
        <p>Rafael E. Kennison</p>
      </Col>  
      <Col className="p-4">
        <Image
          className="rounded w-100"
          src="https://assetwp.droitlab.com/wp-content/uploads/2022/10/Img-7.jpg"
        />
        <p>Rafael E. Kennison</p>
      </Col>         
    </Row>
   </Container>
  </div>
  )
}

export default Speakers