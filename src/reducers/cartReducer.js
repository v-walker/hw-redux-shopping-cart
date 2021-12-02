import { ADD_TO_CART, DELETE_ITEM, SAVE_FOR_LATER, ADD_FROM_SAVE, CHECKOUT } from "../actions/types";

const cartReducer = (state, action) => {
    
    if (state === undefined) {
        state = {
            cartItems: [],
            numberOfItems: 0,
            totalCost: parseFloat(0.00),
            savedItems: []
        }
    }

    switch(action.type) {
        case ADD_TO_CART: 

            // let productCounts = []
            // // data structure: [{item: item, quantity: num}, {}, {}]
            // state.cartItems.forEach(cartItem => {
            //     if (productCounts.includes(cartItem.title)){
            //         let allButItem = productCounts.filter(productObj => {
            //             return !productObj.item
            //         })
            //     } else {
            //         productCounts.push({
            //             item,
            //             quantity: 1
            //         })
            //     }
            // })

            return {
                ...state,
                cartItems: [...state.cartItems, action.product],
                numberOfItems: state.numberOfItems + 1,
                totalCost: state.totalCost + parseFloat(action.product.price)
            }
        
        case DELETE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.product.id),
                numberOfItems: state.numberOfItems - 1,
                totalCost: state.totalCost - parseFloat(action.product.price)
            }

        case SAVE_FOR_LATER:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.product.id),
                numberOfItems: state.numberOfItems - 1,
                totalCost: state.totalCost - parseFloat(action.product.price),
                savedItems: [...state.savedItems, action.product]
            }

        case ADD_FROM_SAVE:
            return {
                ...state,
                cartItems: [...state.cartItems, action.product],
                numberOfItems: state.numberOfItems + 1,
                totalCost: state.totalCost + parseFloat(action.product.price),
                savedItems: state.savedItems.filter(item => item.id !== action.product.id)
            }
        
        case CHECKOUT:
            return {
                ...state,
                cartItems: [],
                numberOfItems: 0,
                totalCost: parseFloat(0.00)
            }

        default:
            return state
    }
    
}

export default cartReducer;