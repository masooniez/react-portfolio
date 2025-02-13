import { useEffect, useState, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Define a custom red marker icon with a larger size
const redIcon = L.icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-shadow.png',
  iconSize: [35, 55], // Bigger size
  iconAnchor: [17, 55],
  popupAnchor: [1, -34],
  shadowSize: [55, 55]
});

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

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            refForm.current,
            process.env.REACT_APP_EMAILJS_USER_ID
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
                    <MapContainer center={[32.232914100045294, -110.95137645061659]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[32.232914100045294, -110.95137645061659]} icon={redIcon}>
                            <Popup>University of Arizona my school :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Contact;
