import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import PopularCourses from './Pages/Home/PopularCourses/PopularCourses';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/popular-courses">
            <PopularCourses></PopularCourses>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
