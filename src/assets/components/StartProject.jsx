import { useState, useRef } from 'react';

const StartProject = () => {
  const contactFormRef = useRef(null);

  const [formData, setFormData] = useState({
    yourName: '',
    email: '',
    projectName: '',
    domainName: '',
    phoneNumber: '',
    budget: '',
    type: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [sendMsg, setSendMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const contactScriptURL =
    'https://script.google.com/macros/s/AKfycbxVT1Dl0LVR2Icdy6gA_aEQfEYxkiUVQhtqbLpw7GR2XMxuLijpOAt0uCCaVlFcwZDa/exec';

  const validateForm = () => {
    const newErrors = {};
    if (!formData.projectName.trim()) newErrors.projectName = 'Project Name is required';
    if (!formData.yourName.trim()) newErrors.yourName = 'Your Name is required';
    if (!/^[0-9]{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = 'Valid 10-digit phone number is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.message.trim()) newErrors.message = 'Project description is required';
    if (!formData.budget) newErrors.budget = 'Please select a budget';
    if (!formData.type) newErrors.type = 'Please select a website type';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const data = new URLSearchParams();
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      const response = await fetch(contactScriptURL, {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setSendMsg('Thank you! Your project request has been submitted.');
        setFormData({
          projectName: '',
          domainName: '',
          phoneNumber: '',
          yourName: '',
          email: '',
          message: '',
          budget: '',
          type: '',
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error(error);
      setSendMsg('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
      setTimeout(() => setSendMsg(''), 5000);
    }
  };

  return (
    <div id="project-cont" ref={contactFormRef}>
      <form
        name="message-to-google-sheet"
        onSubmit={handleSubmit}
        action={contactScriptURL}
        method="POST"
      >
        <div className="head-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p className="send-message">START YOUR PROJECT</p>
          <svg fill="currentColor" width="80px" height="80px" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" className="cf-icon-svg">
            <path d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zm-4.231-1.918a3.692 3.692 0 1 0-7.384 0 3.748 3.748 0 0 0 .389 1.665 7.163 7.163 0 0 0 .723 1.137 2.128 2.128 0 0 1 .483.857v.817a.633.633 0 0 0 .634.633h2.926a.633.633 0 0 0 .633-.633v-.817a2.125 2.125 0 0 1 .483-.857 7.142 7.142 0 0 0 .724-1.137 3.748 3.748 0 0 0 .389-1.665zm-1.913 5.942a.317.317 0 0 0-.316-.316H7.03a.317.317 0 1 0 0 .633h2.926a.317.317 0 0 0 .316-.317zm-.473.933a.158.158 0 0 0-.15-.107H7.298a.158.158 0 0 0-.098.283 2.075 2.075 0 0 0 2.547 0 .158.158 0 0 0 .053-.176z" />
          </svg>
        </div>

        <p className="sub-text">Let's discuss your project needs. Our experts are here to listen and provide tailored solutions. We're committed to supporting you from concept to completion.</p>

        <fieldset>
        
            <label htmlFor="yourName">Your Name:
              <input id="yourName" name="yourName" type="text" placeholder="Name" value={formData.yourName} onChange={handleChange} />
              {errors.yourName && <p className="error-message">{errors.yourName}</p>}
            </label>

            <label htmlFor="email">Email Address:
              <input id="email" name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </label>
       
          <div className="line"></div>
          <div className="name-and-phone">
            <label htmlFor="projectName">Project Name:
              <input id="projectName" name="projectName" type="text" placeholder="Project" value={formData.projectName} onChange={handleChange} />
              {errors.projectName && <p className="error-message">{errors.projectName}</p>}
            </label>

            <label htmlFor="domainName">Domain Name (Optional):
              <input id="domainName" name="domainName" type="text" placeholder="e.g, example.co.za" value={formData.domainName} onChange={handleChange} />
            </label>

            <label htmlFor="phoneNumber">Phone Number:
              <input id="phoneNumber" name="phoneNumber" type="tel" placeholder="Phone" value={formData.phoneNumber} onChange={handleChange} />
              {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
            </label>
          </div>

          <label>Budget:
            <div className="budget">
              {['Less than R1,000', 'R1,000 - R2,000', 'More than R2,000'].map((value, index) => (
                <div key={index}>
                  <input type="radio" id={`budget-${index}`} name="budget" value={value} checked={formData.budget === value} onChange={handleChange} />
                  <label htmlFor={`budget-${index}`}>{value}</label>
                </div>
              ))}
            </div>
            {errors.budget && <p className="error-message">{errors.budget}</p>}
          </label>

          <label>Type of Website:
            <div className="budget">
              {['Portfolio', 'Business Website', 'Blog', 'Landing Page'].map((value, index) => (
                <div key={index}>
                  <input type="radio" id={`type-${index}`} name="type" value={value} checked={formData.type === value} onChange={handleChange} />
                  <label htmlFor={`type-${index}`}>{value}</label>
                </div>
              ))}
            </div>
            {errors.type && <p className="error-message">{errors.type}</p>}
          </label>



          <label htmlFor="message">Project Description:
            <textarea id="message" name="message" rows="4" cols="10" placeholder="Describe your project goals, requirements, or ideas..." value={formData.message} onChange={handleChange} />
            {errors.message && <p className="error-message">{errors.message}</p>}
          </label>
        </fieldset>

        <input type="submit" value={loading ? 'Submitting...' : 'Submit'} className="submit-btn" disabled={loading} />
        {sendMsg && <p className="success-message">{sendMsg}</p>}
      </form>
    </div>
  );
};

export default StartProject;