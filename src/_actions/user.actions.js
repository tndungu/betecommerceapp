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
                console.log("Dispatch before is",response.responseMessage)
                if(response.httpResponseCode === 200){
                    dispatch(success(response.responseObject.user))
                    history.push(from)
                }else{
                    console.log("Dispatch response.responseMessage is",response.responseMessage)
                    dispatch(failure(response.responseMessage))
                    dispatch(alertActions.error(response.responseMessage))
                }
                window.location.reload()
            },
            error => {
                
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
        .then(
            user => {
                dispatch(success());
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
