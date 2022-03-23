import React from "react";

class Authentication extends React.Component {
  constructor() {
    super();
    this.Authenticated = false;
    this.token = null;
  }

  login(token, cb) {
    this.Authenticated = true;
    this.token = token;
    cb();
  }

  logout(cb) {
    this.Authenticated = false;
    this.token = null;
  }

  isAuthenticated() {
    return { Auth: this.Authenticated, token: this.token };
  }
}

export default new Authentication();
