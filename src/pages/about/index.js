import React from 'react'
import './index.less';
import {connect} from 'react-redux'
import {switch_menuShowBool,switchIndex} from '../../redux/action/index'
import rightImg from '../../assets/img/about_banner.png';
import img01 from '../../assets/img/about_01.png';

class About extends React.Component {
    componentDidMount() {
        this.props.menuShowBool({
            'isShow': 'block'
        });
        this.props.menuInit(null);
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="about-wrap">
                <div className="banner">
                    <div className="conent">
                        <div  className="left">
                            <h2>关于我们</h2>
                            <p>黑龙江省中能控制工程股份有限公司创立于1998年，位于哈尔滨经济技术开发区，是哈尔滨投资集团有限责任公司控股的混合所有制高新技术企业。</p>
                        </div>
                        <div className="right">
                            <img src={rightImg} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="m_q">
                    <div className="text">
                        2015年成功登陆新三板，简称“中能股份”，证券代码832972。经营范围包括供热设备的设计、加工、制造、销售；信息系统集成及服务；市政公用工程施工；节能减排技术开发、技术咨询、技术服务；合同能源管理服务。主导产品有高效板式热交换器、智能热交换机组、智能调节阀及仪表、热电厂监控系统、智能热网监控系统、供热企业管理信息系统，智慧供热云平台，广泛应用于我国三北及华东地区。
                    </div>
                    <div className="img_box">
                        <img src={img01} alt=""/>
                    </div>
                    <div className="text">
                        我们秉持“成就客户、以奋斗者为本”的核心价值观，“连接你我、温暖万家”的企业使命，“能吃苦、能战斗、能学习、能创新”的企业精神，努力将自己建设成为“智慧供热整体解决方案的领导者”。
                    </div>
                    <div className="text">
                        实行总经理负责制，建立了科学的组织结构和管理体系，设立营销中心、信息系统中心、工程技术中心、运营中心、行政中心和财证中心六大战略业务单元，下辖19个部门和分公司，拥有一支高效、实干、过硬、团结的科研、制造和工程服务队伍，在城镇供热领域不断为客户提供交付及时、质量优异、高性价比的产品和服务。 积极开展与清华大学、哈尔滨工业大学和哈尔滨工程大学的战略合作，建立了省级企业技术中心，下辖云计算中心、微电子产品研发中心、应力计算和流体仿真中心，获得了近百项专利和软件著作权。公司努力整合优势资源，大力拓展产业布局，将最佳的智慧供热整体解决方案交付给客户。
                    </div>
                    <div className="text">
                        面向未来，我们要以“艰苦奋斗、积极乐观、公开透明、互利共赢”的企业态度，务实管理、经济运营、创新进取，建设“客户开心、员工安心、股东放心”的现代化负责任企业！
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
export default connect(mapStateToProps, mapDispatchToProps)(About)