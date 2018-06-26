import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import { Toast } from 'antd-mobile';
import { PAGE_PREFIX } from './constants';
import './index.css';

const history = createHistory({ basename: PAGE_PREFIX });
// 1. Initialize
const app = dva({
  history,
  onError(ex) {
    Toast.hide();
    if (ex.code === 401 || ex.code === 403) {
      Toast.fail(ex.message || ex.msg || '您已经登陆超时', 2);
      return;
    }
    if (ex.code === 502 || ex.name === 'SyntaxError') {
      Toast.offline('网络记载较慢，稍后重试。');
    }
  },
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/example').default);

// 4. Router


app.router(require('./router').default);

// 5. Start
app.start('#root');
