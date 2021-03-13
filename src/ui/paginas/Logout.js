import React from 'react'
import {connect} from "react-redux"
import {logout} from "../../api/actions"

class Logout extends React.Component {

    componentDidMount(){
        this.props.logout()
    }
    
    render(){
        return (
            <div>
                Saliendo...
            </div>
        )
    }
}

export default connect(
    null,
    {logout}
)(Logout)
