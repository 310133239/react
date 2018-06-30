import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Loading from '../Common/Loading';

@connect(state => ({ loading: state.loading.global }))
export default class Login extends PureComponent {
  constructor(props) {
    super(props);
    const { loading } = this.props;
    this.state = {
      loading,
    };
  }

  login = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'global/login' });
  }

  render() {
    const { loading } = this.state;
    return (
      <Loading loading={loading}>
        <div onClick={this.login}>
          {'login'}
        </div>
      </Loading>);
  }
}
