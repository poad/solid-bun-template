/* @refresh reload */
import App from './App';
import { Router, Route } from '@solidjs/router';
import { lazy } from 'solid-js';
import { render } from 'solid-js/web';
const About = lazy(() => import('./pages/about'));

render(
  () => (
    <Router>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
    </Router>
  ),
  document.getElementById('root'),
);
