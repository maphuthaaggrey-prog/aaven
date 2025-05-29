import aggrey from '../images/aggrey.jpg'
import aggrey3 from '../images/aggrey3.jpg'
import aggrey2 from '../images/aggrey2.png'
import mockup2 from '../images/clean-browser-mockup.png'
import mockup4 from '../images/twitter-post-mockup.png'
const WhoAreWe = () => {
    return ( 
        <div className='wrap'>
        <div className="container">
            <p className="heading">ABOUT AAVEN - THE STUDIO</p>
            <div className="split">
                <p className='text003'>At Aaven, we are passionate creators, innovators, and problem-solvers. Based in Ga Sekhukhune, we are a new-generation web development company focused on building modern digital experiences. Our mission is to help businesses and individuals create a strong online presence with websites that are both beautiful and effective.
                    <br />
                    <br />
                                        We believe every idea has the potential to change the world, and we are here to help you bring yours to life. Whether you're a startup looking for your first website or an established brand needing a fresh online presence, we have the skills and creativity to make it happen.</p>      
            </div>
            <div className="mockups">
                <img src={mockup2} className='about-img'></img>
                <img src={mockup4} className='about-img'></img>
            </div>
            <p className='text003'>Aaven is more than just a web development company — we’re a creative tech studio driven by purpose and community. We combine design thinking, user-first development, and local insights to deliver tailored digital solutions. Every project we take on reflects our commitment to quality, innovation, and empowering businesses in underserved areas to thrive online.</p>
            <p className="heading" style={{marginTop: '1em'}}>MEET THE MINDS</p>
            <div className="team">
                
                <div className="team-box">
                     <img src={aggrey} className='team-member'></img>
                     <p className="line"></p>
                     <p className='team-name'>Aggrey Maphutha</p>
                     <p className='team-role'>UI/UX Designer</p>
                </div>
                <div className="team-box">
                     <img src={aggrey2} className='team-member'></img>
                     <p className="line"></p>
                     <p className='team-name'>Aggrey Maphutha</p>
                     <p className='team-role'>Front End Developer</p>
                </div>
                <div className="team-box">
                     <img src={aggrey3} className='team-member'></img>
                     <p className="line"></p>
                     <p className='team-name'>Aggrey Maphutha</p>
                     <p className='team-role'>Back End Developer</p>
                </div>

            </div>

            </div>

        </div>
     );
}
 
export default WhoAreWe;