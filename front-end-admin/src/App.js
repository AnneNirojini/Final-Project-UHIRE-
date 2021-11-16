import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VehicleList from "./pages/vehicleList/VehicleList";
import Vehicle from "./pages/vehicle/Vehicle";
import NewVehicle from "./pages/newVehicle/NewVehicle";
import EnquiryList from "./pages/enquiryList/EnquiryList";
import Login from './pages/auth/Login'
import React from "react";

// import {DataProvider} from './GlobalState'


class App extends React.Component {

  isLoggedIn = localStorage.getItem('accessToken');

  render = () => {

    if (!this.isLoggedIn) {
      return (
        <Router>
          <Topbar />
          <Login />
        </Router>
      )
    }

    return (
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/vehicles">
              <VehicleList />
            </Route>
            <Route exact path="/vehicle/:vehicleId" component={Vehicle}/>
            <Route path="/newVehicle">
              <NewVehicle />
            </Route>
            <Route path="/enquiries ">
              <EnquiryList />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
