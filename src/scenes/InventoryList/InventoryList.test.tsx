import React from 'react';
import ReactDOM from 'react-dom';
import InventoryList from './InventoryList';
import Item from '../../interfaces/Item';

it('renders without crashing', () => {
  const items: Item[] = [];
  const div = document.createElement('div');
  ReactDOM.render(<InventoryList
    items={items}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});
