import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

import NotFound from './pages/NotFound'
import { Route, Switch} from 'react-router-dom';



function App() {
 
  return (
    <div className="App">

     <Navbar/>

     <Switch>
      
       <Route exact path={["/", "/about"]} component={Home} />
       <Route path="/signup" component={Signup} />
       <Route path="/signin" component={Signin} />
       <Route component={NotFound} />

     </Switch>

    </div>
  );
}

export default App;
