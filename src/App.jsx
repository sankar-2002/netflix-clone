import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';


function App() {

  const user = null;

  useEffect(() => {  //to remember the login state
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth) { //this userAuth is the one who previously logged in before refreshing...
        console.log(userAuth);

      } else {

      }
    });

    return unsubscribe; //way of cleaning so that perform is not affected done mostly using useffect...
  }, []);

  return (
    <div className="app">

      <Router>

        {
          (!user) ? (<LoginScreen />)
            : (<Switch>
              <Route exact path="/">
                <HomeScreen />
              </Route>
            </Switch>)
        }

      </Router>

    </div>
  );
}

export default App;
