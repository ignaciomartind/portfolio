import './styles/about.css'

function About(props){

    return <div className={`about ${props.theme}`}>
        <h2>About me</h2>
        <div className="about-content">
            <p className={props.theme}>Hello, I am Ignacio, a junior front-end developer aiming to grow constantly.<span className={`ph-animation pa1 ${props.theme}`}></span></p>
            <p className={props.theme}>At the moment I consider myself a newcomer to the field of working as a programmer. I really like to learn something new every day that allows me to expand my knowledge.<span className={`ph-animation pa1 ${props.theme}`}></span></p>
            <p className={props.theme}>Previously, I defined myself as a 'junior front-end developer' which is true, but there are other things about me that I would like to tell you. At present, I am studying engineering, I am also very passionate about mathematics and physics. Full of energy I hope you trust me with your project :)<span className={`ph-animation pa1 ${props.theme}`}></span></p>
        </div>
    </div>
}

export default About