
import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import MasterLayout from './layouts/MasterLayout';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/admin/dashboard" element={<MasterLayout />} />  
          </Routes>
      </Router>
    </div>
  );
}
export default App;
