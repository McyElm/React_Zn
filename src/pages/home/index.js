import React from 'react'
import Swiper from 'swiper';
import 'swiper/dist/idangerous.swiper.css';
import '../../assets/css/swiper3d.css';
import './index.less';
import nh_ypt from '../../assets/img/nh_ypt.png';
import ljnw from '../../assets/img/ljnw.png';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {switch_menuShowBool, switchIndex,switch_userInfo} from '../../redux/action/index'
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.LogOut = this.LogOut.bind(this);
        this.state = {
            item: []
        }
    }
    handleScroll() {
        var top = document.documentElement.scrollTop || document.body.scrollTop;
        if (top > 0) {
            this.props.menuShowBool({
                'isShow': 'block'
            })
        } else {
            this.props.menuShowBool({
                'isShow': 'none'
            })
        }
    }
    LogOut(){
        if(window.confirm("确定退出吗？"))
        {
            this.props.LogOutProps({
                isLogIn:false,
                userName:''
            })
        }

    }
    componentDidMount() {
        this.props.menuShowBool({
            'isShow': 'none',
        });
        this.props.menuInit(null);
        let mySwiper = new Swiper('.swiper-container', {
            loop: true,
            slidesPerView: 3,
            centeredSlides: true,
            loopAdditionalSlides: 3,
            tdFlow: {
                rotate: 0,
                depth: 110,
            },
            onSlideClick: function (swiper) {
                // mySwiper.swipeTo(swiper.clickedSlideIndex, 1000, false);
            }
        });
        document.getElementById("left").onclick = function () {
            mySwiper.swipePrev();
        }
        document.getElementById("right").onclick = function () {
            mySwiper.swipeNext();
        }
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <div className="home-wrap">
                <div className="b_g">

                </div>
                <div className="colud">
                </div>
                <div className="home_header">
                    <div className=""></div>
                    <div className="top">
                        <div className="logo"><img src={nh_ypt} alt=""/></div>
                        <ul className="list">
                            <li data-index="1" className="li">服务社区</li>
                            <li data-index="2" className="li">
                                应用平台
                                <ul className="menu">
                                    <a   to="/">智能调节阀管理平台</a>
                                    <a   to="/">室温采集分析平台 <span>&lt;建设中 &gt;</span></a>
                                    <Link   to="/Iscada">智能供热iSCADA平台</Link>
                                </ul>
                            </li>
                            <li data-index="3" className="li">
                                服务工具
                                <ul className="menu">
                                    <a   to="/">热力管网水力平衡计算分析软件</a>
                                    <a   to="/">枝状管网水力平衡计算软件</a>
                                    <a   to="/">供热系统校核、设计、仿真软件<span>&lt;敬请期待&gt;</span></a>
                                    <a   to="/">热力站设备测评软件<span>&lt;敬请期待&gt;</span></a>
                                </ul>
                            </li>
                            <li data-index="4" className="li ">
                                解决方案
                                <ul className="menu">
                                    <Link   to="/solutionEnergyEfficiency">集中供热能效提升解决方案</Link>
                                    <a   to="/">物联网设备的热力数据托管服务<span>&lt;建设中&gt;</span></a>
                                    <a   to="/">企业级监管平台的热力数据托管服务<span>&lt;敬请期待&gt;</span></a>
                                    <a   to="/">暖虎服务队</a>
                                </ul>
                            </li>
                            <li data-index="5" className="li bz">帮助中心</li>
                        </ul>
                        {
                            this.props.userInfo.isLogIn==false?(<div className="d_right">
                                    <Link className="li zc" to="/signUp">
                                        免费注册
                                    </Link>
                                    <Link className="li dl" to="/signIn">
                                        登录
                                    </Link>
                                </div>):( <div className="d_right">
                                    <div className="li dl" onClick={this.LogOut}>
                                        退出
                                    </div>
                                    <div className="li"> {this.props.userInfo.userName}</div>
                                </div>)
                        }
                    </div>
                    <div className="clear_both"></div>
                    <div className="botm">
                        <img src={ljnw} alt=""/>
                    </div>
                </div>
                <div className="j_f">
                    <div className="j_f_t">
                        <div className="j_f_t_img"></div>
                        <div className="j_f_t_text">解决方案</div>
                    </div>
                    <div className="j_f_b">
                        <div className="j_f_b_l">
                            采用专家最新成果、融合先进供热技术，与您分享智慧供热实践成果。
                        </div>
                        <div className="j_f_b_r">更多方案</div>
                    </div>
                </div>
                <div className="j_f_box">
                    <div className="j_f_i">
                        <div className="j_f_i_head_n">
                            <div className="j_f_i_icon_box">

                            </div>
                        </div>
                        <div className="j_f_i_head">
                            <div className="j_f_i_icon_box">

                            </div>
                        </div>
                        <div className="title">
                            集中供热能效提升解决方案
                        </div>
                        <div className="content">
                            “3133”智能热网企业级产品平台
                        </div>
                        <Link className="x_q"  to="/solutionEnergyEfficiency">查看详情</Link>
                    </div>
                    <div className="j_f_i">
                        <div className="j_f_i_head2_n">
                            <div className="j_f_i_icon_box">

                            </div>
                        </div>
                        <div className="j_f_i_head2">
                            <div className="j_f_i_icon_box">

                            </div>
                        </div>
                        <div className="title">
                            物联网设备的热力数据托管服务
                        </div>
                        <div className="content">
                            提供智能供热整体解方案，不止于产品和服务
                        </div>
                        <a href="javascript:;" className="x_q">查看详情</a>
                    </div>
                    <div className="j_f_i">
                        <div className="j_f_i_head3_n">
                            <div className="j_f_i_icon_box">

                            </div>
                        </div>
                        <div className="j_f_i_head3">
                            <div className="j_f_i_icon_box">

                            </div>
                        </div>
                        <div className="title">
                            企业级监管平台的热力数据托管服务
                        </div>
                        <div className="content">
                            提供智能供热整体解方案，不止于产品和服务
                        </div>
                        <a href="javascript:;" className="x_q">查看详情</a>
                    </div>
                    <div className="j_f_i">
                        <div className="j_f_i_head4_n">
                            <div className="j_f_i_icon_box">

                            </div>
                        </div>
                        <div className="j_f_i_head4">
                            <div className="j_f_i_icon_box">

                            </div>
                        </div>
                        <div className="title">
                            暖虎服务队
                        </div>
                        <div className="content">
                            提供智能供热整体解方案，不止于产品和服务
                        </div>
                        <a href="javascript:;" className="x_q">查看详情</a>
                    </div>
                </div>
                <div className="j_f">
                    <div className="j_f_t">
                        <div className="j_f_t_img"></div>
                        <div className="j_f_t_text">服务工具</div>
                    </div>
                    <div className="j_f_b">
                        <div className="j_f_b_l">
                            为用户提供多种分析、计算、开发、学习类供热领域专业工具。
                        </div>
                        <div className="j_f_b_r">更多工具</div>
                    </div>
                </div>
                <div className="f_j_box">
                    <div className="f_j_i">
                        <div className="y">
                            详情/应用
                        </div>
                        <div className="t">
                            热力管网水利平衡计算分析软件
                        </div>
                    </div>
                    <div className="f_j_i ">
                        <div className="y">
                            详情/应用
                        </div>
                        <div className="t">
                            供热系统校核、设计、仿真软件
                        </div>
                    </div>
                    <div className="f_j_i">
                        <div className="y">
                            详情/应用
                        </div>
                        <div className="t">
                            枝状管网水利平衡计算软件
                        </div>
                    </div>
                    <div className="f_j_i">
                        <div className="y">
                            详情/应用
                        </div>
                        <div className="t">
                            热力站设备测评软件
                        </div>
                    </div>
                </div>
                <div className="j_f">
                    <div className="j_f_t">
                        <div className="j_f_t_img"></div>
                        <div className="j_f_t_text">应用平台</div>
                    </div>
                    <div className="j_f_b">
                        <div className="j_f_b_l">
                            多种基于云端的供热应用平台，帮助用户提高供热的生产、管理、监管水平。
                        </div>
                        <div className="j_f_b_r">更多平台</div>
                    </div>
                </div>
                <div className="y_y">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide swiper-slide-1">
                                <div className="swiper-slide-top"></div>
                                <div className="swiper-slide-bot ">
                                    <div className="">
                                        智能调节阀管理平台
                                    </div>
                                    <a href="javascript:;" className="swiper-slide-a">了解详情</a>
                                </div>
                            </div>
                            <div className="swiper-slide swiper-slide-2">
                                <div className="swiper-slide-top"></div>
                                <div className="swiper-slide-bot ">
                                    <div className="">
                                        室温采集分析平台
                                    </div>
                                    <a href="javascript:;" className="swiper-slide-a">了解详情</a>
                                </div>
                            </div>
                            <div className="swiper-slide swiper-slide-3">
                                <div className="swiper-slide-top"></div>
                                <div className="swiper-slide-bot">
                                    <div className="">
                                        智能供热iSCADA平台
                                    </div>
                                    <a href="javascript:;" className="swiper-slide-a">了解详情</a>
                                </div>
                            </div>
                            <div className="swiper-slide swiper-slide-1">
                                <div className="swiper-slide-top"></div>
                                <div className="swiper-slide-bot ">
                                    <div className="">
                                        智能调节阀管理平台
                                    </div>
                                    <a href="javascript:;" className="swiper-slide-a">了解详情</a>
                                </div>
                            </div>
                            <div className="swiper-slide swiper-slide-2">
                                <div className="swiper-slide-top"></div>
                                <div className="swiper-slide-bot ">
                                    <div className="">
                                        室温采集分析平台
                                    </div>
                                    <a href="javascript:;" className="swiper-slide-a">了解详情</a>
                                </div>
                            </div>
                            <div className="swiper-slide swiper-slide-3">
                                <div className="swiper-slide-top"></div>
                                <div className="swiper-slide-bot">
                                    <div className="">
                                        智能供热iSCADA平台
                                    </div>
                                    <a href="javascript:;" className="swiper-slide-a">了解详情</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="left_hide"></div>
                    <div className="right_hide"></div>
                    <div className="left" id="left"></div>
                    <div className="right" id="right"></div>
                </div>
                <div className="j_f">
                    <div className="j_f_t">
                        <div className="j_f_t_img"></div>
                        <div className="j_f_t_text">服务社区</div>
                    </div>
                    <div className="j_f_b">
                        为您提供一站式专业服务 : 技术交流、产品申购、供热质量监察、开发畅游......
                    </div>
                </div>
                <div className="s_q">
                    <div className="s_t">
                        <ul>
                            <li className="title">社区头条</li>
                            {
                                this.state.item.map(function (item, index) {
                                    if (index < 4) {
                                        return <li key={index}>{item.text}</li>
                                    }

                                })
                            }
                        </ul>
                    </div>
                    <a href="javascript:;" className="s_q_btn">社区详情</a>
                </div>
                <div className="h_z">
                    <h3>合作伙伴</h3>
                    <div className="h_z_img"></div>
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
        },
        LogOutProps: function (obj) {
            dispatch(switch_userInfo(obj))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)