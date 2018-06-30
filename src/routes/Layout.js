import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
// import  DocumentTitle from 'react-document-title';
import Login from '../components/Global/Login';
import Loading from '../components/Common/Loading';
// import { matchURL } from '../utils/routeutil';
// import { deflate } from 'zlib';


@connect((state) => {
  debugger //eslint-disable-line
  return Object.assign({ loading: state.loading.global, isLogin: state.global.islogin });
})
export default class LayoutPage extends PureComponent {
  static chidContextTypes = {
    history: PropTypes.object,
  }

  state = {};

  getChildContext() {
    const history = this.props;
    return { history };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  rednerChildren() {
    const { isLogin } = this.state;
    const { children } = this.props;
    return isLogin ? children : <Login />;
  }

  render() {
    const { isLogin, loading } = this.state;
    return isLogin ? <Loading loading={loading} /> : this.rednerChildren();
  }
}
