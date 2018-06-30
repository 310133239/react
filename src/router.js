import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import Loading from './components/Common/Loading';
import LayoutPage from './routes/Layout';

function loadingPage() {
  return <Loading loading title="页面加载中..." />;
}

export default function RouterConfig({ history, app }) {
  debugger; // eslint-disable-line
  const getRoutePage = (component, models) => {
    return dynamic({
      app, LoadingComponent: loadingPage, models, component,
    });
  };
  const Layout = (props) => {
    return (
      <LayoutPage {...props} history={history}>
        <Switch>
          <Route
            path="/a"
            component={
              getRoutePage(
                () => import('./routes/IndexPage'),
                () => [import('./models/index')],
              )
            }
          />
        </Switch>
      </LayoutPage>);
  };
  return (
    <Router history={history}>
      <Route ex path="/" component={Layout} />
    </Router>
  );
}
