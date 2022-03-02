import {config} from '../api/config'
import { authHeader,handleResponse } from '../_helpers'

export const productService = {
    getAllProducts
}

function getAllProducts(PointerParams){
    const requestOptions = {
        method:'POST',
        headers: authHeader(),
        body: JSON.stringify(PointerParams)
    }
    return fetch(`${config.apiUrl}/Product`,requestOptions).then(handleResponse)
}

