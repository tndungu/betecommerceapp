import {config} from '../api/config'
import {handleResponse } from '../_helpers'

export const userService = {
    login,
    logout,
    register
}

function login(user){
    const requestOptions = {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }

    return fetch(`${config.apiUrl}/user/authenticate`,requestOptions)
        .then(handleResponse)
        
}

function logout(){
    //remove user from local storage to log user out
    localStorage.removeItem('user')
    window.location.href = '/login'
}

function register(user){

    console.log("registering user",user)
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(user)
    }

    return fetch(`${config.apiUrl}/user/register`,requestOptions).then(handleResponse)
}
