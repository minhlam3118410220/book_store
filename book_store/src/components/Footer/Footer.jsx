import React from 'react';
import './footer.css';

import { Container,Row,Col ,ListGroup,ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo">             
                <div>
                  <h1 className="text-white">LinBook.com</h1>                          
                </div>             
            </div>
            <p className="footer__text mt-4">
            Hope you have good service experiences from LinBook
                </p>
          </Col>

          <Col lg="3" md="3" className="mb-4">
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Quick Help</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/shop">Help Center</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/cart">Order Status</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/login">Gift Card</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Shipping & Returns</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Categories</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Manga</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Law</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Horror</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Romance</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          

          <Col lg="3" md="4" >
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>123 Le Van Si , Tan Binh , Ho Chi Minh</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0  d-flex align-items-center gap-2'>
                <span><i class="ri-phone-line"></i></span>
                  <p>+84 931321812</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-mail-line"></i></span>
                  <p>minhlam3118410220@gmail.com</p>
                </ListGroupItem>

                
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
              <p className="footer__copyright">@ {year} by Lin.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer