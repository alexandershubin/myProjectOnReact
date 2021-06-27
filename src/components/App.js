import React from "react";
import {Home} from "./Home/Home";
import {Route, Switch} from "react-router-dom";
import {NavBar} from "./Menu/NavBar";
import {Todo} from "./Todo/Todo";
import {Xz} from "./Xz/Xz";

function App() {
  return (
    <>
      <NavBar/>
      <div className="container pt-4">
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/todo'} component={Todo}/>
          <Route path={'/xz'} component={Xz}/>
        </Switch>
      </div>
    </>
  )
}

export default App;
