import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home.pages";

export default function AuthenticatedApp() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
