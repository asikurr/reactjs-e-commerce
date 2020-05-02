import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/Homepage";
import {Route, Switch} from "react-router-dom";


const HatPage = (props) =>{
    console.log(props)
    return(
        <div>
            <h1>This is hats page</h1>
        </div>
    )
}

function App() {
  return (
    <div >
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/hats' component={HatPage}/>
        </Switch>
    </div>
  );
}

export default App;
