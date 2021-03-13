const initialState = {
    login : {
        email : "",
        password : "",
        pending : false,
        error : false,
        islogged : false
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGOUT" : 
            return {
                ...state,
                login : {
                    ...state.login,
                    islogged : false
                }
            }

        case "AUTOLOGIN_SUCCESS" : 
            return {
                ...state,
                login : {
                    ...state.login,
                    islogged : true
                }
            }

        case "LOGIN_PENDING" :
            return {
                ...state,
                login : {
                    ...state.login,
                    pending : true
                }
            }

        case "LOGIN_SUCCESS" :
            return {
                ...state,
                login : {
                    ...state.login,
                    pending : false,
                    islogged : true
                }
            }

        case "LOGIN_ERROR" :
            return {
                ...state,
                login : {
                    ...state.login,
                    pending : false,
                    error : action.err
                }
            }

        case "LOGIN_CHANGE" : 
            return {
                ...state,
                login : {
                    ...state.login,
                    [action.propiedad] : action.valor
                }
            }

        default:
            return state
    }
}
