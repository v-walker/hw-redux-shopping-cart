import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { addToCart } from '../actions/cartActions';
import CartItems from './CartItems';

function ItemDetail() {
    const product = useSelector(state => state.productsCRD.product);
    const dispatch = useDispatch();
    
    return (
        <>
            <div className="container">
                <div className="row">
                    {/* Product details */}
                    <div className="col-8">
                        <Card>
                            <h2 className="ms-5">{product.title}</h2>
                            <hr />
                            <div className="row d-flex">
                                <div className="col-4">
                                    <img className="m-5" src={product.image} width="80%" alt={product.title} />
                                </div>
                                <div className="col-8">
                                    <p className="mt-5">{product.description}</p>
                                    <p>Price: ${product.price}</p>
                                    <p>Available Sizes: 
                                        <ul>
                                            {product.availableSizes.map((size, index) => {
                                                return <li key={index}>{size}</li>
                                            })}
                                        </ul>
                                    </p>
                                    <div className="d-flex">
                                        <button className="btn btn-warning" onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
                                        <button className="ms-2 btn btn-success"> <Link to="/products" style={{textDecoration: "none", color: "white"}}>Back to Products</Link> </button>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        </Card>
                    </div>
                    {/* Cart */}
                    <div className="col-4">
                        <CartItems />
                    </div>
                </div>
            </div>
            


        </>
    )
}

export default ItemDetail;
