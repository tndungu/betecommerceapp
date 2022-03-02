
import {config} from '../api/config'
import { authHeader,handleResponse } from '../_helpers'

export const cartService = {
    addToCart,
    getCartItems
}

function addToCart(CartRequest){
    const requestOptions = {
        method:'POST',
        headers: authHeader(),
        body: JSON.stringify(CartRequest)
    }
    return fetch(`${config.apiUrl}/Cart`,requestOptions).then(handleResponse)
}

function getCartItems(id){
    const requestOptions = {
        method:'GET',
        headers: authHeader()
    }
    return fetch(`${config.apiUrl}/Cart/GetCartItems?userId=${id}`,requestOptions).then(handleResponse)
}