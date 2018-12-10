import React from 'react'
import './index.less';
import {connect} from 'react-redux'
import {switch_menuShowBool,switchIndex} from '../../redux/action/index'
import rightImg from '../../assets/img/jonebannerright.png';
import m01 from '../../assets/img/m01.png';
import m02 from '../../assets/img/m02.png';
import m03 from '../../assets/img/m03.png';
import z01 from '../../assets/img/z01.png';
import cy from '../../assets/img/cy.png';
import xz01 from '../../assets/img/xz01.png';
import xz02 from '../../assets/img/xz02.png';
import xz03 from '../../assets/img/xz03.png';
import js from '../../assets/img/js.png';
class Jone extends React.Component {
    componentDidMount() {
        this.props.menuShowBool({
            'isShow': 'block'
        });
        this.props.menuInit("4");
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="Jone-wrap">
                <div className="banner">
                    <div className="conent">
                        <div  className="left">
                            <h2>集中供热能效提升解决方案</h2>
                            <p>根据我们的实践经验总结，对集中供热的热网系统进行能效提升 <br/> 改造应采用如下过程实施</p>
                            <a href="####">了解相关产品</a>
                        </div>
                        <div className="right">
                            <img src={rightImg} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="m_q">
                    <div className="j_f_t">
                        <div className="j_f_t_img"></div>
                        <div className="j_f_t_text">明确三个核心指标</div>
                    </div>
                    <div className="box">
                        <div className="item">
                            <img className="" src={m01} alt=""/>
                            <p className="">供热质量</p>
                            <div className="des des2">平均室温、室温合格率、有效投诉率、维修满意率</div>
                        </div>
                        <div className="item">
                            <img className="" src={m02} alt=""/>
                            <p className="">供热能效</p>
                            <div className="des des2">
                                <div className="lev1">
                                    <div className="m">热&nbsp;&nbsp;&nbsp;源：</div>
                                    <div className="c">供热量、耗煤量、耗电量、热效率、耗水量、设备能效等</div>
                                </div>
                                <div className="lev1">
                                    <div className="m">热力站：</div>
                                    <div className="c">耗热量、耗电量、耗水量、设备能效等</div>
                                </div>
                                <div className="lev1">
                                    <div className="m">管&nbsp;&nbsp;&nbsp;网：</div>
                                    <div className="c">输热效率、水力平衡等</div>
                                </div>
                                <div className="lev1">
                                    <div className="m">建筑物：</div>
                                    <div className="c">热指标、属性、供热方式等</div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img className="" src={m03} alt=""/>
                            <p className="">供热安全</p>
                            <div className="des des2">可靠性、故障率、故障时间</div>
                        </div>
                    </div>
                </div>
                <div className="m_q">
                    <div className="j_f_t">
                        <div className="j_f_t_img"></div>
                        <div className="j_f_t_text">遵循一个基本原则</div>
                    </div>
                    <div className="box">
                        <div className="left">
                            <img src={z01} alt=""/>
                            <p className="titie">精准控制  按需供热</p>
                        </div>
                        <div className="right">
                            <p>实现目标</p>
                            <ul>
                                <li>
                                    <span className="count">1</span>
                                    <span className="text">降低一次网回水温度，全面提升管网输送能力</span>
                                </li>
                                <li>
                                    <span  className="count">2</span>
                                    <span className="text">降低二次网供回水平均温度，有效降低系统热耗</span>
                                </li>
                                <li>
                                    <span  className="count">3</span>
                                    <span className="text">提高二次网供回水温差，大幅降低电耗</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="m_q">
                    <div className="j_f_t">
                        <div className="j_f_t_img"></div>
                        <div className="j_f_t_text">采用三个实施过程</div>
                    </div>
                    <div className="box box2">
                        <div className="left cy_left">
                            <img src={cy} alt=""/>
                        </div>
                        <div className="right">
                            <div>
                                <p>科学测评</p>
                                <h6>
                                    掌握既有设计方案和热用户数据,分析历史数据,校核现场 仪表、电调阀、水泵和换热器的选型及安装等的适当性。
                                </h6>
                            </div>
                            <div>
                                <p>优化设计</p>
                                <h6>
                                    进行热力管网水力平衡计算分析；设计科学的工艺和自控 系统方案，制定按需供热的控制策略和调节方法；选配合 理的工艺设备和仪表。
                                </h6>
                            </div>
                            <div>
                                <p>规范施工</p>
                                <h6>
                                    依据相关国家标准规范和制造商企业标准，正确安装仪表、 调阀等，正确敷设电缆和建立接地系统等。
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m_q">
                    <div className="j_f_t">
                        <div className="j_f_t_img"></div>
                        <div className="j_f_t_text">选择三类产品</div>
                    </div>
                    <div className="box">
                        <div className="item">
                            <img className="" src={xz01} alt=""/>
                            <p className="p1">热网监控系统</p>
                            <div className="des">以生产调度为核心的企业 级智能热网监控系统</div>
                        </div>
                        <div className="item">
                            <img className="" src={xz02} alt=""/>
                            <p className="p1">工艺产品系列</p>
                            <div className="des">以换热站工艺为核心的板 式换热器、智能换热机组 、分布式控制系统</div>
                        </div>
                        <div className="item">
                            <img className="" src={xz03} alt=""/>
                            <p className="p1">云端管理平台</p>
                            <div className="des">以二次网平衡为核心的单 元、户端智能阀及云端管 理平台</div>
                        </div>
                    </div>
                </div>
                <div className="m_q">
                    <div className="j_f_t">
                        <div className="j_f_t_img"></div>
                        <div className="j_f_t_text">建设一个智能平台</div>
                    </div>
                    <div className="box">
                        <div className="left js">
                            <img src={js} alt=""/>
                        </div>
                        <div className="right js_right">
                            &nbsp;&nbsp;&nbsp;具有调度指令“一键搞掂”、换热站二级网运行“一系统一线”、热源不足“均匀降载”、极寒天气“提前蓄热”、供暖末期“分组轮停”、学校假期、非工作时间“分时供暖”功能；
                            可进行负荷预测、智能调度、运行评价、健康诊断等决策分析。

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
export default connect(mapStateToProps, mapDispatchToProps)(Jone)