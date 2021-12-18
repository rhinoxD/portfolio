import React from 'react';
import Carousel from '../components/Carousel';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <div
        className='introduction flex-with-center'
        style={{ backgroundImage: `url('./introbg3.svg')` }}
      >
        <div>
          <h1>SHIVAM</h1>
          <div className='intro-content d-flex justify-content-between'>
            <p>MERN Stack Developer</p>
            <button className='primary-button font-bold'>Get Started</button>
          </div>
        </div>
      </div>

      <Carousel />
    </div>
  );
};

export default Home;
