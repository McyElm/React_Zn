import React from 'react'
import './index.less';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {switch_menuShowBool,switchIndex} from '../../redux/action/index'
import banner from '../../assets/img/programmes_banner.png';
import tools01 from '../../assets/img/programmes01.png';
import tools02 from '../../assets/img/programmes02.png';
import tools03 from '../../assets/img/programmes03.png';
import tools04 from '../../assets/img/programmes04.png';
import utils from '../../utils/utils'
class Programmes extends React.Component {
    constructor(props) {
        super(props);
        this.scrollChange = this.scrollChange.bind(this);
    }
    componentDidMount() {
        this.props.menuShowBool({
            'isShow': 'block'
        });
        this.props.menuInit("4");
        window.scrollTo(0, 0);
    }
    scrollChange(e,anchorName){
        var items=document.getElementsByClassName("item");
        for(var i=0;i<items.length;i++){
            items[i].className="item";
        }
        e.target.className="item item_active";
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
            <div className="programmes-wrap">
                <div className="banner">
                    <div className="conent">
                        <div  className="left">
                            <h2>暖虎解决方案</h2>
                        </div>
                        <div className="right">
                            <img src={banner} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="m_q">
                    <div  onClick={(e)=>{this.scrollChange(e,"box1")}} className="item ">
                        集中供热能效提升解决方案
                    </div>
                    <div  onClick={(e)=>{this.scrollChange(e,"box2")}} className="item ">
                        物联网设备的热力数据托管服务
                    </div>
                    <div  onClick={(e)=>{this.scrollChange(e,"box3")}} className="item ">
                        企业级平台的热力数据托管服务
                    </div>
                    <div  onClick={(e)=>{this.scrollChange(e,"box4")}} className="item">
                        暖虎服务队
                    </div>
                </div>
                <div className="clear"></div>
                <div className="dash"></div>
                <div className="m_q_2" id="box1">
                    <h6>集中供热能效提升解决方案</h6>
                    <div className="con">
                        <img className="img img01" src={tools01} alt=""/>
                        <div className="text">根据我们的实践经验总结，对集中供热的热网系统进行能效提升改造应采用如下过程实施：(1)	明确三个核心指标供热质量：平均室温、室温合格率、有效投诉率、维修满意率供热能效：热源：供热量、耗煤量、耗电量、热效率、耗水量、设备能效等热力站：耗热量、耗电量、耗水量、设备能效等管网：输热效率、水力平衡等建筑物：热指标、属性、供热方式等供热安全：可靠性、故障率、故障时间。
                        </div>
                        <Link to="/solutionEnergyEfficiency" className="to_details_r">立即了解</Link>
                    </div>
                </div>
                <div className="m_q_2" id="box2">
                    <h6>物联网设备的热力数据托管服务</h6>
                    <div className="con">

                        <div className="text text2"> 提供二级网平衡调节、热用户室温采集等系统的云端运行托管服务。云端平台面向基于物联网通讯的智能调节阀、用户室温采器等设备，采用科学调控手段和智能分析工具管理系统，同时可输出评价结果、存储过程和历史数据。
                        </div>
                        <img className="img img02" src={tools02} alt=""/>
                        <a  className="to_details_l">立即了解</a>
                    </div>
                </div>
                <div className="m_q_2" id="box3">
                    <h6>企业级平台的热力数据托管服务</h6>
                    <div className="con">
                        <img className="img img03" src={tools03} alt=""/>
                        <div className="text text3">提供企业级热网监控系统的云端运行托管服务。云端平台采集分析热源、热力站、中级泵站、管网监测系统数据，采用科学调控手段和智能分析工具，进行系统运行评价、设备健康诊断、供热质量分析等工作，同时可输出评价结果、存储过程和历史数据。</div>
                        <a  className="to_details_r">立即了解</a>
                    </div>
                </div>
                <div className="m_q_2" id="box4">
                    <h6>暖虎服务队</h6>
                    <div className="con">
                        <div className="text text4">为帮助用户在使用暖虎云平台的产品和服务时获得更好的体验，
                            我们配置了专业的服务队伍，可提供OTO模式的全面服务。
                        </div>
                        <img className="img img04" src={tools04} alt=""/>
                        <Link to="/serviceTeam" className="to_details_l">立即了解</Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(Programmes)