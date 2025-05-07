import { useState, useEffect } from "react";
import gitHub from '../images/icons8-facebook-60.png'
import gMail from '../images/icons8-gmail (1) 1.png'
import whatsapp from '../images/icons8-whatsapp-60.png'

const Footer = () => {

    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
      const timer = setInterval(() => {
        const now = new Date();
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        setCurrentTime(`${year} - ${hours}:${minutes}:${seconds}`);
      }, 1000); 
  
      return () => clearInterval(timer); 
    }, []);
  const [loading, setLoading] = useState(false); 
  const [sendMsg, setSendMsg] = useState(""); 
  const [errors, setErrors] = useState({});

  const contactScriptURL =
    "https://script.google.com/macros/s/AKfycbwNW1Y22-Wp_WSHHpWbNnqta0n9C6X7-ngJfuQw7IYN65viXOJG8FY8mxxX0N2qcIMj/exec";

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    // Get form data
    const formData = new FormData(e.target);
    const firstName = formData.get("first-name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    // Validation
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = "Name is required!";
    if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/))
      newErrors.email = "Valid email is required!";
    if (!phone.match(/^[0-9]{10}$/))
      newErrors.phone = "A valid 10-digit phone number is required.";
    if (!message.trim()) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set validation errors
      return; // Stop submission if there are errors
    }

    setLoading(true); // Set loading state
    setErrors({}); // Clear previous errors

    try {
      const response = await fetch(contactScriptURL, {
        method: "POST",
        body: new URLSearchParams(formData), 
      });

      if (response.ok) {
        setSendMsg("Thank You For Contacting Us!"); 
        e.target.reset();
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Error!", error.message);
      setSendMsg("Thank You For Contacting Us!"); 
      e.target.reset();
    } finally {
      setLoading(false); 
      setTimeout(() => setSendMsg(""), 5000);
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-cont" id="footer-cont">
          <form
            name="message-to-google-sheet"
            onSubmit={handleSubmit}
            action={contactScriptURL}
            method="POST"
          >
            <div className="head-footer" style={{display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
            <p className="send-message">HAVE A QUESTION ?</p>
            <svg width="90px" height="90px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M2 12.97V6.99C2 4.23 4.24 2 7 2H17C19.76 2 22 4.23 22 6.99V13.97C22 16.72 19.76 18.95 17 18.95H15.5C15.19 18.95 14.89 19.1 14.7 19.35L13.2 21.34C12.54 22.22 11.46 22.22 10.8 21.34L9.3 19.35C9.14 19.13 8.78 18.95 8.5 18.95H7C4.24 18.95 2 16.72 2 13.97V12.97Z" fill="#292D32"/>
            <path d="M17 8.75H7C6.59 8.75 6.25 8.41 6.25 8C6.25 7.59 6.59 7.25 7 7.25H17C17.41 7.25 17.75 7.59 17.75 8C17.75 8.41 17.41 8.75 17 8.75Z" fill="currentColor"/>
            <path d="M13 13.75H7C6.59 13.75 6.25 13.41 6.25 13C6.25 12.59 6.59 12.25 7 12.25H13C13.41 12.25 13.75 12.59 13.75 13C13.75 13.41 13.41 13.75 13 13.75Z" fill="currentColor"/>
            </svg>
            </div>
            <p className="sub-text">Our team is ready to help. Share your ideas, ask questions, or simply say hello. We're excited to hear from you and explore how we can collaborate to bring your vision to life.</p>
            <fieldset>
               <div className="name-and-phone"> 
              <label htmlFor="first-name">
                Your Name:
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  placeholder="Name"
                />
                {errors.firstName && (
                  <p className="error-message">{errors.firstName}</p>
                )}
              </label>

              {/* Phone Field */}
              <label htmlFor="phone">
                Phone Number:
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                />
                {errors.phone && (
                  <p className="error-message">{errors.phone}</p>
                )}
              </label>
              </div>
            {/* Email Field */}
            <label htmlFor="email">
                Email Address:
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
              </label>

              {/* Message Field */}
              <label htmlFor="message">
                Ask Anything:
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  cols="10"
                  placeholder="Share your thoughts or questions..."
                />
                {errors.message && (
                  <p className="error-message">{errors.message}</p>
                )}
              </label>
            </fieldset>

            <input
              type="submit"
              value={loading ? "Submitting..." : "Submit"}
              name="send-message"
              className="submit-btn"
              disabled={loading}
            />
          </form>


          {sendMsg && <p className="send-msg">{sendMsg}</p>}
          <p className="sub-text" style={{textAlign: 'center'}}>For better communication</p>
          <div className="social-icons">
                       <a href="https://facebook.com/maphutha.agree" target="_blank"><img src={gitHub} className='icon'/></a>
                       <a href="mailto:maphuthaaggrey83@gmail.com"><img src={gMail} className='icon'/></a>
                       <a href="https://wa.link/hxnh0o" target="_blank"><img src={whatsapp} className='icon'/></a>
                    </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentTime} Aaven. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;