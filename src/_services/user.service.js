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
        .then(response => {
            return response.json()
        })
        .then(handleResponse)
        .then(user => {
            console.log("localstorage user",user.data)
            //store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user.data));
            return user.data;
        })
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
