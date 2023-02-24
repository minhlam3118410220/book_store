import React ,{useState} from 'react';

import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container,Row ,Col } from 'reactstrap';

import "../styles/shop.css";

import products from "../assets/data/products";
import ProductList from '../components/UI/ProductsList'

const Shop = () => {

  const [productsData ,setProductData] = useState(products)

    const handleFilter = e=>{
      
      const filterValue = e.target.value
      if(filterValue === 'cookbook'){
        const filteredProducts = products.filter(
          item => item.category==='cookbook')
        
        setProductData(filteredProducts);
      }

      if(filterValue === 'manga'){
        const filteredProducts = products.filter(
          item => item.category==='manga')
        
        setProductData(filteredProducts);
      }

      if(filterValue === 'law'){
        const filteredProducts = products.filter(
          item => item.category==='law')
        
        setProductData(filteredProducts);
      }

      if(filterValue === 'romance'){
        const filteredProducts = products.filter(
          item => item.category==='romance')
        
        setProductData(filteredProducts);
      }

      if(filterValue === 'horror'){
        const filteredProducts = products.filter(
          item => item.category==='horror')
        
        setProductData(filteredProducts);
      }
    };

    const handleSearch = e=>{
      const searchTerm = e.target.value

      const searchedProducts = products.filter(
        item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

        setProductData(searchedProducts)
    }

  return (
    <Helmet title='Shop'>
       <CommonSection title="Products" /> 

       <section>
          <Container>
            <Row>
              <Col lg="3" md="6">
                <div className="filter__widget">
                  <select onChange={handleFilter}>
                    <option >Filter By Category</option>
                    <option value="cookbook">Cookbook</option>
                    <option value="horror">Horror</option>
                    <option value="manga">Manga</option>
                    <option value="romance">Romance</option>
                    <option value="law">Law</option>
                  </select>
                </div>
              </Col>
              <Col lg="3" md="6" className="text-end"> 
              <div className="filter__widget">
                  <select name="" id="">
                    <option >Sort By </option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                   
                  </select>
                </div>
              </Col>
              <Col lg="6" md="12">
                <div className="search__box">
                  <input 
                    type="text" 
                    placeholder="Search....."
                    onChange={handleSearch} />
                  <span>
                    <i class="ri-search-line"></i>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
       </section>

       <section className="pt-0">
        <Container>
          <Row>
            {
              productsData.length === 0? (
              <h1 className="text-center fs-4">No products are found!</h1>
              ):( <ProductList data={productsData}/>)
            }
          </Row>
        </Container>
       </section>
    </Helmet>
  )
}

export default Shop