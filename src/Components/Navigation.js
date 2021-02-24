import {NavLink, } from 'react-router-dom'

import './styles/navigation.css'

function Navigation(props){

    return <nav className="nav">
        <ul>
            {props.menuLinks.map(link => <NavLink to={`/${link}`} key={link} className={`btn-nav btn-nav-${props.theme}`} activeClassName='active'>{link}</NavLink> )}
        </ul>
    </nav>
}
export default Navigation