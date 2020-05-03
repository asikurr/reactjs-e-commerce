import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/Homepage";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage"



function App() {
  return (
    <div >
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/shop' component={ShopPage}/>
        </Switch>
    </div>
  );
}

export default App;
