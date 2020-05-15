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
    button: {
        border: '1px solid white',
        '&:hover': {
            color: 'black',
            background: 'white'
        },
        cursor: 'pointer',
        height: 22,
        padding: 8,
        marginBottom: 10
    },
    name: {
        display: 'inline-block',
        width: 125
    },
    cost: {
        display: 'inline-block',
        textAlign: 'right',
        width: 90
    }
}),
    { name: 'Drinks' },
);

export default useStyles;
