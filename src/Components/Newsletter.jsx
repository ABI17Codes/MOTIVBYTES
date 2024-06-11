import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Newsletter = () => {
  return (
    <div>
        <div className="text-center" style={{backgroundColor:'#0010c8'}}>
          <h5 className="fw-bold pt-5 text-white">
            Need More <i className="text-decoration-underline">MOTIVATIONAL</i> Content
            <br /> Subscribe Our Newsletter
          </h5>
          <div className="d-lg-inline-block rounded p-3">
            <Form className="d-sm-flex justify-content-center align-items-center ">
              <Form.Control
                className="mx-sm-3"
                type="email"
                placeholder="name@example.com"
              />
              <Button className="my-3" variant="success" id="button-addon1">
                Subcribe
              </Button>
            </Form>
          </div>
        </div>
    </div>
  )
}

export default Newsletter