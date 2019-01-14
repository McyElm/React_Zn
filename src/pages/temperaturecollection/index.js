import React from 'react'
import './index.less';
import {connect} from 'react-redux'
import {switch_menuShowBool,switchIndex} from '../../redux/action/index'
import rightImg from '../../assets/img/temperatureCollection_banner.png';
import img01 from '../../assets/img/temperatureCollection_01.jpg';
import img02 from '../../assets/img/temperatureCollection_02.jpg';
import img03 from '../../assets/img/temperatureCollection_03.jpg';
import img04 from '../../assets/img/temperatureCollection_04.jpg';
import {signBaseUrl,localBaseUrl,zhBaseUrl,znBaseUrl,zzBaseUrl}  from '../../config/Config'
class TemperatureCollection extends React.Component {
    componentDidMount() {
        this.props.menuShowBool({
            'isShow': 'block'
        });
        this.props.menuInit("2");
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="temperaturecollection-wrap">
                <div className="banner">
                    <div className="conent">
                        <div  className="left">
                            <h2>室温采集分析平台</h2>
                            <p>室温采集分析平台部署在云端，支持PC端和移动端访问。</p>
                            <a href="javascript:;">了解相关产品</a>
                        </div>
                        <div className="right">
                            <img src={rightImg} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="m_q">
                    <div className="j_f_t">
                        <div className="j_f_t_img"></div>
                        <div className="j_f_t_text">产品概述</div>
                    </div>
                </div>
                <div className="con">
                    <div className="con_l">室温采集分析平台部署在云端，支持PC端和移动端访问。 室温数据通过无线通讯网络推送至云平台数据服务端处理，在平台进行分析、存储和展示。目前可接入电信、联通或移动网络运营商的4G和NB-IOT通讯设备。</div>
                    <div className="con_m">
                        <img src={img01} alt=""/>
                    </div>
                    <div className="con_r">平台可进行温度查询和分析统计，主要采用报表方式展示，辅助棒图、饼图、曲线等工具， 并利用GIS地图直观反映不同区域的供热质量，便于用户全面掌握供暖情况。可作为政府监管辖区内供热质量、提高供热企业运行管理水平重要工具。</div>
                </div>
                <div className="m_q">
                    <div className="j_f_t">
                        <div className="j_f_t_img"></div>
                        <div className="j_f_t_text">采集室内温度的热用户选取原则</div>
                    </div>
                </div>
                <div className="con2">
                    <div className="con_b">
                        <img src={img02} alt=""/>
                        <p>每栋楼边户、底层、顶层、中间位置</p>
                    </div>
                    <div className="con_b">
                        <img src={img03} alt=""/>
                        <p>供热系统近端、最不利端和中间位置</p>
                    </div>
                    <div className="con_b">
                        <img src={img04} alt=""/>
                        <p>安装室温采集器热用户数量为总用户数量的5~10%</p>
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
export default connect(mapStateToProps, mapDispatchToProps)(TemperatureCollection)