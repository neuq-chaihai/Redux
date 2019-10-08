import React from 'react';
import "./footer.less";


class Footer extends React.Component{
    render(){
        return (
            <div className="Footer-warp">
                <ul className="Footer-about">
                    <li><a href='/'>关于简书</a></li>
                    <li><a href='/'>联系我们</a></li>
                    <li><a href='/'>加入我们</a></li>
                    <li><a href='/'>简书出版</a></li>
                    <li><a href='/'>品牌与徽标</a></li>
                    <li><a href='/'>帮助中心</a></li>
                    <li><a href='/'>合作伙伴</a></li>
                </ul>
                <br/>
                <div className="footer-bottom">
                    <a href='/'>©2012-2019 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 / </a>
                    <a href='/'><span className="Smrz"></span></a>
                    <a href='/'>沪公网安备31010402002252号 / </a>
                    <a href='/'><span className="Wxb"></span></a>
                    <a href='/'>简书网举报电话：021-34770013 / </a>
                    <a href='/'><span className="Fanzha"></span></a>
                    <a href='/'>亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听 / </a>
                    <a href='/'><span className="Zggsrz"></span></a>
                </div>
            </div>

        )
    }
}

export default Footer;