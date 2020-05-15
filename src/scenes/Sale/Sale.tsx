import React from 'react';
import { useStyles } from './useStyles';
import Drink from '../../interfaces/Drink';
import Ingredient from '../../interfaces/Ingredient';
import Item from '../../interfaces/Item';

interface Props {
    sale: Drink;
    items: Item[];
}

const Sale = (props: Props) => {
    const classes = useStyles();
    const { sale, items } = props;
    const instructions = 'Select a drink from the list.';
    const title = 'Barista Matic';
    const subtitle = 'Would you like a coffee ?';
    const indents: any[] = [];

    sale.ingredients.forEach((ingredient: Ingredient, index) => {
        const temp = items.find((item: Item) => {
            return item.id === ingredient.itemId;
        });
        if (temp) {
            indents.push(
                <div key={index} className={classes.row}>
                    <div className={classes.name}>{temp.name} </div>
                    <div className={classes.units}>{ingredient.units}</div>
                    <div className={classes.cost}>${temp.cost.toFixed(2)}</div>
                </div>
            );
        }
    });
    
    return (
        <div className={classes.box}>
            <h1>{title}</h1>
            <h2 className={classes.sub}>{subtitle}</h2>
            {sale.name.length > 0 ? (
                <div>
                    <div className={classes.row}>Receipt: {sale.receipt}</div>
                    <div className={classes.row}>Sale: {sale.timestamp}</div>
                    <div className={classes.row}>Cashier: {sale.cashier}</div>
                    <div className={classes.row}>Ingredients:</div>
                    {indents}
                    <div className={classes.row}>Total:</div>
                    <div className={classes.row}>
                        <div className={classes.name}>{sale.name} </div>
                    <div className={classes.units}>1</div>
                        <div className={classes.cost}>${sale.cost.toFixed(2)}</div>
                    </div>
                </div>
            ) : (<div>{instructions}</div>)
            }
        </div>
    );
}

export default Sale;