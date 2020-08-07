import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: '100%',
    margin: theme.spacing(1), 
    color: 'black',
    backgroundColor: '#d3d3d361',
    fontSize: theme.spacing(4),
    borderRadius: theme.spacing(3),
  },
}));

export default useStyles
