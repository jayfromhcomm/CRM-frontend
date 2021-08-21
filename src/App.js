//jshint esversion:6
import React from 'react';
import './App.css';

import { Button } from 'react-bootstrap';
import { Entry } from './pages/entry/Entry.page';
import { Homepage } from './layout/Homepage.comp';
import { Dashboard } from './pages/dashboard/Dashboard.page';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <Homepage>
        <Dashboard />
      </Homepage>
    </div>
  );
}

export default App;
