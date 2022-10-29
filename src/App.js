
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MasterLayout from './layouts/MasterLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin/dashboard" render={(props) => <MasterLayout {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
