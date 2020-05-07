import ItemType from '../enums/ItemType';
import Ingredient from '../interfaces/Ingredient';
import Drink from '../interfaces/Drink';
export function appReducer() {
  return (state: any, action: any) => {
    const items = state.items;
    const ingredients = state.ingredients;
    const drinks = state.drinks;
    switch (action.type) {
      case 'reset':
        items.length = 0;
        items.push({ id: ItemType.Coffee, name: 'coffee', units: 10, cost: 0.75 });
        items.push({ id: ItemType.DecafCoffee, name: 'decaf-coffee', units: 10, cost: 0.75 });
        items.push({ id: ItemType.Espresso, name: 'espresso', units: 10, cost: 1.00 });
        items.push({ id: ItemType.Sugar, name: 'sugar', units: 10, cost: 0.25 });
        items.push({ id: ItemType.Cocoa, name: 'cocoa', units: 10, cost: 0.50 });
        items.push({ id: ItemType.Cream, name: 'cream', units: 10, cost: 0.25 });
        items.push({ id: ItemType.WhippedCream, name: 'whipped-cream', units: 10, cost: 0.55 });
        items.push({ id: ItemType.FoamedCream, name: 'foamed-cream', units: 10, cost: 0.45 });
        items.push({ id: ItemType.SteamedMilk, name: 'steamed-milk', units: 10, cost: 0.35 });
        drinks.length = 0;
        drinks.push({
          id: 0, name: 'Coffee', ingredients: [
            { itemId: ItemType.Coffee, units: 3 },
            { itemId: ItemType.Sugar, units: 1 },
            { itemId: ItemType.Cream, units: 1 },
          ], cost: 0,
        });
        drinks.push({
          id: 1, name: 'Decaf Coffee', ingredients: [
            { itemId: ItemType.DecafCoffee, units: 3 },
            { itemId: ItemType.Sugar, units: 1 },
            { itemId: ItemType.Cream, units: 1 },
          ], cost: 0,
        });
        drinks.push({
          id: 2, name: 'Caffe Latte', ingredients: [
            { itemId: ItemType.Espresso, units: 2 },
            { itemId: ItemType.SteamedMilk, units: 1 },
          ], cost: 0,
        });
        drinks.push({
          id: 3, name: 'Caffe Americano', ingredients: [
            { itemId: ItemType.Espresso, units: 3 },
          ], cost: 0,
        });
        drinks.push({
          id: 4, name: 'Caffe Mocha', ingredients: [
            { itemId: ItemType.Espresso, units: 1 },
            { itemId: ItemType.Cocoa, units: 1 },
            { itemId: ItemType.SteamedMilk, units: 1 },
            { itemId: ItemType.WhippedCream, units: 1 },
          ], cost: 0,
        });
        drinks.push({
          id: 5, name: 'Capuccino', ingredients: [
            { itemId: ItemType.Espresso, units: 2 },
            { itemId: ItemType.SteamedMilk, units: 1 },
            { itemId: ItemType.Sugar, units: 1 },
          ], cost: 0,
        });
        return { items, ingredients, drinks, sale: new Drink() };
      case 'sale':
        const newItems = items;
        action.sale.ingredients.forEach((element: Ingredient) => {
          newItems[element.itemId].units -= element.units;
        });
        return { items: newItems, ingredients, drinks, sale: action.sale };
      case 'add':
        const units = action.value;
        const updatedItems = items;
        updatedItems[action.item.id].units += units;
        return { items: updatedItems, ingredients, drinks, sale: new Drink() };
      default:
        throw new Error();
    }
  };
}
