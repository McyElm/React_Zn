import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Footerregister from './components/Footer_register'
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom";
import {switch_userInfo} from './redux/action/index'
class Admin extends React.Component{
    componentDidUpdate(prevProps) {//社区资讯返回时 tab切换到第四个标签
        var bool=prevProps.location.pathname.indexOf("/informationDetails_t/")>-1;
        if(bool&&this.props.location.pathname=="/serviceCommunity"){
            this.props.history.push("/serviceCommunity?key=4");
        }
    }
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
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Admin))