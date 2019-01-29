import React from 'react'
import './index.less';

import {connect} from 'react-redux'
import {switch_menuShowBool, switchIndex} from '../../redux/action/index'
import {Link} from 'react-router-dom'
import rightImg from '../../assets/img/serviceCommunity_bannner.jpg';
import conn from '../../assets/img/serviceCommunity_2.jpg';
import eyes from '../../assets/img/eyes.jpg';
import serviceCommunity_3_01 from '../../assets/img/serviceCommunity_3_01.jpg';
import serviceCommunity_3_02 from '../../assets/img/serviceCommunity_3_02.jpg';
import serviceCommunity_3_03 from '../../assets/img/serviceCommunity_3_03.jpg';
import serviceCommunity_1_01 from '../../assets/img/serviceCommunity_1_01.jpg';
import serviceCommunity_1_02 from '../../assets/img/serviceCommunity_1_02.png';
import serviceCommunity_01_01 from '../../assets/img/serviceCommunity_01_01.png';
import serviceCommunity01_02 from '../../assets/img/serviceCommunity01_02.png';
import serviceCommunity4_01 from '../../assets/img/serviceCommunity4_01.png';
import utils from '../../utils/utils'
import {signBaseUrl,localBaseUrl,zhBaseUrl,znBaseUrl,zzBaseUrl}  from '../../config/Config'
import Axios from '../../axios'
import {Tabs,Modal,Pagination } from 'antd';
const confirm = Modal.confirm;
const TabPane = Tabs.TabPane;
class ServiceCommunity extends React.Component {
    constructor(props) {
        super(props);
        this.callback = this.callback.bind(this)
        this.getList = this.getList.bind(this)
        this.textEllipsis = this.textEllipsis.bind(this)
        this.pageInit = this.pageInit.bind(this)
        this.callbackChild = this.callbackChild.bind(this)
        this.initIndex = this.initIndex.bind(this)
        this.pipeNetwork = this.pipeNetwork.bind(this)
    }
    componentDidMount() {
        this.props.menuShowBool({
            'isShow': 'block'
        });
        this.props.menuInit("1");
        window.scrollTo(0, 0);
        this.getList(this.state.current,this.state.pageSize)
        this.initIndex()
    }
    componentWillReceiveProps(nextProps) {
        const { search } = nextProps.location;
        const paramsString = search.substring(1);
        if(paramsString){
            const searchParams = new URLSearchParams(paramsString);
            const index = searchParams.get('key');
            const indexChild = searchParams.get('keyChild');
            if(index){
                this.setState({key: index})
            }
            if(indexChild){
                this.setState({keyChild: indexChild})
            }
        }
    }
    state={
        key:"1",
        keyChild:"1",
        item:[],
        current:1,
        pageSize:10,
        total:0
    }
    callback(key) {
        this.setState({
            key:key
        })
    }
    callbackChild(key) {
        this.setState({
            keyChild:key
        })
    }
    initIndex(){
        const { search } = this.props.location;
        const paramsString = search.substring(1);
        if(paramsString){
            const searchParams = new URLSearchParams(paramsString);
            const index = searchParams.get('key');
            const indexChild = searchParams.get('keyChild');
            if(index){
                this.setState({key: index})
            }
            if(indexChild){
                this.setState({keyChild: indexChild})
            }

        }
    }
    getList(page,pageSize){
        this.pageInit(page,pageSize)
    }
    pageChange(page,pageSize){
        this.pageInit(page,pageSize)
    }
    pageInit(page,pageSize){
        Axios.ajax({
            url:signBaseUrl+'/SSOService.asmx/GetArticleList',
            type:'post',
            data:{
                isShowLoading:false,
                params: {
                    page:page,
                    limit: pageSize
                }
            }
        }).then((res)=>{
            this.setState({
                item:res.Data.ds,
                total:(res.Tag-0),
            })
        }).catch((res)=>{

        })
    }

