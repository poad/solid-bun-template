/* @refresh reload */
import { render } from 'solid-js/web';
import { lazy } from 'solid-js';

import App from './App';
import { Router, Routes, Route } from '@solidjs/router';
const About = lazy(() => import('./pages/about'));

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/about" component={About} />
      </Routes>
    </Router>
  ),
  document.getElementById('root'),
);
