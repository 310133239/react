import React, { PureComponent } from 'react';
import style from './Loading.less';

export default class Loading extends PureComponent {
  state = {};

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { title = '加载中', loading, children } = this.props;
    return (
      <div>
        {
          loading ? (
            <div className={style.loadingWrap}>
              <div className={style.title}>
                {title}
              </div>
            </div>) : null
        }
        {children}
      </div>
    );
  }
}
