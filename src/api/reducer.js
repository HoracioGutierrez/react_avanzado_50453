import {combineReducers} from "redux"
import Productos from "./reducers/Productos"
import Cuenta from "./reducers/Cuenta"

const reducer = combineReducers({
    Productos,
    Cuenta
})

export default reducer
