import productsData from '../assets/data';
import { LOAD_PRODUCTS } from './types';

const loadProducts = () => {
    return {
        type: LOAD_PRODUCTS,
        products: productsData
    }
}

export { loadProducts }