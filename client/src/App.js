import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './app.scss'

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <BrowserRouter>
    <div className="myNav">
      <p>P TAG</p>
      <h1>TEST</h1>    
    </div>
    <div>
      <Nav />      
    </div>
    <Switch>
      <Route exact path={["/", "books"]}>
        <Books />
      </Route>
      <Route path="/books/:id">
        <Detail />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
    </BrowserRouter>


  );
}

export default App;
