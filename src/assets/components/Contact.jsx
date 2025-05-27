import { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    yourName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [sendMsg, setSendMsg] = useState("");
  const [errors, setErrors] = useState({});

  const contactScriptURL =
    "https://script.google.com/macros/s/AKfycbxv1O00RbgE4HRnAbfjKlKw69gNkhCVCe_yTLtOc9UOMGSUPwyabwbxlP46TVWZE1DIEg/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { yourName, phoneNumber, email, message } = formData;

    const newErrors = {};
    if (!yourName.trim()) newErrors.yourName = "Name is required!";
    if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/))
      newErrors.email = "Valid email is required!";
    if (!phoneNumber.match(/^[0-9]{10}$/))
      newErrors.phoneNumber = "A valid 10-digit phone number is required.";
    if (!message.trim()) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});
    try {
      const data = new URLSearchParams();
      for (const [key, value] of Object.entries(formData)) {
        data.append(key, value);
      }

      const response = await fetch(contactScriptURL, {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setSendMsg('Thank you! Your message has been submitted.');
        setFormData({
          yourName: '',
          phoneNumber: '',
          email: '',
          message: '',
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
    <div className="footer-cont" id="footer-cont">
      <form onSubmit={handleSubmit} method="POST">
        <div className="head-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
          <p className="heading">HAVE A QUESTION ?</p>
        </div>
        <p className="text003">
          Our team is ready to help. Share your ideas, ask questions, or simply say hello. We're excited to hear from you and explore how we can collaborate to bring your vision to life.
        </p>

        <fieldset>
          <div className="name-and-phone">
            <label htmlFor="yourName">
              Your Name:
              <input
                id="yourName"
                name="yourName"
                type="text"
                placeholder="Name"
                value={formData.yourName}
                onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
              />
              {errors.yourName && <p className="error-message">{errors.yourName}</p>}
            </label>

            <label htmlFor="phoneNumber">
              Phone Number:
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="Phone"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              />
              {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
            </label>

            <label htmlFor="email">
              Email Address:
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </label>
          </div>

          <label htmlFor="message">
            Ask Anything:
            <textarea
              id="message"
              name="message"
              rows="4"
              cols="10"
              placeholder="Share your thoughts or questions..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {errors.message && <p className="error-message">{errors.message}</p>}
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
      <br />
      <br />

    </div>
  );
};

export default Contact;
