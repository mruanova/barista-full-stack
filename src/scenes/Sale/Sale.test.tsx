import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import Sale from './Sale';
import Drink from '../../interfaces/Drink';
import Item from '../../interfaces/Item';

it('renders without crashing', () => {
  const sale = new Drink();
  const items: Item[] = [];
  const div = document.createElement('div');
  const root: Root = createRoot(div);
  root.render(<Sale
    sale={sale}
    items={items}
  />);
  root.unmount();
});
