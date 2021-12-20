import React from 'react';
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#001220'
            fill-opacity='1'
            d='M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,181.3C672,203,768,213,864,218.7C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
        <div className='row justify-content-center footer-content'>
          <div className='col-md-6'>
            <div className='div'>
              <p>Designed and Developed By</p>
              <hr />
              <div className='d-flex justify-content-around'>
                <FaMailBulk className='footer-icons' />
                <FaLinkedin className='footer-icons' />
                <FaGithub className='footer-icons' />
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
