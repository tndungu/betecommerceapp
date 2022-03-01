import { combineReducers } from "@reduxjs/toolkit"
import {registration } from './registration.reducer'

const rootReducer = combineReducers({
    registration
})

export default rootReducer