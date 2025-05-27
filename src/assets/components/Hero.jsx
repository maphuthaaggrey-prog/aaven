import { Link } from 'react-router-dom'
const Hero = () => {
    return ( 
    <>
            <main>
                <div className="main-section">
                    <h1 className="text001">Your Brand's</h1>
                    <h1 className="text001">Next Big</h1>
                    <h1 className="text001">Moment Starts</h1>
                    <h1 className="text001">Here</h1>
                    <div className="buttons001">
                    <div className="view-work">
                            <Link to="/ourwork"><button>View Work
                            <svg width="18px" height="18px" fill="#ffffff" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	  viewBox="0 0 256 256" xml:space="preserve">
<g>
	<rect id="XMLID_2_" x="92.8" y="134.1" width="133.5" height="11.2"/>
	<circle cx="79.9" cy="29.4" r="24.6"/>
	<path d="M117.2,151H75.7v-30.8L54.5,83.7c-0.8-1.5-0.2-3.3,1-4.2c1.5-0.8,3.3-0.2,4.2,1l24.6,42.3c1.9,3.1,5.2,5.4,9.2,5.4h42.3
		c6,0,10.8-5,10.8-10.8c0-6-5-10.8-10.8-10.8l-35.4,0.4L72.2,59.6c-2.1-3.7-6.2-5.8-11.2-5.8c-0.6,0-2.3,0.2-2.9,0.4
		c-0.6,0.2-1.7,0.4-2.3,0.6c-20.6,6.9-36.9,39.6-36.9,73.3c-0.2,10.2,0,18.7,0.6,26.9c-0.8,9.8,5,19.4,14.6,22.9
		c2.5,0.8,5,1.5,7.5,1.5h61.7V237c0,7.9,6.2,14,14,14c7.9,0,14-6.2,14-14v-71.9c0-3.5-1.5-7.3-4.2-9.8
		C124.1,152.5,120.5,151,117.2,151z"/>
	<polygon points="212,126 212.2,126.2 238,62.9 229.7,59.4 205.9,117.7 152.4,117.7 152.4,126.9 212,126.9 	"/>
</g>
</svg>
                                </button></Link>
                        </div>
                    <div className="start-project">
                            <Link to="/startproject"><button>Start Project
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000000"/>
                            </svg>
                                </button></Link>
                        </div>
                        </div>
                </div>
                <div className="background-blur">
                    
                </div>
                <div>
                    <h3 className="text002">
                    We bring your ideas to life with custom web solutions designed to turn your vision into a powerful online experience
                    From concept to launch, we craft digital products that are fast, responsive, and user-focused.
                    <div className="line"></div>

                    Whether you're building a brand, or showcasing your portfolio — we’re here to make it unforgettable.
                    Let’s build something that not only works but truly represents you.
                    </h3>
                </div>
            </main>

    </>  );
}
 
export default Hero;