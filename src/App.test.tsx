import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root: Root = createRoot(div);
  root.render(<App />);
  root.unmount();
});
