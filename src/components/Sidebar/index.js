import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoJ from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
        <div className='nav-bar' > 
            <Link className='logo' to='/' >
                <img src={LogoJ} alt="logo" />
                <img className='sub-logo' src={LogoSubtitle} alt="jaldeep" />
            </Link>
            <nav>
                <NavLink exact="true" activeClassName="active" to="/" >
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="about-link" to="/about" >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact" >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>

            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jaldeep-senjaliya/" >
                        <FontAwesomeIcon icon={faLinkedin}  color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/JaldeepSenjaliya" >
                        <FontAwesomeIcon icon={faGithub}  color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/playlist?list=PLuxNQViSZ8USJ9NX66-fuFO6hNjgGHujG" >
                        <FontAwesomeIcon icon={faYoutube}  color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSepbbwwzY7zCGnwWiTJrwWB2D9T5gehJBvDedHb6NH4x48dOA/viewform" >
                        <FontAwesomeIcon icon={faLink}  color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    )

export default Sidebar;