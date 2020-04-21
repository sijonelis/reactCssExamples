import React from 'react';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  title1: {
    color: "red"
  },
  app: {
    textAlign: "center"
  }
})

export default function CssInJsEx() {
    const classes = useStyles();
    return (<div className={classes.app}>
        <h1 className={classes.title1}>Hello World, styled with jsCss!</h1>
      </div>)
}