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
    //window.location.href = '/login'
}


// function getById(id){
//     const requestOptions = {
//         method:'GET',
//         headers: authHeader()
//     }
//     return fetch(`${config.apiUrl}/users/${id}`,requestOptions)
//         .then(handleResponse)
// }

function register(user){

    console.log("registering user",user)
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(user)
    }

    return fetch(`${config.apiUrl}/user/register`,requestOptions).then(handleResponse)
}


// function handleResponse(response){
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if(!response.ok){
//             if(response.status === 401){
//                 //auto logout if 401
//                 logout();
//                 //location.reload(true);
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error)
//         }
//         return data;
//     })
// }