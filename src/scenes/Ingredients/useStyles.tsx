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
    text: {
        textAlign: 'right',
        width: 50
    },
    button: {
        backgroundColor: 'goldenrod',
        borderRadius: 5,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10,
        textTransform: 'uppercase',
        height: 22,
        width: 240,
        '&:hover': { textDecoration: 'underline' },
    }
}),
    { name: 'Ingredients' },
);

export default useStyles;
