const initialState = {
    modal : {
        visible : false,
        texto : "",
        id : 0
    }
}

const reducer = (state=initialState,action) => {
    switch(action.type) {
        case "MODAL_CLOSE" : 
        return {
            ...state,
            modal : {
                visible : false
            }
        }
        case "MODAL_OPEN" :
            return {
                ...state,
                modal : {
                    visible : true,
                    texto : action.texto
                }
            }
        default : 
            return state
    }
}

export default reducer