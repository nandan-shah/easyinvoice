import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './components/layout/Landing';
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
