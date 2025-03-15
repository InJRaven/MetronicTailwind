import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useTheme } from '@/providers';
import Tooltip from '@/components/Base/tooltip/tooltip';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check, IndentDecrease, Minus } from 'lucide-react';
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
        <Tooltip
          title="Test Tooltip"
          placement="top"
          className="!translate-y-[-440px] !translate-x-[627px]"
        >
          <div className="btn btn-primary btn-sm">Test Tooltip</div>
        </Tooltip>
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
