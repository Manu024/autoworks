import React, { useReducer } from "react";
import "./App.css";
import Home from "./pages";
import SignIn from "./pages/signin";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SignUp from "./pages/signup";
import AdminSignin from "./pages/admin-signin";
import UserIndex from "./pages/user-index";
import AdminIndex from "./pages/admin-index";
import { reducer, init } from "./components/reducer";

const App = () => {
  const [state, dispatch] = useReducer(
    reducer,
    {
      email: null,
      token: null,
      isAuth: false,
      user: null,
    },
    init
  );
  let routes = (
    <Switch>
      <Route path="/signin" render={() => <SignIn dispatch={dispatch} />} />
      <Route path="/signup" render={() => <SignUp dispatch={dispatch} />} />
      <Route
        path="/admin-signin"
        render={() => <AdminSignin dispatch={dispatch} />}
      />
      <Route
        path="/"
        exact
        render={() => <Home user={state.user} email={state.email} />}
      />
    </Switch>
  );

  if (state.user === "admin" && state.isAuth) {
    routes = (
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <AdminIndex
              isAuth={state.isAuth}
              email={state.email}
              user={state.user}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
    );
  } else if (state.isAuth && state.user === "user") {
    routes = (
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <UserIndex
              isAuth={state.isAuth}
              user={state.user}
              email={state.email}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
  return <Router>{routes}</Router>;
};

export default App;
