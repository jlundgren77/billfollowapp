import React, { Component } from "react";
import Main from "./Main";
import { BrowserRouter, Route } from "react-router-dom";
import { resolve } from "q";
import BillDetail from "./BillDetail";
import Sponser from "./bills/Sponser";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Main} />
            <Route path="/bill/details" component={BillDetail} />
            <Route path="/bill/sponser" component={Sponser} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
