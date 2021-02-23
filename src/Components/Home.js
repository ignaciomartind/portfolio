import './styles/home.css'

function Home(props){

    return <div className={`home home-${props.theme}`}>
        <h1>Ignacio Martín</h1>
        <div className="home-content">
            <p className={`home-text-${props.theme}`}>A front-end developer.</p>
        </div>
    </div>
}

export default Home