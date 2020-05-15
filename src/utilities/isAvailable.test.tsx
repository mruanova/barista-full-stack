import ItemType from '../enums/ItemType';
import Item from '../interfaces/Item';
import Drink from '../interfaces/Drink';
import { isAvailable } from './isAvailable';

it('Coffee drink is available', () => {
  const items: Item[] = [];
  items.push({ id: ItemType.Coffee, name: 'coffee', units: 3, cost: 0.75 });
  items.push({ id: ItemType.Sugar, name: 'sugar', units: 1, cost: 0.25 });
  items.push({ id: ItemType.Cream, name: 'cream', units: 1, cost: 0.25 });
  const coffee = new Drink({
    id: 0, name: 'Coffee', ingredients: [
      { itemId: ItemType.Coffee, units: 3 },
      { itemId: ItemType.Sugar, units: 1 },
      { itemId: ItemType.Cream, units: 1 },
    ], cost: 0,
  });
  const available = isAvailable(coffee, items);
  expect(available).toEqual(true);
});

it('Coffee Drink is not available when missing iventory', () => {
  const items: Item[] = [];
  items.push({ id: ItemType.Coffee, name: 'coffee', units: 1, cost: 0.75 });
  items.push({ id: ItemType.DecafCoffee, name: 'decaf-coffee', units: 1, cost: 0.75 });
  items.push({ id: ItemType.Sugar, name: 'sugar', units: 1, cost: 0.25 });
  items.push({ id: ItemType.Cream, name: 'cream', units: 1, cost: 0.25 });
  const coffee = new Drink({
    id: 0, name: 'Coffee', ingredients: [
      { itemId: ItemType.Coffee, units: 3 },
      { itemId: ItemType.Sugar, units: 1 },
      { itemId: ItemType.Cream, units: 1 },
    ], cost: 0,
  });
  const available = isAvailable(coffee, items);
  expect(available).toEqual(false); // expected 3 units of coffee got only 1
});

it('Coffee drink is correctly priced', () => {
  const items: Item[] = [];
  items.push({ id: ItemType.Coffee, name: 'coffee', units: 10, cost: 0.75 });
  items.push({ id: ItemType.Sugar, name: 'sugar', units: 10, cost: 0.25 });
  items.push({ id: ItemType.Cream, name: 'cream', units: 10, cost: 0.25 });
  const coffee = new Drink({
    id: 0, name: 'Coffee', ingredients: [
      { itemId: ItemType.Coffee, units: 3 },
      { itemId: ItemType.Sugar, units: 1 },
      { itemId: ItemType.Cream, units: 1 },
    ], cost: 0,
  });
  const available = isAvailable(coffee, items);
  expect(available).toBeTruthy();
  expect(coffee.cost.toFixed(2)).toEqual('2.75');
});

it('Decaf Coffee drink is correctly priced', () => {
  const items: Item[] = [];
  items.push({ id: ItemType.Coffee, name: 'decaf-coffee', units: 3, cost: 0.75 });
  items.push({ id: ItemType.Sugar, name: 'sugar', units: 1, cost: 0.25 });
  items.push({ id: ItemType.Cream, name: 'cream', units: 1, cost: 0.25 });
  const decaf = new Drink({
    id: 0, name: 'Decaf Coffee', ingredients: [
      { itemId: ItemType.Coffee, units: 3 },
      { itemId: ItemType.Sugar, units: 1 },
      { itemId: ItemType.Cream, units: 1 },
    ], cost: 0,
  });
  const available = isAvailable(decaf, items);
  expect(available).toBeTruthy();
  expect(decaf.cost.toFixed(2)).toEqual('2.75');
});

it('Caffe Latte is correctly priced', () => {
  const items: Item[] = [];
  items.push({ id: ItemType.Espresso, name: 'espresso', units: 2, cost: 1.00 });
  items.push({ id: ItemType.SteamedMilk, name: 'steamed-milk', units: 1, cost: 0.35 });
  const caffeLatte = new Drink({
    id: 0, name: 'Caffe Latte', ingredients: [
      { itemId: ItemType.Espresso, units: 2 },
      { itemId: ItemType.SteamedMilk, units: 1 },
    ], cost: 0,
  });
  const available = isAvailable(caffeLatte, items);
  expect(available).toBeTruthy();
  expect(caffeLatte.cost.toFixed(2)).toEqual('2.35');
});

it('Caffe Americano is correctly priced', () => {
  const items: Item[] = [];
  items.push({ id: ItemType.Espresso, name: 'espresso', units: 3, cost: 1.00 });
  const americano = new Drink({
    id: 0, name: 'Caffe Americano', ingredients: [
      { itemId: ItemType.Espresso, units: 3 },
    ], cost: 0,
  });
  const available = isAvailable(americano, items);
  expect(available).toBeTruthy();
  expect(americano.cost.toFixed(2)).toEqual('3.00');
});

it('Caffe Mocha is correctly priced', () => {
  const items: Item[] = [];
  items.push({ id: ItemType.Espresso, name: 'espresso', units: 1, cost: 1.00 });
  items.push({ id: ItemType.Cocoa, name: 'cocoa', units: 1, cost: 0.50 });
  items.push({ id: ItemType.SteamedMilk, name: 'steamed-milk', units: 1, cost: 0.35 });
  items.push({ id: ItemType.WhippedCream, name: 'whipped-cream', units: 1, cost: 0.55 });
  const mocha = new Drink({
    id: 0, name: 'Caffe Mocha', ingredients: [
      { itemId: ItemType.Espresso, units: 1 },
      { itemId: ItemType.Cocoa, units: 1 },
      { itemId: ItemType.SteamedMilk, units: 1 },
      { itemId: ItemType.WhippedCream, units: 1 },
    ], cost: 0,
  });
  const available = isAvailable(mocha, items);
  expect(available).toBeTruthy();
  expect(mocha.cost.toFixed(2)).toEqual('2.40');
});

it('Capuccino is priced correctly', () => {
  const items: Item[] = [];
  items.push({ id: ItemType.Espresso, name: 'espresso', units: 2, cost: 1.00 });
  items.push({ id: ItemType.FoamedCream, name: 'foamed-cream', units: 1, cost: 0.45 });
  items.push({ id: ItemType.SteamedMilk, name: 'steamed-milk', units: 1, cost: 0.35 });
  const capuccino = new Drink({
    id: 5, name: 'Capuccino', ingredients: [
      { itemId: ItemType.Espresso, units: 2 },
      { itemId: ItemType.FoamedCream, units: 1 },
      { itemId: ItemType.SteamedMilk, units: 1 },
    ], cost: 0,
  });
  const available = isAvailable(capuccino, items);
  expect(available).toBeTruthy();
  expect(capuccino.cost.toFixed(2)).toEqual('2.80');
});