import React from 'react'
import './index.less';
import {connect} from 'react-redux'
import {switch_menuShowBool, switchIndex} from '../../redux/action/index'
import utils from '../../utils/utils'
import {signBaseUrl,localBaseUrl}  from '../../config/Config'
import Axios from '../../axios'
import {Tabs,Modal} from 'antd';
const TabPane = Tabs.TabPane;
class InformationDetails extends React.Component {
    constructor(props){
        super(props)
        this.initDetails = this.initDetails.bind(this);
    }
    componentDidMount() {
        this.props.menuShowBool({
            'isShow': 'block'
        });
        this.props.menuInit(null);
        window.scrollTo(0, 0);
        this.initDetails();
    }
    state={
        DetailsId:this.props.match.params.DetailsId,
        DetailsData:{}
    }
    initDetails() {
        Axios.ajax({
            url: signBaseUrl+"/SSOService.asmx/GetMessage",
            type: 'get',
            data: {
                isShowLoading: false,
                params: {
                    id: this.state.DetailsId
                }
            }
        }).then((res) => {
            this.setState({
                DetailsData:res.Data
            })

        }).catch((res) => {
        })

    }
    render() {
        return (
            <div className="InformationDetails-wrap">
                <div className="contnet">
                    <h2 className="h2">{this.state.DetailsData.MessageTitle}</h2>
                    <p className="p">{utils.formateDate(this.state.DetailsData.ModifiedTime)}</p>
                    <div className="con">{this.state.DetailsData.MessageContent}</div>

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
export default connect(mapStateToProps, mapDispatchToProps)(InformationDetails)