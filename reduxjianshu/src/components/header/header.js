import React from 'react';
import './header.less';
import '../../assets/iconfont/iconfont.css'
import { CSSTransition } from 'react-transition-group'

// import {
//     Headerwarp,
//     Logo,
//     Nav,
//     NavItem,
//     InputSearch
// } from './style.js';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            foused: false
        };
        this.HandFocus = this.HandFocus.bind(this);
        this.HandBlur = this.HandBlur.bind(this);
    }

    HandFocus(){
        this.setState({
            foused: true
        })
    }

    HandBlur(){
        this.setState({
            foused: false
        })
    }

    render(){
        return (
            <div className="Headerwarp">
                <a href='/' className="Logo"></a>
                <div className="Nav">
                    <a href='/' className="NavItem header-menu left">
                        <i className="iconfont">&#xe672;</i>首页
                    </a>
                    <a href='/' className="NavItem left header-downloader">
                        <i className="iconfont">&#xe603;</i>下载APP
                    </a>
                    <a href='/' className="NavItem right header-writing">
                        <i className="iconfont">&#xe66f;</i>写文章
                    </a>
                    <a href='/' className="NavItem right header-signup">注册</a>
                    <a href='/' className="NavItem right sign">登录</a>
                    <i className="NavItem iconfont right sign header-A">&#xe602;</i>
                    <CSSTransition
                        in = {this.state.foused}
                        timeout = {200}
                        classNames = "slide"
                        onFocus={this.state.HandFocus}
                        onBlur={this.state.HandBlur}
                    >
                        <input type="text" placeholder="搜索" className={this.state.foused?"header-search Focused":"header-search"}></input>  
                    </CSSTransition>
                     
                    <i className="iconfont">&#xe624;</i>
                    
                </div>
            </div>
        );
    }

    
}

export default Header;