import React, { useState } from 'react'
// import PropTypes from 'prop-types';
import { isNumber, isFinite } from 'lodash'

import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import BackspaceIcon from '@material-ui/icons/Backspace'
import HistoryIcon from '@material-ui/icons/History'
import ErrorIcon from '@material-ui/icons/Error'

import useStyles from './styles'

import KeyPad from '../Keypad'
import Display from '../Display'

const Calculator = () => {
  const classes = useStyles()
  const [result, setResult] = useState('0')
  const [commands, setCommands] = useState([])
  const [openBracket, setOpenBracket] = useState(false)
  const [negativeNum, setNegativeNum] = useState(false)
  const [invalid, setInvalid] = useState(false)

  const [operatorAllowed, setOperatorAllowed] = useState(false)

  const onClick = button => {
    if (button.function === 'C') return reset()
    if (button.function === '=') return calculate()
    if (isNumber(button.function)) return addNumberToCommand(button)
    else {
      let command = button.function
      if (command === '()') {
        setOpenBracket(!openBracket)
        // command = openBracket ? ')' : '(';
        if (openBracket) command = ')'
        else command = '('
        return setCommands(commands => [...commands, command.toString()])
      }
      if (command === '+/-') {
        setNegativeNum(!negativeNum)
        command = (negativeNum ? '' : '-')
      }
      // else is an operator
      // Check if last command was a number
      if (isFinite(parseInt(commands[commands.length - 1])) || commands[commands.length - 1] === ')') {
        setCommands(commands => [...commands, command.toString()])
      };
      // if (operatorAllowed){

      //   setOperatorAllowed(false);
      // }
      setInvalid(false)
    }
  }

  const backSpace = () => {
    var array = [...commands] // make a separate copy of the array
    if (array[array.length - 1] === ')' || array[array.length - 1] === '(') setOpenBracket(!openBracket) // if removed item was ( or )
    array.splice(-1, 1)
    setCommands(array)
  }

  const reset = () => {
    setResult('0')
    setCommands([])
    setInvalid(false)
    setOpenBracket(false)
  }

  const addNumberToCommand = button => {
    setCommands(commands => [...commands, button.function.toString()])
    setInvalid(false)
    setOperatorAllowed(true)
    // console.log(' added ', button.function.toString())
    // console.log(typeof button.function.toString())
  }

  const calculateStr = () => {
    console.log('calculateStr: ', result + commands.join(''))
    return new Function('return ' + result + commands.join(''))()
  }

  const calculate = () => {
    try {
      setResult(calculateStr())
      setCommands([])
      setOpenBracket(false)
    } catch (e) {
      setInvalid(true)
    }
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} item xs={6}>
        <Display result={result} preResult={commands} />
        <div className={classes.divider} >
          <IconButton >
            <HistoryIcon />
          </IconButton>
          <div className={classes.buttonDivider} >
            {invalid && (<><ErrorIcon />{' '}Invalid</>)}
          </div>
          <IconButton >
            <BackspaceIcon onClick={backSpace} />
          </IconButton>
        </div>
        <KeyPad onKeypadClick={onClick}/>
      </Grid>
    </div>
  )
}

Calculator.propTypes = {
}

export default Calculator
