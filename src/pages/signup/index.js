import React from 'react'
import './index.less';
import nh_ypt from '../../assets/img/nh_ypt.png';
import {Link} from 'react-router-dom'
export default class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.inputChange=this.inputChange.bind(this);
        this.inputFocus=this.inputFocus.bind(this);
        this.inputBlur=this.inputBlur.bind(this);
        this.count=this.count.bind(this);
        this.sendCode=this.sendCode.bind(this);
    }
    state={
        znUserName:'',
        znPassWord:'',
        znPassWord2:'',
        znNickName:'',
        znEmail:'',
        znName:'',
        znBirthday:'',
        znTelephone:'',
        znCode:'',
        btnText: '获取验证码',
        timer: 60,
        discodeBtn: false,
        errorInfo:''
    }
    componentDidMount() {

    }
    inputChange(e,type){
        this.setState({
            [type]:e.target.value
        });
    }
    inputFocus(id){
        document.getElementById(id).style.bottom="35px";
        this.setState({
            errorInfo:''
        })
    }
    inputBlur(id,type){
        if (Boolean(this.state[type])==true) {
            document.getElementById(id).style.bottom="35px"
        }else{
            document.getElementById(id).style.bottom="6px"
        }
    }
    count(){
        let siv = setInterval(() => {
            var time=this.state.timer;
            time-=1;
            this.setState({timer: time, btnText:`(${this.state.timer})秒`}, () => {
                if (this.state.timer === 0) {
                    clearInterval(siv);
                    this.setState({ btnText: '重新发送', discodeBtn: false,timer:60 })
                }
            });
        }, 1000);
    }
    sendCode(){
        this.setState({ discodeBtn: true});
        this.count()
    }
    goHome(){
        window.location.href='/';
    }
    render() {
        return (
            <div className="SignUp-wrap">
                <div className="container">
                    <div className="logo">
                        <Link to="/home"><img src={nh_ypt} alt="" /></Link>
                    </div>
                    <div className="box">
                        <div className="item">
                            <span className="usertype">账号类型</span>
                            <input type="radio"  name="type" defaultChecked id="person" />
                            <label htmlFor="person">个人用户</label>
                            <input type="radio" name="type" id="unit"/>
                            <label htmlFor="unit">使用单位</label>
                            <input type="radio"  name="type" id="supplier"/>
                            <label htmlFor="supplier">供应商</label>
                            <input type="radio"  name="type" id="agent"/>
                            <label htmlFor="agent">代理商</label>
                        </div>
                        <div className="form-group">
                            <input type="text" className="input"  id="znUserName"  onFocus={()=>{this.inputFocus("znUserNameLabel")}} onBlur={()=>{this.inputBlur("znUserNameLabel","znUserName")}} onChange={(e)=>{this.inputChange(e,"znUserName")}} defaultValue={this.state.znUserName}/>
                            <label htmlFor="znUserName" id="znUserNameLabel">用户账号</label>
                        </div>
                        <div className="form-group">
                            <input type="passWord" className="input" id="znPassWord"  onFocus={()=>{this.inputFocus("znPassWordLabel")}} onBlur={()=>{this.inputBlur("znPassWordLabel","znPassWord")}} onChange={(e)=>{this.inputChange(e,"znPassWord")}} defaultValue={this.state.znPassWord}/>
                            <label htmlFor="znPassWord" id="znPassWordLabel">用户密码</label>
                        </div>
                        <div className="form-group">
                            <input type="passWord" className="input" id="znPassWord2"  onFocus={()=>{this.inputFocus("znPassWordLabel2")}} onBlur={()=>{this.inputBlur("znPassWordLabel2","znPassWord2")}} onChange={(e)=>{this.inputChange(e,"znPassWord2")}} defaultValue={this.state.znPassWord2}/>
                            <label htmlFor="znPassWord2" id="znPassWordLabel2">确认密码</label>
                        </div>
                        <div className="form-group">
                            <input type="text" className="input" id="znNickName"  onFocus={()=>{this.inputFocus("znNickNameLabel")}} onBlur={()=>{this.inputBlur("znNickNameLabel","znNickName")}} onChange={(e)=>{this.inputChange(e,"znNickName")}} defaultValue={this.state.znNickName}/>
                            <label htmlFor="znNickName" id="znNickNameLabel">用户昵称</label>
                        </div>
                        <div className="form-group">
                            <input type="email" className="input" id="znEmail"  onFocus={()=>{this.inputFocus("znEmailLabel")}} onBlur={()=>{this.inputBlur("znEmailLabel","znEmail")}} onChange={(e)=>{this.inputChange(e,"znEmail")}} defaultValue={this.state.znEmail}/>
                            <label htmlFor="znEmail" id="znEmailLabel">用户邮箱</label>
                        </div>
                        <div className="form-group">
                            <input type="text" className="input" id="znName"  onFocus={()=>{this.inputFocus("znNameLabel")}} onBlur={()=>{this.inputBlur("znNameLabel","znName")}} onChange={(e)=>{this.inputChange(e,"znName")}} defaultValue={this.state.znName}/>
                            <label htmlFor="znName" id="znNameLabel">联系人姓名</label>
                        </div>
                        <div className="form-group">
                            <input type="text" className="input" id="znBirthday"  onFocus={()=>{this.inputFocus("znBirthdayLabel")}} onBlur={()=>{this.inputBlur("znBirthdayLabel","znBirthday")}} onChange={(e)=>{this.inputChange(e,"znBirthday")}} defaultValue={this.state.znBirthday}/>
                            <label htmlFor="znBirthday" id="znBirthdayLabel">用户邮箱</label>
                        </div>
                        <div className="form-group form-group-mis">
                            <input type="text" className="input" id="znTelephone"  onFocus={()=>{this.inputFocus("znTelephoneLabel")}} onBlur={()=>{this.inputBlur("znTelephoneLabel","znTelephone")}} onChange={(e)=>{this.inputChange(e,"znTelephone")}} defaultValue={this.state.znTelephone}/>
                            <label htmlFor="znTelephone" id="znTelephoneLabel">联系人电话</label>
                        </div>
                        <div className="form-group form-group-mis form-group-min">
                            <input type="text" className="input" id="znCode"  onFocus={()=>{this.inputFocus("znCodeLabel")}} onBlur={()=>{this.inputBlur("znCodeLabel","znCode")}} onChange={(e)=>{this.inputChange(e,"znCode")}} defaultValue={this.state.znCode}/>
                            <label htmlFor="znCode" id="znCodeLabel">验证码</label>
                            <input type="button" className="button" defaultValue={this.state.btnText} disabled={this.state.discodeBtn} onClick={this.sendCode} />
                        </div>
                        <div className="clear"></div>

                    </div>
                    <div className="info">{this.state.errorInfo}</div>
                    <div className="btn">注册</div>
                    <div className="agree">
                        <input className="input" defaultChecked type="checkbox"/>
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