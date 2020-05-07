import React from 'react';
import { useStyles } from './useStyles';
import Item from '../../interfaces/Item';
// import _ from 'lodash';

interface Props {
    data: Item[];
    dispatch: Function;
}

const Ingredients = (props: Props) => {
    const classes = useStyles();
    const { data, dispatch } = props;
    const instructions = 'Click reset to start the inventory.'
    const indents: any[] = [];
    const [value, setValue] = React.useState(0);
    const handleClick = (item: any) => (event: React.MouseEvent | React.KeyboardEvent) => {
        console.log('handleClick.item', item);
        console.log('handleClick.event', event);
        dispatch({ type: 'add', value, item });
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleChange', event);
        const temp = parseInt(event.target.value);
        if (temp > 0) {
            setValue(temp);
        }else{
            setValue(0);
        }
    };
    data.forEach((element) => {
        const inputId = `text${element.id}`;
        const buttonId = `button${element.id}`;
        indents.push(
            <div key={element.id}>
                <div className={classes.name}>{element.name}</div>
                <input id={inputId} className={classes.text} type="number" onChange={handleChange} />
                <button id={buttonId} className={classes.button} onClick={handleClick(element)}>Add</button>
            </div>
        )
    });
    return (
        <div className={classes.appHeader}>
            <h1>Ingredients</h1>
            <h2 className={classes.appLink}>Here you can add ingredients:</h2>
            {
                indents.length > 0 ? (
                    indents
                ) : (<div>{instructions}</div>)
            }
        </div>
    );
}

export default Ingredients;
/*
export default React.memo(Ingredients, (prevProps, nextProps) =>
  _.isEqual(prevProps, nextProps),
);
*/