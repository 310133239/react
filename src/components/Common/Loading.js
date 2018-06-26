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
    const { title = '加载中' } = this.props;
    return (
      <div>
        {
          true ? (
            <div className={style.loadingWrap}>
              <div className={style.loadingText}>
                {title}
              </div>
            </div>) : null
        }
      </div>
    );
  }
}
