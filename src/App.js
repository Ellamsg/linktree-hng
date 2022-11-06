import React from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Contact from './components/contact';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';


function App() {
 
  return (
    <Router>
    <div className="App">  
    <Switch>
           <Route exact path="/">
           <Main/>
           </Route>
           <Route  path="/contact">
             <Contact />
           </Route>
        </Switch>
     <Footer/>
    </div>
    </Router>
  )
}

export default App;
