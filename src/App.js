
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
// import Exploremore from "./Pages/Exploremore/Exploremore";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import ExploreHome from "./Pages/Exploremore/ExploreHome/ExploreHome";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register";
import Purchase from "./Pages/Purchase/Purchase";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/exploremorehome">
            <ExploreHome/>
          </Route>
          <Route path="/dashboard">
             <Dashboard/>
          </Route>
          <Route path="/login">
             <Login/>
          </Route>
          <Route path="/register">
             <Register/>
          </Route>
          <PrivateRoute path="/purchase/:id">
             <Purchase/>
          </PrivateRoute>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
