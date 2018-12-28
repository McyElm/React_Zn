import React from 'react'
import './index.less'
import {Link} from 'react-router-dom'
import nh_ypt from '../../assets/img/nh_ypt.png';
import {connect} from 'react-redux'
import {switch_userInfo} from '../../redux/action/index'
import utils from '../../utils/utils'
import {signBaseUrl,localBaseUrl,zhBaseUrl,znBaseUrl,zzBaseUrl}  from '../../config/Config'
import {withRouter} from "react-router-dom";
import { Modal, Button } from 'antd';
const confirm = Modal.confirm;
class Header extends React.Component{
    constructor(props){
        super(props);
        this.goHome = this.goHome.bind(this);
        this.LogOut = this.LogOut.bind(this);
        utils.clearCookie("currentUser")
    }
    state={};
    goHome(){
        this.props.history.push("/home")
    }
    LogOut(){
        var that=this;
        confirm({
            title: '暖虎云平台',
            content: '您确定要退出吗？',
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                sessionStorage.removeItem('userInfo');
                that.props.LogOutProps({
                    isLogIn:false,
                    UserName:''
                });
                const form = document.createElement('form');
                form.id = 'form-file-download';
                form.name = 'form-file-download';
                // 添加到 body 中
                document.body.appendChild(form);
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = 'SoftList';
                input.value = JSON.stringify(that.props.userInfo.SoftList);
                form.appendChild(input);
                const input2 = document.createElement('input');
                input2.type = 'hidden';
                input2.name = 'znUrl';
                input2.value = "http://"+window.location.host+"/#/home";
                form.appendChild(input2);
                // form 的提交方式
                form.method = 'POST';
                // form 提交路径
                form.action =localBaseUrl+'/ClearCookie.aspx';
                form.submit();
                document.body.removeChild(form);
                console.log(that.props.userInfo.SoftList);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    render(){
        return (
            <div className="header_wrap2" style={{display:this.props.isShow}}>
                <div className="home_header">
                    <div className="top">
                        <div className="logo"><img onClick={this.goHome} src={nh_ypt} alt=""/></div>
                        <ul className="list">
                            <Link to="/serviceCommunity" data-index="1" className={["li", "1"===this.props.menuIndex?"active":null].join(' ')} >
                                <div className="border"></div>
                                服务社区
                            </Link>
                            <li data-index="2"  className={["li", "2"===this.props.menuIndex?"active":null].join(' ')}>
                                <div className="border"></div>
                                应用平台
                                <ul className="menu">
                                    <a   href={znBaseUrl} target="frameZn">智能调节阀管理平台</a>
                                    <a   to="/">室温采集分析平台 <span>&lt;建设中 &gt;</span></a>
                                    <a   to="/">智能供热iSCADA平台<span>&lt;敬请期待 &gt;</span></a>
                                </ul>
                            </li>
                            <li data-index="3" className={["li", "3"===this.props.menuIndex?"active":null].join(' ')}>
                                <div className="border"></div>
                                服务工具
                                <ul className="menu">
                                    <a   to="/">供热管网水力计算分析软件</a>
                                    <a   href={zzBaseUrl} target="frameZz">枝状管网水力平衡计算软件</a>
                                    <a   to="/">供热系统校核、设计、仿真软件<span>&lt;敬请期待&gt;</span></a>
                                    <a   to="/">热力站设备测评软件<span>&lt;敬请期待&gt;</span></a>
                                </ul>
                            </li>
                            <li  data-index="4" className={["li", "4"===this.props.menuIndex?"active":null].join(' ')}>
                                <div className="border"></div>
                                解决方案
                                <ul className="menu">
                                    <Link   to="/solutionEnergyEfficiency">集中供热能效提升解决方案</Link>
                                    <Link   to="/serviceTeam">暖虎服务队</Link>
                                    <Link   to="/accountManagement">跨平台多业务账号管理</Link>
                                    <a   to="/">物联网设备的热力数据托管服务<span>&lt;建设中&gt;</span></a>
                                    <a   to="/">企业级监管平台的热力数据托管服务<span>&lt;敬请期待&gt;</span></a>
                                </ul>
                            </li>
                            <Link to="/help"  data-index="5" className={["li bz border", "5"===this.props.menuIndex?"active":null].join(' ')}>
                                <div className="border"></div>
                                帮助中心
                            </Link>
                        </ul>
                        {
                            this.props.userInfo.isLogIn==false?(<div className="d_right">
                                    <Link className="li zc" to="/signUp">
                                        免费注册
                                    </Link>
                                    <Link className="li dl" to="/signIn">
                                        登录
                                    </Link>
                                </div>):( <div className="d_right">
                                    <div className="li dl" onClick={this.LogOut}>
                                        退出
                                    </div>
                                    <div className="li na"> {this.props.userInfo.UserName}</div>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return{
        menuIndex:state.menuIndex,
        isShow:state.menuShowBool.isShow,
        userInfo:state.userInfo
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        LogOutProps: function (obj) {
            dispatch(switch_userInfo(obj))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Header))