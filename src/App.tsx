import { lazy } from 'solid-js';
import { A } from '@solidjs/router';
const About = lazy(() => import('./pages/about'));

export default function App() {
  return (
    <>
      <h1>Hello world!!!!</h1>
      <A href="/about">about</A>
    </>
  );
}
