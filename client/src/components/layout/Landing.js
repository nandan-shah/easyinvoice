import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import lottie from 'lottie-web';
import Navbar from './Navbar';
import Image from '../../assets/images/background.png';
import animationData from '../../assets/images/home.json';
const useStyles = makeStyles((theme) => ({
  landing: {
    margin: '0',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    alignItems: 'center',
    margin: '2rem 5rem',
    height: '50vh',
  },
  animation: {
    marginTop: '13rem',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  content: {
    width: '33vw',
    [theme.breakpoints.down('sm')]: {
      width: '75vw',
    },
    marginTop: '10rem',
  },
}));
const Landing = () => {
  const classes = useStyles();

  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });
  }, []);

  return (
    <div
      className={classes.Landing}
      style={{
        background: `url(${Image})  no-repeat fixed center `,
        width: '100vw',
        height: '100vh',
      }}
    >
      <Navbar />
      <div className={classes.container}>
        <div className={classes.content} align='left'>
          <Typography variant='subtitle1' component='p'>
            E-Invoice Software.
          </Typography>
          <Typography variant='h3' component='h5' gutterBottom>
            Everything you need to manage your business invoice.
          </Typography>
          <Typography variant='body1' component='h2' gutterBottom>
            Manage your invoice from creation to payment with Upflow, you'll
            collect 100% of your turnover.
          </Typography>
          <br />
          <Button variant='outlined' color='primary' href='/auth'>
            Start Free
          </Button>
        </div>
        <div className={classes.animation} ref={container}></div>
      </div>
    </div>
  );
};

export default Landing;
