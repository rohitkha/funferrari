import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./component/Login/Login";
import Home from "./Home";
import GameDetail from "./component/GameDetails/GameDetail";
import Footer from "./common/Footer";
import Transaction from "./common/Transaction";
import Help from "./component/Support/Help";
import Learn from "./common/Learn";
import AddComplaint from "./component/Support/AddComplaint";
import MyAccount from "./component/MyAccount/MyAccount";

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
        <Route exact path="/single/:id" component={GameDetail} />
        <Route exact path="/transactions" component={Transaction} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/learn" component={Learn} />
        <Route exact path="/add-complaint" component={AddComplaint} />
        <Route exact path="/user-profile" component={MyAccount} />
      </Switch>
      {Auth && <Footer />}
    </div>
  );
}

export default App;
