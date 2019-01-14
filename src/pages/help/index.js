import React from 'react'
import './index.less';
import {connect} from 'react-redux'
import {switch_menuShowBool, switchIndex} from '../../redux/action/index'
import {Link} from 'react-router-dom'
import rightImg from '../../assets/img/help_banner.png';
import conn from '../../assets/img/conn.png';
import ewm from '../../assets/img/ewm.png';
import utils from '../../utils/utils'
import {Tabs,Modal} from 'antd';
const confirm = Modal.confirm;
const TabPane = Tabs.TabPane;
class Help extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this)
        this.inputChange = this.inputChange.bind(this)
        this.inputFocus = this.inputFocus.bind(this)
        this.initIndex = this.initIndex.bind(this)
        this.callback = this.callback.bind(this)
        this.download = this.download.bind(this)

    }

    componentDidMount() {
        this.props.menuShowBool({
            'isShow': 'block'
        });
        this.props.menuInit("5");
        window.scrollTo(0, 0);
        this.initIndex()
    }
    download(url){
        var that=this;
        if(this.props.userInfo.isLogIn!==false){
            window.open(url)
        }else{
            confirm({
                title: '暖虎云平台',
                content: '请您登录暖虎云平台后下载',
                okText: '登录',
                cancelText: '取消',
                onOk() {
                    that.props.history.push("/signIn")
                },
                onCancel() {
                },
            });
        }
    }
    initIndex(){
        const { search } = this.props.location;
        const paramsString = search.substring(1);
        if(paramsString){
            const searchParams = new URLSearchParams(paramsString);
            const index = searchParams.get('key');
            this.setState({key: index})
        }
    }
    state={
        znTelephone:"",
        znEmail:"",
        znQq:"",
        znTextArea:"",
        errorInfo:"",
        key:'1',

    }
    submit(){
        if (utils.trim(this.state.znTextArea) =='') {
            this.setState({
                errorInfo: "问题与建议描述不能为空！"
            });
            return;
        }
        var that=this;
        Modal.success({
            title: '反馈成功',
            content: (
                <div>
                    <p>我们会认真查阅您反馈的每一个问题，并尽快给您答复!</p>
                </div>
            ),
            onOk() {
                that.props.history.push("/home")
            },
        });
    }
    inputChange(e, type) {
        var value = e.target.value;
        this.setState({
            [type]: value
        });
    }
    callback(key) {
        this.setState({
            key:key
        })
    }
    inputFocus() {
        this.setState({
            errorInfo: ''
        })
    }
    render() {

        return (
            <div className="help-wrap">
                <div className="contnet">
                    <div className="btn">帮助中心</div>
                    <img src={rightImg} alt=""/>
                </div>
                <div className="tab_box">
                    <Tabs activeKey={this.state.key} onChange={this.callback}>
                        <TabPane tab="新手入门" key="1">
                            <div className="tap">
                                <div className="tab_item">
                                    <h4>暖虎云平台</h4>
                                </div>
                                <div className="tab_item">
                                    <h4>服务工具</h4>
                                </div>
                                <div className="tab_item">
                                    <h4>应用平台</h4>
                                    <div className="a" onClick={()=>{this.download("/pipeNetwork/账号管理平台用户操作手册V_2.1.pdf")}}>账号管理平台用户操作手册</div>
                                    <div className="a" onClick={()=>{this.download("/pipeNetwork/智能调节阀管理系统APP端用户操作手册_V1.1 _1113.pdf")}}>智能调节阀管理系统APP端用户操作手册</div>
                                    <div className="a" onClick={()=>{this.download("/pipeNetwork/智能调节阀管理系统用户操作手册_V1.1 _1109.pdf")}}>智能调节阀管理系统用户操作手册</div>
                                    <div className="a" onClick={()=>{this.download("/pipeNetwork/中能股份热网水力计算分析软件用户操作手册_V1.1 _0828.pdf")}}>中能股份热网水力计算分析软件用户操作手册</div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="文档下载" key="2">
                            <div className="tap">
                                <div className="tab_item">
                                    <h4>应用平台文档</h4>
                                </div>
                                <div className="tab_item">
                                    <h4>账号管理文档</h4>
                                </div>

                            </div>
                        </TabPane>
                        <TabPane tab="问题反馈" key="3">
                            <div className="tap tap2">
                                <h2>欢迎反馈问题，您的意见与建议就是我们的动力！ </h2>
                                <h3>我们会认真查阅您反馈的每一个问题，并尽快给您答复，在这里您可以提出遇到的问题，也可以发布自己的建议和想法。</h3>
                                <h3>问题与建议描述：</h3>

                                <textarea className="textarea" value={this.state.znTextArea} onChange={(e) => {
                                    this.inputChange(e, "znTextArea")
                                }} onFocus={() => {
                                    this.inputFocus()
                                }} ></textarea>

                                <h3>如果您希望得到反馈，请留下您的联系方式：</h3>
                                <input type="text" onFocus={() => {
                                    this.inputFocus()
                                }}  onChange={(e) => {
                                    this.inputChange(e, "znTelephone")
                                }} value={this.state.znTelephone} maxLength="30" placeholder="手机" className="input"/>
                                <input type="text" onFocus={() => {
                                    this.inputFocus()
                                }}  onChange={(e) => {
                                    this.inputChange(e, "znQq")
                                }}   value={this.state.znQq} maxLength="30"placeholder="QQ/微信" className="input"/>
                                <input type="text" onFocus={() => {
                                    this.inputFocus()
                                }}  onChange={(e) => {
                                    this.inputChange(e, "znEmail")
                                }}  value={this.state.znEmail} maxLength="30" placeholder="邮箱" className="input input0"/>
                                <div className="errorInfo">{this.state.errorInfo}</div>
                                <div className="t_j" onClick={this.submit}>提交反馈</div>
                                <Link to="/home" className="q_x">取消</Link>
                            </div>

                        </TabPane>
                        <TabPane tab="联系我们" key="4">
                            <div className="conn_box">
                                <img src={conn} alt=""/>
                                <ul>
                                    <li>黑龙江省中能控制工程股份有限公司</li>
                                    <li>电话：0451-88006777</li>
                                    <li>传真：0451-86811680</li>
                                    <li>地址：哈尔滨经开区哈平路集中区哈平西路17号</li>
                                </ul>
                                <img className="ewm" src={ewm} alt=""/>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        userInfo:state.userInfo
    }
}
const mapDispatchToProps = dispatch => {
    return {
        menuShowBool: function (obj) {
            dispatch(switch_menuShowBool(obj))
        },
        menuInit: function (num) {
            dispatch(switchIndex(num))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Help)