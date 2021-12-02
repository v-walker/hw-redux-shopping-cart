
import React from 'react';
import {Link} from 'react-router-dom';
import { MdOutlineShoppingCart } from 'react-icons/md'


const BaseLayout = (props) => {
  return (
    <>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/checkout"><MdOutlineShoppingCart /></Link></li>
        </ul>
      {props.children}
    </>
  )
}

export default BaseLayout
