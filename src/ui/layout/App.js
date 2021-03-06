import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import {Provider} from "react-redux"
import store from "../../api/store"

class App extends React.Component {

    render(){
        return(
            <Provider store={store}>
                <Header/>
                <Main/>
                <Footer/>
            </Provider>
        )
    }
}

export default App