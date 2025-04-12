import whatwedo from '../images/whatwedo.png'
const WhatWeDo = () => {
    return ( 
    <>
    <div className="wrapper">
    <div className="container">
            <p className="header">WHAT WE DO</p>
            <br />
            <div className="split">
            <img src={whatwedo} className='image-description' style={{width:"320px"}}></img>
                
                    <p className='sub-text'>We craft engaging and user-friendly interfaces that connect with your audience. From wireframes to final designs, we focus on creating seamless experiences that look great and feel intuitive.
                                            <br/>
                                            <br/>
                                            Our front-end team transforms designs into fully functional websites using modern technologies. We make sure your site is fast, responsive, and built to impress across all devices.
                                            <br/>
                                            <br/>
                                            We don’t just build websites — we keep them running at their best. Our web administration services cover maintenance, security, updates, and performance optimization, ensuring your online presence is always strong, stable, and secure.</p>
            
            </div>
            <p className="header" style={{marginTop: '2em', marginBottom: '0'}}>Projects</p>
        </div>
    </div>
    
    
    </> );
}
 
export default WhatWeDo;