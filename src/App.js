import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

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
  const [selectedLink, setSelectedLink] = useState('Home')
  const [section, setSection] = useState(<Home theme={theme}/>)

  const menuLinks = ['Home', 'About', 'My work', 'Skills', 'VMV', 'Contact']

  function handleTheme(){
    
      if(theme === 'dark'){
        setTheme('light')
      }else{
        setTheme('dark')
      }
  }

  function handleClick(e){
    e.preventDefault()
    
    const link = e.target.getAttribute('data-key')

    switch(link){
      case 'Home': 
        setSelectedLink(link)
        return setSection(<Home theme={theme} />)
      case 'About': 
        setSelectedLink(link)
        return setSection(<About theme={theme} />)
        // break;
      case 'My work': 
        setSelectedLink(link)
        return (<MyWork theme={theme} />)
        // break;
      case 'Skills': 
        setSelectedLink(link)
        return setSection(<Skills theme={theme} />)
        // break;
      case 'VMV': 
        setSelectedLink(link)
        return setSection(<VMV theme={theme} />)
        // break;
      case 'Contact': 
        setSelectedLink(link)
        return setSection(<Contact theme={theme} />)
        // break;
      default: 
        return setSection(<NotFound theme={theme} />)
        // break;
    }

  }

  return (
    <div className={`App App-${theme}`}>
      {section}
      <div className="theme-button-container">
        <button className="btn-theme">
          <FontAwesomeIcon icon={faLightbulb} className={`bulb bulb-${theme}`} onClick={handleTheme}/>
        </button> 
      </div>
      <Navigation menuLinks={menuLinks} handleClick={handleClick} selectedLink={selectedLink} theme={theme}/>
    </div>
  );
}

export default App;
