/* @refresh reload */
import App from './App';
import { createRouter } from '@solidjs/router';
import { render } from '@solidjs/web';
import { lazy } from 'solid-js';
const About = lazy(() => import('./pages/about'));

const Router = createRouter({
  routes: [
    { path: '/', component: App },
    { path: '/about', component: About },
  ],
});

const root = document.getElementById('root');
if (root) {
  render(() => <Router>{(props) => props.children}</Router>, root);
}
