import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import { theme } from './assets/theme';

import Landing from './components/layout/Landing';
import Auth from './components/auth/Auth';
import Dashboard from './components/dashboard/Dashboard';
function App() {
  return (
    <Fragment>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route exact path='/auth' element={<Auth />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </Fragment>
  );
}

export default App;
