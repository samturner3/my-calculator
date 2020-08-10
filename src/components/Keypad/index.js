import React from 'react'
import PropTypes from 'prop-types'

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles'

import { keyPadButtons, scientificButtons } from '../../constants'


const KeyPadButtons = ({classes, onKeypadClick, historyOn}) => {
const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.down('md'));
//inset a new button for scientific
const keyPadButtonsWithScience = [
  ...scientificButtons.slice(0, 6), 
  ...keyPadButtons.slice(0,4), 
  ...scientificButtons.slice(6, 12),
  ...keyPadButtons.slice(4,8),
  ...scientificButtons.slice(12, 18),
  ...keyPadButtons.slice(8,12),
  ...scientificButtons.slice(18, 24),
  ...keyPadButtons.slice(12,16),
  ...scientificButtons.slice(24, 30),
  ...keyPadButtons.slice(16,20),
]
return (matches ? keyPadButtons : keyPadButtonsWithScience).map((button, i) => {
 const buttonClass = button.class;
  return (
    <Grid item xs={3} className={classes.buttonGridContain}>
      <Button onClick={() => !button.scientific && onKeypadClick(button)} disabled={historyOn} key={i} className={`${classes.button} ${classes[buttonClass]}`} variant='contained'>
        {button.display}
      </Button>
    </Grid>)
  })
}


const KeyPad = ({ onKeypadClick, historyOn }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <KeyPadButtons classes={classes} onKeypadClick={onKeypadClick} historyOn={historyOn} />
    </Grid>
  )
}

KeyPad.propTypes = {
  onKeypadClick: PropTypes.func.isRequired,
}

export default KeyPad

