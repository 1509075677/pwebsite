import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Contacts from './contacts';
import Landing from './landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pwebsite" element={<Landing />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
    </Router>
  );
}

export default App;
