import React from 'react'
import './index.less';
import {connect} from 'react-redux'
import {switch_menuShowBool,switchIndex} from '../../redux/action/index'
import rightImg from '../../assets/img/intelligent_banner.png';
import {signBaseUrl,localBaseUrl,zhBaseUrl,znBaseUrl,zzBaseUrl}  from '../../config/Config'
class IntelligentValve extends React.Component {
    componentDidMount() {
        this.props.menuShowBool({
            'isShow': 'block'
        });
        this.props.menuInit("2");
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="intelligentvalve-wrap">
                <div className="banner">
                    <div className="conent">
                        <div  className="left">
                            <h2>智能调节阀管理平台</h2>
                            <p>智能调节阀管理平台是集中供热户间智能调节阀的智能管理平台 ，包括云端平台、移动端APP</p>
                            <a href={znBaseUrl} target="frameZf">立即体验</a>
                        </div>
                        <div className="right">
                            <img src={rightImg} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="m_q">
                    <div className="text">
                        平台采用云计算、大数据分析、负载均衡、高并发数据处理等技术，可与百万数量级智能调节阀进行数据交互，采集、分析用户供热数据，通过先进的负荷预测和供热控制策略指导智能调节阀工作，以热力站供热系统覆盖区域的所有热用户为调节对象，最终使供热系统实现水力和热力平衡。
                    </div>
                    <div className="text">
                        智能调节阀管理平台采用B/S结构，支持PC端和移动端客户访问，不同权限的用户登录后，系统会根据管理员预先分配给当前用户的角色自动配置业务窗口，方便生产管理。平台主要功能包括授权管理、天气预报管理、基础信息管理、设备管理、数据统计分析、日志管理、同步与控制等。
                    </div>
                    <div className="text">
                        通过安装在智能手机上的移动端APP，用户可以对阀门进行云端注册、新旧阀门替换、配置阀门接入的采集通道，阀门开度操作，设置控制方式，读取故障信息。用户也可以随时在APP上浏览智能调节阀基础信息和健康状态，以及热用户供回水平均温度、回水温度、供回水压差、室内温度的当前数据或历史趋势曲线。
                    </div>
                    <div className="text">
                        在PC端上用户可以浏览各热力站供热系统下的智能调节阀基础信息、热用户当前或历史供热数据。平台提供了常规和分时控制两种供热方案以及多种控制策略，如室内温度控制法、供回水平均温度控制法、回水温度控制法，帮助运行人员实现供热系统的最优控制，并支持按热用户的建筑类型、供热方式、建筑物特性进行筛选比对供热数据，通过多种分析工具直观展示调控效果。用户也可以对各供热系统下的设备进行管理，如添加或删除设备、设置目标修正值、给定开度、改变控制方式或标识检修状态等。同时平台提供了丰富的日志文档，可查询运行记录、故障记录、报警记录，各种数据报表和记录表单可导出、可打印。
                    </div>
                    <div className="text">
                        智能调节阀管理平台具有完善的安全机制，采用多组织、多用户、多权限管理，包括系统管理员、管理员、系统工程师、安装员、经理、工程师、巡检员等多等级权限用户，通过暖虎账号管理平台可为各级用户配置相关业务，确保系统设备不会发生未经授权的操控。此外，平台的设备识别、用户识别机制也能防止非法用户入侵。总之，多种安全机制的设计和部署确保了供热系统的安全运行，使用户更安心使用平台进行生产管理。
                    </div>
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
        menuInit:function (num) {
            dispatch(switchIndex(num))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IntelligentValve)