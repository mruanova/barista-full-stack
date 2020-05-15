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
    sub: {
        color: 'goldenrod'
    },
    row:{
        marginBottom:10
    },
    name: {
        display: 'inline-block',
        width: 140
    },
    units: {
        display: 'inline-block',
        width: 45
    },
    cost: {
        display: 'inline-block',
        marginRight: 5,
        width: 50
    },
}),
    { name: 'Sales' },
);

export default useStyles;
