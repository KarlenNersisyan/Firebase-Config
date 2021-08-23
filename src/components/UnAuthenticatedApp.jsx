import { Switch, Route } from "react-router-dom";
import LogIn from "../pages/Login/Login.pages";

export default function UnAuthenticatedApp() {
  return (
    <div>
      <Switch>
        <Route route="*" component={LogIn} />
      </Switch>
    </div>
  );
}