import {combineReducers} from "redux"
import Productos from "./reducers/Productos"
import Cuenta from "./reducers/Cuenta"
import App from "./reducers/App"

const reducer = combineReducers({
    Productos,
    Cuenta,
    App
})

export default reducer
