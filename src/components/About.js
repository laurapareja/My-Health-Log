import React from 'react';
import "../stylesheets/About.scss"


const About = (props) => {
    const { image } = props;

    return (
        <div className="mainAbout">
            <h2>About the project</h2>
            <p>This is going to be a long project where I'm going to use all of my knowledge as a front-end developer. During Adalab's course, I had the idea to create this app, firstly as a way to keep learning, but little by little, this project has been growing as you can see.
The idea is to have an app where you can see all of the info related to your health. It can be usefull for you, to put some alarms to remember when you need to take the next medication, or for your doctor who can see quickly your health status. You can register your medication, flare-ups, symptomps, so It's easier to transmit all of this info to your doctor.
</p>
            <h2>About me</h2>

            <img src={image} alt="laura" className="aboutPicture"></img>

            <h3>Hi! I'm Laura Pareja</h3>

            <p> I've always been interested in front-end development and I found the best moment with the bootcamp <a className="linkAdalab" href="https://adalab.es" target="_blank" rel="noopener noreferrer">Adalab</a>. For me, software is a new framework to express and improve my resolutive and creative skills.</p>
            <div className="socialMedia_container">


                <a className="link" href="https://www.linkedin.com/in/laurapareja/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin iconLink"></i> /in/laurapareja</a>
                <a className="link" href="https://github.com/laurapareja" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square iconLink"></i>            laurapareja</a>
                <a className="link" href="https://twitter.com/_laurapareja_" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square iconLink"></i> _laurapareja_</a>
            </div>

        </div >
    )
}

export default About;