const initialState=[]

const Reducer=(state=initialState,action)=>{
    switch (action.type) {
        case "MOVIES_API":
        return action.payload
            
            
        default:
        return state
            
    }
}

export default Reducer