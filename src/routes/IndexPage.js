import React from 'react';
import { connect } from 'dva';
import style from './Index.less';

function IndexPage() {
  return (<div className={style.name} />);
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
