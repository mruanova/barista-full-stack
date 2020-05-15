import React from 'react';
import ReactDOM from 'react-dom';
import Sale from './Sale';
import Drink from '../../interfaces/Drink';
import Item from '../../interfaces/Item';

it('renders without crashing', () => {
  const sale = new Drink();
  const items: Item[] = [];
  const div = document.createElement('div');
  ReactDOM.render(<Sale
    sale={sale}
    items={items}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});
