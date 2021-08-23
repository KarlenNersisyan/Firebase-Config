import { Switch, Route } from "react-router-dom";
import routes from "../constants/routes.constants";
import Home from "../pages/Home.pages";

export default function AuthenticatedApp() {
  return (
    <Switch>
      <Route route={routes.login().route} component={Home} />
    </Switch>
  );
}
