import Reducer from "./Reducer";
import SecondReducer from "./SecondReducer"
import {configureStore} from "@reduxjs/toolkit"

const store=configureStore(
    {reducer:{
        firstReducer:Reducer,
        second:SecondReducer
    }}
)

export default store