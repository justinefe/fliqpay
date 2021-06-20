import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Dashboard } from "./layouts/Dashboard";
import { Amount } from "./views/Amount";
import { Pay } from "./views/Pay";
import { Recipient } from "./views/Recipient";
import { Review } from "./views/Review";
import "./styles/index.scss";
import "./styles/tailwind_index.scss";

const App: React.FunctionComponent = () => {
  const handleCancel: React.MouseEventHandler<HTMLDivElement> = (event) => {
    console.log(">>>>>....", event);
  };
  return (
    <div className="App">
      <Router>
         <Dashboard handleCancel={handleCancel}>
          <Switch>
            <Route exact path="/" component={Amount} />
            <Route exact path="/pay" component={Pay} />
            <Route exact path="/recipient" component={Recipient} />
            <Route exact path="/review" component={Review} />
          </Switch>
        </Dashboard>
      </Router>
    </div>
  );
};

export default App;

