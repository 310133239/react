import Index from '../components/Index/Index';
import getRoute from '../utils/routeutil';

export default function ContractRouter({ location: { pathname } }) {
  const ROUTES = [
    { path: '/', title: '主页面', component: Index },
  ];

  return getRoute(ROUTES, pathname);
}
