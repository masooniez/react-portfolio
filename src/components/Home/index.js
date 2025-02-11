import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders'; // Optional, if you want to include the loader
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/mLogo.png'; // Adjust this path if needed
import Logo from './Logo';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const hiArray = ['H', 'i', ','];
  const imArray = ['I', "'", 'm'];
  const nameArray = ['a', 's', 'o', 'n',','];
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            {/* Animate "Hi," */}
            <AnimatedLetters letterClass={letterClass} strArray={hiArray} idx={1} />
            <br />
            {/* Animate "I'm" */}
            <AnimatedLetters letterClass={letterClass} strArray={imArray} idx={hiArray.length + 1} />
            <img src={LogoTitle} alt="developer" className="logo-title" />
            {/* Animate name */}
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={hiArray.length + imArray.length + 1} />
            <br />
            {/* Animate job title */}
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20} />
          </h1>
          <h2>Frontend Developer / Developing Cyber Security Major / Computer Science Major</h2>
          <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" /> {/* Optional Loader */}
    </>
  );
};

export default Home;
