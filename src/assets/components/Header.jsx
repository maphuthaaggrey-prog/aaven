import { useState, useEffect, useRef } from 'react'; 

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [sendMsg, setSendMsg] = useState("");
    const [errors, setErrors] = useState({});
    const [budget, setBudget] = useState('');
    const [websiteType, setWebsiteType] = useState('');


    const contactFormRef = useRef(null);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleContact = () => {
        setContactOpen(!contactOpen);
    };

    const handleClick = () => {
        toggleMenu(); 
        toggleContact();
    };

    



    const contactScriptURL =
        "https://script.google.com/macros/s/AKfycbyMCNGZX9-yO6uLlAaV39CBYDYtJyF5XxIhqoJb0i8J0HN9NqZokYTtGUFZpQCR-I5u/exec";

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const projectName = formData.get("project-name");
        const domainName = formData.get("domain-name");
        const phoneNumber = formData.get("phone-number");
        const yourName = formData.get("your-name");
        const email = formData.get("email");
        const message = formData.get("message");
        const selectedBudget = formData.get("budget");
        const selectedWebsiteType = formData.get("type");

        const newErrors = {};
        if (!projectName.trim()) newErrors.projectName = "Project Name is required!";
        if (!phoneNumber.match(/^\d{10}$/))
            newErrors.phoneNumber = "A valid 10-digit phone number is required.";
        if (!yourName.trim()) newErrors.yourName = "Your Name is required!";
        if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/))
            newErrors.email = "Valid email is required!";
        if (!message.trim()) newErrors.message = "Project Description is required.";
        if (!selectedBudget) newErrors.budget = "Budget is required.";
        if (!selectedWebsiteType) newErrors.websiteType = "Website Type is required.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);
        setErrors({});

        try {
            const dataToSend = new FormData();
            dataToSend.append("project-name", projectName);
            dataToSend.append("domain-name", domainName);
            dataToSend.append("phone-number", phoneNumber);
            dataToSend.append("your-name", yourName);
            dataToSend.append("email", email);
            dataToSend.append("message", message);
            dataToSend.append("budget", selectedBudget);
            dataToSend.append("type", selectedWebsiteType);

            const response = await fetch(contactScriptURL, {
                method: "POST",
                body: new URLSearchParams(dataToSend),
            });

            if (response.ok) {
                setSendMsg("Thank You For Contacting Us!");
                e.target.reset();
                setBudget('');
                setWebsiteType('');
            } else {
                throw new Error("Network response was not ok.");
            }
        } catch (error) {
            console.error("Error!", error.message);
            setSendMsg("Thank You For Contacting Us!");
            e.target.reset();
            setBudget('');
            setWebsiteType('');
        } finally {
            setLoading(false);
            setTimeout(() => setSendMsg(""), 5000);
        }
    };

    const handleBudgetChange = (e) => {
        setBudget(e.target.value);
    };

    const handleWebsiteTypeChange = (e) => {
        setWebsiteType(e.target.value);
    };


    useEffect(() => {
        const handleClickOutside = (event) => {

            if (contactOpen && contactFormRef.current && !contactFormRef.current.contains(event.target)) {
                setContactOpen(false); 
            }
        };


        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the event listener when the component unmounts or contactOpen changes
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [contactOpen]); // Re-run the effect when contactOpen changes


    return (
        <>
            <div className="navbar">

                <nav >
                    <div>
                        <a href="https://maphuthaaggrey-prog.github.io/aaven/"><p className="logo"><span>Aa</span>ven</p></a>
                    </div>
                    <ul className={menuOpen ? "nav ul open" : ""}>
                        <li>
                            <button className="close-btn menu-close" onClick={toggleMenu}>
                                <svg fill="#FFFFFF" width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path>
                                </svg>
                            </button>
                        </li>
                        <li onClick={toggleMenu}><a href="#about">ABOUT</a></li>
                        <li onClick={toggleMenu}><a href="#solutions">SOLUTIONS</a></li>
                        <li onClick={toggleMenu}><a href="#inquiries">INQUIRIES</a></li>
                        <li><button onClick={handleClick} className='start-project'>Start Project</button></li>
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

            {/* Attach the ref to the contact form container */}
            <div id="project-cont" className={contactOpen ? "project-cont open-cont" : "project-cont"} ref={contactFormRef}>
                <form
                    name="message-to-google-sheet"
                    onSubmit={handleSubmit}
                    action={contactScriptURL}
                    method="POST"
                >
                    <div className="head-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                        <p className="send-message">START YOUR PROJECT</p>
                        <svg fill="currentColor" width="80px" height="80px" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zm-4.231-1.918a3.692 3.692 0 1 0-7.384 0 3.748 3.748 0 0 0 .389 1.665 7.163 7.163 0 0 0 .723 1.137 2.128 2.128 0 0 1 .483.857v.817a.633.633 0 0 0 .634.633h2.926a.633.633 0 0 0 .633-.633v-.817a2.125 2.125 0 0 1 .483-.857 7.142 7.142 0 0 0 .724-1.137 3.748 3.748 0 0 0 .389-1.665zm-1.913 5.942a.317.317 0 0 0-.316-.316H7.03a.317.317 0 1 0 0 .633h2.926a.317.317 0 0 0 .316-.317zm-.473.933a.158.158 0 0 0-.15-.107H7.298a.158.158 0 0 0-.098.283 2.075 2.075 0 0 0 2.547 0 .158.158 0 0 0 .053-.176z"/></svg>
                    </div>
                    <p className="sub-text">Let's discuss your project needs. Our experts are here to listen and provide tailored solutions. We're committed to supporting you from concept to completion.</p>
                    <fieldset>
                        <div className="name-and-phone">
                            <label htmlFor="project-name">
                                Project Name:
                                <input
                                    id="project-name"
                                    name="project-name"
                                    type="text"
                                    placeholder="Project"
                                />
                                {errors.projectName && (
                                    <p className="error-message">{errors.projectName}</p>
                                )}
                            </label>
                            <label htmlFor="domain-name">
                                Domain Name (Optional):
                                <input
                                    id="domain-name"
                                    name="domain-name"
                                    type="text"
                                    placeholder="e.g, example.co.za"
                                />
                            </label>

                            <label htmlFor="phone-number">
                                Phone Number:
                                <input
                                    id="phone-number"
                                    name="phone-number"
                                    type="tel"
                                    placeholder="Phone"
                                />
                                {errors.phoneNumber && (
                                    <p className="error-message">{errors.phoneNumber}</p>
                                )}
                            </label>
                        </div>
                        <label>Budget:
                            <div className="budget">
                                <div>
                                    <input
                                        type="radio"
                                        id="budget-low"
                                        name="budget"
                                        value="Less than R1,000"
                                        checked={budget === 'Less than R1,000'}
                                        onChange={handleBudgetChange}
                                    />
                                    <label htmlFor="budget-low">Less than R1,000</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="budget-medium"
                                        name="budget"
                                        value="R1,000 - R2,000"
                                        checked={budget === 'R1,000 - R2,000'}
                                        onChange={handleBudgetChange}
                                    />
                                    <label htmlFor="budget-medium">R1,000 - R2,000</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="budget-high"
                                        name="budget"
                                        value="More than R2,000"
                                        checked={budget === 'More than R2,000'}
                                        onChange={handleBudgetChange}
                                    />
                                    <label htmlFor="budget-high">More than R2,000</label>
                                </div>
                            </div>
                            {errors.budget && (
                                <p className="error-message">{errors.budget}</p>
                            )}
                        </label>
                        <label>Type of Website:
                            <div className="budget">
                                <div>
                                    <input
                                        type="radio"
                                        id="type-portfolio"
                                        name="type"
                                        value="Portfolio"
                                        checked={websiteType === 'Portfolio'}
                                        onChange={handleWebsiteTypeChange}
                                    />
                                    <label htmlFor="type-portfolio">Portfolio</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="type-business"
                                        name="type"
                                        value="Business Website"
                                        checked={websiteType === 'Business Website'}
                                        onChange={handleWebsiteTypeChange}
                                    />
                                    <label htmlFor="type-business">Business Website</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="type-blog"
                                        name="type"
                                        value="Blog"
                                        checked={websiteType === 'Blog'}
                                        onChange={handleWebsiteTypeChange}
                                    />
                                    <label htmlFor="type-blog">Blog</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="type-landing"
                                        name="type"
                                        value="Landing Page"
                                        checked={websiteType === 'Landing Page'}
                                        onChange={handleWebsiteTypeChange}
                                    />
                                    <label htmlFor="type-landing">Landing Page</label>
                                </div>
                            </div>
                            {errors.websiteType && (
                                <p className="error-message">{errors.websiteType}</p>
                            )}
                        </label>
                        <div className="name-and-phone">
                        <label htmlFor="your-name">
                            Your Name:
                            <input id="your-name" name="your-name" type="text" placeholder="Name" />
                            {errors.yourName && (
                                <p className="error-message">{errors.yourName}</p>
                            )}
                        </label>
                        <label htmlFor="email">
                            Email Address:
                            <input id="email" name="email" type="email" placeholder="Email"
                            />
                            {errors.email && (
                                <p className="error-message">{errors.email}</p>
                            )}
                        </label>
                        </div>
                        <label htmlFor="message">
                            Project Description:
                            <textarea id="message" name="message" rows="4" cols="10" placeholder="Describe your project goals, requirements, or ideas..."
                            />
                            {errors.message && (
                                <p className="error-message">{errors.message}</p>
                            )}
                        </label>
                    </fieldset>
                    

                    <input type="submit" value={loading ? "Submitting..." : "Submit"} name="send-message" className="submit-btn" disabled={loading}
                    />
                    {sendMsg && <p className="success-message">{sendMsg}</p>}
                </form>
            </div>

        </>
    );
};

export default Header;