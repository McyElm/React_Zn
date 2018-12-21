import React from 'react'
import './index.less';
import {connect} from 'react-redux'
import {switch_menuShowBool, switchIndex} from '../../redux/action/index'
import {Link} from 'react-router-dom'
import rightImg from '../../assets/img/help_banner.png';
import conn from '../../assets/img/conn.png';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;
class Help extends React.Component {
    componentDidMount() {
        this.props.menuShowBool({
            'isShow': 'block'
        });
        this.props.menuInit("5");
        window.scrollTo(0, 0);
    }

    callback(key) {
        console.log(key);
    }
    render() {
        return (
            <div className="help-wrap">
                <div className="contnet">
                    <div className="btn">帮助中心</div>
                    <img src={rightImg} alt=""/>
                </div>
                <div className="tab_box">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="新手入门" key="1">
                            <div className="tap">
                                <div className="tab_item">
                                    <h4>暖虎云平台</h4>
                                    <p>暖虎云平台使用说明</p>
                                </div>
                                <div className="tab_item">
                                    <h4>服务工具</h4>
                                    <a>供热管网水力分析计算软件使用说明</a>
                                    <a>枝状管网水力平衡计算软件使用说明</a>
                                    <a>供热系统校核、设计、仿真软件使用说明</a>
                                    <a>热力站设备测评软件使用说明</a>
                                </div>
                                <div className="tab_item">
                                    <h4>应用平台</h4>
                                    <a>智能调节阀管理平台使用说明</a>
                                    <a>室温采集分析平台使用说明</a>
                                    <a>智能供热iSCADA平台使用说明</a>
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
                                <textarea className="textarea"></textarea>
                                <h3>如果您希望得到反馈，请留下您的联系方式：</h3>
                                <input type="text" maxLength="30" placeholder="手机" className="input"/>
                                <input type="text" maxLength="30"placeholder="QQ/微信" className="input"/>
                                <input type="text" maxLength="30" placeholder="邮箱" className="input input0"/>
                                <div className="t_j">提交反馈</div>
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
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {}
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