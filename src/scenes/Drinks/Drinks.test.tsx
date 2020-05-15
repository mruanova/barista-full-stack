import React from 'react';
import ReactDOM from 'react-dom';
import Drinks from './Drinks';
import Drink from '../../interfaces/Drink';
import Item from '../../interfaces/Item';

it('renders without crashing', () => {
  const drinks: Drink[] = [];
  const items: Item[] = [];
  const div = document.createElement('div');
  ReactDOM.render(<Drinks
    drinks={drinks}
    items={items}
    onHandleClick={() => { }}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});
