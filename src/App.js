import './App.css';
import Register from "./pages/register/Register";
import React from "react";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom"
import { Dashboard } from "./pages/dashboard/Dashboard";
function App() {
  return (
    <div>
      <Router>
        <Switch>

        <Route path="/registration" children ={ <Register/>}/>
        <Route path="/dashboard" children ={ <Dashboard/>}/>
        <Route path="/" children ={ <Login/>}/>
        {/* <Register/> */}

        {/* </Route> */}
        
        </Switch>
      </Router>
     
     

    </div>
  );
}

export default App;
