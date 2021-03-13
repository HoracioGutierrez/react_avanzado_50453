const initialState = {
    modal : {
        visible : false,
        texto : ""
    }
}

const reducer = (state=initialState,action) => {
    switch(action.type) {
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