import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./component/Login/Login";
import Home from "./component/Home";
import SingleSite from "./component/SingleSite";
import Footer from "./component/Footer";
import Transaction from "./component/Transaction";
import Help from "./component/Support/Help";
import Learn from "./component/Learn";
import AddComplaint from "./component/Support/AddComplaint";

function App() {
  const [Auth, setAuth] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [token]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/single/:id" component={SingleSite} />
        <Route exact path="/transactions" component={Transaction} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/learn" component={Learn} />
        <Route exact path="/add-complaint" component={AddComplaint} />
      </Switch>
      {Auth && <Footer />}
    </div>
  );
}

export default App;
