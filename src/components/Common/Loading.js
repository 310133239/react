import React, { PureComponent } from 'react';
import style from './Loading.less';
import Empty from './EmptyPage';

export default class Loading extends PureComponent {
  state = {};

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const {
      title = '加载中',
      loading,
      children,
      mask,
    } = this.props;
    return (
      <div>
        { loading ? (mask === true
          ? (
            <div className={style.loadingWrap}>
              <div className={style.title}>
                {title}
              </div>
            </div>
          ) : null)
          : null }
        {children || <Empty />}
      </div>
    );
  }
}
