import aggrey from '../images/aggrey.jpg'
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
            <p className="heading" style={{marginTop: '1em'}}>MEET THE MINDS</p>
            <div className="team">
                
                <div className="team-box">
                     <img src={aggrey} className='team-member'></img>
                     <p className="line"></p>
                     <p className='team-name'>Aggrey Maphutha</p>
                     <p className='team-role'>UI/UX Designer</p>
                </div>
                <div className="team-box">
                     <img src={aggrey} className='team-member'></img>
                     <p className="line"></p>
                     <p className='team-name'>Aggrey Maphutha</p>
                     <p className='team-role'>Front End Developer</p>
                </div>
                <div className="team-box">
                     <img src={aggrey} className='team-member'></img>
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