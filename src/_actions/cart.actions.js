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
            .then(response => {
                dispatch(success(response.data))
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

function createOrder(id){
    
    return dispatch => {
        dispatch(request(id))

        cartService.createOrder(id)
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

    function request(id) {return {type: cartConstants.CREATEORDER_REQUEST,id}}
    function success(data){return {type: cartConstants.CREATEORDER_SUCCESS,data}}
    function failure(id) {return {type: cartConstants.CREATEORDER_FAILURE,id}}
}

function getCartItems(id){
    
    return dispatch => {
        dispatch(request(id))

        cartService.getCartItems(id)
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

    function request(id) {return {type: cartConstants.GETCARTITEMS_REQUEST,id}}
    function success(data){return {type: cartConstants.GETCARTITEMS_SUCCESS,data}}
    function failure(id) {return {type: cartConstants.GETCARTITEMS_FAILURE,id}}
}