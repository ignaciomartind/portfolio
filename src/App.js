import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

import {faLightbulb} from '@fortawesome/free-solid-svg-icons'

import Navigation from './Components/Navigation'
import Home from './Components/Home'
import About from './Components/About'
import MyWork from './Components/MyWork'
import Skills from './Components/Skills'
import VMV from './Components/VMV'
import Contact from './Components/Contact'
import NotFound from './Components/NotFound'

import './App.css';

function App() {

  const [theme, setTheme] = useState('dark')

  const menuLinks = ['Home', 'About', 'My-Work', 'Skills', 'VMV', 'Contact']

  function handleTheme(){
    
      if(theme === 'dark'){
        setTheme('light')
      }else{
        setTheme('dark')
      }
  }

  return (
    <BrowserRouter>
      <div className={`App App-${theme}`}>

        <Switch>
          <Route path="/Home">
            <Home theme={theme} />
          </Route>
          <Route path="/About">
            <About theme={theme} />
          </Route>
          <Route path="/My-Work">
            <MyWork theme={theme} />
          </Route>
          <Route path="/Skills">
            <Skills theme={theme} />
          </Route>
          <Route path="/VMV">
            <VMV theme={theme} />
          </Route>
          <Route path="/Contact">
            <Contact theme={theme } />
          </Route>
          <Route path='/'>
            <Redirect to='/home' />
          </Route>
          <Route>
            <NotFound theme={theme} />
          </Route>
        </Switch>
        

          <div className="theme-button-container">
              <button className="btn-theme">
                  <FontAwesomeIcon icon={faLightbulb} className={`bulb bulb-${theme}`} onClick={handleTheme}/>
              </button> 
          </div>
        <Navigation menuLinks={menuLinks} theme={theme}/>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
