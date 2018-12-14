import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Footerregister from './components/Footer_register'
import {connect} from 'react-redux'
import {switch_userInfo} from './redux/action/index'
class Admin extends React.Component{
    render(){
        return (
            <div className="main_wrap">
                <Header></Header>
                {this.props.children}
                {this.props.userInfo.isLogIn==false? <Footerregister></Footerregister>:''}
                <Footer></Footer>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return{
        userInfo:state.userInfo
    }
}
const mapDispatchToProps = dispatch =>{
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Admin)