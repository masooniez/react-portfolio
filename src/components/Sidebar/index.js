import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/mLogo.png'; 
import LogoSubtitle from '../../assets/images/MasonLOGOS.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser,faFile} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faYoutube ,faDiscord} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='react-portfolio'>
            <img src={LogoS} alt='logo' />
            <img className = "sub-logo" src={LogoSubtitle} alt='slobodan' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname= "active" to="/react-portfolio">
                <FontAwesomeIcon icon = {faHome} color= "#4d4d4de" />
            </NavLink>
            <NavLink exact="true" activeclassname= "active" className="about-link" to="/about">
                <FontAwesomeIcon icon = {faUser} color= "#4d4d4de" />
            </NavLink>
            <NavLink exact="true" activeclassname= "active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon = {faEnvelope} color= "#4d4d4de" />
            </NavLink>
            <NavLink exact="true" activeclassname= "active" className="resume-link" to="/resume">
                <FontAwesomeIcon icon = {faFile} color= "#4d4d4de" />
            </NavLink>
        </nav>
        <ul>
        <li>
            <a target = "_blank" rel= 'noreferrer' href='https://www.linkedin.com/in/mason-kim-tran-573934326/'>
                <FontAwesomeIcon icon = {faLinkedin} color= "4d4d4e" />
            </a>
        </li>
        <li>
            <a target = "_blank" rel= 'noreferrer' href='https://github.com/masooniez'>
                <FontAwesomeIcon icon = {faGithub} color= "4d4d4e" />
            </a>
        </li>
        <li>
            <a target = "_blank" rel= 'noreferrer' href='https://www.youtube.com/@MasonKimTran'>
                <FontAwesomeIcon icon = {faYoutube} color= "4d4d4e" />
            </a>
        </li>
        <li>
            <a target = "_blank" rel= 'noreferrer' href='http://discordapp.com/users/1339428991412600904'>
                <FontAwesomeIcon icon = {faDiscord} color= "4d4d4e" />
            </a>
        </li>
        </ul>
    </div>
);

export default Sidebar
