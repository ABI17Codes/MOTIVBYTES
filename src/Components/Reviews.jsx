import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Reviews = () => {
  return (
    <div style={{backgroundColor:'#b7cdff'}}>
        <Container >
        <h2 className='text-center pt-5 fw-bold'>What they say about us</h2>
            <Row xs={1} md={2} lg={3} className="text-center py-5">
                
                <Col  className="bg-white rounded p-5">
                <p>
                  " Veritatis architecto beatae dicta nemo enim ipsam volupta
                  bibendum arcu vitae. "
                </p>
                <p>______</p>
                <Image width={"52px"} className='rounded-circle' src="https://assetwp.droitlab.com/wp-content/uploads/2022/10/Img-7.jpg"/>
                </Col>
                <Col className="bg-white rounded p-5">
                <p>
                  " Veritatis architecto beatae dicta nemo enim ipsam volupta
                  bibendum arcu vitae. "
                </p>
                <p>______</p>
                <Image width={"52px"} className='rounded-circle' src="https://assetwp.droitlab.com/wp-content/uploads/2022/10/Img-7.jpg"/>
                </Col>
                <Col className="bg-white rounded p-5">
                <p>
                  " Veritatis architecto beatae dicta nemo enim ipsam volupta
                  bibendum arcu vitae. "
                </p>
                <p>______</p>
                <Image width={"52px"} className='rounded-circle' src="https://assetwp.droitlab.com/wp-content/uploads/2022/10/Img-7.jpg"/>
                </Col>
               
            </Row>
        </Container>
    </div>
  )
}

export default Reviews