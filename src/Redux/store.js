import Reducer from "./Reducer";
import SecondReducer from "./SecondReducer"
import {configureStore} from "@reduxjs/toolkit"

const store=configureStore(
    {reducer:Reducer,
    secondReducer:SecondReducer
    }
)

export default store