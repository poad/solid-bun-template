/* @refresh reload */
import App from './App';
import { render } from 'solid-js/web';
import { lazy } from 'solid-js';

import { Router, Route } from '@solidjs/router';
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
