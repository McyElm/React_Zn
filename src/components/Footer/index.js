import React from 'react'
import './index.less'
import {Link} from 'react-router-dom'
export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer_center">
                    <div className="nh_r"></div>
                    <div className="bx_box">
                        <div className="bx">
                            <p>帮助中心</p>
                            <p> <Link to="/clause">服务条款</Link> </p>
                            <p> <Link to="/privacy">隐私条款</Link> </p>
                            <p> <Link to="/about">关于我们</Link> </p>
                        </div>
                        <div className="cy">
                            <h2>参与暖虎云平台设计建议留言</h2>
                            <div className="l_x">
                                <p>联系方式</p>
                                <p>电话：0451-88006777</p>
                                <p><a  target="frame2" href="http://www.znchina.cn">官网：http://www.znchina.cn</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="hr"></div>
                    <p className="COPYRIGHT">Copyright 1998-2018 黑龙江省中能控制工程股份有限公司</p>
                    <p className="COPYRIGHT"><a  target="frame1" href="http://www.miitbeian.gov.cn/">黑ICP备13003588号-4</a></p>
                </div>
            </div>
        );
    }
}