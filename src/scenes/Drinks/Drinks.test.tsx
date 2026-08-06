import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import Drinks from './Drinks';
import Drink from '../../interfaces/Drink';
import Item from '../../interfaces/Item';

it('renders without crashing', () => {
  const drinks: Drink[] = [];
  const items: Item[] = [];
  const div = document.createElement('div');
  const root: Root = createRoot(div);
  root.render(<Drinks
    drinks={drinks}
    items={items}
    onHandleClick={() => { }}
  />);
  root.unmount();
});
