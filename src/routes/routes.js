import App from 'src/app';
import {HomePage, Login} from "components/pages";


const routes = [
  {
    component: App,
    routes: [
      {
        component: Login,
        exact: true,
        path: '/login',
      }, {
        component: HomePage,
        exact: false,
        path: '/',
      }
    ]
  }
];

export default routes;
