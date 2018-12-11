import React from 'react'
import './index.less';
import nh_ypt from '../../assets/img/nh_ypt.png';
import {Link} from 'react-router-dom'
import utils from '../../utils/utils'
import laydate from 'layui-laydate'
export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.inputChange = this.inputChange.bind(this);
        this.inputFocus = this.inputFocus.bind(this);
        this.inputBlur = this.inputBlur.bind(this);
        this.count = this.count.bind(this);
        this.sendCode = this.sendCode.bind(this);
        this.signup = this.signup.bind(this);
        this.check = this.check.bind(this);
    }

    state = {
        znUserName: '',
        znPassWord: '',
        znPassWord2: '',
        znNickName: '',
        znEmail: '',
        znName: '',
        znBirthday: '',
        znTelephone: '',
        znCode: '',
        btnText: '获取验证码',
        timer: 60,
        agree: true,//是否勾选服务条款
        timerBool: false,//是否获取验证码
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
    }

    inputBlur(id, type) {
        if (Boolean(this.state[type]) == true) {
            document.getElementById(id).style.bottom = "35px"
        } else {
            document.getElementById(id).style.bottom = "6px"
        }
    }

    signup() {
        var username = /^[a-zA-Z0-9]{6,16}$/;
        var password = /^[a-zA-Z0-9]{6,16}$/;
        var nickname = /^.{3,16}$/;
        var email = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
        var name = /^.{2,8}$/;
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
                errorInfo: "密码不能为空！"
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
                errorInfo: "用户昵称长度范围：3-16位"
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
                errorInfo: "联系人长度范围：2-8位！"
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
            disCodeBtn: true,
            zCBtn: true,
            errorInfo: ""
        })

        // Axios.ajax({
        //     url:'/Test.aspx',
        //     data:{
        //         isShowLoading:false,
        //         params: {
        //             userName: this.state.znUserNames,
        //             password: this.state.znPassWords,
        //             code:this.state.znCodes
        //         }
        //     }
        // }).then((res)=>{
        //
        // }).catch((res)=>{
        //     this.setState({
        //         btnContent:'登录',
        //         disCodeBtn: false,
        //     })
        // })
    }

    count() {
        var phone = /^[0-9]{1,16}$/;
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
        this.setState({timerBool: true,disCodeBtn: true});
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
    }

    sendCode() {

        this.count()
    }

    check(e) {
        this.setState({agree: e.target.checked})
    }

    goHome() {
        window.location.href = '/';
    }

    onChange(date, dateString) {
        console.log(date, dateString);
    }

    render() {
        return (
            <div className="SignUp-wrap">
                <div className="container">
                    <div className="logo">
                        <Link to="/home"><img src={nh_ypt} alt=""/></Link>
                    </div>
                    <div className="box">
                        <div className="item">
                            <span className="usertype">账号类型</span>
                            <input type="radio" name="type" defaultChecked id="person"/>
                            <label htmlFor="person">个人用户</label>
                            <input type="radio" name="type" id="unit"/>
                            <label htmlFor="unit">使用单位</label>
                            <input type="radio" name="type" id="supplier"/>
                            <label htmlFor="supplier">供应商</label>
                            <input type="radio" name="type" id="agent"/>
                            <label htmlFor="agent">代理商</label>
                        </div>
                        <div className="form-group">
                            <input type="text" className="input" id="znUserName" onFocus={() => {
                                this.inputFocus("znUserNameLabel")
                            }} onBlur={() => {
                                this.inputBlur("znUserNameLabel", "znUserName")
                            }} onChange={(e) => {
                                this.inputChange(e, "znUserName")
                            }} defaultValue={this.state.znUserName}/>
                            <label htmlFor="znUserName" id="znUserNameLabel">用户账号</label>
                        </div>
                        <div className="form-group">
                            <input type="passWord" className="input" id="znPassWord" onFocus={() => {
                                this.inputFocus("znPassWordLabel")
                            }} onBlur={() => {
                                this.inputBlur("znPassWordLabel", "znPassWord")
                            }} onChange={(e) => {
                                this.inputChange(e, "znPassWord")
                            }} defaultValue={this.state.znPassWord}/>
                            <label htmlFor="znPassWord" id="znPassWordLabel">用户密码</label>
                        </div>
                        <div className="form-group">
                            <input type="passWord" className="input" id="znPassWord2" onFocus={() => {
                                this.inputFocus("znPassWordLabel2")
                            }} onBlur={() => {
                                this.inputBlur("znPassWordLabel2", "znPassWord2")
                            }} onChange={(e) => {
                                this.inputChange(e, "znPassWord2")
                            }} defaultValue={this.state.znPassWord2}/>
                            <label htmlFor="znPassWord2" id="znPassWordLabel2">确认密码</label>
                        </div>
                        <div className="form-group">
                            <input type="text" className="input" id="znNickName" onFocus={() => {
                                this.inputFocus("znNickNameLabel")
                            }} onBlur={() => {
                                this.inputBlur("znNickNameLabel", "znNickName")
                            }} onChange={(e) => {
                                this.inputChange(e, "znNickName")
                            }} defaultValue={this.state.znNickName}/>
                            <label htmlFor="znNickName" id="znNickNameLabel">用户昵称</label>
                        </div>
                        <div className="form-group">
                            <input type="email" className="input" id="znEmail" onFocus={() => {
                                this.inputFocus("znEmailLabel")
                            }} onBlur={() => {
                                this.inputBlur("znEmailLabel", "znEmail")
                            }} onChange={(e) => {
                                this.inputChange(e, "znEmail")
                            }} defaultValue={this.state.znEmail}/>
                            <label htmlFor="znEmail" id="znEmailLabel">用户邮箱</label>
                        </div>
                        <div className="form-group">
                            <input type="text" className="input" id="znName" onFocus={() => {
                                this.inputFocus("znNameLabel")
                            }} onBlur={() => {
                                this.inputBlur("znNameLabel", "znName")
                            }} onChange={(e) => {
                                this.inputChange(e, "znName")
                            }} defaultValue={this.state.znName}/>
                            <label htmlFor="znName" id="znNameLabel">联系人姓名</label>
                        </div>
                        <div className="form-group">
                            <input type="text" className="input" id="znBirthday" onFocus={() => {
                                this.inputFocus("znBirthdayLabel")
                            }} onBlur={() => {
                                this.inputBlur("znBirthdayLabel", "znBirthday")
                            }} onChange={(e) => {
                                this.inputChange(e, "znBirthday")
                            }} defaultValue={this.state.znBirthday}/>
                            <label htmlFor="znBirthday" id="znBirthdayLabel">出生日期</label>
                        </div>
                        <div className="form-group form-group-mis">
                            <input type="text" className="input" id="znTelephone" onFocus={() => {
                                this.inputFocus("znTelephoneLabel")
                            }} onBlur={() => {
                                this.inputBlur("znTelephoneLabel", "znTelephone")
                            }} onChange={(e) => {
                                this.inputChange(e, "znTelephone")
                            }} defaultValue={this.state.znTelephone}/>
                            <label htmlFor="znTelephone" id="znTelephoneLabel">联系人电话</label>
                        </div>
                        <div className="form-group form-group-mis form-group-min">
                            <input type="text" className="input" id="znCode" onFocus={() => {
                                this.inputFocus("znCodeLabel")
                            }} onBlur={() => {
                                this.inputBlur("znCodeLabel", "znCode")
                            }} onChange={(e) => {
                                this.inputChange(e, "znCode")
                            }} defaultValue={this.state.znCode}/>
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
                        <a href="####">《隐私政策》</a>和
                        <a href="####">《服务条款》</a>
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