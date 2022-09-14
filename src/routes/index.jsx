import { Route, Switch } from "react-router-dom";
import DashBoard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Rocket from "../pages/Rocket";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/rocket/:id" component={Rocket} />
      <Route path="/dashboard" component={DashBoard} />
    </Switch>
  );
};

export default Routes;
