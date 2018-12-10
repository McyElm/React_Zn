import React from 'react'
import './index.less'
import {Link} from 'react-router-dom'
export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer_register">
                <div className="t_y">
                    <p>为供热行业提供专业产品和应用服务</p>
                    <Link className="zcpt" to="/signUp">
                        注册平台
                    </Link>
                </div>
            </div>
        );
    }
}