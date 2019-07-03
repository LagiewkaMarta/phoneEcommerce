import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.scss';
import NavBar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";

function App() {
  return (
   <React.Fragment>
    
     <NavBar></NavBar>
     <Switch>
       <Route exact path="/" component={ProductList}></Route>
       <Route path="/details" component={Details}></Route>
       <Route path="/cart" component={Cart}></Route>
       <Route component={Default}></Route>

 

     <Default></Default>
     </Switch>
   </React.Fragment>
   
  );
}

export default App;
