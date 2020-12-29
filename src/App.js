import { Card, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {},
  title: {},
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Material Setup</Typography>
      <Card className={classes.paper}>
        <Typography color="inherit">Paper</Typography>
      </Card>
    </div>
  );
};

export default App;
