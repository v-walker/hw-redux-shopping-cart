
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatCurrency } from './utils';
import Fade from 'react-reveal/Fade';
import { deleteItem, saveItem, addBack } from '../actions/cartActions';
import { Link } from 'react-router-dom';

const CartItems = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cartCRD.cartItems);
  const numberOfItems = useSelector(state => state.cartCRD.numberOfItems);
  const totalCost = useSelector(state => state.cartCRD.totalCost);
  const savedItems = useSelector(state => state.cartCRD.savedItems);
  
  return (
    <>
      <div>
        {
          cartItems.length === 0
          ? <div>Cart is empty!</div>
          : <div>You have {numberOfItems} items in your cart
            <br />
            Total Cost: {formatCurrency(totalCost)}
            <br />
            <button className="btn btn-success"><Link to="/checkout" style={{textDecoration: "none", color: "white"}}>Proceed to checkout</Link></button>
            </div>
        }
      </div>
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
    </>
  )
}

export default CartItems
