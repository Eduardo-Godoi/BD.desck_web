import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
function Routes() {
  const [authenticated, setAutenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@DB.Desck:token"));

    if (token) {
      return setAutenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Home authenticated={authenticated} />
      </Route>
      <Route path="/signup">
        <Signup authenticated={authenticated} />
      </Route>
      <Route path="/login">
        <Login
          authenticated={authenticated}
          setAutenticated={setAutenticated}
        />
      </Route>
      <Route path="/dashboard">
        <Dashboard
          authenticated={authenticated}
          setAutenticated={setAutenticated}
        />
      </Route>
    </Switch>
  );
}

export default Routes;
