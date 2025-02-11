import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faHtml5, faCss3, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer); // Cleanup timeout to avoid memory leaks
    }, []);


    return (
        <>

            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm a very ambitious student looking to play a role in an
                        established company with the opportunity to work with the latest
                        technologies on challenging and diverse projects. I am currently looking
                        for internship positions.
                    </p>
                    <p style={{ textAlign: 'left' }}>
                        I'm an outgoing and confident, naturally curious student who is always
                        eager to learn from my peers and work in a team environment where I will
                        ultimately grow into a better person.
                    </p>
                    <p>
                        I’m a student worker and Service Technician at the University of Arizona, focused on repairing hardware
                        on Macs and gaining hands-on experience with both hardware and software. 
                        I’m also exploring software development, building on my understanding of 
                        systems and programs. My passion for tech now drives me toward cybersecurity, 
                        where I aim to protect systems by addressing hardware risks, software vulnerabilities, 
                        and secure protocols.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default About;
