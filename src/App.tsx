import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './useStyles';
// interfaces
import Action from './interfaces/Action';
import Ingredient from './interfaces/Ingredient';
import Item from './interfaces/Item';
import Drink from './interfaces/Drink';
// scenes
import Sale from './scenes/Sale/Sale';
import InventoryList from './scenes/InventoryList/InventoryList';
import Drinks from './scenes/Drinks/Drinks';
import Ingredients from './scenes/Ingredients/Ingredients';
// services
import ItemService from './services/ItemService';
import DrinksService from './services/DrinksService';

const App: React.FC = () => {
  const classes = useStyles();
  const defaultItems: Item[] = [];
  const [items, setItems] = React.useState(defaultItems);

  const defaultDrinks: Drink[] = [];
  const [drinks, setDrinks] = React.useState(defaultDrinks);

  const defaultSale = new Drink();
  const [sale, setSale] = React.useState(defaultSale);

  React.useEffect(() => {
    /** get inventory items from database */
    ItemService.getItems()
      .then((response: any) => {
        const temp = response.data.Items.sort((a: Item, b: Item) => {
          return a.id - b.id;
        });
        setItems(temp);
      })
      .catch((error: any) => {
        console.error(error);
      });
    /** get drinks from database */
    DrinksService.getDrinks()
      .then((response: any) => {
        const temp = response.data.Items.sort((a: Item, b: Item) => {
          return a.id - b.id;
        });
        setDrinks(temp);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }, [sale]);

  /** sell drink and discount inventory items */
  const handleDrinks = (action: Action) => {
    action.sale.ingredients.forEach((ingredient: Ingredient) => {
      const item = items.find((item: Item) => {
        return item.id === ingredient.itemId
      });
      if (item) {
        const temp = new Item(item);
        temp.units -= ingredient.units;
        ItemService.putItems(temp)
          .then((_response: any) => {
            setSale(action.sale);
          })
          .catch((error: any) => {
            console.error(error);
          });
      }
    });
  };

  /** add ingredient to restock inventory items */
  const handleIngredients = (action: Action) => {
    const item = items.find((item: Item) => {
      return item.id === action.item.id
    });
    if (item) {
      const temp = new Item(item);
      temp.units += 1;
      ItemService.putItems(temp)
        .then((_response: any) => {
          setSale(action.sale);
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  };

  return (
    <div className={classes.app}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>Barista-Matic</Typography>
        </Toolbar>
      </AppBar>
      <Sale sale={sale} items={items} />
      <Drinks drinks={drinks} items={items} onHandleClick={handleDrinks} />
      <InventoryList items={items} />
      <Ingredients items={items} onHandleClick={handleIngredients} />
    </div >
  );
}

export default App;
