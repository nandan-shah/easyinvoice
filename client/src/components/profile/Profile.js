import React from 'react';
import {
  Grid,
  Box,
  Container,
  TextField,
  Avatar,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '../dashboard/Appbar';
const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  box: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 450,
    marginTop: 100,
  },
});
const Profile = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar heading='Profile' />
      <Container component='main' maxWidth='xs' className={classes.container}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: 'solid 1px #dddddd',
            paddingBottom: '20px',
          }}
        >
          <Avatar
            style={{ width: '100px', height: '100px' }}
            src={''}
            alt='avatar'
            className={classes.avatar}
          />
        </div>
        <Box className={classes.box}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name='businessName'
                value='easyinvoice'
                required
                fullWidth
                variant='outlined'
                id='businessName'
                label='BusinessName'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='website'
                required
                fullWidth
                variant='outlined'
                id='website'
                label='Website'
                value='www.easyinvoice.software'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='number'
                required
                fullWidth
                variant='outlined'
                id='number'
                label='Number'
                value='984273273'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='address'
                required
                fullWidth
                multiline
                rows={3}
                variant='outlined'
                id='address'
                label='Contact Address'
                value='Street:  Sh No.8, 2/8, Mahajan Galli, ZaveriBzr, Chira, BazarCity:Mumbai State/province/area: Maharashtra'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            color='primary'
            variant='contained'
            style={{
              marginTop: 20,
            }}
          >
            Update
          </Button>
        </Box>
      </Container>
    </div>
  );
};
export default Profile;
