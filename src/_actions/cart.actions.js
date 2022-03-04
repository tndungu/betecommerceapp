import { alertActions } from "."
import {cartService } from '../_services'
import { cartConstants } from "../_constants"
import {history } from '../_helpers'

export const cartActions = {
    addToCart,
    getCartItems,
    createOrder
}

function addToCart(cartRequest){
    return dispatch => {
        dispatch(request(cartRequest))

        cartService.addToCart(cartRequest)
            .then(data => {return data.json()})
            .then(response => {
                console.log("AddToCart response",response)
                if(response.statusCode == 200){
                    dispatch(success(response.data))
                    dispatch(alertActions.success("Item successfully added to cart"))
                }else{
                    dispatch(alertActions.failure("Item could not be added to cart"))
                }
            },
            error => {
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.message))
            }
            )
    }
    function request(cartRequest) {return {type: cartConstants.ADDTOCART_REQUEST,cartRequest}}
    function success(cartRequest){return {type: cartConstants.ADDTOCART_SUCCESS,cartRequest}}
    function failure(cartRequest) {return {type: cartConstants.ADDTOCART_FAILURE,cartRequest}}
}

function createOrder(){
    
    return dispatch => {
        dispatch(request())

        cartService.createOrder()
            .then(response => {
                console.log("Dispatch CREATE ORDER ",response.data)
                dispatch(success(response.data))
                history.push('./checkout')

            },
            error => {
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.message))
            }
            )
    }

    function request() {return {type: cartConstants.CREATEORDER_REQUEST}}
    function success(data){return {type: cartConstants.CREATEORDER_SUCCESS,data}}
    function failure() {return {type: cartConstants.CREATEORDER_FAILURE}}
}

function getCartItems(){
    
    return dispatch => {
        dispatch(request())

        cartService.getCartItems()
            .then(data => {
                return data.json()
            })
            .then(response => {
                console.log("Dispatch response.data ",response.data)
                dispatch(success(response.data))
            },
            error => {
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.message))
            }
            )
    }

    function request() {return {type: cartConstants.GETCARTITEMS_REQUEST}}
    function success(data){return {type: cartConstants.GETCARTITEMS_SUCCESS,data}}
    function failure() {return {type: cartConstants.GETCARTITEMS_FAILURE}}
}