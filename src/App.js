import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faLightbulb} from '@fortawesome/free-solid-svg-icons'

import Home from './Components/Home'

import './App.css';

function App() {

  const [theme, setTheme] = useState('dark')

  function handleTheme(){
    if(theme === 'dark'){
      setTheme('light')
    }else{
      setTheme('dark')
    }
  }

  return (
    <div className={`App App-${theme}`}>
      <Home theme={theme}/>
      <div className="theme-button-container">
        <button className="btn-theme">
          <FontAwesomeIcon icon={faLightbulb} className={`bulb bulb-${theme}`} onClick={handleTheme}/>
      </button> 
      </div>
    </div>
  );
}

export default App;
