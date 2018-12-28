import React from 'react'
import './index.less';
import nh_ypt from '../../assets/img/nh_ypt.png';
import {Link} from 'react-router-dom'
import utils from '../../utils/utils'
import laydate from 'layui-laydate'
import Axios from '../../axios'
import {signBaseUrl}  from '../../config/Config'
import {Modal} from 'antd'
export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.inputChange = this.inputChange.bind(this);
        this.inputFocus = this.inputFocus.bind(this);
        this.inputBlur = this.inputBlur.bind(this);
        this.sendCode = this.sendCode.bind(this);
        this.signup = this.signup.bind(this);
        this.check = this.check.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    state = {
        znUserType:'0',
        znUserName: '',//账号
        znPassWord: '',//密码
        znPassWord2: '',//确认密码
        znNickName: '',//昵称
        znEmail: '',//邮箱
        znName: '',//联系人
        znBirthday: '',//出生日期
        znTelephone: '',//联系电话
        znCode: '',//验证码
        guid:'',//
        btnText: '获取验证码',
        timer: 60,
        agree: true,//是否勾选服务条款
        timerBool: false,//是否获取过验证码
        disCodeBtn: false,//获取验证码之后禁止点击
        zCBtn: false,//注册按钮是否可以点击
        errorInfo: '',
        btnContent: "注册"
    }
    componentDidMount() {
        var that = this;
        laydate.render({
            elem: '#znBirthday', //指定元素
            max: 'date'
            , done: function (value, date, endDate) {
                var data = document.getElementById("znBirthday").value;
                if (data||value) {
                    document.getElementById("znBirthdayLabel").style.bottom = "35px"
                    that.setState({
                        znBirthday: data
                    })
                }else{
                    document.getElementById("znBirthdayLabel").style.bottom = "6px"
                    that.setState({
                        znBirthday: data
                    })
                }
                if (value) {
                    document.getElementById("znBirthdayLabel").style.bottom = "35px"
                    that.setState({
                        znBirthday: value
                    })
                }else{
                    document.getElementById("znBirthdayLabel").style.bottom = "6px"
                    that.setState({
                        znBirthday: value
                    })
                }
            },
            change: function (value, date, endDate) {
                var data = document.getElementById("znBirthday").value;
                if (data||value) {
                    document.getElementById("znBirthdayLabel").style.bottom = "35px"
                    that.setState({
                        znBirthday: data
                    })
                }else{
                    document.getElementById("znBirthdayLabel").style.bottom = "6px"
                    that.setState({
                        znBirthday: data
                    })
                }
                if (value) {
                    document.getElementById("znBirthdayLabel").style.bottom = "35px"
                    that.setState({
                        znBirthday: value
                    })
                }else{
                    document.getElementById("znBirthdayLabel").style.bottom = "6px"
                    that.setState({
                        znBirthday: value
                    })
                }

            }
        });
    }

    inputChange(e, type) {
        this.setState({
            [type]: e.target.value
        });
    }
    inputFocus(id) {
        document.getElementById(id).style.bottom = "35px";
        this.setState({
            errorInfo: ''
        })
        if(id=="znPassWordLabel"){
            document.getElementById("znPassWord").setAttribute("type","password")
        }
        if(id=="znPassWordLabel2"){
            document.getElementById("znPassWord2").setAttribute("type","password")
        }
    }

    inputBlur(id, type) {
        if (Boolean(this.state[type]) == true) {
            document.getElementById(id).style.bottom = "35px"
        } else {
            document.getElementById(id).style.bottom = "6px"
        }
    }
    countDown() {
        let secondsToGo = 5;
        const modal = Modal.success({
            title: '注册成功',
            content: `请等待管理员审核。${secondsToGo}秒后返回首页`,
        });
        const timer = setInterval(() => {
            secondsToGo -= 1;
            modal.update({
                content: `请等待管理员审核。 (${secondsToGo})秒后返回首页`,
            });
        }, 1000);
        setTimeout(() => {
            clearInterval(timer);
            modal.destroy();
            this.props.history.push("/home")
        }, secondsToGo * 1000);
    }
    signup() {
        var username = /^[a-zA-Z0-9]{6,16}$/;
        var password = /^[a-zA-Z0-9]{6,16}$/;
        var nickname = /^[\u4e00-\u9fa5a-zA-Z0-9]{3,16}$/;
        var email = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
        var name = /^[\u4e00-\u9fa5a-zA-Z0-9]{2,8}$/;
        var phone = /^[0-9]{1,16}$/;
        if (utils.trim(this.state.znUserName) == '') {
            this.setState({
                errorInfo: "账号不能为空！"
            });
            return;
        }
        if (!username.test(utils.trim(this.state.znUserName))) {
            this.setState({
                errorInfo: "用户账号支持大小写字母和数字，长度范围：6-16位"
            });
            return;
        }
        if (utils.trim(this.state.znPassWord) == '') {
            this.setState({
                errorInfo: "密码不能为空"
            });
            return;
        }
        if (!password.test(utils.trim(this.state.znPassWord))) {
            this.setState({
                errorInfo: "用户密码支持大小写字母和数字，长度范围：6-16位"
            });
            return;
        }
        if (this.state.znPassWord2 !== this.state.znPassWord) {
            this.setState({
                errorInfo: "二次密码不一致！"
            });
            return;
        }


        if (utils.trim(this.state.znNickName) == '') {
            this.setState({
                errorInfo: "昵称不能为空！"
            });
            return;
        }
        if (!nickname.test(utils.trim(this.state.znNickName))) {
            this.setState({
                errorInfo: "用户昵称支持大小写字母汉字和数字，长度范围：3-16位"
            });
            return;
        }

        if (utils.trim(this.state.znEmail) == '') {
            this.setState({
                errorInfo: "邮箱不能为空！"
            });
            return;
        }
        if (!email.test(utils.trim(this.state.znEmail))) {
            this.setState({
                errorInfo: "请填写正确的邮箱！"
            });
            return;
        }
        if (utils.trim(this.state.znName) == '') {
            this.setState({
                errorInfo: "联系人姓名不能为空！"
            });
            return;
        }
        if (!name.test(utils.trim(this.state.znName))) {
            this.setState({
                errorInfo: "联系人支持大小写字母汉字和数字，长度范围：2-8位"
            });
            return;
        }
        if (utils.trim(this.state.znBirthday) == '') {
            this.setState({
                errorInfo: "出生日期不能为空！"
            });
            return;
        }
        if (utils.trim(this.state.znTelephone) == '') {
            this.setState({
                errorInfo: "联系人电话不能为空！"
            });
            return;
        }
        if (!phone.test(utils.trim(this.state.znTelephone))) {
            this.setState({
                errorInfo: "联系电话只能是数字，长度不能超过16位"
            });
            return;
        }

        if (this.state.timerBool == false) {
            this.setState({
                errorInfo: "请先获取验证码！"
            });
            return;
        }
        if (this.state.agree == false) {
            this.setState({
                errorInfo: "请先同意暖虎平台隐私政策与服务条款！"
            });
            return;
        }
        if (utils.trim(this.state.znCode) == '') {
            this.setState({
                errorInfo: "验证码不能为空！"
            });
            return;
        }

        this.setState({
            btnContent: '注册中...',
            zCBtn: true,
            errorInfo: ""
        },()=>{
            Axios.ajax({
                url:signBaseUrl+'/SSOService.asmx/RegisterUser',
                type: 'get',
                data:{
                    isShowLoading:false,
                    params:  this.state
                }
            }).then((res)=>{
                this.countDown();
            }).catch((res)=>{
                this.setState({
                    btnContent: '注册',
                    zCBtn: false,
                })
            })
        })

    }
    sendCode() {
        var phone = /^[0-9]{1,16}$/;
        if (utils.trim(this.state.znTelephone) == '') {
            this.setState({
                errorInfo: "联系人电话不能为空"
            });
            return;
        }
        if (!phone.test(utils.trim(this.state.znTelephone))) {
            this.setState({
                errorInfo: "联系电话只能是数字，长度不能超过16位"
            });
            return;
        }
        var guid=utils.uuid();
        this.setState({
            guid:guid
        },()=>{
            Axios.ajax({
                url:signBaseUrl+'/SSOService.asmx/RegsterSMS',
                type: 'post',
                data:{
                    isShowLoading:false,
                    params:  {
                        guid:guid,
                        znTelephone:this.state.znTelephone
                    }
                }
            }).then((res)=>{
                this.setState({timerBool: true,disCodeBtn: true},()=>{
                    let siv = setInterval(() => {
                        var time = this.state.timer;
                        time -= 1;
                        this.setState({timer: time, btnText: `(${this.state.timer})秒`}, () => {
                            if (this.state.timer === 0) {
                                clearInterval(siv);
                                this.setState({btnText: '重新发送', disCodeBtn: false, timer: 60})
                            }
                        });
                    }, 1000);
                });

            }).catch((res)=>{

            })
        });



    }
    check(e) {
        this.setState({agree: e.target.checked})
    }
    render() {
        return (
            <div className="SignUp-wrap">
                <div className="container">
                    <div className="logo">
                        <Link to="/home"><img src={nh_ypt} alt=""/></Link>
                    </div>
                    <div className="box">
                        <input type="text" className="hide"/>
                        <input type="password" className="hide"/>
                        <div className="item">
                            <span className="usertype">账号类型</span>
                            <input type="radio" name="type" defaultChecked onChange={(e)=>{this.inputChange(e,"znUserType")}} value="0" id="person"/>
                            <label htmlFor="person">个人用户</label>
                            <input type="radio" name="type" value="1" onChange={(e)=>{this.inputChange(e,"znUserType")}} id="unit"/>
                            <label htmlFor="unit">使用单位</label>
                            <input type="radio" name="type" value="3" onChange={(e)=>{this.inputChange(e,"znUserType")}} id="supplier"/>
                            <label htmlFor="supplier">供应商</label>
                            <input type="radio" name="type" value="2" onChange={(e)=>{this.inputChange(e,"znUserType")}} id="agent"/>
                            <label htmlFor="agent">代理商</label>
                        </div>
                        <div className="form-group">
                            <input type="text" maxLength="20" className="input" id="znUserName" onFocus={(e) => {
                                this.inputFocus("znUserNameLabel",e)
                            }} onBlur={() => {
                                this.inputBlur("znUserNameLabel", "znUserName")
                            }} onChange={(e) => {
                                this.inputChange(e, "znUserName")
                            }} value={this.state.znUserName} autoComplete="off"/>
                            <label htmlFor="znUserName" id="znUserNameLabel">用户账号&nbsp;&nbsp;&nbsp;&nbsp;支持大小写字母和数字，长度范围：6-16位</label>
                        </div>
                        <div className="form-group">
                            <input type="passWord" maxLength="20" className="input" id="znPassWord" onFocus={() => {
                                this.inputFocus("znPassWordLabel")
                            }} onBlur={() => {
                                this.inputBlur("znPassWordLabel", "znPassWord")
                            }} onChange={(e) => {
                                this.inputChange(e, "znPassWord")
                            }} value={this.state.znPassWord} autoComplete="off"/>
                            <label htmlFor="znPassWord" id="znPassWordLabel">用户密码&nbsp;&nbsp;&nbsp;&nbsp;支持大小写字母和数字，长度范围：6-16位</label>
                        </div>
                        <div className="form-group">
                            <input type="passWord" maxLength="20" className="input" id="znPassWord2" onFocus={() => {
                                this.inputFocus("znPassWordLabel2")
                            }} onBlur={() => {
                                this.inputBlur("znPassWordLabel2", "znPassWord2")
                            }} onChange={(e) => {
                                this.inputChange(e, "znPassWord2")
                            }} value={this.state.znPassWord2} autoComplete="off"/>
                            <label htmlFor="znPassWord2" id="znPassWordLabel2">确认密码</label>
                        </div>
                        <div className="form-group">
                            <input type="text" maxLength="20" className="input" id="znNickName" onFocus={() => {
                                this.inputFocus("znNickNameLabel")
                            }} onBlur={() => {
                                this.inputBlur("znNickNameLabel", "znNickName")
                            }} onChange={(e) => {
                                this.inputChange(e, "znNickName")
                            }} value={this.state.znNickName} autoComplete="off"/>
                            <label htmlFor="znNickName" id="znNickNameLabel">用户昵称&nbsp;&nbsp;&nbsp;&nbsp;支持大小写字母汉字和数字，长度范围：3-16位</label>
                        </div>
                        <div className="form-group">
                            <input type="email" maxLength="30" className="input" id="znEmail" onFocus={() => {
                                this.inputFocus("znEmailLabel")
                            }} onBlur={() => {
                                this.inputBlur("znEmailLabel", "znEmail")
                            }} onChange={(e) => {
                                this.inputChange(e, "znEmail")
                            }} value={this.state.znEmail} autoComplete="off"/>
                            <label htmlFor="znEmail" id="znEmailLabel">用户邮箱</label>
                        </div>
                        <div className="form-group">
                            <input type="text" maxLength="20" className="input" id="znName" onFocus={() => {
                                this.inputFocus("znNameLabel")
                            }} onBlur={() => {
                                this.inputBlur("znNameLabel", "znName")
                            }} onChange={(e) => {
                                this.inputChange(e, "znName")
                            }} value={this.state.znName} autoComplete="off"/>
                            <label htmlFor="znName" id="znNameLabel">联系人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;支持大小写字母汉字和数字，长度范围：2-8位</label>
                        </div>
                        <div className="form-group">
                            <input type="text" maxLength="20" readOnly="readOnly" className="input" id="znBirthday" onFocus={() => {
                                this.inputFocus("znBirthdayLabel")
                            }} onBlur={() => {
                                this.inputBlur("znBirthdayLabel", "znBirthday")
                            }} onChange={(e) => {
                                this.inputChange(e, "znBirthday")
                            }} value={this.state.znBirthday} autoComplete="off"/>
                            <label htmlFor="znBirthday" id="znBirthdayLabel">出生日期</label>
                        </div>
                        <div className="form-group form-group-mis">
                            <input type="text" maxLength="20" className="input" id="znTelephone" onFocus={() => {
                                this.inputFocus("znTelephoneLabel")
                            }} onBlur={() => {
                                this.inputBlur("znTelephoneLabel", "znTelephone")
                            }} onChange={(e) => {
                                this.inputChange(e, "znTelephone")
                            }} value={this.state.znTelephone} autoComplete="off"/>
                            <label htmlFor="znTelephone" id="znTelephoneLabel">联系人电话</label>
                        </div>
                        <div className="form-group form-group-mis form-group-min">
                            <input type="text" maxLength="20" className="input" id="znCode" onFocus={() => {
                                this.inputFocus("znCodeLabel")
                            }} onBlur={() => {
                                this.inputBlur("znCodeLabel", "znCode")
                            }} onChange={(e) => {
                                this.inputChange(e, "znCode")
                            }} value={this.state.znCode} autoComplete="off"/>
                            <label htmlFor="znCode" id="znCodeLabel">验证码</label>
                            <input type="button" className="button" defaultValue={this.state.btnText}
                                   disabled={this.state.disCodeBtn} onClick={this.sendCode}/>
                        </div>
                        <div className="clear"></div>

                    </div>
                    <div className="info">{this.state.errorInfo}</div>
                    <input type="button" className="btn" defaultValue={this.state.btnContent}
                           disabled={this.state.zCBtn} onClick={this.signup}/>
                    <div className="agree">
                        <input className="input" defaultChecked={this.state.agree} type="checkbox" onChange={(e) => {
                            this.check(e)
                        }}/>
                        我已阅读并同意暖虎平台
                        <Link to="privacy" target="frameYs">《隐私政策》</Link>和
                        <Link to="clause" target="frameFw">《服务条款》</Link>
                    </div>
                    <div className="y_y">
                        已有账号,
                        <Link to="signIn">立即登录</Link>
                    </div>
                </div>
            </div>
        );
    }
}