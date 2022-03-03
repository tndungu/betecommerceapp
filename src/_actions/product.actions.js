import Cart from "../pages/Cart"
import { productConstants } from "../_constants"
import {productService } from '../_services'
import {alertActions } from './'

export const productActions = {
    getAllProducts
}

function getAllProducts(PointerParams){
    return dispatch => {
        dispatch(request(PointerParams))
        console.log("PointerParams", PointerParams)

        productService.getAllProducts(PointerParams)
            .then(data => {
                return data.json()
            })
            .then(
                products => {
                    console.log("PRODUCTS IN ACTION ", products)
                    if(products.statusCode == 200){
                        
                        dispatch(success(products.data.products))
                    }else{
                        dispatch(failure(products.message))
                    }
                    
                },
                error => dispatch(failure(error.toString()))
            )
    }
    function request() { return {type: productConstants.GETALLPRODUCTS_REQUEST} }
    function success(products) { return {type: productConstants.GETALLPRODUCTS_SUCCESS, products} }
    function failure(error) { return {type: productConstants.GETALLPRODUCTS_FAILURE, error} }
}

