export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposite',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}

export const portrait = (state) => {
    return(dispatch) => {
        dispatch({
            type:'PORTRAIT',
            payload: state
        })
    }
}

export const landscape = (state) => {
    return(dispatch) => {
        dispatch({
            type:'LANDSCAPE',
            payload: state
        })
    }
}

export const isOpen = (state) => {
    return(dispatch) => {
        dispatch({
            type:'ISOPEN',
            payload: state
        })
    }
}

export const isClose = (state) => {
    return(dispatch) => {
        dispatch({
            type:'ISCLOSE',
            payload: state
        })
    }
}
