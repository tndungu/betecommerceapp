import { productConstants } from "../_constants/product.constants";

export function products(state={},action){
    switch(action.type){
        case productConstants.GETALLPRODUCTS_REQUEST:
            return {
                loading:true
            };
        case productConstants.GETALLPRODUCTS_SUCCESS:
            return {
                items: action.products
            };
        case productConstants.GETALLPRODUCTS_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}