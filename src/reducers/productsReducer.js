import { LOAD_PRODUCTS, SET_PRODUCT } from "../actions/types" 

const productsReducer = (state, action) => {
    
    if (state === undefined) {
        state = {
            products: [],
            product: {}
        }
    }

    switch(action.type) {
        case LOAD_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        case SET_PRODUCT:
            return {
                ...state,
                product: state.products.find(product => product.id === action.id)
            }
        default:
            return state

    }
    
}

export default productsReducer;