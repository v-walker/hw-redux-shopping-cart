import productsData from '../assets/data';
import { LOAD_PRODUCTS, SET_PRODUCT } from './types';

const loadProducts = () => {
    return {
        type: LOAD_PRODUCTS,
        products: productsData
    }
}

const setProduct = (id) => {
    return {
        type: SET_PRODUCT,
        id
    }
}


export { loadProducts, setProduct }