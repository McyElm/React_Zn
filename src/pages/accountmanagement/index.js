import React from 'react'
import './index.less';
import {connect} from 'react-redux'
import {switch_menuShowBool,switchIndex} from '../../redux/action/index'
import rightImg from '../../assets/img/account_banner.png';
import img01 from '../../assets/img/account01.png';
import img02 from '../../assets/img/account02.png';
import img03 from '../../assets/img/account03.png';
import img04 from '../../assets/img/account04.png';
import img05 from '../../assets/img/account05.png';
class accountManagement extends React.Component {
    componentDidMount() {
        this.props.menuShowBool({
            'isShow': 'block'
        });
        this.props.menuInit("4");
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="accountmanagement-wrap">
                <div className="banner">
                    <div className="conent">
                        <div  className="left">
                            <h2>暖虎账号管理平台</h2>
                            <p>账号管理平台主要为用户在体验暖虎云平台的产品和服务时， 提供与登录授权有关的管理服务</p>
                            <a href="javascript:;">立即体验</a>
                        </div>
                        <div className="right">
                            <img src={rightImg} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="m_q">
                    <div className="j_f_t">
                        <div className="j_f_t_img"></div>
                        <div className="j_f_t_text">支持单位或个人</div>
                    </div>
                    <div className="item">
                        <img src={img01} alt=""/>
                        <div className="text">账号申办</div>
                    </div>
                    <div className="item">
                        <img src={img02} alt=""/>
                        <div className="text">合同授权管理</div>
                    </div>
                    <div className="item">
                        <img src={img03} alt=""/>
                        <div className="text">付费管理</div>
                    </div>
                    <div className="item">
                        <img src={img04} alt=""/>
                        <div className="text">组织成员权限管理</div>
                    </div>
                    <div>
                        <div className="title">匹配登录窗口业务</div>
                        <div className="m"> 平台会根据登录用户的身份属性如供应商、服务商、使用单位或个人自动匹配登录窗口业务，完善的安全机制确保用户信息的私密性和业务的独立性，可有效阻止非法入侵，是用户账号的专属管家。</div>
                    </div>
                    <div className="bom">
                        <img src={img05} alt=""/>
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
export default connect(mapStateToProps, mapDispatchToProps)(accountManagement)