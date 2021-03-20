import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import {connect} from "react-redux"
import {autoLogin} from "../../api/actions"
import Modal from '../componentes/Modal'

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            id : 0
        }
    }

    setId = (id) => {
        this.setState({id})
    }

    componentDidMount(){
        this.props.autoLogin()
    }

    render(){
        return(
            <>
                <Modal id={this.state.id}/>
                <Header/>
                <Main setId={this.setId}/>
                <Footer/>
            </>
        )
    }
}

export default connect(
    null,
    {autoLogin}
)(App)