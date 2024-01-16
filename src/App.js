import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/login_component'
import SignUp from './components/signup_component'
import UserDetails from './components/UserDetails'
import Reset from './components/reset'
import Userhome from './components/userhome';

function App() {
  const isLoggedIn = window.localStorage.getItem('loggedIn')
  return (
   <Router>
      <div className='App'>
        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Routes>
                <Route exact path='/' element={isLoggedIn==='true'?<UserDetails/>: <Login/>}/>
                <Route path='/sign-in' element={<Login/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/UserDetails' element={<UserDetails/>}/>
                <Route path='/reset' element={<Reset/>}/>
                <Route path='/userhome' element={<Userhome/>}/>

            </Routes>
          </div>
        </div>
      </div>
   </Router>
  );
}

export default App;
