import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Grid, Paper } from '@material-ui/core';
import { InvoiceForm } from '../forms/InvoiceForm';
import Appbar from './Appbar';
import Copyright from '../layout/Copyright';

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
const CreateInvoice = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Appbar heading='Create Invoice' />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          {/* Customers */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <InvoiceForm />
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

export default CreateInvoice;
