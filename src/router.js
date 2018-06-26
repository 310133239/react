import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import Loading from './routes/IndexPage';

function loadingPage() {
  return <Loading loading title="页面加载中..." />;
}

export default function RouterConfig({ history, app }) {
  const getRoutePage = (component, models) => {
    return dynamic({
      app, LoadingComponent: loadingPage, models, component,
    });
  };

  return (
    <Router history={history}>
      <Switch>
        <Route
          path="/"
          exact
          component={
            getRoutePage(
              () => import('./routes/IndexPage'),
            )
          }
        />
      </Switch>
    </Router>
  );
}
