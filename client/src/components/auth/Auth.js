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
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { register, login } from '../../redux/actions/auth';
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const { isAuth, error, loading = false } = useSelector((state) => state.auth);

  if (isAuth) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <div>
      <Navbar />
      <hr />
      <Container component='main' maxWidth='xs' className={classes.container}>
        <Box className={classes.box}>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box component='form' noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {!isRegister && (
                <>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete='name'
                      name='name'
                      required
                      fullWidth
                      variant='outlined'
                      id='name'
                      label='Name'
                      autoFocus
                      value={name}
                      onChange={(e) => onChange(e)}
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
                  value={email}
                  onChange={(e) => onChange(e)}
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
                  value={password}
                  onChange={(e) => onChange(e)}
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
                  {/* <Link href='#' variant='body2' color='secondary'>
                    Forgot password?
                  </Link> */}
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
