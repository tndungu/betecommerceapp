import { alertConstants } from '../_constants'

export function alert(state = {}, action){
    console.log("Alert action",action)
    switch(action.type){
        case alertConstants.SUCCESS:
            return {
                type: 'success',
                message: action.message
            }
        case alertConstants.ERROR:
            return {
                type: 'error',
                message: action.message
            }
        case alertConstants.CLEAR:
            return {}
        default:
            return state
    }
}