
export default theme => ({
    card: {
        margin: theme.spacing(),
        padding: theme.spacing()
    },
    slimView: {
        margin: 'auto',
        maxWidth: 450,
    },
    slimViewInner: {
        //border: '1px solid green',
        marginTop: theme.spacing(2),
    },
    buttonList: {
        marginTop: theme.spacing(2),
        textAlign: 'center',
    },
    grow: {
        flexGrow: 1,
    },
    white: {
        color: 'white',
    },
});
