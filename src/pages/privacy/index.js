import React from 'react'
import './index.less';
import {connect} from 'react-redux'
import {switch_menuShowBool,switchIndex} from '../../redux/action/index'
import rightImg from '../../assets/img/privacy_banner.png';
import yins from '../../assets/img/yins.png';
class Privacy extends React.Component {
    componentDidMount() {
        this.props.menuShowBool({
            'isShow': 'block'
        });
        this.props.menuInit(null);
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="privacy-wrap">
                <div className="banner">
                    <div className="conent">
                        <div  className="left">
                            <h2>暖虎云平台隐私政策</h2>
                        </div>
                        <div className="right">
                            <img src={rightImg} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="m_q">
                    <div className="head">(一)引言</div>
                    <div className="text">暖虎云平台重视用户的隐私。您在使用我们的服务时，我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及我们为您提供的访问、更新、控制和保护这些信息的方式。本《隐私政策》与您所使用的暖虎云平台服务息息相关，希望您仔细阅读，在需要时，按照本《隐私政策》的指引，做出您认为适当的选择。本《隐私政策》中涉及的相关技术词汇，我们尽量以简明扼要的表述，并提供进一步说明的链接，以便您的理解。</div>
                    <div className="black">您使用或继续使用我们的服务，即意味着同意我们按照本《隐私政策》收集、使用、储存和分享您的相关信息。<br/> 如对本《隐私政策》或相关事宜有任何问题，请通过[固话0451-88006777］与我们联系。</div>
                    <div className="head">(二)我们可能收集的信息</div>
                    <div className="text">我们提供服务时，可能会收集、储存和使用下列与您有关的信息。如果您不提供相关信息，可能无法注册成为我们的用户或无法享受我们提供的某些服务，或者无法达到相关服务拟达到的效果。</div>
                    <div className="head2">您提供的信息</div>
                    <div className="text2">•  您在注册账户或使用我们的服务时，向我们提供的相关个人信息或企业信息，例如姓名、身份证件号码、地址、邮箱、电话号码、企业用户名称、企业用户联系人、企业用户联系方式等；</div>
                    <div className="text2">•  您通过我们的服务向其他方提供的共享信息，以及您使用我们的服务时所储存的信息。</div>
                    <div className="head2">其它方分享的您的信息 </div>
                    <div className="text2 ">其它方使用我们的服务时所提供有关您的共享信息。</div>
                    <div className="head">(三)我们获取的您的信息</div>
                    <div className="text2 ">您使用服务时我们可能收集如下信息：</div>
                    <div className="head2">3.1身份识别信息</div>
                    <div className="text">包括但不限于您的姓名、身份证件号码、地址、邮箱、电话号码、企业用户名称、企业用户联系人、企业用户联系方式等；</div>
                    <div className="head2">3.2操作信息</div>
                    <div className="text">包括但不限于您的IP地址、操作系统版本信息、登录记录、指令信息等；</div>
                    <div className="head2">3.3日志信息</div>
                    <div className="text">指您使用我们的服务时，系统可能自动采集的技术信息，包括：</div>
                    <div className="text2">•  设备或软件信息，例如您的移动设备、网页浏览器或用于接入我们服务的其他程序所提供的配置信息、您的IP地     址和移动设</div>
                    <div className="text2">•  在使用我们服务时搜索或浏览的信息，例如您使用的网页搜索词语、访问的社交媒体页面url地址，以及您在使用我们服务时浏览或要求提供的其他信息和内容详情；</div>
                    <div className="text2">•  有关您曾使用的移动应用（APP）和其他软件的信息，以及您曾经使用该等移动应用和软件的信息；</div>
                    <div className="text2">•  您通过我们的服务进行通讯的信息，例如曾通讯的账号，以及通讯时间、数据和时长；</div>
                    <div className="text2">•  您通过我们的服务分享的内容所包含的信息（元数据），例如拍摄或上传的共享照片或录像的日期、时间或地点等。</div>
                    <div className="head2">3.4位置信息</div>
                    <div className="text">指您开启设备定位功能并使用我们基于位置提供的相关服务时，收集的有关您位置的信息，包括：</div>
                    <div className="text2">•  您通过具有定位功能的移动设备使用我们的服务时，通过GPS或WiFi等方式收集的您的地理位置信息；</div>
                    <div className="text2">•  您或其他用户提供的包含您所处地理位置的实时信息，例如您提供的账户信息中包含的您所在地区信息，您或其他人上传的显示您当前或曾经所处地理位置的共享信息，您或其他人共享的照片包含的地理标记信息；</div>
                    <div className="text2">•  您可以通过关闭定位功能，停止对您的地理位置信息的收集。</div>
                    <div className="head">(四)我们可能如何使用信息</div>
                    <div className="text2">我们可能将在向您提供服务的过程之中所收集的信息用作下列用途:</div>
                    <div className="text2">•  向您提供服务；</div>
                    <div className="text2">•  在我们提供服务时，用于身份验证、客户服务、安全防范、诈骗监测、存档和备份用途，确保我们向您提供的产品和服务的安全性；</div>
                    <div className="text2">•  帮助我们设计新服务，改善我们现有服务；</div>
                    <div className="text2">•  使我们更加了解您如何接入和使用我们的服务，从而针对性地回应您的个性化需求，例如语言设定、位置设定、个性化的帮助服务和指示，或对您和其他用户作出其他方面的回应；</div>
                    <div className="text2">•  向您提供与您更加相关的广告以替代普遍投放的广告；</div>
                    <div className="text2">•  评估我们服务中的广告和其他促销及推广活动的效果，并加以改善；</div>
                    <div className="text2">•  软件认证或管理软件升级；</div>
                    <div className="text2">•  让您参与有关我们产品和服务的调查。开展与暖虎云平台服务相关的市场活动，向您推送最新的市场活动信息及优惠方案；</div>
                    <div className="text2">•  协助国家司法、行政、安全机关等权利机构开展调查，并遵守适用法律法规及其他向有权机构承诺之义务；</div>
                    <div className="text">为了让您有更好的体验、改善我们的服务或您同意的其他用途，在符合相关法律法规的前提下，我们可能将通过某一项服务所收集的信息，以汇集信息或者个性化的方式，用于我们的其他服务。例如，在您使用我们的一项服务时所收集的信息，可能在另一服务中用于向您提供特定内容，或向您展示与您相关的、非普遍推送的信息。如果我们在相关服务中提供了相应选项，您也可以授权我们将该服务所提供和储存的信息用于我们的其他服务。</div>
                    <div className="head">(五)您如何访问和控制自己的个人信息</div>
                    <div className="text">我们将尽一切可能采取适当的技术手段，保证您可以访问、更新和更正自己的注册信息或使用我们的服务时提供的其他个人信息。在访问、更新、更正和删除前述信息时，我们可能会要求您进行身份验证，以保障账户安全。</div>
                    <div className="head">(六)我们可能分享的信息</div>
                    <div className="text2">除以下情形外，未经您同意，我们以及我们的关联公司不会与任何第三方分享您的个人信息：</div>
                    <div className="text">我们以及我们的关联公司，可能将您的个人信息与我们的关联公司、合作伙伴及第三方服务供应商、承包商及代理（例如代表我们发出电子邮件或推送通知的通讯服务提供商、为我们提供位置数据的地图服务供应商）分享（他们可能并非位于您所在的法域），用作下列用途：</div>
                    <div className="text2">•  向您提供我们的服务；</div>
                    <div className="text2">•  实现“我们可能如何使用信息”部分所述目的；</div>
                    <div className="text2">•  履行我们在《暖虎云平台用户使用协议》或本《隐私政策》中的义务和行使我们的权利；</div>
                    <div className="text2">•  理解、维护和改善我们的服务。</div>
                    <div className="text2">•  根据法律法规的规定及商业惯例，接受第三方的审计或尽职调查时，可能向其提供您的相关信息。</div>
                    <div className="text2">•  根据法律法规的规定或行政机关、司法机构等有权机关要求，向其提供您的相关信息。</div>
                    <div className="text">如我们或我们的关联公司与任何上述第三方分享您的个人信息，我们将努力确保该等第三方在使用您的个人信息时遵守本《隐私政策》及我们要求其遵守的其他适当的保密和安全措施。</div>
                    <div className="text">随着我们业务的持续发展，我们以及我们的关联公司有可能进行合并、收购、资产转让或类似的交易，您的个人信息有可能作为此类交易的一部分而被转移。我们将在转移前通知您。</div>
                    <div className="text">我们或我们的关联公司还可能为以下需要而保留、保存或披露您的个人信息：</div>
                    <div className="text2">①  遵守适用的法律法规；</div>
                    <div className="text2">②  遵守法院命令或其他法律程序的规定；</div>
                    <div className="text2">③  遵守相关政府机关的要求；</div>
                    <div className="text2">④  为遵守适用的法律法规、维护社会公共利益，或保护我们的客户、我们或我们的集团公司、其他用户或雇员的人身和财产安全或合法权益所合理必需的用途。</div>
                    <div className="head">(七)信息安全保护</div>
                    <div className="text">我们仅在本《隐私政策》所述目的所必需的期间和法律法规要求的时限内保留您的个人信息。</div>
                    <div className="text">我们使用各种安全技术和程序，以防信息的丢失、不当使用、未经授权阅览或披露。例如，在某些服务中，我们将利用数据传输加密（例如SSL）、数据存储加密来保护您提供的个人信息。暖虎云平台的供应商、合作伙伴或其他暖虎云平台第三方服务商将受到保密协议的约束，同时还将受到数据信息的权限控制和操作监控。但暖虎云平台无法保证前述第三方一定会按照我们的要求采取保密措施，我们亦不对第三方的行为及后果承担任何责任，而且请您理解，由于技术的限制以及可能存在的各种恶意手段，在互联网行业，即便竭尽所能加强安全措施，也不可能始终保证信息百分之百的安全，任何安全系统都存在可能的及未知的风险。您需要了解，您接入我们的服务所用的系统和通讯网络，有可能因我们可控范围外的因素而出现问题。作为用户，您可根据您的意愿决定是否使用暖虎云平台的服务，以及是否主动提供您的信息。</div>
                    <div className="head">(八)您分享的敏感个人信息</div>
                    <div className="text">某些个人信息因其特殊性可能被认为是敏感个人信息，例如您的种族、宗教、个人健康和医疗信息等。相比其他个人信息，敏感个人信息受到更加严格的保护。</div>
                    <div className="text">请注意，您在使用我们的服务时所提供、上传或发布的内容和信息（例如有关您社交活动的照片等信息），可能会泄露您的敏感个人信息。您需要谨慎地考虑，是否在使用我们的服务时披露相关敏感个人信息。</div>
                    <div className="black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您同意按本《隐私政策》所述的目的和方式来处理您的敏感个人信息。</div>
                    <div className="head2">我们可能如何收集信息</div>
                    <div className="text2">您同意并授权我们可以通过以下方法收集和使用您的信息：</div>
                    <div className="text">•  暖虎云平台将收集和储存在您注册、登录、浏览或使用暖虎云平台服务时主动向本平台提供的信息；</div>
                    <div className="text">•  暖虎云平台将收集和储存本平台在向您提供服务的过程中记录的与您有关的信息；</div>
                    <div className="text">•  暖虎云平台将收集和储存您通本平台的客服人员及/或其他渠道主动提交或反馈的信息；</div>
                    <div className="text">•  暖虎云平台向关联公司、商业合作伙伴及第三方独立资料来源，收集和储存其合法获得的与您有关的信息；</div>
                    <div className="head">(九)我们可能向您发送的邮件和信息</div>
                    <div className="head2">邮件和信息推送:</div>
                    <div className="text">您在使用我们的服务时，我们可能使用您的信息向您的设备发送电子邮件、新闻或推送通知。如您不希望收到这些信息，可以按照我们的相关提示，在设备上选择取消订阅。</div>
                    <div className="head2">与服务有关的公告: </div>
                    <div className="text">我们可能在必要时（例如因系统维护而暂停某一项服务时）向您发出与服务有关的公告。您可能无法取消这些与服务有关、性质不属于推广的公告。</div>
                    <div className="head">(十)隐私政策的适用例外</div>
                    <div className="text2">我们的服务可能包括或链接至第三方提供的社交媒体或其他服务（包括网站）。例如：</div>
                    <div className="text">•  您利用 “分享”键将某些内容分享到我们的服务，或您利用第三方连线服务登录我们的服务。这些功能可能会收集您的相关信息（包括您的日志信息），从而正常运行上述功能；</div>
                    <div className="text">•  我们通过广告或我们服务的其他方式向您提供链接，使您可以接入第三方的服务或网站。</div>
                    <div className="black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本《隐私政策》仅适用于我们所收集的信息，并不适用于任何第三方提供的服务或第三方的信息使用规则，我们对任何第三方使用由您提供的信息不承担任何责任。   </div>
                    <div className="head">(十一)未成年人使用我们的服务</div>
                    <div className="text">我们鼓励父母或监护人指导未满十八岁的未成年人使用我们的服务。我们建议未成年人鼓励他们的父母或监护人阅读本《隐私政策》，并建议未成年人在提交的个人信息之前寻求父母或监护人的同意和指导。</div>
                    <div className="head">(十二)隐私政策的适用范围</div>
                    <div className="text">除某些特定服务外，我们所有的服务均适用本《隐私政策》。这些特定服务将适用特定的隐私政策。<span className="bl">针对某些特定服务的特定隐私政策，将更具体地说明我们在该等服务中如何使用您的信息。</span>该特定服务的隐私政策构成本《隐私政策》的一部分。<span className="bl">如相关特定服务的隐私政策与本《隐私政策》有不一致之处，适用该特定服务的隐私政策。</span></div>
                    <div className="text2"><span className="bl">除本《隐私政策》另有规定外，本《隐私条款》所用词语将与《用户使用协议》所定义的词语具有相同的涵义。</span></div>
                    <div className="head">(十三)请您注意，本《隐私政策》不适用于以下情况：</div>
                    <div className="text">•  通过我们的服务而接入的第三方服务（包括任何第三方网站）收集的信息；</div>
                    <div className="text">•  通过在我们服务中进行广告服务的其他公司或机构所收集的信息。</div>
                    <div className="head">(十四)变更</div>
                    <div className="text2">我们可能适时修订本《隐私政策》的条款，该等修订构成本《隐私政策》的一部分。<span className="bl">如该等修订造成您在本《隐私政策》下权利的实质减少，我们将在修订生效前通过在主页上显著位置提示或向您发送电子邮件或以其他方式通知您。在该种情况下，若您继续使用我们的服务，即表示同意受经修订的本《隐私政策》的约束。</span></div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Privacy)