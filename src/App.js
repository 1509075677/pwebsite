import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Landing from './landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pwebsite" element={<Landing />}/>
      </Routes>
    </Router>
  );
}

export default App;
