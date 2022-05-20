import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';

import { theme } from './assets/theme';

import Landing from './components/layout/Landing';
import Auth from './components/auth/Auth';
import Dashboard from './components/dashboard/Dashboard';
import InvoiceList from './components/dashboard/InvoiceList';
import CreateInvoice from './components/dashboard/CreateInvoice';
import ClientList from './components/dashboard/ClientList';
function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route exact path='/' element={<Landing />} />
              <Route exact path='/auth' element={<Auth />} />
              <Route exact path='/dashboard' element={<Dashboard />} />
              <Route exact path='/invoices' element={<InvoiceList />} />
              <Route exact path='/create-invoice' element={<CreateInvoice />} />
              <Route exact path='/clients' element={<ClientList />} />
            </Routes>
          </ThemeProvider>
        </Router>
      </Fragment>
    </Provider>
  );
}

export default App;
