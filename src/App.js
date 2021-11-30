import './App.css';
import Create from './components/create';
import Read from './components/read';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Update from './components/update';


function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">Pharmacy</h2>
        <div>
          <Route exact path='/create' component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>

        <Route path='/update' component={Update} />
      </div>
    </Router>
  );
}

export default App;