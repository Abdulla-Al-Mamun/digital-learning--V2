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
import AllCourse from './Pages/Home/AllCourse/AllCourse';
import ContactUs from './Pages/Home/ContactUs/ContactUs';
import NotFound from './Pages/NotFound/NotFound';
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
          <Route path="/all-course">
            <AllCourse></AllCourse>
          </Route>
          <Route path="/contact-us">
            <ContactUs></ContactUs>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
