import Home from "../pages/Home/Home.pages";
import LogIn from "../pages/Login/Login.pages";
import SignIn from "../pages/SignUp/Signin.pages";

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
