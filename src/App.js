import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./component/Login/Login";
import Home from "./component/Home";
import SingleSite from "./component/SingleSite";
import Footer from "./component/Footer";
import Transaction from "./component/Transaction";

function App() {
  const [Auth, setAuth] = useState(false);

  let token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  }, [token]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/single/:id" component={SingleSite} />
        <Route exact path="/transactions" component={Transaction} />
      </Switch>
      {Auth && <Footer />}
    </div>
  );
}

export default App;
