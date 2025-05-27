import { Link } from 'react-router-dom'
const WhatWeDo = () => {
    return ( 
    <>
    <div className="wrap">
    <div className="container">
            <p className="heading">SOLUTIONS</p>
            <br />
            <div className="split">
                    <p className='text003'>We craft engaging and user-friendly interfaces that connect with your audience. From wireframes to final designs, we focus on creating seamless experiences that look great and feel intuitive.
                                            <br/>
                                            <br/>
                                            Our front-end team transforms designs into fully functional websites using modern technologies. We make sure your site is fast, responsive, and built to impress across all devices.
                                            <br/>
                                            <br/>
                                            We don’t just build websites — we keep them running at their best. Our web administration services cover maintenance, security, updates, and performance optimization, ensuring your online presence is always strong, stable, and secure.</p>
            
            </div>
            <div className="buttons001">
                        <div className="start-project">
                            <Link to="/startproject"><button>Start Project
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000000"/>
                            </svg>
                                </button></Link>
                        </div>
            </div>
         {/*    <div className="columns-wrap">
                <div className="columns">
                            <p className="sub-heading">Performance & SEO Optimization</p>
                            <p className='text003'>We optimize your website for speed, search engines, and overall performance. From image compression and code cleanup to implementing SEO best practices, we make sure your site not only looks good but ranks well too.</p>
                </div>
                <div className="columns">
                            <p className="sub-heading">Analytics & Insights</p> 
                            <p className='text003'>Understanding how users interact with your site is key to growth. We integrate tools like Google Analytics and tracking systems to help you measure traffic, engagement, and performance — giving you data-driven insights to guide future improvements.</p>
                </div>
                    <div className="columns">
                            <p className="sub-heading">Mobile-First Approach</p> 
                            <p className='text003'>We design and develop with mobile users in mind from the start. Our mobile-first approach ensures your site delivers a seamless experience no matter the screen size, making it accessible and user-friendly on smartphones and tablets.</p>
                    </div>
                </div>  */}
            </div>
    </div>
    
    
    </> );
}
 
export default WhatWeDo;