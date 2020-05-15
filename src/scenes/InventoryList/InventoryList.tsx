import React from 'react';
import { useStyles } from './useStyles';
import Item from '../../interfaces/Item';

interface Props {
    items: Item[];
}

const InventoryList = (props: Props) => {
    const classes = useStyles();
    const { items } = props;
    const instructions = 'Click +1 to restock the inventory.';
    const title = 'Inventory';
    const subtitle = 'List of the ingredients available';
    const indents: any[] = [];

    items.forEach((element: Item, index) => {
        indents.push(
            <div key={index} className={classes.row}>
                <div className={classes.name}>{element.name} </div>
                <div className={classes.cost}>${element.cost.toFixed(2)}</div>
                <div className={classes.units}>{element.units}</div>
            </div>
        )
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

export default InventoryList;