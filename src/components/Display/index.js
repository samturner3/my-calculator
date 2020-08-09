import React from 'react'
// import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid';

import useStyles from './styles'


const Display = ({ result, preResult }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.result}>{result}</div>
      <div className={classes.preResult}>{preResult}</div>
    </div>
  )
}

Display.propTypes = {
}

export default Display

