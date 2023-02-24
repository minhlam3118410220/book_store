import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container,Row,Col ,ListGroup,ListGroupItem} from 'reactstrap';


const Contact = () => {
  return (
    <>
      <Helmet title='contact'>
        <CommonSection title='Contact' />
          <Container>
             <Row>
                <Col lg='12' className='mt-5'>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62705.62236774906!2d106.6181675516298!3d10.803545519854952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293818af3a73%3A0xcd8d16d1180acc8b!2sT%C3%A2n%20B%C3%ACnh%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1676556690759!5m2!1sen!2s" 
                    width="600" 
                    height="450" 
                    className="border-0 w-100"
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Col>

                <Col lg='12' className='mt-5'>
                  <div className="contact-inner-wrapper d-flex justify-content-between ">
                  <Col lg="7" className='mb-5 ' >
                <h3 className=" mb-4">Send Message</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div className='mb-2'>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className='mb-2'>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div>
                    <button className="buy__btn border-0">Submit</button>
                  </div>
                </form>
                  </Col>
                  

                  <Col lg="5" >
                    <div className='px-3'>
                        <h4 className='align-items-center justify-content-center'>Contact</h4>
                        <ListGroup className='mt-2'>
                          <ListGroupItem className='border-0 d-flex align-items-center '>
                            <span><i class="ri-map-pin-line"></i></span>
                            <h6> 123 Le Van Si , Tan Binh , Ho Chi Minh</h6>
                          </ListGroupItem>

                          <ListGroupItem className='border-0 d-flex align-items-center '>
                            <span><i class="ri-phone-line"></i></span>
                              <h6> +84 931321812</h6>
                          </ListGroupItem>

                          <ListGroupItem className='border-0 d-flex align-items-center'>
                            <span><i class="ri-mail-line"></i></span>
                              <h6> minhlam3118410220@gmail.com</h6>
                          </ListGroupItem>

                        </ListGroup>
                    </div> 
                                            
                  </Col>
                  </div>

                </Col>
             </Row>
          </Container>
       </Helmet> 
    </>
  )
}

export default Contact