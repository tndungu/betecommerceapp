import {config} from '../api/config'
import { authHeader,handleResponse } from '../_helpers'

export const productService = {
    getAllProducts,
    addToCart
}

function getAllProducts(PointerParams){
    const requestOptions = {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(PointerParams)
    }
    return fetch(`${config.apiUrl}/Product`,requestOptions).then(handleResponse)
}

function addToCart(CartRequest){
    const requestOptions = {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(CartRequest)
    }
    return fetch(`${config.apiUrl}/Cart`,requestOptions).then(handleResponse)
}