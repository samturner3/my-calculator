import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    borderTop: '2px solid #d3d3d361',
    marginTop: '20px',
  },
  button: {
    margin: theme.spacing(1), 
    width: '100%',
    height: '100%',
    color: 'black',
    backgroundColor: '#d3d3d361',
    fontSize: theme.spacing(4),
    borderRadius: theme.spacing(5),
  },
  buttonGridContain: {
    [theme.breakpoints.down('md')]: {
      maxWidth: '25%',
      flexBasis: '25%',
    },
    maxWidth: '10%',
    flexBasis: '10%',
  },
  redText: {
    color: 'red',
  },
  greenText: {
    color: 'green',
  },
  greenBackground: {
    color: 'white',
    backgroundColor: 'green',
  },
  input: {
    display: "none"
  }
}));

export default useStyles
