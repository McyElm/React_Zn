import React from 'react'
import nh_ypt from '../../assets/img/nh_ypt.png';
import {Link} from 'react-router-dom'
import utils from '../../utils/utils'
import {connect} from 'react-redux'
import {switch_userInfo} from '../../redux/action/index'
import Axios from '../../axios'
import { message } from 'antd'
import './index.less';
import axios from 'axios'
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.inputChange = this.inputChange.bind(this)
        this.inputFocus = this.inputFocus.bind(this);
        this.inputBlur = this.inputBlur.bind(this);
        this.signin = this.signin.bind(this);
        this.imgCodeChange = this.imgCodeChange.bind(this);
    }
    state = {
        znUserNames:"",
        znPassWords: "",
        znCodes: "",
        errorInfo: "",
        discodeBtn: false,
        btnContent:'登录',
        znUrl:window.location.href.split("?")[0],
        type:1,
        imgCode:'',
        guid:''
    };

    componentDidMount() {
        this.initValue();
        var uuid=utils.uuid();
        Axios.ajax({
            url:'http://192.168.100.19:9000/SSOService.asmx/GenerateVerifyImage',
            type:'post',
            data:{
                isShowLoading:false,
                params: {
                    guid: uuid,
                    nlens: 4
                }
            }
        }).then((res)=>{
            this.setState({imgCode:res.Data,guid:uuid})
        }).catch((res)=>{
        })
    }
    imgCodeChange(){
        Axios.ajax({
            url:'http://192.168.100.19:9000/SSOService.asmx/ModifyVerifyImage',
            type:'post',
            data:{
                isShowLoading:false,
                params: {
                    guid: this.state.guid,
                    nlens: 4
                }
            }
        }).then((res)=>{
            this.setState({imgCode:res.Data+"?"+utils.uuid()})
        }).catch((res)=>{
        })
    }
    signin() {
        if (utils.trim(this.state.znUserNames) == '') {
            this.setState({
                errorInfo: "账号不能为空！"
            });
            return;
        }
        if (utils.trim(this.state.znPassWords) == '') {
            this.setState({
                errorInfo: "密码不能为空！"
            });
            return;
        }
        if (utils.trim(this.state.znCodes) == '') {
            this.setState({
                errorInfo: "验证码不能为空！"
            });
            return;
        }
        this.setState({
            btnContent:'登录中...',
            discodeBtn: true,
        })
        const form = document.createElement('form');
        form.id = 'form-file-download';
        form.name = 'form-file-download';
        // 添加到 body 中
        document.body.appendChild(form);
        for (const key in this.state) {
            if (this.state[key]!== undefined && Object.hasOwnProperty.call(this.state, key)) {
                // 创建一个输入
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = this.state[key];
                form.appendChild(input);
            }
        }
        // form 的提交方式
        form.method = 'POST';
        // form 提交路径
        var baseUrl="";
        form.action = baseUrl+'/Test.aspx';
        form.submit();
        document.body.removeChild(form);

    }
    inputChange(e, type) {
        var value = e.target.value;
        this.setState({
            [type]: value
        });
    }

    inputFocus(id) {
        document.getElementById(id).style.bottom = "30px"
        this.setState({
            errorInfo: ''
        })
    }

    inputBlur(id, type) {
        if (Boolean(this.state[type])==true) {
            document.getElementById(id).style.bottom = "30px"
        } else {
            document.getElementById(id).style.bottom = "6px"
        }
    }
    initValue(){
        if (Boolean(this.state.znUserNames)==true) {
            document.getElementById("znUserNamesLabel").style.bottom = "30px"
        } else {
            document.getElementById("znUserNamesLabel").style.bottom = "6px"
        }
        if (Boolean(this.state.znPassWords)==true) {
            document.getElementById("znPassWordsLabel").style.bottom = "30px"
        } else {
            document.getElementById("znPassWordsLabel").style.bottom = "6px"
        }
        if (Boolean(this.state.znCodes)==true) {
            document.getElementById("znCodesLabel").style.bottom = "30px"
        } else {
            document.getElementById("znCodesLabel").style.bottom = "6px"
        }
    }
    render() {
        return (
            <div className="SignIn-wrap">
                <div className="container">
                    <div className="logo">
                        <Link to="/home"><img src={nh_ypt} alt=""/></Link>
                    </div>
                    <div className="box">
                        <div className="form-group">
                            <input type="text" maxLength="20" className="input" id="znUserNames" onFocus={() => {
                                this.inputFocus("znUserNamesLabel")
                            }} onBlur={() => {
                                this.inputBlur("znUserNamesLabel", "znUserNames")
                            }} onChange={(e) => {
                                this.inputChange(e, "znUserNames")
                            }} defaultValue={this.state.znUserNames}/>
                            <label htmlFor="znUserNames" id="znUserNamesLabel"><span
                                className="iconfont icon-yonghu1"> </span>用户账号</label>
                        </div>
                        <div className="form-group">
                            <input type="passWord" maxLength="20" className="input" id="znPassWords" onFocus={() => {
                                this.inputFocus("znPassWordsLabel")
                            }} onBlur={() => {
                                this.inputBlur("znPassWordsLabel", "znPassWords")
                            }} onChange={(e) => {
                                this.inputChange(e, "znPassWords")
                            }} defaultValue={this.state.znPassWords}/>
                            <label htmlFor="znPassWords" id="znPassWordsLabel"><span
                                className="iconfont icon-mima"> </span>用户密码</label>
                        </div>
                        <div className="form-group form-group-mis">
                            <input type="text" maxLength="10" className="input" id="znCodes" onFocus={() => {
                                this.inputFocus("znCodesLabel")
                            }} onBlur={() => {
                                this.inputBlur("znCodesLabel", "znCodes")
                            }} onChange={(e) => {
                                this.inputChange(e, "znCodes")
                            }} defaultValue={this.state.znCodes}/>
                            <label htmlFor="znCodes" id="znCodesLabel"><span
                                className="iconfont icon-yanzhengma2"> </span>验证码</label>
                        </div>
                        <div className="form-group form-group-min">
                            <img src={this.state.imgCode} onClick={this.imgCodeChange} alt=""/>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="info">{this.state.errorInfo}</div>
                    <input type="submit" className="btn" defaultValue={this.state.btnContent} onClick={this.signin}
                           disabled={this.state.discodeBtn}/>
                    <div className="w_z">
                        <a className="a1" href="####">忘记密码</a>
                        <Link to="/signUp" className="a2">注册 <span className="iconfont icon-right"></span></Link>
                    </div>
                </div>
                <div className="b_a">Copyright 1998-2018 黑龙江省中能控制工程股份有限公司</div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        userInfoFn: function (obj) {
            dispatch(switch_userInfo(obj));
            setTimeout(function () {
                window.location.href="/home"
            },5000)

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)