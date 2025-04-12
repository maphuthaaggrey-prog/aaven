import gif from '../images/work.gif'
const Hero = () => {
    return (  
    <>
    <div className="hero">
    <div className="hero-container">
    <a href="/"><p className="hero-logo"><span>Aa</span>ven</p></a>
         <p className="heading">A NEW-GENERATION WEB DEVELOPMENT COMPANY</p>
         <p className="sub-text">We bring your ideas to life with custom web solutions designed to turn your vision into a powerful online experience</p>

        <p className="line"></p>
        <img className='gif' src={gif}></img>

    </div>
    </div>
    
    </>);
}
 
export default Hero;