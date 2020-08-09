import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles'

import { keyPadButtons } from '../../constants'


const KeyPadButtons = ({classes, onKeypadClick}) => {
return keyPadButtons.map((button, i) => {
 const buttonClass = button.class;
  return (
    <Grid item xs={3}>
      <Button onClick={() => onKeypadClick(button)} key={i} className={`${classes.button} ${classes[buttonClass]}`} variant='contained'>
        {button.display}
      </Button>
    </Grid>)
  })
}


const KeyPad = ({ onKeypadClick }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <KeyPadButtons classes={classes} onKeypadClick={onKeypadClick} />
    </Grid>
  )
}

KeyPad.propTypes = {
  onKeypadClick: PropTypes.func.isRequired,
}

export default KeyPad

