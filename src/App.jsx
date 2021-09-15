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
//using redux....
import { useDispatch } from "react-redux";
import { logout, selectUser } from './features/userSlice';
import { login } from './features/userSlice';
import { useSelector } from 'react-redux';
import ProfileScreen from './screens/ProfileScreen';
import VideoPlay from './screens/VideoPlay';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {  //to remember the login state
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) { //this userAuth is the one who previously logged in before refreshing...
        //logged in...
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));


      } else {
        //logged out...

        dispatch(logout());

      }
    });

    return unsubscribe; //way of cleaning so that perform is not affected done mostly using useffect...
    
  }, [dispatch]);

  return (
    <div className="app">

      <Router>

        {
          (!user) ? (<LoginScreen />)
            : (<Switch>
              <Route path='/profile'>
                <ProfileScreen />

              </Route>
              <Route exact path="/">
                <HomeScreen />
              </Route>

              <Route exact path="/video">
                <VideoPlay />
              </Route>
            </Switch>)
        }

      </Router>

    </div>
  );
}

export default App;
