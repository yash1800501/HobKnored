const initialValue = false
const reducer = (state=initialValue, action)=>{
    if(action.type === 'PORTRAIT'){
        return true
    }
    else if(action.type === 'LANDSCAPE'){
        return false
    }
    else{
        return state
    }
}

export default reducer;