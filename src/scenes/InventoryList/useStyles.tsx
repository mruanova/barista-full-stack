import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    box: {
        border: '1px solid white',
        width: 240,
        minHeight: 420,
        display: 'inline-block',
        paddingLeft: 30,
        paddingRight: 30,
        verticalAlign: 'top',
        margin: 10
    },
    subtitle: {
        color: 'goldenrod'
    },
    name: {
        display: 'inline-block',
        width: 140
    },
    cost: {
        display: 'inline-block',
        marginRight: 5,
        width: 45
    },
    row: {
        marginBottom: 14
    },
    units: {
        display: 'inline-block',
        textAlign: 'right',
        width: 50
    },
}),
    { name: 'Inventory' },
);

export default useStyles;
