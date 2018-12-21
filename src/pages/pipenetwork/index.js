import React from 'react'
import './index.less';
import {connect} from 'react-redux'
import {switch_menuShowBool,switchIndex} from '../../redux/action/index'
import rightImg from '../../assets/img/pipenetwork_banner.png';
import yins from '../../assets/img/yins.png';
class PipeNetwork extends React.Component {
    componentDidMount() {
        this.props.menuShowBool({
            'isShow': 'block'
        });
        this.props.menuInit(null);
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="pipenetwork-wrap">
                <div className="banner">
                    <div className="conent">
                        <div  className="left">
                            <h2>供热管网水力分析计算软件</h2>
                            <p>供热管网水力分析计算软件是一款集设计、校核、在线仿真为一 体的专业计算软件</p>
                            <a href="javascript:;">了解相关产品</a>
                        </div>
                        <div className="right">
                            <img src={rightImg} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="m_q">
                    <div className="text">
                        该软件能够针对不同室外参数、不同热源运行模式（单热源、多热源联网运行）、不同热网形式（枝状管网、环形管网）进行供热系统设计工程、改扩建工程、运行工况及事故工况下管网的水力特性和热力特性的模拟计算分析，为供热系统提供可靠的决策服务。软件包含较为完整的管道、水泵、调节阀、其他局部阻力元件类型库，同时含有常用热网计算参数数据库。
                    </div>
                    <div className="text">
                        用户参照插入的底图进行建模，软件可自动获取所绘制管道的长度，同时可识别局部阻力元件实现该管道沿程阻力及局部阻力的精细化计算；该软件具有强大的模拟计算结果显示功能，可选择输出详细报告、简要报告、水压图、数据参数平面图、费用报告等，并支持打印和保存。
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
export default connect(mapStateToProps, mapDispatchToProps)(PipeNetwork)