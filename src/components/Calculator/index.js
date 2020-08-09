import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types';
import { isNumber } from 'lodash'
import moment from 'moment'

import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import BackspaceIcon from '@material-ui/icons/Backspace'
import HistoryIcon from '@material-ui/icons/History'
import ErrorIcon from '@material-ui/icons/Error'

import useStyles from './styles'

import KeyPad from '../Keypad'
import Display from '../Display'
import History from '../History'

const Calculator = () => {
  const classes = useStyles()

  const [historyOn, setHistoryOn] = useState(false);

  const [commands, setCommands] = useState('');
  const [operator, setOperator] = useState('');
  const [memory, setMemory] = useState('');
  
  const [percentExists, setPercentExists] = useState(false);

  const [result, setResult] = useState('')
  const [openBracket, setOpenBracket] = useState(false)
  const [invalid, setInvalid] = useState(false)
  const [display, setDisplay] = useState('');

  useEffect(() => {
    // Update the document title using the browser API
    const display = memory + operator + commands;
    if (percentExists === true) setDisplay(display.replace('/100', '%'))
    else setDisplay(display);
  });

  const onClick = button => {
    if (!historyOn){
      setInvalid(false)
      if (button.function === 'C') return reset()
      if (button.function === '=') return calculate()
      if (isNumber(button.function)) return addNumberToCommand(button)
      else {
        let command = button.function
        if (command === '()') {
          setOpenBracket(!openBracket)
          if (openBracket) command = ')'
          else command = '('
          return setCommands(commands => commands + command.toString())
        }
        else if (command === '+/-') {
          console.log('commands: ', commands);
          console.log('commands: ', "-" + commands);

          if ( commands.indexOf("-") === 0 ) setCommands(commands.substring(1))
          else setCommands("-" + commands);
        }
        else if (command === '.') {
          if (!commands.includes('.')) setCommands(commands + '.');
        }
        else if (command === '%') {
          setPercentExists(true);
          if (commands === '' && memory === '' && result !== ''){
            setCommands(result + '/100');
            setResult('');
            setOperator('');
          } else setCommands(commands + '/100')
          // if continuing from result
        }
        else {
          // else is an operator
          // console.log('command: ', command)
          // console.log('commands: ', commands)
          // console.log('memory: ', memory)
          // console.log('operator: ', operator)
          // console.log('result: ', result)
          // check if there is an ( and no )
          if (commands.includes('(') && !commands.includes(')')) setCommands(commands + command)
          // check if operator has already been set
          else if (operator.length) {
            console.log('existing operator')
            setMemory(memory + operator + commands);
            setCommands('');
            setOperator(command);
            console.log('new Memory: ', memory + operator + commands)
          }
          // if continuing from result
          else if (commands === '' && memory === '' && result !== ''){
            setMemory(result);
            setResult('');
            setOperator(command);
          }
          else {
            setMemory(commands);
            setCommands('');
            setOperator(command);
          }
        }
      }
    }
  }

  const backSpace = () => {
    var string = commands // make a separate copy of the array
    if (string.slice(-1) === ')' || string.slice(-1) === '(') setOpenBracket(!openBracket) // if removed item was ( or )
    setCommands(string.slice(0, -1));
  }

  const reset = () => {
    setResult('')
    setCommands('')
    setMemory('')
    setOperator('')
    setDisplay('')
    setInvalid(false)
    setOpenBracket(false)
    setPercentExists(false)
  }

  const addNumberToCommand = button => {
    const commandCompare = commands;
    console.log('commands', commands);
    console.log('percentExists', percentExists);
    console.log('commandCompare.slice(-4)', commandCompare.slice(-4));
    if (percentExists && commandCompare.slice(-4) === '/100') setCommands(commands + '*' + button.function.toString())
    else setCommands(commands + button.function.toString())
    setInvalid(false)
    // console.log(' added ', button.function.toString())
    // console.log(typeof button.function.toString())
    // console.log('commands: ', commands)
  }

  const calculateStr = () => {
    console.log('calculateStr: ', memory , operator , commands)
    return new Function('return ' + memory + operator + commands)()
  }

  const calculate = () => {
    try {
      const result = calculateStr();
      setResult(result)
      addToHistory(result)
      setCommands('')
      setMemory('')
      setOperator('')
      setOpenBracket(false)
      setPercentExists(false)
    } catch (e) {
      setInvalid(true)
    }
  }

  const addToHistory = (resultToSet) => {
    const existingHistory = JSON.parse(localStorage.getItem('history'));
    let historyToSet;
    if (existingHistory) {
      historyToSet = [...existingHistory, { date: moment(), equation: `${memory} ${operator} ${commands} = ${resultToSet}`}]
    } else {
      historyToSet = [{date: moment(), equation: `${memory} ${operator} ${commands} = ${resultToSet}`}]
    }
    localStorage.setItem('history', JSON.stringify(historyToSet));

  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} item xs={12} sm={8} md={6} lg={10} xl={10}>
        {historyOn ? (
          <History history={JSON.parse(localStorage.getItem('history'))} />
        ) : (
          <Display result={result} preResult={display} />
        )}
        <div className={classes.divider} >
          <IconButton >
            <HistoryIcon onClick={() => setHistoryOn(!historyOn)} />
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
