import logo from './logo.svg';
import './App.css';
import Main from './Main';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>


          <Route exact path="/people" >
            <Main />
          </Route>

          <Route
            path="/people/:id"
            component={Detail}
          />






        </Switch>
      </Router>
    </div>
  );
}

export default App;
