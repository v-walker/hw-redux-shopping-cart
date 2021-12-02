import { ADD_TO_CART, DELETE_ITEM, SAVE_FOR_LATER, ADD_FROM_SAVE, CHECKOUT } from "./types";

const addToCart = (item) => {
    
    return {
        type: ADD_TO_CART,
        product: item
    }
}

const deleteItem = (product) => {
    return {
        type: DELETE_ITEM,
        product
    }
}

const saveItem = (product) => {
    return {
        type: SAVE_FOR_LATER,
        product
    }
}

const addBack = (product) => {
    return {
        type: ADD_FROM_SAVE,
        product
    }
}

const checkout = () => {
    return {
        type: CHECKOUT
    }
}

export { addToCart, deleteItem, saveItem, addBack, checkout };