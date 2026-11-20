import { lazy } from 'solid-js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const About = lazy(() => import('./pages/about'));

export default function App() {
  return (
    <>
      <h1>Hello world!!!!</h1>
      <a href="/about">about</a>
    </>
  );
}
