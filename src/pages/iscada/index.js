import React from 'react'
import './index.less';
import {connect} from 'react-redux'
import {switch_menuShowBool,switchIndex} from '../../redux/action/index'
import banner from '../../assets/img/iscada_banner.png';
import is01 from '../../assets/img/iscada01.png';
import is02 from '../../assets/img/iscada02.png';
import is03 from '../../assets/img/iscada03.png';
import is04 from '../../assets/img/iscada04.png';
import is05 from '../../assets/img/iscada05.png';
import is06 from '../../assets/img/iscada06.png';
class Iscada extends React.Component {
    componentDidMount() {
        this.props.menuShowBool({
            'isShow': 'block'
        });
        this.props.menuInit("2");
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="Iscada-wrap">
                <div className="banner">
                    <div className="conent">
                        <div  className="left">
                            <h2>智能供热iSCADA平台</h2>
                            <p>智能供热iSCADA平台核心关注热网的供热质量、供热能效和供 <br/> 热安全</p>
                            <a href="javascript:;">立即体验</a>
                        </div>
                        <div className="right">
                            <img src={banner} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="m_q">
                    <div className="j_f_t">
                        <div className="j_f_t_img"></div>
                        <div className="j_f_t_text">产品概述</div>
                    </div>
                    <div className="box">
                        <div className="left">
                            <div className="text">
                            依托计算机软硬件、通讯设备、自动化设备及仪表等，利用互联网、物联网、可视化、大数据分析、数据管理、信息安全等技术，通过智能决策与分析系统，实现对热网的精准控制和按需供热，并帮助企业提高管理水平，降低生产成本。
                            本平台可全面监测系统运行状态、自动调控设备；能多维度量化能耗指标、分析评价供热质量、诊断供热设备的健康状况；可对主要设备进行全生命周期维护及管理。智慧供热专家知识库具有自学习能力，可智能参与分析、决策、调度、诊断、安全等管理过程，实现热网的安全、稳定运行。
                            </div>
                            </div>
                        <div className="right">
                            <div className="img_box">
                                <img src={is01} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m_q">
                    <div className="j_f_t">
                        <div className="j_f_t_img"></div>
                        <div className="j_f_t_text">核心功能</div>
                    </div>
                    <div className="box">
                        <div className="left left_min">
                            <div className="img_box img_box_left_min">
                                <img src={is02} alt=""/>
                                <p className="titie">智能调度功能</p>
                            </div>
                        </div>
                        <div className="right right_min">
                            {/*<p>智能调度功能</p>*/}
                            <ul>
                                <li>
                                    <span className="count">1</span>
                                    <span className="text">调度指令：“一键搞掂”</span>
                                </li>
                                <li>
                                    <span  className="count">2</span>
                                    <span className="text">换热站二级网运行：“一系统一线”</span>
                                </li>
                                <li>
                                    <span  className="count">3</span>
                                    <span className="text">热源不足：“均匀降载”</span>
                                </li>
                                <li>
                                    <span  className="count">4</span>
                                    <span className="text">极寒天气：“提前蓄热”</span>
                                </li>
                                <li>
                                    <span  className="count">5</span>
                                    <span className="text">供暖末期：“分组轮停”</span>
                                </li>
                                <li>
                                    <span  className="count">6</span>
                                    <span className="text">学校假期、非工作时间：“分时供暖”</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="m_q m_q_p m_q_b">
                    <div className="j_f_t"><div className="j_f_t_text j_f_t_text2">分析决策功能</div></div>
                    <div className="box">
                        <div className="right">
                            <h2 className="h2">负荷预测</h2>
                            <div className="text text2">根据未来室外温度平均值，分析该温度下的全网负荷预测结果，结合历史热量使用情况综合计算、分析确定综合负荷及各系统曲线合理性，为供热调度提供精确的数值依据。</div>
                        </div>
                        <div className="left">
                            <div className="img_box img_box_left">
                                <img src={is03} alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="m_q m_q_b m_q_f">
                    <div className="box">
                        <div className="left">
                            <div className="img_box img_box2">
                                <img src={is04} alt=""/>
                            </div>
                        </div>
                        <div className="right">
                            <h2 className="h2 h3">智能调度</h2>
                            <div className="text text3">根据负荷预测的结果及热源的实际供热状况，决定各供热系统的供热目标，给出建议数据。<br/>
                                供热策略：常规供暖、分时供暖、均匀降载、提前蓄热、分组轮停。
                            </div>
                        </div>


                    </div>
                </div>
                <div className="m_q  m_q_b m_q_g">
                    <div className="box">
                        <div className="right">
                            <h2 className="h2 h3">运行评价</h2>
                            <div className="text text3">供热质量：通过对室内平均温度、室温合格率及有效投诉率分析供热质量。<br/>
                                能耗分析：依据行业规范规定的指标，对“主要能耗”进行计算分析，给出评价结果。
                            </div>
                        </div>
                        <div className="left">
                            <div className="img_box img_box_left">
                                <img src={is05} alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="m_q m_q_b">
                    <div className="box">
                        <div className="left">
                            <div className="img_box img_box2 img_box3">
                                <img src={is06} alt=""/>
                            </div>
                        </div>
                        <div className="right">
                            <h2 className="h2 h3">健康诊断</h2>
                            <div className="text text3">
                               建立档案库和维护记录库；<br/>
                               记录设备及仪表的运行、维修、故障事项；<br/>
                               对主要设备及仪表健康状况进行分析诊断；<br/>
                               按设备和仪表分类，给出统计结果。<br/>
                               设备：水泵、电动调节阀、变频器、热交换器等<br/>
                               仪表：温度传感器、压力变送器、流量计、热表、电表等<br/>
                            </div>
                        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Iscada)