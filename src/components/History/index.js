import React, { useState, useEffect } from 'react'
import moment from 'moment'

import Button from '@material-ui/core/Button'

import useStyles from './styles'


const History = ({history}) => {
  const [historyFromStorage, setHistoryFromStorage] = useState([]);

  useEffect(() => {
    setHistoryFromStorage(history);
  }, [history]);

  const classes = useStyles();
  
  const clear = () => {
    localStorage.removeItem('history')
    setHistoryFromStorage([])
  }

  return (
    <div className={classes.root}>
      <div className={classes.historyLinesContain} >
        <table>
          {
            historyFromStorage && (
            historyFromStorage.map((item, i) => {
              return (
                <tr>
                  <td className={classes.tableTd}>
                    <i>
                      {moment(item.date).fromNow()}
                    </i>
                  </td>
                  <td>
                    {item.equation}
                  </td>
                </tr>
              )
              
            })
            )
          }
          </table>
        </div>
        <div className={classes.preResult}>
          <div className={classes.historyText}>History 📜 Scroll to view all ↕️</div>
          <Button onClick={clear} className={classes.historyButton} variant='contained'>Clear history</Button>
        </div>
    </div>
  )
}

History.propTypes = {
}

export default History

