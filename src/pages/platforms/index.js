import React from 'react'
import './index.less';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {switch_menuShowBool,switchIndex} from '../../redux/action/index'
import banner from '../../assets/img/platforms_banner.png';
import tools01 from '../../assets/img/platforms01.png';
import tools02 from '../../assets/img/platforms02.png';
import tools03 from '../../assets/img/platforms03.png';
import tools04 from '../../assets/img/tools04.png';
import utils from '../../utils/utils'
class Platforms extends React.Component {
    constructor(props) {
        super(props);
        this.scrollChange = this.scrollChange.bind(this);
    }
    componentDidMount() {
        this.props.menuShowBool({
            'isShow': 'block'
        });
        this.props.menuInit("2");
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
            <div className="platforms-wrap">
                <div className="banner">
                    <div className="conent">
                        <div  className="left">
                            <h2>暖虎应用平台</h2>
                        </div>
                        <div className="right">
                            <img src={banner} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="m_q">
                    <div  onClick={(e)=>{this.scrollChange(e,"box1")}} className="item ">
                        智能调节阀管理平台
                    </div>
                    <div  onClick={(e)=>{this.scrollChange(e,"box2")}} className="item ">
                        室温采集分析平台
                    </div>
                    <div  onClick={(e)=>{this.scrollChange(e,"box3")}} className="item ">
                        智能供热iSCADA平台
                    </div>

                </div>
                <div className="clear"></div>
                <div className="dash"></div>
                <div className="m_q_2" id="box1">
                    <h6>智能调节阀管理平台</h6>
                    <div className="con">
                        <img className="img img01" src={tools01} alt=""/>
                        <div className="text">智能调节阀管理平台是集中供热户间智能调节阀的智能管理平台，包括云端平台、移动端APP。平台采用云计算、大数据分析、负载均衡、高并发数据处理等技术，可与百万数量级智能调节阀进行数据交互，采集、分析用户供热数据，通过先进的负荷预测和供热控制策略指导智能调节阀工作，以热力站供热系统覆盖区域的所有热用户为调节对象，最终使供热系统实现水力和热力平衡....</div>
                        <Link to="/intelligentValve" className="to_details_r">立即了解</Link>
                    </div>
                </div>
                <div className="m_q_2" id="box2">
                    <h6>室温采集分析平台</h6>
                    <div className="con">

                        <div className="text text2">平台可进行温度查询和分析统计，主要采用报表方式展示，辅助棒图、饼图、曲线等工具，并利用GIS地图直观反映不同区域的供热质量，便于用户全面掌握供暖情况。可作为政府监管辖区内供热质量、提高供热企业运行管理水平重要工具。
                        </div>
                        <img className="img img02" src={tools02} alt=""/>
                        <a  className="to_details_l">立即了解</a>
                    </div>
                </div>
                <div className="m_q_2" id="box3">
                    <h6>智能供热ISCADA平台</h6>
                    <div className="con">
                        <img className="img img03" src={tools03} alt=""/>
                        <div className="text text3">智能供热iSCADA平台核心关注热网的供热质量、供热能效和供热安全，依托计算机软硬件、通讯设备、自动化设备及仪表等，利用互联网、物联网、可视化、大数据分析、数据管理、信息安全等技术，通过智能决策与分析系统，实现对热网的精准控制和按需供热，并帮助企业提高管理水平，降低生产成本...</div>
                        <Link to="/iscada" className="to_details_r">立即了解</Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(Platforms)