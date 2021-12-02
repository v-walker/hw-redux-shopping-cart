import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
    return (
        <div>
            Success! Thanks for shopping at SHOP NAME dress shop.
            <br />
            <button className="btn btn-primary"><Link to="/products" style={{textDecoration: "none", color: "white"}}>Back to products</Link></button>
        </div>
    )
}

export default Success;
