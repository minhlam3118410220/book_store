import React ,{ useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Helmet from '../components/Helmet/Helmet';
import "../styles/home.css";
import { Link } from 'react-router-dom';
import { Container,Row ,Col } from 'reactstrap';

import heroImg from '../assets/images/herobanner.jpg';
import counterImg from '../assets/images/sale.jpg';


import Services from '../services/Services';
import ProductsListH from '../components/UI/ProductsListH';
import Clock from '../components/UI/Clock';

import useGetData from '../custom-hooks/useGetData';


const Home = () => {

  const {data : products ,loading} = useGetData('products')
    const [trendingProducts,setTrendingProducts] = useState([]);
    const [bestSalesProducts,setBestSalesProducts] = useState([]);
    const [new1Products,setNew1Products] = useState([]);
    const [new2Products,setNew2Products] = useState([]);
    const [popularProducts,setPopularProducts] = useState([]);

    const year = new Date().getFullYear();

    useEffect(()=>{
      const filteredTrendingProducts = products.filter(
        (item) => item.category ==='cookbook'
        );
        
        const filteredBestSalesProducts = products.filter(
          (item) => item.category ==='law'
          );
        
        const filteredNew1Products = products.filter(
          (item) => item.category ==='horror'
          );
        
        const filteredNew2Products = products.filter(
          (item) => item.category ==='romance'
          );
        
        const filteredPopularProducts = products.filter(
          (item) => item.category ==='manga'
          );
  

        setTrendingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredBestSalesProducts);
        setNew1Products(filteredNew1Products);
        setNew2Products(filteredNew2Products);
        setPopularProducts(filteredPopularProducts);
    },[products]);
  
  return <Helmet title={"Home"}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero_subtitle">New Arrival product in {year}</p>
              <h2>Big Swiss</h2>
              <p>Bold, outlandish, and filled with irresistible characters, Big Swiss is both a love story and also a deft examination of infidelity, mental health, sexual stereotypes, and more—from an amazingly talented, one-of-a-kind voice in contemporary fiction.</p>

              <motion.button whileTap={{scale:1.2}} className="buyh__btn"><Link to='/shop'>BUY NOW</Link></motion.button>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero__img ">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <Services />

    <section className="trending__products">
      <Container>
        <Row>
          <Col lg='12' className="text-center mb-5">
              <h2 className="section_title">Trending Products</h2>
          </Col>
          {
            loading ? <h5 className='fw-bold'>Loading........</h5> 
            :
            <ProductsListH data={trendingProducts}/>
          }
        </Row>
      </Container>
    </section>

    <section className="best__sales">
    <Container>
        <Row>
          <Col lg='12' className="text-center mb-5">
              <h2 className="section_title">Best Sales</h2>
          </Col>
          {
            loading ? <h5 className='fw-bold'>Loading........</h5> 
            :
            <ProductsListH data={bestSalesProducts}/>
          }
          
        </Row>
      </Container>
    </section>

    <section className="timer__count">
      <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>The Eleventh Hour</h3>
              </div>
              <Clock />
              <motion.button 
                  whileTap={{scale: 1.2}}
                  className="buy__btn store__btn">
                <Link to='/shop'>Visit Shop</Link>
                </motion.button>
            </Col>

            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
      </Container>
    </section>

    <section className="new__arrivals">
    <Container>
        <Row>
          <Col lg='12' className="text-center mb-5">
              <h2 className="section_title">New Arrivals</h2>
          </Col>
          {
            loading ? <h5 className='fw-bold'>Loading........</h5> 
            :
            <ProductsListH data={new1Products}/>
          }
           {
            loading ? <h5 className='fw-bold'>Loading........</h5> 
            :
            <ProductsListH data={new2Products}/>
          }
          
        </Row>
      </Container>
    </section>

    <section className="popular__category">
    <Container>
        <Row>
          <Col lg='12' className="text-center mb-5">
              <h2 className="section_title">Popular in Category</h2>
          </Col>
          {
            loading ? <h5 className='fw-bold'>Loading........</h5> 
            :
            <ProductsListH data={popularProducts}/>
          }
         
          
        </Row>
      </Container>
    </section>


  </Helmet>;
}

export default Home