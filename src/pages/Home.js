import React from 'react';

import '../stylesheets/home.css';

const Home = () => {
  return (
    <div>
      <div
        className='introduction flex-with-center'
        style={{ backgroundImage: `url('./introbg.svg')` }}
      >
        <div>
          <h1>SHIVAM</h1>
          <div className='intro-content d-flex justify-content-between'>
            <p className='mt-2'>
              MERN Stack Developer
            </p>
            <button className='primary-button font-bold w-50'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
