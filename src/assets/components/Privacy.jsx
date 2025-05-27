import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
    return (
        <>
            <div className="wrap">
                <p className="heading">Privacy Policy</p>
                <p className="text003">At Aaven, your privacy is very important to us. This policy outlines how we collect, use, and protect any information you provide when you use our website or services.</p>

                <p className="heading" style={{ fontSize: '30px', marginTop: '1em' }}>Information We Collect</p>
                <p className="text003">We may collect personal details such as your name, email address, phone number, and project information when you contact us, submit a form, or request a service. We also collect non-personal data like browser type, device, and visit duration to help improve your experience.</p>
                <br />

                <p className="heading" style={{ fontSize: '30px', marginTop: '1em' }}>How We Use Your Information</p>
                <p className="text003">We use your information to understand your needs and provide you with better service. This includes project planning, support, internal record-keeping, and improving our products and services. We may also use your contact information to send you updates you’ve opted in for.</p>
                <br />

                <p className="heading" style={{ fontSize: '30px', marginTop: '1em' }}>Do We Share Your Information?</p>
                <p className="text003">No. We do not sell, distribute, or lease your personal information to third parties unless we have your explicit permission or are required by law. Any third-party tools or integrations used on our site (like analytics or email forms) are handled in accordance with privacy standards.</p>
                <br />

                <p className="heading" style={{ fontSize: '30px', marginTop: '1em' }}>Security</p>
                <p className="text003">We are committed to keeping your information secure. We implement suitable physical, electronic, and managerial procedures to safeguard and secure the data we collect online.</p>
                <br />

                <p className="heading" style={{ fontSize: '30px', marginTop: '1em' }}>Your Rights</p>
                <p className="text003">You have the right to access, update, or request deletion of your personal data at any time. To do this, simply contact us via our <Link to="/contact">Contact page</Link> or email us at <a href="mailto:hello@aaven.co.za">hello@aaven.co.za</a>.</p>
                <br />

                <p className="heading" style={{ fontSize: '30px', marginTop: '1em' }}>Changes to This Policy</p>
                <p className="text003">Aaven may update this Privacy Policy from time to time. Any changes will be posted on this page. We encourage you to review this policy periodically to stay informed.</p>
                <br />

                <p className="heading" style={{ fontSize: '30px', marginTop: '1em' }}>Contact Us</p>
                <p className="text003">If you have any questions about this Privacy Policy or how we handle your data, don’t hesitate to reach out to us at <a href="mailto:hello@aaven.co.za">hello@aaven.co.za</a>.</p>
            </div>
        </>
    );
}

export default PrivacyPolicy;
