import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Row, Col,Form ,Button } from 'react-bootstrap'
import { ToastContainer  } from 'react-toastify'

const CreateEmail = () => {
  return (
    <div>
        <Sidebar />
        <NavbarMenu />
        <ToastContainer />   
        <Container className="jd-cont">
            <form>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Template Name</Form.Label>
                <Form.Control type='text' placeholder=''/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Guideline When This Template To be Used? </Form.Label>
                <Form.Control type='text' placeholder=''/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Content Of Template </Form.Label>
                <Form.Control type='text' placeholder=''/>
                
                </Col>
               
               
                </Row>
                
                    
                        <Button variant='primary' className='mx-5 mt-3'>Save</Button>
                    
                    
                        <Button variant='success' className='mx-5 mt-3'>Edit</Button>
                    
                    
                        <Button variant='danger' className='mx-5 mt-3'>Delete</Button>
                        <Button variant='info' className='mx-5 mt-3'>Add Template to Email Panel</Button>
                        <Button variant='warning' className='mx-5 mt-3'>View Template</Button>
                    
                
                </form>
                </Container>
    </div>
  )
}

export default CreateEmail