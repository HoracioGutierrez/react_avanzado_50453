import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import {connect} from "react-redux"
import {autoLogin} from "../../api/actions"
import Modal from '../componentes/Modal'

class App extends React.Component {

    componentDidMount(){
        this.props.autoLogin()
    }

    render(){
        return(
            <>
                <Modal/>
                <Header/>
                <Main/>
                <Footer/>
            </>
        )
    }
}

export default connect(
    null,
    {autoLogin}
)(App)