const initialState=[]

const SecondReducer=(state=initialState,action)=>{
switch (action.type) {
    case "OVERFLOW_API":
        return action.payload
      

    default:
    return state
        
}
}

export default SecondReducer