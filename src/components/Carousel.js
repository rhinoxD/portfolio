import React from 'react';
import {
  FaReact,
  FaBootstrap,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3,
} from 'react-icons/fa';

const Carousel = () => {
  return (
    <div>
      <div className='carousel-parent position-relative'>
        <h1 className='position-absolute top-0 start-0 end-0 text-center mt-5'>
          Technologies I use
        </h1>
        <div className='gallery'>
          <span>
            <FaReact color='cyan' />
          </span>
          <span>
            <FaBootstrap color='blue' />
          </span>
          <span>
            <FaJs color='yellow' />
          </span>
          <span>
            <FaNodeJs color='green' />
          </span>
          <span>
            <FaHtml5 color='orangered' />
          </span>
          <span>
            <FaCss3 color='blue' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
