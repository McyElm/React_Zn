import React from 'react'
import './index.less';
import {connect} from 'react-redux'
import {switch_menuShowBool,switchIndex} from '../../redux/action/index'
import rightImg from '../../assets/img/privacy_banner.png';
import yins from '../../assets/img/yins.png';
class Clause extends React.Component {
    componentDidMount() {
        this.props.menuShowBool({
            'isShow': 'block'
        });
        this.props.menuInit(null);
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="clause-wrap">
                <div className="banner">
                    <div className="conent">
                        <div  className="left">
                            <h2>服务条款</h2>
                            <p>暖虎平台使用服务协议</p>
                        </div>
                        <div className="right">
                            <img src={rightImg} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="m_q">
                    <div className="head">(一)特别提示</div>
                    <div className="text">1.1  暖虎云台及关联企业（以下合称”暖虎云台”）同意按照本协议的规定及其不时发布的操作规则提供基于互联网以及移动网有关信息服务、应用服务、社交服务等服务（以下称“服务“），为获得服务，服务使用人（以下简称“用户”或“您”）应当基于了解本协议全部内容，在独立思考的基础上认可、同意本协议的全部条款并按照页面上的提示完成全部的注册程序。您在进行注册程序过程中点击”同意” 按钮即表示您完全接受《暖虎云台用户使用协议》（以下简称“本协议”）及暖虎云台公示的各项规则、规范。您确认，您是具备完全民事权利能力和完全民事行为能力的自然人、法人或其他组织（以下简称“法律主体”），如您代表一家公司或其他法律主体进行注册或以其他允许的方式实际使用本服务，视为您已经获得该公司或该法律主体授权同意受本协议条款的约束。如果您不具备前述法律主体资格，请立即终止注册程序及在暖虎云台上的任何操作，且中能股份有权注销您的账号。如中能股份因此受到损失的，将向您和/或您的监护人索赔。</div>
                    <div className="text">1.2  您注册成功后，暖虎云台将为您基于服务使用的客观需要而在申请、注册服务时，按照注册要求提供的帐号开通服务，您有权在暖虎云台为其开通、并同意向其提供服务的基础上使用服务。您的帐号和密码由您负责保管，应当使用由字母、数字组成的密码（6-16位长度），并应定期更改密码；您使用服务过程中，须对其账号下使用服务的行为、对任何由您账号通过服务发布、公开的信息，及对由此产生的任何后果承担全部责任。</div>
                    <div className="text">1.3  在注册帐号或使用本服务的过程中，您需要提供一些必要的信息，例如：为向您提供帐号注册服务或进行您身份识别，需要您填写：</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;① 遵守适用的法律法规；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;② 注册地址及人员规模；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;③ 联系人姓名、手机、邮箱及其身份信息；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;④ 组织架构代码、营业执照扫描图片等。</div>
                    <div className="text2">若国家法律法规或政策有特殊规定的，您需要提供真实的身份信息。若您提供的信息不完整或存在虚假等问题，则可能影响您无法使用本服务或在使用本服务过程中受到限制。</div>
                    <div className="text2">1.4  为提高您的服务体验和满意度，暖虎云台将基于您的操作行为对您的行为数据进行调查研究和分析，从而进一步优化产品及服务。</div>
                    <div className="text2">1.5  您在使用结束后，如需暂时或永久离开本服务，数据将会自动归档处理，待归档期限结束后会自动删除。</div>
                    <div className="head">(二)服务内容</div>
                    <div className="text">2.1  暖虎云台服务的具体内容由平台根据实际情况提供，包括但不限于授权您通过其帐号，使用企业注册等功能，暖虎云台有权对其提供的服务或产品形态进行升级或其他调整，并将及时告知您。</div>
                    <div className="text">2.2 暖虎云台仅提供与服务相关的技术支持，除此之外与相关网络服务有关的设备（如个人电脑、手机、及其他与接入互联网或移动网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费）均应由您自行负担。</div>
                    <div className="head">(三)服务变更、中断或终止</div>
                    <div className="text2 ">3.1  鉴于网络服务的特殊性（包括但不限于服务器的稳定性问题、恶意的网络攻击等行为的存在及其他暖虎云台无法控制的情形），您同意暖虎云台有权随时中断或终止部分或全部的服务，若发生该等中断或中止服务的情形，暖虎云台将尽可能及时通过网页公告、系统通知、邮箱、短信或其他合理方式通知受到影响的您。</div>
                    <div className="text2 ">3.2  您理解，暖虎云台需要定期或不定期地对提供服务的平台（如互联网网站、移动网络等）或相关的设备进行检修或者维护，如因此类情况而造成服务在合理时间内的中断，暖虎云台无需为此承担任何责任，但应尽可能事先进行通告。</div>
                    <div className="text2 ">3.3  如发生下列任何一种情形， 暖虎云台有权随时中断或终止向您提供本协议项下的服务而无需对您或任何第三方承担任何责任：</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.1 您提供的资料信息不真实；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.2 您违反法律法规国家政策或本协议中规定的使用规则；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.3.3 您在使用收费服务时未按规定付费。</div>
                    <div className="text2">3.4  如您申请开通服务后在任何连续365日内未实际使用，则暖虎云台有权选择采取以下任何一种方式进行处理，由此产生的一切法律责任将由您自行承担：</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.4.1 回收昵称；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.4.2 停止提供服务。</div>
                    <div className="text">3.5  您选择将帐号与第三方帐号进行绑定的，除您自行解除绑定关系外，如发生下列任何一种情形，您已绑定的第三方帐号也有可能被解除绑定而暖虎云台无需对您或任何第三方承担任何责任：</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.5.1 违反法律法规国家政策、本协议的；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.5.2 违反第三方帐户协议或其相关规定的；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.5.3 其他需要解除绑定的。</div>

                    <div className="head">(四)使用规则</div>
                    <div className="text2">4.1  您注册暖虎云台账号，制作、发布、传播信息内容的，应当使用真实身份信息，不得以虚假、冒用的居民身份信息、企业注册信息、组织机构代码信息进行注册。</div>
                    <div className="text2">4.2  如您违反前述1条之约定，依据相关法律、法规及国家政策要求， 暖虎云台有权随时中止或终止您对服务的使用且不承担责任。</div>
                    <div className="text2">4.3  您在使用服务时， 暖虎云台有权基于安全运营、社会公共安全的需要或国家政策的要求，要求您提供准确的个人资料，如您提供的资料信息有任何变动，导致您的实际情况与您提交给暖虎云台的信息不一致的，您应及时更新。</div>
                    <div className="text2">4.4  您不应将其帐号、密码转让或出借予他人使用。如您发现帐号或服务遭他人非法使用，应立即通知暖虎云台协调处理。因无法对非法或未经授权使用您账号及密码的行为作出甄别， 暖虎云台将不承担任何责任。</div>
                    <div className="text2">4.5  您同意暖虎云台在提供服务过程中以各种方式投放各种商业性广告或其他任何类型的商业信息，并且，您同意接受暖虎云台通过电子邮件或其他方式向您发送商品促销或其他相关商业信息。</div>
                    <div className="text2">4.6  对于您通过服务公开发布的任何内容，您同意暖虎云台在全世界范围内具有免费的、永久性的、不可撤销的、非独家的和完全再许可的权利和许可，以使用、复制、修改、改编、出版、翻译、据以创作衍生作品、传播、表演和展示此等内容（整体或部分），和/或将此等内容编入当前已知的或以后开发的其他任何形式的作品、媒体或技术中。</div>
                    <div className="text2">4.7  您在使用服务过程中，不得在网站上制作、复制、上传、发布、传播含有下列内容之一的信息：</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.7.1  违反宪法确定的基本原则的；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.7.2  危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.7.3  损害国家荣誉和利益的；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.7.4  煽动民族仇恨、民族歧视，破坏民族团结的；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.7.5  破坏国家宗教政策，宣扬邪教和封建迷信的；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.7.6  散布谣言，扰乱社会秩序，破坏社会稳定的；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.7.7  散布淫秽、色情、赌博、暴力、恐怖或者教唆犯罪的；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.7.8  侮辱或者诽谤他人，侵害他人合法权益的；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.7.9  煽动非法集会、结社、游行、示威、聚众扰乱社会秩序；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.7.10  以非法民间组织名义活动的；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.7.11  不符合《即时通信工具公众信息服务发展管理暂行规定》及遵守法律法规、社会主义制度、国家利益、公民合法利益、公共秩序、社会道德风尚和信息真实性等“七条底线”要求的；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.7.12  发布、传送、传播、储存侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的内容；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.7.13  涉及他人隐私、个人信息或资料的；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.7.14  发表、传送、传播骚扰、广告信息、过度营销信息及垃圾信息或含有任何性或性暗示的；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.7.15  干扰暖虎云台正常运营和侵犯其他您或第三方合法权益内容的信息。</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.7.16  含有中国法律、法规以及任何具有法律效力之规范所限制或禁止的其它内容的。</div>
                    <div className="text2">4.8  暖虎云台针对某些特定的服务的使用通过各种方式（包括但不限于网页公告、系统通知、私信、短信提醒等）作出的任何声明、通知、警示等内容视为本协议的一部分，您如使用该等服务，视为您同意该等声明、通知、警示的内容。</div>
                    <div className="text2">4.9  您承诺自己在使用本网站服务的所有行为均遵守国家法律、法规和本网站的相关规定以及各种社会公共利益或公共道德。对于任何法律后果的发生，您将以自己的名义独立承担所有相应的法律责任， 暖虎云台不承担任何责任。</div>
                    <div className="text2">4.10  您在使用服务时如发现服务系统或其他相关系统的信息安全漏洞需及时通知暖虎云台，禁止对暖虎云台服务系统进行漏洞扫描、渗透测试等可能造成平台损失的行为。</div>
                    <div className="text2">4.11  除非法律允许或暖虎云台书面许可，你使用本产品或服务过程中不得从事下列行为：</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.11.1  删除本产品及其副本上关于著作权的信息；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.11.2  对本产品进行反向工程、反向汇编、反向编译，或者以其他方式尝试发现本产品的源代码；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.11.3  对暖虎云台拥有知识产权的内容进行使用、出租、出借、复制、修改、链接、转载、汇编、发表、出版、建立镜像站点等；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.11.4  对本产品或者本产品运行过程中释放到任何终端内存中的数据、产品运行过程中客户端与服务器端的交互数据，以及本产品运行所必需的系统数据，进行复制、修改、增加、删除、挂接运行或创作任何衍生作品，形式包括但不限于使用插件、外挂或非经暖虎云台授权的第三方工具/服务接入本产品和相关系统；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.11.5  通过修改或伪造产品运行中的指令、数据，增加、删减、变动产品的功能或运行效果，或者将用于上述用途的产品、方法进行运营或向公众传播，无论这些行为是否为商业目的；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.11.6  自行或者授权他人、第三方产品对本产品及其组件、模块、数据进行干扰；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.11.7  其他未经暖虎云台明示授权的行为。</div>
                    <div className="text2">4.12  除非法律允许或暖虎云台书面许可，使用本产品或服务过程中不得从事下列行为：</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.12.1  提交、发布虚假信息，或冒充、利用他人名义的；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.12.2  诱导其他您点击链接页面或分享信息的；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.12.3  虚构事实、隐瞒真相以误导、欺骗他人的；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.12.4  侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的；</div>
                    <div className="text2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.12.5  其他违反法律法规规定、侵犯其他您合法权益、干扰产品正常运营或暖虎云台未明示授权的行为。</div>


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
export default connect(mapStateToProps, mapDispatchToProps)(Clause)