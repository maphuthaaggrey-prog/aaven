import { Link } from 'react-router-dom'

const FAQ = () => {
    return (  
        <>
            <div className="wrap">
                <p className='heading'>Frequently Asked Questions (FAQ)</p>
                <p className='text003'>Welcome to Aaven’s FAQ section! Here you’ll find answers to some of the most common questions about our web development services, process, and how we can work together to bring your ideas online.</p>

                <p className='heading' style={{fontSize: '30px', marginTop: '1em'}}>What services does Aaven offer?</p>
                <p className='text003'>We specialize in custom website design, front-end and back-end development, e-commerce solutions, web hosting integration, and ongoing maintenance. We also offer UI/UX design and SEO optimization.</p>
                <br/>

                <p className='heading' style={{fontSize: '30px', marginTop: '1em'}}>How long does it take to build a website?</p>
                <p className='text003'>Project timelines vary based on scope and complexity. A basic website can take 1–3 weeks, while more advanced platforms can take 4–8 weeks. We'll provide a timeline after discussing your specific needs.</p>
                <br/>

                <p className='heading' style={{fontSize: '30px', marginTop: '1em'}}>How much does a website cost?</p>
                <p className='text003'>Costs depend on the type of website, features needed, and custom functionality. After a free consultation, we’ll give you a transparent quote tailored to your goals and budget.</p>
                <br/>

                <p className='heading' style={{fontSize: '30px', marginTop: '1em'}}>Do you work with small businesses or startups?</p>
                <p className='text003'>Absolutely! We love working with businesses of all sizes, including startups, creators, and local brands. Our solutions are scalable to match your growth.</p>
                <br/>
                <p className='heading' style={{fontSize: '30px', marginTop: '1em'}}>Will my website be mobile-friendly?</p>
                <p className='text003'>Yes. Every website we build is fully responsive and designed to look great on all devices—from desktops to smartphones.</p>
                <br/>

                <p className='heading' style={{fontSize: '30px', marginTop: '1em'}}>Do you provide ongoing support or maintenance?</p>
                <p className='text003'>Yes. We offer flexible support packages for updates, backups, security monitoring, and troubleshooting. You can count on us even after launch.</p>
                <br/>

                <p className='heading' style={{fontSize: '30px', marginTop: '1em'}}>How do I get started?</p>
                <p  className='text003'>Just head over to our <Link to="/contact">Contact page</Link> and fill out the form—or email us directly at <a href="mailto:hello@aaven.co.za">hello@aaven.co.za</a>. We’ll set up a free consultation to learn about your project.</p>
                <br/>

                <p className='heading' style={{fontSize: '30px', marginTop: '1em'}}>What happens to the information I share with Aaven?</p>
                <p className='text003'>Your privacy matters to us. Any personal or business information you share is kept confidential and used only to assist in building your project. Read more in our <Link to="/privacy-policy">Privacy Policy</Link>.</p>
            </div>
        </>
    );
}

export default FAQ;
