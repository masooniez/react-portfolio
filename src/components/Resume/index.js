import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import MasonSelfie from '../../assets/images/mason selfie.png'; // Adjust path if needed

const Resume = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container resume-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['R', 'e', 's', 'u', 'm', 'e']}
            idx={20}
          />
        </h1>
        <p>
          Welcome to my resume page! Here, you can review my work experience, education, and skills.
        </p>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <div className="resume-wrap">
        {/* Circular image above the download button */}
        <div className="photo-circle">
          <img src={MasonSelfie} alt="Mason Selfie" />
        </div>
        <a 
          href={`${process.env.PUBLIC_URL}/resume/Mason_Resume.pdf`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="download-button"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
