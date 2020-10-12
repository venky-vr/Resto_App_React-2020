import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/Home';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import Login from './components/Login';
import Logout from './components/Logout';
import Protected from './components/Protected';

function App() {
  return (
    <div className="App">
      <Router>
      {/*   <Route path="/list">
          <RestaurantList />
        </Route> */}
        {/* <Route path="/create">
          <RestaurantCreate />
        </Route> */}
        {/* <Route path="/search">
          <RestaurantSearch />
        </Route> */}
        <Route path="/logout">
          <Logout/>
        </Route>
        {/* <Route path="/details">
          <RestaurantDetail />
        </Route> */}
       {/*  <Route path="/update/:id" render={props=>(
            <RestaurantUpdate {...props}/>
        )}>
        
        </Route> */}
        <Route path="/login" render={props=>(
            <Login {...props}/>
        )}>
        
        </Route>
        <Protected exact path="/details" component={RestaurantDetail}/>
        <Protected exact path="/update/:id" component={RestaurantUpdate}/>
        <Protected exact path="/search" component={RestaurantSearch}/>
        <Protected exact path="/create" component={RestaurantCreate}/>
        <Protected exact path="/list" component={RestaurantList}/>
        <Protected exact path="/" component={Home}/>
      </Router>
    </div>
  );
}

export default App;
