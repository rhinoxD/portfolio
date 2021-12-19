import React from 'react';
import Header from '../components/Header';
import { FaLaptopCode } from 'react-icons/fa';

const Projects = () => {
  return (
    <div>
      <Header />
      <div className='container projects-intro'>
        <div className='row flex-with-center mt-5'>
          <div className='col-md-6 n-box2 px-3 py-5'>
            <div>
              <h1 className='font-bold'>Projects</h1>
              <p className='font-bold'>
                Good ideas are not adopted automatically. They must be driven
                into practice with courageous patience
              </p>
              <button className='primary-button'>Get Started</button>
            </div>
          </div>
          <div className='col-md-6 position-relative'>
            <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#0F62FE'
                d='M44.2,-68.3C59.2,-59.2,74.5,-50.1,80.9,-36.7C87.4,-23.4,85.1,-5.7,80.5,10.1C75.9,25.9,69,39.9,59.3,51.7C49.5,63.6,37,73.3,22,80.1C7,87,-10.4,90.9,-24.2,85.5C-38,80.1,-48.2,65.4,-60,51.9C-71.8,38.5,-85.2,26.3,-89,11.7C-92.8,-2.9,-87.1,-20,-78.8,-35.1C-70.5,-50.1,-59.7,-63.1,-46.1,-72.8C-32.6,-82.5,-16.3,-89,-0.8,-87.7C14.6,-86.4,29.3,-77.4,44.2,-68.3Z'
                transform='translate(100 100)'
              />
            </svg>
            <FaLaptopCode
              color='white'
              size='180'
              className='position-absolute top-50 start-50 translate-middle'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
