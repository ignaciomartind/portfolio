import React,{useState, useEffect} from 'react'

import './styles/home.css'

function Home(props){

    const [animatedText, setAnimatedText] = useState('')

    useEffect(()=>{
        setTimeout(() => {
            setAnimatedText('A')
        }, 1100);
        setTimeout(() => {
            setAnimatedText('A ')
        }, 1200);
        setTimeout(() => {
            setAnimatedText('A F')
        }, 1300);
        setTimeout(() => {
            setAnimatedText('A Fr')
        }, 1400);
        setTimeout(() => {
            setAnimatedText('A Fro')
        }, 1500);
        setTimeout(() => {
            setAnimatedText('A Fron')
        }, 1600);
        setTimeout(() => {
            setAnimatedText('A Front')
        }, 1700);
        setTimeout(() => {
            setAnimatedText('A Front-')
        }, 1800);
        setTimeout(() => {
            setAnimatedText('A Front-e')
        }, 1900);
        setTimeout(() => {
            setAnimatedText('A Front-en')
        }, 2000);
        setTimeout(() => {
            setAnimatedText('A Front-end')
        }, 2100);
        setTimeout(() => {
            setAnimatedText('A Front-end d')
        }, 2200);
        setTimeout(() => {
            setAnimatedText('A Front-end de')
        }, 2300);
        setTimeout(() => {
            setAnimatedText('A Front-end dev')
        }, 2400);
        setTimeout(() => {
            setAnimatedText('A Front-end deve')
        }, 2500);
        setTimeout(() => {
            setAnimatedText('A Front-end devel')
        }, 2600);
        setTimeout(() => {
            setAnimatedText('A Front-end develo')
        }, 2700);
        setTimeout(() => {
            setAnimatedText('A Front-end develop')
        }, 2800);
        setTimeout(() => {
            setAnimatedText('A Front-end develope')
        }, 2900);
        setTimeout(() => {
            setAnimatedText('A Front-end developer')
        }, 3000);
        setTimeout(() => {
            setAnimatedText('A Front-end developer.')
        }, 3100);
        setTimeout(() => {
            setAnimatedText('A Front-end developer.')
        }, 3200);
        
    },[])

    

    return <div className={`home home-${props.theme}`}>
        <h1>Ignacio Martín</h1>
        <div className="home-content">
            <p className={`home-text-${props.theme}`}>{animatedText}</p>
        </div>
    </div>
}

export default Home