import React from 'react';
import Index from '../components/Index/Index';
import getRoute from '../utils/routeutil';

export default function ContractRouter({ location: { pathname } }) {
  const ROUTES = [
    { path: '/a', title: '主页面', component: Index },
    { path: '/a/:id', title: '主页面', getComponent: ({ id }) => <Index id={id} /> },
  ];

  return getRoute(ROUTES, pathname);
}