    textEllipsis(text){
        if(text.length>100){
            var str= text.slice(0,200)+"..."
            return str
        }else{
            return text
        }
    }
    pipeNetwork(){
        var that=this;
        if(this.props.userInfo.isLogIn!==false){
            window.open("/pipeNetwork/集中供热管网水力平衡计算分析平台.zip")
        }else{
            confirm({
                title: '暖虎云平台',
                content: '请您登录暖虎云平台后下载',
                okText: '登录',
                cancelText: '取消',
                onOk() {
                    that.props.history.push("/signIn")
                },
                onCancel() {
                },
            });
        }
    }
    render() {
        return (
            <div className="servicecommunity-wrap">
                <div className="contnet">
                    <div className="btn">服务社区</div>
                    <img src={rightImg} alt=""/>
                </div>
                <div className="tab_box">
                    <Tabs activeKey={this.state.key} onChange={this.callback}>
                        <TabPane tab="商场" key="1">
                            <div className="tap tap3">
                                <Tabs activeKey={this.state.keyChild} onChange={this.callbackChild}>
                                    <TabPane tab="工具" key="1">
                                        <div className="tap tap_top">
                                            <div className="server">
                                                <img src={serviceCommunity_01_01} alt=""/>
                                                <div className="box">
                                                    <p className="p1">热力管网水力平衡计算分析软件</p>
                                                    <p className="p2">该软件能够针对不同室外参数、不同热源运行模式（单热源、多热源联网运行）、不同热网形式（枝状管网、环形管网）进行供热系统设计工程、改扩建工程、运行工...</p>
                                                </div>
                                                <div className="right">
                                                    <a href="javascript:;">详情</a>
                                                    <p>版本更新1.102 </p>
                                                </div>
                                                <div className="right">
                                                    <a href="javascript:;">申购</a>
                                                    <p>更新时间2018-12-23</p>
                                                </div>
                                            </div>
                                            <div className="server">
                                                <img src={serviceCommunity01_02} alt=""/>
                                                <div className="box">
                                                    <p className="p1">枝状管网水力平衡计算软件</p>
                                                    <p className="p2">该软件主要针对单热源、枝状管网在不同室外参数时进行的供热系统设计工程、改扩建工程、运行工况及事故工况下管网的水力特性的模拟计算分析，为供热系统提供可靠...</p>
                                                </div>
                                                <div className="right">
                                                    <a href="javascript:;">详情</a>
                                                    <p>版本更新1.102 </p>
                                                </div>
                                                <div className="right">
                                                    <a href="javascript:;">申购</a>
                                                    <p>更新时间2018-12-23</p>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="服务" key="2">
                                        <div className="tap tap_top">
                                            <div className="server">
                                                <img src={serviceCommunity_1_01} alt=""/>
                                                <div className="box">
                                                    <p className="p1">物联网设备的热力数据托管服务</p>
                                                    <p className="p2">提供二级网平衡调节、热用户室温采集等系统的云端运行托管服务。云端平台面向基于物联网通讯的智能调节阀、用户室温采器等设备，采用科学调控手段和智能分析工具管理系统，同时可输出评价结果、存储过程和历史数据。</p>
                                                </div>
                                                <div className="right">
                                                    <a href="javascript:;">详情</a>
                                                    <p>版本更新1.102 </p>
                                                </div>
                                                <div className="right">
                                                    <a href="javascript:;">申购</a>
                                                    <p>更新时间2018-12-23</p>
                                                </div>
                                            </div>
                                            <div className="server">
                                                <img src={serviceCommunity_1_02} alt=""/>
                                                <div className="box">
                                                    <p className="p1">企业级平台的热力数据托管服务</p>
                                                    <p className="p2">提供企业级热网监控系统的云端运行托管服务。云端平台采集分析热源、热力站、中级泵站、管网监测系统数据，采用科学调控手段和智能分析工具，进行系统运行评价、设备健康诊断、供热质量分析等工作，同时可输出评价结果、存储过程和历史数据。</p>
                                                </div>
                                                <div className="right">
                                                    <a href="javascript:;">详情</a>
                                                    <p>版本更新1.102 </p>
                                                </div>
                                                <div className="right">
                                                    <a href="javascript:;">申购</a>
                                                    <p>更新时间2018-12-23</p>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tab="插件" key="3">
                                        <div className="tap">
                                            建设中...
                                        </div>
                                    </TabPane>
                                    <TabPane tab="下载" key="4">
                                        <div className="tap tap_top">
                                            <div className="server">
                                                <img src={serviceCommunity4_01} alt=""/>
                                                <div className="box box2">
                                                    <p className="p1">
                                                        供热管网水力计算分析工具客户端软件
                                                    </p>
                                                    <p className="p2">最新客户端下载</p>
                                                    <p className="p2">当前版本：1.0 beta | 更新日期：2018-12-11 | 文件大小：51.6 MB</p>
                                                    <p className="p2 p3">重要提醒：如果使用Chrome（谷歌）浏览器无法下载，请切换IE或其他浏览器下载。</p>
                                                </div>
                                                <div className="box3">
                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最低配置</p>
                                                    <p>CPU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Intel(R)Core(tm)2DUO CPU E4600@ 2.40GHz</p>
                                                    <p>内存&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2GB</p>
                                                    <p>硬盘&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2GB以上（空闲）</p>
                                                    <p>显卡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;512MB显存</p>
                                                    <p>操作系统&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;windows XP、Vista、Windows、Windows7、Windows8</p>
                                                </div>
                                                <div className="right right2">
                                                    <div className="a" onClick={this.pipeNetwork}>下载</div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                </Tabs>
                            </div>
                        </TabPane>
                        <TabPane tab="供热质检站" key="2">
                            <div className="tap">
                                <div className="tab_item">
                                    <img className="tap_2_img" src={conn} alt=""/>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="技术区" key="3">
                            <div className="tap tap2">
                                <h5 className="h5">提供最全面的技术服务与帮助</h5>
                                <div className="tap_03_box tap_03_box2">
                                    <img src={serviceCommunity_3_01} alt=""/>
                                    <h6>专家在线</h6>
                                    <p>更加专业的行业精英诊断建议</p>
                                </div>
                                <div className="tap_03_box">
                                    <img src={serviceCommunity_3_02} alt=""/>
                                    <h6>远程教学</h6>
                                    <p>通过电脑界面演示指导或远程控制对方电脑协助对方</p>
                                </div>
                                <div className="tap_03_box ">
                                    <img src={serviceCommunity_3_03} alt=""/>
                                    <h6>技术论坛</h6>
                                    <p>用户有序的互相交流与暖虎专家一起讨论互通技术点</p>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="社区资讯" key="4">
                            <div className="tap">
                                {
                                    this.state.item.map((item, index)=> {
                                       return (
                                           <div className="box" key={item.ID}>
                                               <p className="title">{item.MessageTitle}</p>
                                               <div className="text">{this.textEllipsis(item.MessageContent)}</div>
                                               <div className="con">
                                                   <Link className="a" to={{pathname:'/informationDetails/'+item.ID}} target="_blank">详细内容</Link>
                                                   <span className="date">{utils.formateDate(item.ModifiedTime)}</span>
                                               </div>
                                           </div>
                                       )

                                    })
                                }
                            </div>
                            <Pagination  defaultPageSize={this.state.pageSize} defaultCurrent={this.state.current} total={this.state.total} onChange={this.pageChange}/>
                        </TabPane>
                    </Tabs>
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ServiceCommunity)