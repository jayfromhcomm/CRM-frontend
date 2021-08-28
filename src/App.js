// jshint esversion: 6
import React from 'react';
import './App.css';

import { Button } from 'react-bootstrap';
import { Homepage } from './layout/Homepage.comp';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import { NewTicket } from './components/add-ticket-form/NewTicket.comp';

function App() {
  return (
    <div className="App">
      <Homepage>
        {/* <Dashboard /> */}
        <NewTicket />
      </Homepage>
    </div>
  );
}

export default App;
