import { useEffect, useState, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_1zrsxgc',
                'template_6cemgxx',
                refForm.current,
                'nLRyYX9Iy-KDrZTLd'
            )
            .then(
                () => {
                    alert('Message successfully sent!');
                    refForm.current.reset();
                },
                (error) => {
                    alert('Failed to send the message, please try again.');
                    console.error('EmailJS error:', error);
                }
            );
    };

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in internship positions and any type of opportunities — 
                        especially ambitious or small projects. However, if you have other requests 
                        or questions, don’t hesitate to contact me!
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input
                                        type="text"
                                        name="from_name"
                                        placeholder="Name"
                                        aria-label="Your Name"
                                        required
                                    />
                                </li>
                                <li className="half">
                                    <input
                                        type="email"
                                        name="from_email"
                                        placeholder="Email"
                                        aria-label="Your Email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        aria-label="Subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        aria-label="Your Message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <button type="submit" className="flat-button">Send</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Mason Tran,<br />
                    University of Arizona,<br />
                    1209 E University Blvd,<br />
                    Tucson, Arizona<br />
                    <a href="mailto:masooniez@arizona.edu">masooniez@arizona.edu</a>
                </div>
                <div className="map-wrap">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41458.52458788127!2d-110.95137645061659!3d32.232914100045294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d671f823b89a1b%3A0x818a174fb4d13d0!2sUniversity%20of%20Arizona!5e0!3m2!1sen!2sus!4v1676038538421!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Contact;
