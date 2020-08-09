import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  keypadsContain: {
    display: 'flex',
  },
  divider: {
    borderBottom: '2px solid #d3d3d361',
    marginBottom: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  buttonDivider: {
    display: 'flex',
    flexGrow: '1',
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
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
