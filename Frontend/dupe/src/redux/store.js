import { configureStore } from "@reduxjs/toolkit";
import prodReducer from './appSlice'

const store = configureStore({
    reducer : {
        product : prodReducer
    }
})

export default store