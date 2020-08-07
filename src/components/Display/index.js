import React from 'react'
// import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid';

import useStyles from './styles'


const Display = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>Display</div>
  )
}

Display.propTypes = {
}

export default Display

