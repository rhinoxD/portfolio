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
            <p>
              MERN Stack <br /> Developer
            </p>
            <button className='primary-button'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
