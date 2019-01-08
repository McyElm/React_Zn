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
import utils from '../../utils/utils'
import {signBaseUrl,localBaseUrl,zhBaseUrl,znBaseUrl,zzBaseUrl}  from '../../config/Config'
import Axios from '../../axios'
import {Tabs,Modal,Pagination } from 'antd';
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
                                        <div className="tap">

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
                                    <TabPane tab="客户端" key="4">
                                        <div className="tap">

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
                                                   <Link to={{pathname:'/informationDetails/'+item.ID}} >详细内容</Link>
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
    return {}
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