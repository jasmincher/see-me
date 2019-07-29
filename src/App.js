import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound'
import { Route, Switch} from 'react-router-dom';



function App() {
 
  return (
    <div className="App">

     <Navbar/>
     <Switch>
      
       <Route exact path={["/", "/about"]} component={Home} />
       {/* <Route path="/about" component={About}/> */}
       <Route path="/signup" component={Signup} />
       <Route component={NotFound} />

     </Switch>

    </div>
  );
}

export default App;
