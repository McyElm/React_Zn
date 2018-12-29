import React from 'react'
import './index.less';
import {connect} from 'react-redux'
import {switch_menuShowBool,switchIndex} from '../../redux/action/index'
import banner from '../../assets/img/iscada_banner.png';
import tools01 from '../../assets/img/tools01.jpg';
import utils from '../../utils/utils'
class Tools extends React.Component {
    constructor(props) {
        super(props);
        this.scrollChange = this.scrollChange.bind(this);

    }
    componentDidMount() {
        this.props.menuShowBool({
            'isShow': 'block'
        });
        this.props.menuInit("3");
        window.scrollTo(0, 0);
    }
    scrollChange(anchorName){
        if (anchorName) {
            if(document.getElementById(anchorName)){
                const scrollHeight = document.getElementById(anchorName).offsetTop
                const currentY = document.documentElement.scrollTop || document.body.scrollTop
                utils.scroll(currentY,scrollHeight-100)
            }


        }
    }
    render() {
        return (
            <div className="tools-wrap">
                <div className="banner">
                    <div className="conent">
                        <div  className="left">
                            <h2>暖虎服务工具</h2>
                        </div>
                        <div className="right">
                            <img src={banner} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="m_q">
                    <div  onClick={()=>{this.scrollChange("box1")}} className="item">
                        热力管网水力平衡计算分析软件
                    </div>
                    <div  onClick={()=>{this.scrollChange("box2")}} className="item">
                        枝状管网水力平衡计算软件
                    </div>
                    <div  onClick={()=>{this.scrollChange("box3")}} className="item">
                        供热系统校核、设计、仿真软件
                    </div>
                    <div  onClick={()=>{this.scrollChange("box4")}} className="item itemr itemp">
                        热力站设备测评软件
                    </div>
                    <div className="clear"></div>
                    <div className="dash"></div>
                </div>
                <div className="m_q_2" id="box1">
                    <h6>热力管网水力平衡计算分析软件</h6>
                    <div className="con">
                        <img className="img img01" src={tools01} alt=""/>
                        <div className="text">该软件能够针对不同室外参数、不同热源运行模式（单热源、多热源联网运行）、不同热网形式（枝状管网、环形管网）进行供热系统设计工程、改扩建工程、运行工况及事故工况下管网的水力特性和热力特性的模拟计算分析，为供热系统提供可靠的决策服务。软件包含较为完整的管道、水泵、调节阀、其他局部阻力元件类型库，同时含有常用热网计算参数数据库。</div>
                    </div>
                </div>
                <div className="m_q_2" id="box2">
                    <h6>枝状管网水力平衡计算软件</h6>
                    <div className="con">

                        <div className="text">该软件能够针对不同室外参数、不同热源运行模式（单热源、多热源联网运行）、不同热网形式（枝状管网、环形管网）进行供热系统设计工程、改扩建工程、运行工况及事故工况下管网的水力特性和热力特性的模拟计算分析，为供热系统提供可靠的决策服务。软件包含较为完整的管道、水泵、调节阀、其他局部阻力元件类型库，同时含有常用热网计算参数数据库。</div>
                        <img className="img img01" src={tools01} alt=""/>
                    </div>
                </div>
                <div className="m_q_2" id="box3">
                    <h6>供热系统校核、设计、仿真软件</h6>
                    <div className="con">
                        <img className="img img01" src={tools01} alt=""/>
                        <div className="text">该软件能够针对不同室外参数、不同热源运行模式（单热源、多热源联网运行）、不同热网形式（枝状管网、环形管网）进行供热系统设计工程、改扩建工程、运行工况及事故工况下管网的水力特性和热力特性的模拟计算分析，为供热系统提供可靠的决策服务。软件包含较为完整的管道、水泵、调节阀、其他局部阻力元件类型库，同时含有常用热网计算参数数据库。</div>
                    </div>
                </div>
                <div className="m_q_2" id="box4">
                    <h6>热力站设备测评软件</h6>
                    <div className="con">
                        <div className="text">该软件能够针对不同室外参数、不同热源运行模式（单热源、多热源联网运行）、不同热网形式（枝状管网、环形管网）进行供热系统设计工程、改扩建工程、运行工况及事故工况下管网的水力特性和热力特性的模拟计算分析，为供热系统提供可靠的决策服务。软件包含较为完整的管道、水泵、调节阀、其他局部阻力元件类型库，同时含有常用热网计算参数数据库。</div>
                        <img className="img img01" src={tools01} alt=""/>
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
export default connect(mapStateToProps, mapDispatchToProps)(Tools)