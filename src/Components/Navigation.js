import './styles/navigation.css'

function Navigation(props){

    return <nav className="nav">
        <ul>
            {props.menuLinks.map(link => {
                if(link === props.selectedLink){
                    return <button key={link} data-key={link} onClick={props.handleClick} className={`btn-nav btn-nav-${props.theme} btn-nav-selected-${props.theme}`}>{link}</button>
                }else{
                    return <button key={link} data-key={link} onClick={props.handleClick} className={`btn-nav btn-nav-${props.theme}`}>{link}</button>
                }
            })}
        </ul>
    </nav>
}
export default Navigation