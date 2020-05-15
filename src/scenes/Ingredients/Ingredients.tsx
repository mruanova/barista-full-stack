import React from 'react';
import { useStyles } from './useStyles';
import Item from '../../interfaces/Item';
import Action from '../../interfaces/Action';

interface Props {
    items: Item[];
    onHandleClick: (action: Action) => void;
}

const Ingredients = (props: Props) => {
    const classes = useStyles();
    const { items, onHandleClick } = props;
    const instructions = 'Click +1 to restock the inventory.';
    const title = 'Ingredients';
    const subtitle = 'Restock ingredients';
    const indents: any[] = [];
    const [value] = React.useState(1);

    /** add ingredient to restock inventory items */
    const handleClick = (item: Item) => (_event: React.MouseEvent | React.KeyboardEvent) => {
        const action = new Action({ type: 'add', value, item });
        onHandleClick(action);
    };

    items.forEach((element) => {
        const buttonId = `button${element.id}`;
        indents.push(
            <div key={element.id}>
                <button id={buttonId} className={classes.button} onClick={handleClick(element)}>{element.name}</button>
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

export default Ingredients;