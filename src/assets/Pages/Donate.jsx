import React, { useState } from 'react';
import coffee from '../images/Free_Coffee_Cup_Mockup-psd.jpg'
const Donate = () => {
  const [method, setMethod] = useState('bmc');

  return (
    <div className="wrap">
    <div className="buy-coffee">

    <div className="donate-wrapper">
      <p className='heading'>Support Aaven Agency</p>
      <p className='text003'>Choose a method to donate and support our work.</p>

      <div className="donate-methods">
        <button
          className={method === 'bmc' ? 'active' : ''}
          onClick={() => setMethod('bmc')}
        >
          Buy Me a Coffee
        </button>
        <button
          className={method === 'eft' ? 'active' : ''}
          onClick={() => setMethod('eft')}
        >
          Bank Transfer (EFT)
        </button>
      </div>

      <div className="donate-content">
        {method === 'bmc' && (
          <div className="bmc-section">
            <p>You’ll be redirected to Buy Me a Coffee:</p>
            <a
              href="https://www.buymeacoffee.com/aaven"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                style={{ height: '40px', width: '180px', margin: '2.5em 0', borderRadius: '100px' }}
              />
            </a>
          </div>
        )}

        {method === 'eft' && (
          <div className="bank-section"    style={{margin: '2.5em 0' }}>
            <h3>Bank Details</h3>
            <p>Bank:  Capitec Bank</p>
            <p>Account Name: AC MAPHUTHA</p>
            <p>Account Number: 1759990106</p>
            <p>Reference: Aaven Donation</p>
            <br />
            <p>Thank you for supporting our work!</p>
          </div>
        )}
      </div>
    </div>
    <div className="coffee-img">
        <img
            src={coffee}
            alt="Buy Me A Coffee"
        />
    </div>
    </div>
    </div>
  );
};

export default Donate;
