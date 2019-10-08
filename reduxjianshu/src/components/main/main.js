import React, { Component } from 'react';
import store from '../../store/store';
import {connect} from 'react-redux';
import './main.less'


class Main extends Component {
  
  render() {
    return (
      <div className="main-listContain">
        <ul className="main-ul">
            <li>
              <div>
                <a href="/" className="main-listTitle">公告：关于暂停用户发布功能，并全面清查平台内容</a>
                <div className="main-listCon">亲爱的简书用户 「简书」因个别上传作品用户违反《中华人民共和国网络安全法》《互联网信息服务管理办法》《互联网新闻信息服务管理规定》《互联网用户公...</div>
                <span className="main-fontRed"> 4714.6</span> <span className="main-fontGray">简书</span><span className="main-fontGray">11328</span>
              </div>
            </li>
            <li>
              <div>
                <a href="/" className="main-listTitle">{this.props.title}</a>
                <div className="main-listCon">{this.props.content}</div>
                <span className="main-fontRed">{this.props.data1}</span> <span className="main-fontGray">简书</span><span className="main-fontGray">11328</span>
              </div>
            </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch()
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
