import { Link } from 'react-router-dom'
import { useState } from 'react';
const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return ( 
<>
            <div className="navbar">
                <div>
                    <Link to="/"><p className="logo">AAVEN</p></Link>
                </div>

                <nav>
                    <ul className={menuOpen ? "nav ul open" : ""}>
                        <li>
                            <a href="#" className="menu-close">
                                <button className="close-btn" onClick={toggleMenu}>
                                <svg width="45px" height="45px" viewBox="6 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g id="Close">
                                                    <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24">

                                        </rect>
                                                    <line x1="16.9999" y1="7" x2="7.00001" y2="16.9999" id="Path" stroke="#ffffff" stroke-width="2" stroke-linecap="round">

                                        </line>
                                                    <line x1="7.00006" y1="7" x2="17" y2="16.9999" id="Path" stroke="#ffffff" stroke-width="2" stroke-linecap="round">

                                        </line>
                                                </g>
                                            </g>
                                        </svg>
                                </button></a>
                        </li>
                        <li onClick={toggleMenu}><Link to="/" className="active">Home</Link></li>
                        <li onClick={toggleMenu}><Link to="/about">About</Link></li>
                        <li className="contactButton" onClick={toggleMenu}><Link to="/services">Services</Link></li>
                        <li className="contactButton" onClick={toggleMenu}><Link to="/ourwork">Our Work</Link></li>
                       {/* <li className="contactButton" onClick={toggleMenu}><a href="#">Testimonials</a></li> */}
                        <li className="contact" onClick={toggleMenu}>
                                <Link to="/contact"><button >Contact us
                                <svg width="26px" height="26px" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Arrow / Arrow_Right_SM">
                                        <path id="Vector" d="M7 12H17M17 12L13 8M17 12L13 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                </svg>
                                    </button></Link>
                            </li>
                    </ul>
                </nav>
                <div className="contact">
                                <Link to="/contact"><button onClick={toggleMenu}>Contact us
                                <svg width="26px" height="26px" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Arrow / Arrow_Right_SM">
                                        <path id="Vector" d="M7 12H17M17 12L13 8M17 12L13 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                </svg>
                                    </button></Link>
                            </div>

           
            <div className="openmenu111">
                <button className="menu-open" onClick={toggleMenu}><svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Menu / Menu_Alt_01">
                            <path id="Vector" d="M12 17H19M5 12H19M5 7H19" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            </svg></button>
            </div>
        </div>
</>

     );
}
 
export default Header;