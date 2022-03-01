// export function authHeader(){
//     let user = JSON.parse(localStorage.getItem('user'))

//     if(user && user.token){
//         return {'Authorization': 'Bearer' + user.token }
//     }
//     else{
//         return {}
//     }
// }
import {config} from '../api/config'
import { accountService } from '../_services/account.service'

export function authHeader(){
    //return auth header with jwt if user is logged in and request is to the api url
    const user = accountService.userValue
    const isLoggedIn = user && user.jwtToken
    // const isApiUrl = url.startsWith(config.apiUrl)
    if(isLoggedIn){
        return { Authorization: `Bearer ${user.jwtToken}`}
    }else{
        return {}
    }
}