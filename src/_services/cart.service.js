
import {config} from '../api/config'
import { authHeader,handleResponse } from '../_helpers'

export const cartService = {
    addToCart,
    getCartItems,
    createOrder
}

function addToCart(CartRequest){
    const requestOptions = {
        method:'POST',
        headers:{'Content-Type':'application/json',...authHeader()}, 
        body: JSON.stringify(CartRequest)
    }
    return fetch(`${config.apiUrl}/Cart/AddToCart`,requestOptions).then(handleResponse)
}

function getCartItems(){
    const requestOptions = {
        method:'GET',
        headers: {'Content-Type':'application/json',...authHeader()}, 
    }
    console.log("cart Headers",requestOptions)
    return fetch(`${config.apiUrl}/Cart/GetCartItems`,requestOptions).then(handleResponse)
}

function createOrder(){
    const requestOptions = {
        method:'GET',
        headers: {'Content-Type':'application/json',...authHeader()}, 
    }
    return fetch(`${config.apiUrl}/Order/Order`,requestOptions).then(handleResponse)
}