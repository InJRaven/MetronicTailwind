import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useTheme } from '@/providers';
import DefaultTooltip from '@/components/tooltip/tooltip';

function App() {
  const [count, setCount] = useState(0);
  const { toggleTheme } = useTheme();
  return (
    <>
      <div className="flex items-center justify-center gap-5">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="">
        <button className="btn btn-primary" onClick={toggleTheme}>
          test
        </button>

        <DefaultTooltip title="Test Tooltip" placement='top'>
          <div className="btn">Test Tooltip</div>
        </DefaultTooltip>
        <button
          className="btn bg-light dark:bg-dark text-gray-900"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
