import { Link } from  'react-router-dom'
const Banner = () => {
    return ( <>

        <div className="banner001">
            <p className="text004">Telling Your Story Through Design & Code.</p>
            <div className="contact">
                                <Link to="/contact"><button>Contact us
                                <svg width="26px" height="26px" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Arrow / Arrow_Right_SM">
                                        <path id="Vector" d="M7 12H17M17 12L13 8M17 12L13 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                </svg>
                                    </button></Link>
                            </div>
        </div>
    
    
    </> );
}
 
export default Banner;