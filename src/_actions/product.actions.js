import Cart from "../pages/Cart"
import { productConstants } from "../_constants"
import {productService } from '../_services'
import {alertActions } from './'

export const productActions = {
    getAllProducts,
    addToCart
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
                    console.log("PRODUCTS IN ACTION ", products.data.products)
                    dispatch(success(products.data.products))
                },
                error => dispatch(failure(error.toString()))
            )
    }
    function request() { return {type: productConstants.GETALLPRODUCTS_REQUEST} }
    function success(products) { return {type: productConstants.GETALLPRODUCTS_SUCCESS, products} }
    function failure(error) { return {type: productConstants.GETALLPRODUCTS_FAILURE, error} }
}

function addToCart(cartRequest){
    return dispatch => {
        dispatch(request(cartRequest))

        productService.addToCart(cartRequest)
            .then(response => {
                dispatch(success(response.data))
            },
            error => {
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.message))
            }
            )
    }
    function request(cartRequest) {return {type: productConstants.ADDTOCART_REQUEST,cartRequest}}
    function success(cartRequest){return {type: productConstants.ADDTOCART_SUCCESS,cartRequest}}
    function failure(cartRequest) {return {type: productConstants.ADDTOCART_FAILURE,cartRequest}}
}