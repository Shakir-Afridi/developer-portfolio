import React from 'react'
import styles from './styles'
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles(styles);

export default function ContactUs() {
  const classes = useStyles();
  return (
    <div className={classes.root}>ContactUs</div>
  )
}
