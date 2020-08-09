import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: 200,
    width: '100%',
    margin: theme.spacing(1), 
    color: 'black',
    backgroundColor: '#d3d3d361',
    fontSize: theme.spacing(4),
    borderRadius: theme.spacing(3),
    padding: '10px 20px',
  },
  result: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
  },
  preResult: {
    flex: '1',
    display: 'flex',
    alignItems: 'flex-end',
    color: 'grey',
  }
}));

export default useStyles
