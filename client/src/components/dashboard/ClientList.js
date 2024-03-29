import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Grid, Paper } from '@material-ui/core';
import Customers from './Customers';
import Copyright from '../layout/Copyright';
import AppBar from './Appbar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

const ClientList = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar heading='Customers' />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          {/* Customers */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Customers />
            </Paper>
          </Grid>

          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default ClientList;
