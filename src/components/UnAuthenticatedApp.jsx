import { Switch, Route } from "react-router-dom";
import LogIn from "../pages/LogIn.pages";
import SignUp from "../pages/SignUp.pages";

export default function UnAuthenticatedApp() {
  return (
    <div>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/">
          <LogIn />
        </Route>
      </Switch>
    </div>
  );
}
