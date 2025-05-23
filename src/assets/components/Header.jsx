import { useState, useEffect } from 'react'; 
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleClick = () => {
    toggleMenu(); 
  };

  const location = useLocation();
  const navigate = useNavigate();

  // Scroll on location.hash change (including after navigating to /#about)
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  // Handle nav item clicks
  const handleNavClick = (sectionId) => {
    toggleMenu();

    if (location.pathname === '/') {
      // Already on Home page: scroll and update hash without navigation
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.replaceState(null, '', `/#${sectionId}`);
    } else {
      // On other page: navigate to home with hash, Home will scroll on effect
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <>
      <div className="navbar">
        <nav>
          <div>
            <Link to="/"><p className="logo"><span>Aa</span>ven</p></Link>
          </div>
          <ul className={menuOpen ? "nav ul open" : ""}>
            <li>
              <button className="close-btn menu-close" onClick={toggleMenu}>
                <svg fill="#FFFFFF" width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path>
                </svg>
              </button>
            </li>
            <li onClick={() => handleNavClick('about')}><button className="nav-link-btn">ABOUT</button></li>
            <li onClick={() => handleNavClick('solutions')}><button className="nav-link-btn">SOLUTIONS</button></li>
            <li onClick={() => handleNavClick('inquiries')}><button className="nav-link-btn">INQUIRIES</button></li>
            <li>
              <Link to="/startproject">
                <button onClick={handleClick} className='start-project'>Start Project</button>
              </Link>
            </li>
          </ul>
        </nav>

        <button className="menu-icon" onClick={toggleMenu}>
          <svg width="30px" height="30px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3.32001H16C14.8954 3.32001 14 4.21544 14 5.32001V8.32001C14 9.42458 14.8954 10.32 16 10.32H19C20.1046 10.32 21 9.42458 21 8.32001V5.32001C21 4.21544 20.1046 3.32001 19 3.32001Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 3.32001H5C3.89543 3.32001 3 4.21544 3 5.32001V8.32001C3 9.42458 3.89543 10.32 5 10.32H8C9.10457 10.32 10 9.42458 10 8.32001V5.32001C10 4.21544 9.10457 3.32001 8 3.32001Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 14.32H16C14.8954 14.32 14 15.2154 14 16.32V19.32C14 20.4246 14.8954 21.32 16 21.32H19C20.1046 21.32 21 20.4246 21 19.32V16.32C21 15.2154 20.1046 14.32 19 14.32Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 14.32H5C3.89543 14.32 3 15.2154 3 16.32V19.32C3 20.4246 3.89543 21.32 5 21.32H8C9.10457 21.32 10 20.4246 10 19.32V16.32C10 15.2154 9.10457 14.32 8 14.32Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Header;
