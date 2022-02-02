import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import logo from '../../assets/images/Invoice_L.png';
const useStyles = makeStyles((theme) => ({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.8rem 2rem',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  logo: {
    maxWidth: 250,
  },
  button: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export default function Copyright() {
  const classes = useStyles();
  return (
    <div className={classes.nav}>
      <img src={logo} alt='easy-invoice' className={classes.logo} />
      <Button
        variant='outlined'
        color='secondary'
        href='/auth'
        className={classes.button}
      >
        Get started
      </Button>
    </div>
  );
}
