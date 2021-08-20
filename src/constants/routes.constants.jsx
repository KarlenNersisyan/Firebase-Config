import Home from "../pages/Home.pages";
import LogIn from "../pages/LogIn.pages";
import SignIn from "../pages/SignIn.pages";

const routes = {
  login: () => ({
    route: "/login",
    component: LogIn,
    text: "Log In",
  }),
  signin: () => ({
    route: "/signin",
    component: SignIn,
    text: "Sign In",
  }),
  home: () => ({
    route: "/",
    component: Home,
    text: "Home",
  }),
};

export default routes;
