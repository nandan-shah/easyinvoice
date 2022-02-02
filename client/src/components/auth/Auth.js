import React, { useState } from 'react';
import {
  Button,
  Typography,
  TextField,
  Link,
  Grid,
  Box,
  Container,
  useTheme,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Navbar from '../layout/Navbar';
import Copyright from '../layout/Copyright';

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function Auth() {
  const classes = useStyles();
  const theme = useTheme();
  const [isRegister, setRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div>
      <Navbar />
      <hr />
      <Container component='main' maxWidth='xs' className={classes.container}>
        <Box className={classes.box}>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {!isRegister && (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete='given-name'
                      name='firstName'
                      required
                      fullWidth
                      variant='outlined'
                      id='firstName'
                      label='First Name'
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      variant='outlined'
                      id='lastName'
                      label='Last Name'
                      name='lastName'
                      autoComplete='family-name'
                    />
                  </Grid>
                </>
              )}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant='outlined'
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant='outlined'
                  name='password'
                  label='Password'
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  autoComplete='new-password'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={(e) => {
                            setShowPassword(!showPassword);
                          }}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              color='primary'
              variant='contained'
              style={{
                marginTop: theme.spacing(3),
                marginBottom: theme.spacing(2),
              }}
            >
              {!isRegister ? 'Register' : 'Login'}
            </Button>
            {!isRegister && (
              <Grid container justifyContent='flex-end'>
                <Grid item>
                  <Link
                    variant='body2'
                    color='secondary'
                    onClick={(e) => {
                      setRegister(true);
                    }}
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            )}
            {isRegister && (
              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2' color='secondary'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    color='secondary'
                    variant='body2'
                    onClick={(e) => {
                      setRegister(false);
                    }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            )}
          </Box>
        </Box>
      </Container>
      <Box pt={15}>
        <Copyright />
      </Box>
    </div>
  );
}
