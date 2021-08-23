import Home from "../pages/Home.pages";
import LogIn from "../pages/LogIn.pages";

const routes = {
  login: () => ({
    route: "/login",
    component: LogIn,
    text: "Log In",
  }),
  home: () => ({
    route: "/",
    component: Home,
    text: "Home",
  }),
};

export default routes;
