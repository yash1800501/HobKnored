const reducer = (state=true, action)=>{
    if(action.type === 'ISOPEN'){
        return true
    }
    else if(action.type === 'ISCLOSE'){
        return false
    }
    else{
        return state
    }
}

export default reducer;