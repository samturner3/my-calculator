import React from 'react'
// import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid';

import useStyles from './styles'

import KeyPad from '../Keypad'
import Display from '../Display'


const Calculator = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3} item xs={6}>
        <Display />
        <KeyPad />
      </Grid>
    </div>
  )
}

Calculator.propTypes = {
}

export default Calculator

