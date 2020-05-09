import Drink from '../interfaces/Drink';
import Item from '../interfaces/Item';
import Ingredient from '../interfaces/Ingredient';

export function isAvailable(drink: Drink, items: Item[]): boolean {
    let available = true;
    drink.ingredients.forEach((ingredient:Ingredient) => {
        if (items.length > 0) {
            const temp = items.find((item) => {
                return item.id === ingredient.itemId;
            });
            if (temp) {
                if (ingredient.units > temp.units) {
                    available = false;
                }
                else {
                    drink.cost += temp.cost;
                }
            }
        }
    });
    return available;
}
