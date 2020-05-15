import React from 'react';
import { useStyles } from './useStyles';
import Drink from '../../interfaces/Drink';
import Item from '../../interfaces/Item';
import { isAvailable } from '../../utilities/isAvailable';
import Action from '../../interfaces/Action';
import { format } from 'date-fns';

interface Props {
    drinks: Drink[];
    items: Item[];
    onHandleClick: (action: Action) => void;
}

const Drinks = (props: Props) => {
    const classes = useStyles();
    const { drinks, items, onHandleClick } = props;
    const indents: any[] = [];
    const instructions = 'Click +1 to restock the inventory.';
    const title = 'Drinks';
    const subtitle = 'List of drinks available for sale';
    const cashier = 'Mauricio Ruanova';

    /** sell drink and discount inventory items */
    const handleClick = (drink: Drink) => (_event: React.MouseEvent | React.KeyboardEvent) => {
        drink.timestamp = format(new Date(), "MM/dd/yyyy hh:mm aaaaa'm'");
        drink.receipt = Date.now().toString();
        drink.cashier = cashier;
        const action = new Action({ type: 'sale', sale: drink });
        onHandleClick(action);
    };

    drinks.forEach((drink, index) => {
        drink.cost = 0;
        const available = isAvailable(drink, items);
        if (available) {
            indents.push(
                <div className={classes.button} key={index} onClick={handleClick(drink)}>
                    <div className={classes.name}>{drink.name}</div>
                    <div className={classes.cost}>${drink.cost.toFixed(2)}</div>
                </div>
            )
        }
    });

    return (
        <div className={classes.box}>
            <h1>{title}</h1>
            <h2 className={classes.subtitle}>{subtitle}</h2>
            {
                indents.length > 0 ? (
                    indents
                ) : (<div>{instructions}</div>)
            }
        </div>
    );
}

export default Drinks;
