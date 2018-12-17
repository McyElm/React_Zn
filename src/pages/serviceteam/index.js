import React from 'react'
import './index.less';
import {connect} from 'react-redux'
import {switch_menuShowBool,switchIndex} from '../../redux/action/index'
import rightImg from '../../assets/img/service_banner.png';
import img01 from '../../assets/img/service_01.png';
import img02 from '../../assets/img/service_02.png';
import img03 from '../../assets/img/service_03.png';
import img04 from '../../assets/img/service_04.png';

class ServiceTeam extends React.Component {
    componentDidMount() {
        this.props.menuShowBool({
            'isShow': 'block'
        });
        this.props.menuInit("4");
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="serviceteam-wrap">
                <div className="banner">
                    <div className="conent">
                        <div  className="left">
                            <h2>暖虎服务队</h2>
                            <p>为帮助用户在使用暖虎云平台的产品和服务时获得更好的体验， 我们配置了专业的服务队伍，可提供OTO模式的全面服务</p>
                            <a href="javascript:;">了解相关产品</a>
                        </div>
                        <div className="right">
                            <img src={rightImg} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="m_q">
                    <div className="title">服务内容包括</div>
                    <div className="item">
                        <img src={img01} alt=""/>
                        <div className="text">技术支持</div>
                    </div>
                    <div className="item">
                        <img src={img02} alt=""/>
                        <div className="text">产品部署</div>
                    </div>
                    <div className="item">
                        <img src={img03} alt=""/>
                        <div className="text">健康检查</div>
                    </div>
                    <div className="item">
                        <img src={img04} alt=""/>
                        <div className="text">系统升级</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ServiceTeam)