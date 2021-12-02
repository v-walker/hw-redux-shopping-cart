/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { loadProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { formatCurrency } from './utils';
import Fade from 'react-reveal/Fade';
import CartItems from './CartItems';
import { Link } from 'react-router-dom'

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productsCRD.products);

  useEffect(() => {
    dispatch(loadProducts());

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <>
      Products
      
      <div className="container">
        <div className="row">
          {/* All Products */}
          <div className="col-8">
            <Fade bottom cascade>
            <div className="row">
              {products.map(product => {
                return (
                  <div key={product.id} className="col-4 mb-5 product">
                    <Card>
                      <Link to={`/products/details/${product.id}`}>
                        <img className="" src={product.image} alt={product.title} />
                        <p className="pt-3">{product.title}</p>
                      </Link>

                      <div className="d-flex justify-content-around">
                        <div>{formatCurrency(product.price)}</div>
                        <button className="btn btn-warning" width="" onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
                      </div>
                          
                    </Card>
                  </div>
                ) 
              })}
            </div>
            </Fade>
          </div>
          
          {/* Cart Items */}
          <div className="col-4">
            <CartItems />
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Products
