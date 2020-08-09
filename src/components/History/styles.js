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
    backgroundColor: 'grey',
    fontSize: theme.spacing(3),
    borderRadius: theme.spacing(3),
    padding: '10px 20px',
  },
  historyLinesContain: {
    overflowY: 'scroll',
    textAlign: 'left',
  },
  result: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
  },
  preResult: {
    flex: '1',
    display: 'flex',
    width: '100%',
    alignItems: 'flex-end',
    color: 'black',
  },
  historyText: {
    fontSize: '26px',
  },
  historyButton: {
    marginLeft: 'auto',
  },
  tableTr: {
    border: '1px solid red',
  },
  tableTd: {
    paddingRight: '20px',
  }
}));

export default useStyles
