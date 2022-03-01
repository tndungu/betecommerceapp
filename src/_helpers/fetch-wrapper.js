import { authHeader } from './auth-header'
import {accountService } from '../_services'

export const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete
}

function get(url) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(url)
    }
    return fetch(url, requestOptions).then(handleResponse)
}

function post(url,body){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type':'application/json', ...authHeader(url)},
        body: JSON.stringify(body)
    }
    return fetch(url, requestOptions).then(handleResponse)
}

function put(url,body){
    const requestOptions = {
        method:'PUT',
        headers: { 'Content-Type': 'application/json', ...authHeader(url)},
        body: JSON.stringify(body)
    }
    return fetch(url,requestOptions).then(handleResponse)
}

// prefixed with underscored because delete is a reserved keyword in JS
function _delete(url){
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json',...authHeader(url)},
    }
    return fetch(url,requestOptions).then(handleResponse)
}

//helper functions

function handleResponse(response){
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if(!response.ok){
            if([401,403].includes(response.status) && accountService.userValue){
                //auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                accountService.logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error)
        }
        return data
    })
}