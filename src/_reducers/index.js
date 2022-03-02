import { combineReducers } from "@reduxjs/toolkit"
import {registration } from './registration.reducer'
import {authentication } from './authentication.reducer'
import {alert } from './alert.reducer'
import {products } from './products.reducer'
 
const rootReducer = combineReducers({
    authentication,
    registration,
    products,
    alert
})

export default rootReducer