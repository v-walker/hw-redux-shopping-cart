import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function ItemDetail() {
    const { id } = useParams();
    const products = useSelector(state => state.productsCRD.products);
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        setProduct(products.find(product => product.id === id))
    }, [])

    console.log(product);
    
    return (
        <>
            Details 
            {product.title}
        </>
    )
}

export default ItemDetail;
