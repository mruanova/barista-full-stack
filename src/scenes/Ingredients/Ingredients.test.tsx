import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import Ingredients from './Ingredients';
import Item from '../../interfaces/Item';

it('renders without crashing', () => {
  const items: Item[] = [];
  const div = document.createElement('div');
  const root: Root = createRoot(div);
  root.render(<Ingredients
    items={items}
    onHandleClick={() => { }}
  />);
  root.unmount();
});
