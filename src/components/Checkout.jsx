import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { formatCurrency } from './utils';
import Fade from 'react-reveal/Fade';
import { deleteItem, saveItem, addBack, checkout } from '../actions/cartActions';

// Add a button to the CartItems component that says "Proceed to checkout". Create a new page for your application. When a user clicks on the "Proceed to checkout" button, it navigates them to this page and shows a breakdown of their order, including a 8.25% sales tax. Use the image below as an example.

// When the user the user click on "Place your order", It wipes out the cart and navigates to page that thanks them for their oder.

function Checkout() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartCRD.cartItems);
    const numberOfItems = useSelector(state => state.cartCRD.numberOfItems);
    const subtotal = useSelector(state => state.cartCRD.totalCost);
    const savedItems = useSelector(state => state.cartCRD.savedItems);

    return (
        <div className="container">
            <h1>Cart</h1>
            <div>
                {
                cartItems.length === 0
                ? <div>Your cart is empty!</div>
                : <div>You have {numberOfItems} items in your cart
                    
                    </div>
                }
            </div>
            <button className="btn btn-primary"><Link to="/products" style={{textDecoration: "none", color: "white"}}>Back to products</Link></button>
            <hr />

            <Fade left cascade>
                <div className="row cart-items">
                {cartItems.map(item => {
                    return (
                    <div key={item.id} className="col-12 mb-3 d-flex flex-column">
                        <div className="d-flex">
                        <div>
                            <img src={item.image} alt={item.title} />
                        </div>

                        <div>{item.title}</div>
                        </div>

                        <div>
                        {formatCurrency(item.price)}
                        <button className="ms-2 btn btn-info" onClick={() => dispatch(saveItem(item))}>Save for Later</button>
                        <button className="ms-2 btn btn-danger" onClick={() => dispatch(deleteItem(item))}>Remove</button>
                        </div>
                    </div>
                    )
                })}
                </div>
        </Fade>

        <div className="row d-flex justify-content-end text-end">
            <div className="col-2">
                Subtotal: {formatCurrency(subtotal)}
                <br />
                Tax: {formatCurrency(subtotal * 0.0825)}
                <br />
                Total: {formatCurrency(subtotal + (subtotal * 0.0825))}
                <br />
                <button className="btn btn-primary" onClick={() => dispatch(checkout())}><Link to="/transaction_successful" style={{textDecoration: "none", color: "white"}}>Checkout</Link></button>
            </div>
        
        </div>
        


{/* saved for later */}
        <div className="mt-5">
          {
          savedItems.length === 0 
          ? <div>No Saved Items</div>
          : <div>You have {savedItems.length} items saved for later</div>
          }
      </div>
      <hr />
      <Fade left cascade>
        <div className="row cart-items">
          {savedItems.map(item => {
            return (
              <div key={item.id} className="col-12 mb-3 d-flex flex-column">
                <div className="d-flex">
                  <div>
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div>{item.title}</div>
                </div>

                <div>
                  {formatCurrency(item.price)}
                  <button className="ms-2 btn btn-warning" onClick={() => dispatch(addBack(item))}>Add to Cart</button>
                  <button className="ms-2 btn btn-danger" onClick={() => dispatch(deleteItem(item))}>Remove</button>
                </div>
              </div>
            )
          })}
        </div>
      </Fade>
        </div>
    )
}

export default Checkout
