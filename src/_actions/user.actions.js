import {userConstants} from '../_constants'
import {userService } from '../_services'
import {alertActions } from './'
import {history } from '../_helpers'

export const userActions = {
    login,
    logout,
    register
}

function login(user, from){
    return dispatch => {

        dispatch(request({user}))

        userService.login(user)
        .then(
            response => {
                console.log("Dispatch before  response.status",response)
                    dispatch(success(response.data))
                    history.push(from)
               
                window.location.reload()
            },
            error => {
                console.log("Error occurred!!",error)
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.toString()))
            }
        )
    }

    function request(user) {return {type: userConstants.LOGIN_REQUEST,user}}
    function success(user){return {type: userConstants.LOGIN_SUCCESS,user}}
    function failure(error) {return {type: userConstants.LOGIN_FAILURE,error}}
}

function logout(){
    userService.logout();
    return {type: userConstants.LOGOUT }
}

function register(user){
    return dispatch => {
        dispatch(request(user))

        userService.register(user)
        .then(response => {
            return response.json()
        })
        .then(
            user => {
                dispatch(success(user));
                history.push('/login')
                dispatch(alertActions.success('Registration successful'))
            },
            error => {
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.toString()))
            }
        )
    }

    function request(user){return {type:userConstants.REGISTER_REQUEST,user}}
    function success(user) {return {type: userConstants.REGISTER_SUCCESS,user}}
    function failure(error) { return {type: userConstants.REGISTER_FAILURE,error}}
}
